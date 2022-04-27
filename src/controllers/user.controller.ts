import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import type UserService from "../services/user.service";
import { sign } from "../security";
import User from "../models/user.model";

export default class UserController {

    constructor(private userService: UserService) {}

    async login(req: Request, res: Response) {

        const { username, password } = req.body;

        // check if username and password is not empty
        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password are required"
            });
        }

        const user = await this.userService.getUserByUsername(username);
        // check if user exists
        if (!user) {
            return res.status(400).json({
                message: "User does not exist"
            });
        }

        // check if password is correct
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({
                message: "Password is incorrect"
            });
        }
        let token = sign(user, '2h');

        res.json({
            message: "Login successful",
            username: user.username,
            name: user.name,
            surname: user.surname,
            token
        });
    }

    // register a new user
    async register(req: Request, res: Response) {
        // check if body is not empty
        if (!req.body) {
            return res.status(400).json({
                message: "Body is required"
            });
        }
        // check if body properties are not empty
        if (!req.body.username || !req.body.password || !req.body.name || !req.body.surname) {
            return res.status(400).json({
                message: "Username, password, name and surname are required"
            });
        }

        // check if username is not taken
        const oldUser = await this.userService.getUserByUsername(req.body.username);
        if (oldUser) {
            return res.status(400).json({
                message: "Username is already taken"
            });
        }

        // encode password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        // create user from request body
        const user = new User(
            undefined,
            req.body.username,
            hashedPassword,
            req.body.name,
            req.body.surname,
        );

        // save user to database
        const newUser = await this.userService.createUser(user);

        res.json({
            message: "User created",
            username: newUser.username,
            name: newUser.name,
            surname: newUser.surname,
            token: sign(newUser, '2h')
        });
    }
}
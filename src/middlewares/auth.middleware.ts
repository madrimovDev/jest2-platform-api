import { NextFunction, Request, Response } from "express";
import { verify } from "../security";
import permissions from "./permissions.json";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    let path = permissions.find(p => new RegExp(p.path).test(req.path));

    console.log(permissions[0].path);
    
    console.log(path);
    
    if (!path) {
        return res.status(500).send(`Path not found: ${req.originalUrl}`);
    }

    if (!path.role) {
        return next()
    }

    // check if token is not empty
    if (!req.headers.authorization) {
        return res.status(401).json({
            message: "Token is required"
        });
    }

    // check if token is valid
    if (!req.headers.authorization.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Token is invalid"
        });
    }

    // get payload from token
    const token = req.headers.authorization.split(" ")[1];
    try {
        const payload = verify(token);
    
        // check if payload is valid
        if (!payload) {
            return res.status(401).json({
                message: "Token is invalid"
            });
        }
        console.log(payload.role, path.role);
        
        if (path.role !== payload.role) {
            return res.status(401).json({
                message: "You don't have permission to access this resource"
            });
        }

        // add payload to request
        req.payload = payload;

        next();
    }
    catch(err) {
        res.status(401).send({
            message: 'session expired',
            error: err
        })
    }
}

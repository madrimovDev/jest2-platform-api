import { Request, Response } from "express";
import { SessionService } from "../services/session.service";

export default class SessionController {

    constructor(private sessionService: SessionService) {}

    public async create(req: Request, res: Response) {
        this.sessionService.createSession(req.body)
            .then(session => {
                res.status(201).send({
                    message: "Session created",
                    session
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error creating session",
                    error: err
                });
            }
        );
    }

    public async findAll(req: Request, res: Response) {
            
            this.sessionService.getSessions()
                .then(sessions => {
                    res.status(200).send({
                        message: "Sessions retrieved",
                        sessions
                    });
                })
                .catch(err => {
                    res.status(500).send({
                        message: "Error retrieving sessions",
                        error: err
                    });
                }
            );
        }

    public async findOne(req: Request, res: Response) {
        let id = +req.params.id;
        this.sessionService.getSession(id)
            .then(session => {
                res.status(200).send({
                    message: "Session retrieved",
                    session
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving session",
                    error: err
                });
            }
        );
    }

    public async updateOne(req: Request, res: Response) {
        let id = +req.params.id;
        this.sessionService.updateSession(id, req.body)
            .then(session => {
                res.status(200).send({
                    message: "Session updated",
                    session
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating session",
                    error: err
                });
            }
        );
    }

    public async deleteSession(req: Request, res: Response) {
        let id = +req.params.id;
        this.sessionService.deleteSession(id)
            .then(session => {
                res.status(200).send({
                    message: "Session deleted",
                    session
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error deleting session",
                    error: err
                });
            }
        );
    }
}
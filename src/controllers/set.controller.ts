import { Request, Response } from "express";
import Set from '../models/set.model';
import SetService from "../services/set.service";

export default class SetController {

    constructor(private setService: SetService) { }

    async addSet(req: Request, res: Response) {
        let userId = req.payload.userId

        let set: Set = req.body
        set.userId = userId

        // add set to database
        this.setService.addSet(set)
            .then(set => {
                res.json({
                    message: "Sets retrieved",
                    set
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error retrieving sets",
                    error: err
                })
            })
    }

    getAllSets(req: Request, res: Response) {
        let userId = req.payload.userId

        this.setService.getSets(userId)
            .then(sets => {
                res.json({
                    message: "Sets retrieved",
                    sets: sets
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error retrieving sets",
                    error: err
                })
            })
    }

    getSet(req: Request, res: Response) {
        let setId = +req.params.setId

        this.setService.getSet(setId)
            .then(set => {
                res.json({
                    message: "Set retrieved",
                    set: set
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error retrieving set",
                    error: err
                })
            })
    }

    updateSet(req: Request, res: Response) {
        let setId = +req.params.setId

        let set: Set = req.body
        set.id = setId

        this.setService.updateSet(set)
            .then(set => {
                res.json({
                    message: "Set updated",
                    set: set
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error updating set",
                    error: err
                })
            })
    }

    deleteSet(req: Request, res: Response) {
        let setId = +req.params.setId

        this.setService.deleteSet(setId)
            .then(() => {
                res.json({
                    message: "Set deleted"
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error deleting set",
                    error: err
                })
            })
    }
}
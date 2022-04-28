import { Complex } from "@prisma/client";
import { Request, Response } from "express";
import ComplexService from "../services/complex.service";

export default class ComplexController {

    constructor(private complexService: ComplexService) { }

    async create(req: Request, res: Response) {
        let userId = req.payload.userId

        let complex: Complex = req.body
        complex.userId = userId

        try {
            let oldComplex = await this.complexService.findByPath(complex.path)
            if (oldComplex) {
                return res.status(400).json({
                    message: `Complex with path: ${complex.path} already exists!`
                })
            }

            let newComplex = await this.complexService.createOne(complex)
            res.json({
                message: "Complexes retrieved",
                newComplex
            })
        }
        catch(err) {
            res.status(500).json({
                message: "Error retrieving complexes",
                error: err
            })
        }
    }

    findAll(req: Request, res: Response) {
        let userId = req.payload.userId

        this.complexService.findAll(userId)
            .then(complexes => {
                res.json({
                    message: "Complex retrieved",
                    complexes
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error retrieving complexes",
                    error: err
                })
            })
    }

    findOne(req: Request, res: Response) {
        let id = +req.params.id

        this.complexService.findOne(id)
            .then(complex => {
                res.json({
                    message: "Set retrieved",
                    complex
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error retrieving complex",
                    error: err
                })
            })
    }

    updateOne(req: Request, res: Response) {
        let id = +req.params.id

        let complex: Complex = req.body
        complex.id = id

        this.complexService.updateOne(complex)
            .then(complex => {
                res.json({
                    message: "Complex updated",
                    complex
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error updating complex",
                    error: err
                })
            })
    }

    deleteOne(req: Request, res: Response) {
        let id = +req.params.id

        this.complexService.deleteOne(id)
            .then((complex) => {
                res.json({
                    message: "Complex deleted",
                    complex
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error deleting Complex",
                    error: err
                })
            })
    }
}
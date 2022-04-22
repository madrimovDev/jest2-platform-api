import { Request, Response } from "express";
import QuestionWithVariants from "../models/question.model";
import Question from "../models/question.model";
import QuestionService from "../services/question.service";

export default class QuestionController {

    constructor(private questionService: QuestionService) { }

    // add questions by set id
    async create(req: Request, res: Response) {

        let cid = +req.params.cid
        
        let questions: QuestionWithVariants[] = req.body

        // add questions with create question function
        this.questionService.createMany(cid, questions)
            .then(questions => {
                res.status(200).json({
                    message: "Questions added successfully",
                    questions: questions
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error adding questions",
                    error: err
                })

                throw err
            })
    }
        

    // async addQuestion(req: Request, res: Response) {

    //     let complexId = +req.params.id

    //     let question: QuestionWithVariants = req.body
    //     question.complexId = complexId

    //     // add question to database
    //     this.questionService.createQuestion(question)
    //         .then(question => {
    //             res.json({
    //                 message: "Question retrieved",
    //                 question
    //             })
    //         })
    //         .catch(err => {
    //             res.status(500).json({
    //                 message: "Error retrieving question",
    //                 error: err
    //             })
    //         })
    // }

    async findAll(req: Request, res: Response) {

        let cid = +req.params.cid

        // get questions from database
        this.questionService.findAll(cid)
            .then(questions => {
                res.json({
                    message: "Questions retrieved",
                    questions
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error retrieving questions",
                    error: err
                })
                throw err
            })
    }

    // update questions by set id
    async updateAll(req: Request, res: Response) {

        let cid = +req.params.cid
        let questions: Question[] = req.body

        // update questions in database
        this.questionService.updateMany(cid, questions)
            .then(questions => {
                res.json({
                    message: "Questions updated successfully",
                    questions
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error updating questions",
                    error: err
                })
            })
    }

    async updateOne(req: Request, res: Response) {

        let question: Question = req.body

        // update question in database
        this.questionService.updateOne(question)
            .then(question => {
                res.json({
                    message: "Question updated",
                    question
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error updating question",
                    error: err
                })
            })
    }

    async deleteOne(req: Request, res: Response) {

        let questionId = +req.params.id

        // delete question from database
        this.questionService.deleteOne(questionId)
            .then(() => {
                res.json({
                    message: "Question deleted"
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error deleting question",
                    error: err
                })
            })
    }

    // get question by id
    async getQuestion(req: Request, res: Response) {

        let questionId = +req.params.id

        // get question from database
        this.questionService.getQuestion(questionId)
            .then(question => {
                res.json({
                    message: "Question retrieved",
                    question
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error retrieving question",
                    error: err
                })
            })
    }

    // delete questions by set id
    async deleteAll(req: Request, res: Response) {

        let cid = +req.params.cid

        // delete questions from database
        this.questionService.deleteAll(cid)
            .then(() => {
                res.json({
                    message: "Questions deleted"
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Error deleting questions",
                    error: err
                })
            })
    }
}
import { Request, Response } from "express";
import Question from "../models/question.model";
import QuestionService from "../services/question.service";

export default class QuestionController {

    constructor(private questionService: QuestionService) { }

    // add questions by set id
    async addQuestionsBySet(req: Request, res: Response) {

        let setId = +req.params.setId
        
        let questions: Question[] = req.body

        // add questions with create question function
        this.questionService.addQuestionsBySet(setId, questions)
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
        

    async addQuestion(req: Request, res: Response) {

        let setId = +req.params.id

        let question: Question = req.body
        question.setId = setId

        // add question to database
        this.questionService.createQuestion(question)
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

    async getQuestions(req: Request, res: Response) {

        let setId = +req.params.setId

        // get questions from database
        this.questionService.getQuestions(setId)
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
    async updateQuestionsBySet(req: Request, res: Response) {

        let setId = +req.params.id
        let questions: Question[] = req.body

        // update questions in database
        this.questionService.updateQuestionsBySet(setId, questions)
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

    async updateQuestion(req: Request, res: Response) {

        let question: Question = req.body

        // update question in database
        this.questionService.updateQuestion(question)
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

    async deleteQuestion(req: Request, res: Response) {

        let questionId = +req.params.id

        // delete question from database
        this.questionService.deleteQuestion(questionId)
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
    async deleteQuestionsBySet(req: Request, res: Response) {

        let setId = +req.params.id

        // delete questions from database
        this.questionService.deleteQuestionsBySet(setId)
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
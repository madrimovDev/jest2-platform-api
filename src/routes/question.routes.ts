import { Router } from "express"
import { questionController } from "../controllers"

const router = Router()

// create crud routes
router.route('/:setId')
    .post((req, res) => questionController.addQuestionsBySet(req, res))
    .get((req, res) => questionController.getQuestions(req, res))

router.route('/:setId/:id')
    .get((req, res) => questionController.getQuestion(req, res))
    .put((req, res) => questionController.updateQuestionsBySet(req, res))
    .delete((req, res) => questionController.deleteQuestion(req, res))

export default router
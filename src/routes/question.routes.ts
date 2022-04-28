import { Router } from "express"
import { questionController } from "../controllers"

const router = Router()

// create crud routes
router.route('/:cid/question')
    .post((req, res) => questionController.create(req, res))
    .get((req, res) => questionController.findAll(req, res))
    .put((req, res) => questionController.updateAll(req, res))
    .delete((req, res) => questionController.deleteMany(req, res))

router.route('/:cid/question/:id')
    .post((req, res) => questionController.create(req, res))
    .get((req, res) => questionController.findAll(req, res))
    .put((req, res) => questionController.updateAll(req, res))
    .delete((req, res) => questionController.deleteOne(req, res))

export default router
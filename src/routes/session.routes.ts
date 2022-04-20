import { Router } from "express";
import { sessionController } from "../controllers";

const router = Router()

router.route('/')
    .get((req, res) => sessionController.findAll(req, res))
    .post((req, res) => sessionController.create(req, res))

router.route('/:id')
    .get((req, res) => sessionController.findOne(req, res))
    .put((req, res) => sessionController.updateOne(req, res))

export default router
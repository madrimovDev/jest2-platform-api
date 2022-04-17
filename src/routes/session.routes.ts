import { Router } from "express";
import { sessionController } from "../controllers";

const router = Router()

router.route('/')
    .get((req, res) => sessionController.getSessions(req, res))
    .post((req, res) => sessionController.createSession(req, res))

router.route('/:id')
    .get((req, res) => sessionController.getSession(req, res))
    .put((req, res) => sessionController.updateSession(req, res))

export default router
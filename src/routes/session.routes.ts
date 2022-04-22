import { Router } from "express";
import { sessionController } from "../controllers";

const router = Router()

// get all sessions | for admin
router.get('/', (req, res) => sessionController.findAll(req, res));

// create new session
router.post('/start', (req, res) => sessionController.create(req, res))

// get session by id
router.get('/:id', (req, res) => sessionController.findOne(req, res))

// complete session
router.put('/:id', (req, res) => sessionController.complete(req, res))

export default router
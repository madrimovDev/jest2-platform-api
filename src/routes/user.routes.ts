import { Router } from "express";
import { userController } from "../controllers";

const router = Router()

router.post('/login', (req, res) => {
    userController.login(req, res)
})

router.post('/register', (req, res) => {
    userController.register(req, res)
})

export default router
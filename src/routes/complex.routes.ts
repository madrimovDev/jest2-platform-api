import { Router } from "express";
import { complexController } from "../controllers";

const router = Router()

// crud routes
router.route("/")
    .post((req, res) => complexController.create(req, res))
    .get((req, res) => complexController.findAll(req, res))

router.route("/:id")
    .get((req, res) => complexController.findOne(req, res))
    .put((req, res) => complexController.updateOne(req, res))
    .delete((req, res) => complexController.deleteOne(req, res))

export default router
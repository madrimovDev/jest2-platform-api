import { Router } from "express";
import { setController } from "../controllers";
import questionRoutes from "./question.routes";

const router = Router()

// crud routes
router.route("/")
    .post((req, res) => setController.addSet(req, res))
    .get((req, res) => setController.getAllSets(req, res))

router.route("/:setId")
    .get((req, res) => setController.getSet(req, res))
    .put((req, res) => setController.updateSet(req, res))
    .delete((req, res) => setController.deleteSet(req, res))

export default router
import express from "express";
import { createGym, getGyms, getGymById, updateGym, deleteGym } from "../controllers/gymController.js";

const router = express.Router();

router.post("/create", createGym);
router.get("/", getGyms);
router.get("/:id", getGymById);
router.put("/:id", updateGym);
router.delete("/:id", deleteGym);

export default router;

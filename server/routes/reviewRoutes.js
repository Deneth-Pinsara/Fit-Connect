import express from "express";
import { addReview, deleteReview } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/create", addReview);
router.delete("/:id", deleteReview);

export default router;

import express from "express";
import { addReview, deleteReview, getReviewsByGymId } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/create", addReview);
router.delete("/:id", deleteReview);
router.get("/gym/:gymId", getReviewsByGymId); 

export default router;

import { Router } from "express";
import { addCommentToDiscussion, createDiscussion, deleteDiscussion, getAllDiscussionsByGym, getDiscussionById, updateDiscussion } from "../controllers/discussionController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const discussionRouter = Router()

discussionRouter.get("/:id", getDiscussionById)
discussionRouter.post("/create", authMiddleware, createDiscussion)
discussionRouter.get("/gym/:id", getAllDiscussionsByGym)
discussionRouter.delete("/:id", deleteDiscussion)
discussionRouter.put("/:id", authMiddleware, addCommentToDiscussion)
discussionRouter.patch("/:id", updateDiscussion)

export default discussionRouter
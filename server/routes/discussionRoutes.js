import { Router } from "express";
import { addCommentToDiscussion, createDiscussion, deleteDiscussion, getAllDiscussionsByGym, getDiscussionById, updateDiscussion } from "../controllers/discussionController.js";

const discussionRouter = Router()

discussionRouter.get("/:id", getDiscussionById)
discussionRouter.post("/create", createDiscussion)
discussionRouter.get("/gym/:id", getAllDiscussionsByGym)
discussionRouter.delete("/:id", deleteDiscussion)
discussionRouter.put("/:id", addCommentToDiscussion)
discussionRouter.patch("/:id", updateDiscussion)

export default discussionRouter
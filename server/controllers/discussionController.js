import DiscussionModel from "../models/Discussion.js";
import { ERROR_RESPONSE, SUCCESS_RESPONSE } from "../utils/helper.js";


export const createDiscussion = async (req, res) => {
    try {
        const user = req.user;
        const { gym, title, description } = req.body;

        if (!user) return ERROR_RESPONSE(res, 401, "Unauthorized");

        const createdDiscussion = await DiscussionModel.create({ gym, title, description, user: user._id, comments: [] });


        return SUCCESS_RESPONSE(res, 201, { message: "Discussion created successfully!", discussion: createdDiscussion });
    } catch (error) {
        return ERROR_RESPONSE(res, 500, error.message);
    }
}
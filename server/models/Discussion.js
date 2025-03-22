import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    gym: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Gym",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, {
    timestamps: true
});

const DiscussionModel = mongoose.model("Discussion", discussionSchema);
export default DiscussionModel
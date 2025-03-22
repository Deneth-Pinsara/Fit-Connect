import mongoose from "mongoose";

const gymSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    services: { type: [String], required: true },
    pricing: { type: Number, required: true },
    ratings: { type: Number, default: 0 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

const Gym = mongoose.model("Gym", gymSchema);
export default Gym;

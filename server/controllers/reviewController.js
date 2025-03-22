import Review from "../models/Review.js";
import Gym from "../models/Gym.js";

// Add Review
export const addReview = async (req, res) => {
  try {
    const { user, rating, comment, gymId } = req.body;
    const review = new Review({ user, rating, comment, gym: gymId });
    await review.save();

    // Update Gym Rating
    const gym = await Gym.findById(gymId);
    gym.reviews.push(review._id);
    gym.ratings = (gym.ratings + rating) / 2; // Calculate average rating
    await gym.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Review
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });

    // Remove review from Gym
    await Gym.findByIdAndUpdate(review.gym, { $pull: { reviews: review._id } });

    res.status(200).json({ message: "Review deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
  date: { type: String, default: () => new Date().toLocaleString() }
});

export default mongoose.model("Feedback", feedbackSchema);

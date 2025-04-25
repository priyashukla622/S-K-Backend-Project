import express from "express";
import Feedback from "../models/feedbackschema.js";

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ _id: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching feedbacks" });
  }
});


router.post("/", async (req, res) => {
  const { name, rating, text } = req.body;
  if (!name || !rating || !text) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newFeedback = new Feedback({ name, rating, text });
    const saved = await newFeedback.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Error saving feedback" });
  }
});

export default router;

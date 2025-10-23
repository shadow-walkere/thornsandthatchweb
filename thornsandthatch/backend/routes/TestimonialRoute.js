const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");
const parser = require("../middleware/cloudinaryUpload");

// GET all testimonials with a limit (e.g., GET /api/testimonials?limit=3)
router.get("/", async (req, res) => {
  try {
    const { limit } = req.query;
    const testimonials = await Testimonial.find()
      .sort({ date: -1 })
      .limit(limit ? parseInt(limit) : 0); // Apply limit if provided
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new testimonial
router.post("/", parser.single("image"), async (req, res) => {
  try {
    const { name, message, isVerified } = req.body;
    const imageUrl = req.file?.path || ""; // Cloudinary URL

    const newTestimonial = new Testimonial({
      name,
      message,
      isVerified,
      image: imageUrl,
    });
    const saved = await newTestimonial.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//PUT a testimonial by ID
router.put("/:id", parser.single("image"), async (req, res) => {
  try {
    const { name, message, isVerified } = req.body;
    const imageUrl = req.file?.path || ""; // Cloudinary URL

    const newTestimonial = new Testimonial({
      name,
      message,
      isVerified,
      image: imageUrl,
    });
    const saved = await newTestimonial.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a testimonial by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Testimonial deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

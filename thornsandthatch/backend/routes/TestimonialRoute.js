const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");
const parser = require("../middleware/cloudinaryUpload");

// ✅ GET all testimonials (optional ?limit=3)
router.get("/", async (req, res) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit) : 0;

    if (limit < 0) {
      return res
        .status(400)
        .json({ message: "Limit must be a positive number." });
    }

    const testimonials = await Testimonial.find({ isVerified: true })
      .sort({ date: -1 })
      .limit(limit);

    res.status(200).json(testimonials);
  } catch (err) {
    console.error("Error fetching testimonials:", err);
    res.status(500).json({ message: "Failed to fetch testimonials." });
  }
});

// ✅ GET single testimonial by ID
router.get("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found." });
    }

    res.status(200).json(testimonial);
  } catch (err) {
    console.error("Error fetching testimonial:", err);

    if (err.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid testimonial ID." });
    }

    res.status(500).json({ message: "Failed to fetch testimonial." });
  }
});

// ✅ POST new testimonial (with optional image upload)
router.post("/", parser.single("image"), async (req, res) => {
  try {
    const { name, message, isVerified } = req.body;
    const imageUrl = req.file?.path || "";

    // Validate required fields
    if (!name || !message) {
      return res
        .status(400)
        .json({ message: "Name and message are required." });
    }

    const newTestimonial = new Testimonial({
      name,
      message,
      image: imageUrl,
      isVerified: isVerified === "true" || isVerified === true,
    });

    const saved = await newTestimonial.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("Error saving testimonial:", err);

    if (err.name === "ValidationError") {
      const errors = Object.keys(err.errors).map(
        (key) => err.errors[key].message
      );
      return res.status(400).json({
        message: errors[0] || "Validation error.",
        errors: err.errors,
      });
    }

    res.status(500).json({ message: "Failed to create testimonial." });
  }
});

// ✅ UPDATE testimonial by ID (PUT /api/testimonial/:id)
router.put("/:id", parser.single("image"), async (req, res) => {
  try {
    const { name, message, isVerified } = req.body;

    // Validate required fields
    if (!name || !message) {
      return res
        .status(400)
        .json({ message: "Name and message are required." });
    }

    const updateData = {
      name,
      message,
      isVerified: isVerified === "true" || isVerified === true,
    };

    // Only update image if a new one is uploaded
    if (req.file?.path) {
      updateData.image = req.file.path;
    }

    const updated = await Testimonial.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Testimonial not found." });
    }

    res.status(200).json(updated);
  } catch (err) {
    console.error("Error updating testimonial:", err);

    if (err.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid testimonial ID." });
    }

    if (err.name === "ValidationError") {
      const errors = Object.keys(err.errors).map(
        (key) => err.errors[key].message
      );
      return res.status(400).json({
        message: errors[0] || "Validation error.",
        errors: err.errors,
      });
    }

    res.status(500).json({ message: "Failed to update testimonial." });
  }
});

// ✅ PATCH testimonial verification status
router.patch("/:id/verify", async (req, res) => {
  try {
    const { isVerified } = req.body;

    if (typeof isVerified !== "boolean") {
      return res.status(400).json({
        message: "isVerified must be a boolean value.",
      });
    }

    const updated = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { isVerified },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Testimonial not found." });
    }

    res.status(200).json(updated);
  } catch (err) {
    console.error("Error updating verification status:", err);

    if (err.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid testimonial ID." });
    }

    res.status(500).json({ message: "Failed to update verification status." });
  }
});

// ✅ DELETE testimonial by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Testimonial.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Testimonial not found." });
    }

    res.status(200).json({
      message: "Testimonial deleted successfully.",
      deletedId: req.params.id,
    });
  } catch (err) {
    console.error("Error deleting testimonial:", err);

    if (err.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid testimonial ID." });
    }
    res.status(500).json({ message: "Failed to delete testimonial." });
  }
});

// BULK DELETE testimonials
router.post("/bulk-delete", async (req, res) => {
  try {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({
        message: "Please provide an array of testimonial ID.",
      });
    }

    const result = await Testimonial.deleteMany({
      _id: { $in: ids },
    });

    res.status(200).json({
      message: `${result.deletedCount} testimonial(s) deleted successfully.`,
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    console.error("Error bulk deleting testimonials:", err);
    res.status(500).json({ message: "Failed to delete testimonials." });
  }
});

module.exports = router;

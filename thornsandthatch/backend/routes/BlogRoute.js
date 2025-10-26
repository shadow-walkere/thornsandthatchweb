const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const parser = require("../middleware/cloudinaryUpload");

// CREATE a blog post with image
router.post("/", parser.single("image"), async (req, res) => {
  try {
    const { title, author, content, category } = req.body;
    const imageUrl = req.file?.path || "";

    console.log("Creating blog:", {
      title,
      author,
      content,
      category,
      hasImage: !!req.file,
    });

    const blog = new Blog({
      title,
      author,
      content,
      image: imageUrl,
      category: category || "All",
      approved: false,
    });

    const saved = await blog.save();
    console.log("Blog saved successfully:", saved._id);
    res.status(201).json(saved);
  } catch (err) {
    console.error("Blog creation error:", err);
    res.status(400).json({ error: err.message });
  }
});

// GET all approved blog posts (for public viewing)
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({ approved: true }).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all blog posts including pending (for admin)
router.get("/pending", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single blog post by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a blog post (including approval status)
router.put("/:id", parser.single("image"), async (req, res) => {
  try {
    const { title, author, content, category, approved } = req.body;
    const imageUrl = req.file?.path;

    const updatedFields = {};

    if (title) updatedFields.title = title;
    if (author) updatedFields.author = author;
    if (content) updatedFields.content = content;
    if (category) updatedFields.category = category;
    if (imageUrl) updatedFields.image = imageUrl;
    if (approved !== undefined) updatedFields.approved = approved;

    const updated = await Blog.findByIdAndUpdate(req.params.id, updatedFields, {
      new: true,
    });

    if (!updated) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json(updated);
  } catch (err) {
    console.error("Update error:", err);
    res.status(400).json({ error: err.message });
  }
});

// DELETE a blog post
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// INCREMENT likes for a blog post
router.patch("/:id/like", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );

    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

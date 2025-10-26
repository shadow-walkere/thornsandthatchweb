const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, default: "" },
    likes: { type: Number, default: 0 },
    approved: { type: Boolean, default: false },
    category: {
      type: String,
      enum: [
        "All",
        "Weddings",
        "Food & Drinks",
        "Accommodation",
        "Team Building",
        "Picnics",
        "Adventure playground",
      ],
      default: "All",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);

const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quote: { type: String, required: true },
    image: { type: String, required: true },
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

const express = require("express");
const router = express.Router();
const Visitor = require("../models/Visitor");

// Track Visitor
router.post("/track-visitor", async (req, res) => {
  try {
    const today = new Date();
    const date = today.toISOString().split("T")[0]; // YYYY-MM-DD
    const day = today.toLocaleString("en-US", { weekday: "long" });

    // Upsert + return updated document
    const visitor = await Visitor.findOneAndUpdate(
      { date },
      { $setOnInsert: { day }, $inc: { visitorCount: 1 } },
      { upsert: true, new: true }
    );

    console.log(`✅ Visitor tracked for ${date} (${day})`);
    res.status(200).json({ visitorCount: visitor.visitorCount });
  } catch (error) {
    console.error("❌ Error in /track-visitor:", error);
    res.status(500).json({ message: "Error tracking visitor" });
  }
});

// Get today's visitor count
router.get("/visitor-count", async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const visitorData = await Visitor.findOne({ date: today });
    res.status(200).json({ visitorCount: visitorData?.visitorCount || 0 });
  } catch (error) {
    console.error("❌ Error in /visitor-count:", error);
    res.status(500).json({ message: "Error fetching visitor count" });
  }
});

// Weekly Stats
router.get("/weekly-stats", async (req, res) => {
  try {
    const weeklyData = await Visitor.find({})
      .sort({ date: -1 })
      .limit(7)
      .lean();

    const formatted = weeklyData
      .map(({ day = "N/A", visitorCount = 0 }) => ({
        name: day.slice(0, 3),
        visitors: visitorCount,
      }))
      .reverse();

    res.json(formatted);
  } catch (error) {
    console.error("❌ Error fetching weekly stats:", error);
    res.status(500).json({ message: "Failed to get weekly data" });
  }
});

module.exports = router;

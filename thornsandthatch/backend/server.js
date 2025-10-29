const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv");
require("dotenv").config();
const connectdb = require("./config/db");
const AdminAuth = require("./routes/AdminAuth.js");
const Uploads = require("./routes/UploadRoute.js");
const faqRoutes = require("./routes/FAQRoute.js");
const errorHandler = require("./middleware/Errorhandler.js");
const Visitor = require("./routes/VisitorRoute.js");
const Testimonials = require("./routes/TestimonialRoute.js");
const GalleryRoute = require("./routes/GalleryRoute.js");
const blog = require("./routes/BlogRoute.js");
const email = require("./routes/Email.js");

dotenv.config();
connectdb();

const app = express(); // Initialize express
app.set("trust proxy", 1);

// CORS Configuration
const allowedOrigins = [
  "http://localhost:3000", // For development
  "http://localhost:3001", // For development
  "https://magnet-gatepass.onrender.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Origin:", origin); // Log the origin to check the requests
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "*"],
    credentials: true, // Allow cookies or credentials if necessary
  })
);

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// app.use(mongoSanitize());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

// Rate Limiting to Prevent Abuse
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later.",
  })
);

app.use((err, req, res, next) => {
  console.error(err.stack); // Log full error
  res.status(500).send({ success: false, message: err.message });
});

// Routes
app.use("/api/admin", AdminAuth); // Admin Auth routes
app.use("/api/upload", Uploads); // Image upload route
app.use("/api/faq", faqRoutes); // FAQ routes
app.use("/api/gallery", GalleryRoute); // Gallery routes
app.use("/api/blogs", blog); // Blog routes
app.use("/api/visitor", Visitor); // Visitor routes
app.use("/api/contact", email); // Email/Contact routes
app.use("/api/testimonials", Testimonials); // Testimonial routes

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    status: "Server is running",
    port: process.env.PORT || 5000,
    endpoints: [
      "POST /api/contact", // Email endpoint
      "GET /api/admin",
      "POST /api/upload",
      "GET /api/faq",
      "GET /api/gallery",
      "GET /api/blogs",
      "GET /api/track-visitor",
      "GET /api/testimonial",
    ],
  });
});

// Graceful Shutdown
process.on("SIGINT", () => {
  console.log("Shutting down server...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("Terminating server...");
  process.exit(0);
});

// Listen on the Defined Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
  ✅ Server running on port ${PORT}
  🌐 Frontend URL: http://localhost:3000
  🔌 Backend URL: http://localhost:${PORT}
  📧 Email endpoint: http://localhost:${PORT}/api/contact/send-mail
  `);
});

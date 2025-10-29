const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

require("dotenv").config();

// Test endpoint
// router.get("/test", (req, res) => {
//   res.json({ message: "Email route is working!" });
// });

router.post("/send-mail", async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("📧 Received email request:", { name, email, subject });

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all required fields." });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  try {
    // Verify environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ Missing EMAIL_USER or EMAIL_PASS");
      return res.status(500).json({ error: "Server configuration error." });
    }

    console.log("🔐 Using email:", process.env.EMAIL_USER);

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Must be App Password
      },
    });

    // Verify connection
    console.log("✅ SMTP connection verified");

    // Mail options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: subject || "Contact Form - The Thorn & Thatch Gardens",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d6a4f; border-bottom: 3px solid #d8f3dc; padding-bottom: 10px;">
            🌿 New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2d6a4f;">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Subject:</strong> ${
              subject || "General Inquiry"
            }</p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #2d6a4f; margin: 20px 0;">
            <h3 style="color: #2d6a4f; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
          <p style="color: #6c757d; font-size: 12px; text-align: center;">
            Sent from The Thorn & Thatch Gardens contact form<br>
            ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);

    res.status(200).json({
      success: "Email sent successfully.",
      messageId: info.messageId,
    });
  } catch (err) {
    console.error("❌ Email sending error:", err);

    if (err.code === "EAUTH") {
      return res.status(500).json({
        error: "Authentication failed. Check your Gmail App Password.",
      });
    }

    if (err.code === "ESOCKET") {
      return res.status(500).json({
        error: "Network error. Please check your connection.",
      });
    }

    res.status(500).json({
      error: "Failed to send email. Please try again later.",
      details: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
});

module.exports = router;

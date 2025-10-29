"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  });

  return (
    <footer className="relative overflow-hidden text-[#d7c5a5] py-16 mt-20 font-serif">
      {/* ✨ Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#2e241b] via-[#1f1812] to-[#1c160f]"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* 🌟 Shimmering Overlay */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,215,150,0.08),transparent_60%)] mix-blend-overlay"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* 🏡 Brand & Intro */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-amber-400 mb-3">
            The Thorn <span className="text-[#c2a678] italic">& Thatch</span>
          </h2>
          <p className="text-sm leading-relaxed text-[#e7decf]">
            Naturally Refreshing
          </p>
        </motion.div>

        {/* 🔗 Quick Links */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-amber-300 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
              { to: "/FAQs", label: "FAQs" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 🕒 Opening Hours */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-amber-300 mb-4">
            Opening Hours
          </h3>
          <div className="flex items-center space-x-2 mb-2">
            <Clock size={16} />
            <span className="text-sm">Monday – Sunday</span>
          </div>
          <p className="text-sm text-[#e7decf] font-medium">Open 24/7 daily!</p>
        </motion.div>

        {/* 📞 Contact Info */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-amber-300 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+254 722984568</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <span>info@thornandthatch.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Nambale, Busia County</span>
            </li>
          </ul>

          <div className="flex space-x-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition"
            >
              <Instagram size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        variants={fadeUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 mt-12 border-t border-[#4a3c2a] pt-6 text-center text-xs text-[#a18e73]"
      >
        © {new Date().getFullYear()} The Thorn & Thatch Gardens. All rights
        reserved.
      </motion.div>
    </footer>
  );
}

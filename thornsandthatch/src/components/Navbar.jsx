"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (closeMenu = false) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (closeMenu) setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/90 shadow-lg border-b border-green-100"
          : "bg-gradient-to-r from-green-50 via-white to-green-50"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-3 md:py-4">
        {/* 🌿 Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            to="/"
            onClick={() => handleNavClick(true)}
            className="flex items-center space-x-3 group hover:scale-[1.03] transition-transform duration-300"
          >
            <motion.img
              src="/assets/logo1.jpg"
              alt="The Thorn & Thatch Gardens Logo"
              className="h-16 w-auto rounded-2xl shadow-md border-2 border-green-200"
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-green-900 tracking-tight leading-none">
                The Thorn{" "}
                <span className="text-[#1b7f4a] italic">& Thatch</span>
              </h1>
              <p className="text-xs text-green-700 mt-1 tracking-wide">
                Gardens • Events • Paradise
              </p>
            </div>
          </Link>
        </motion.div>

        {/* 🌼 Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-[15px] font-medium">
          {[
            ["Home", "/"],
            ["About Us", "/about"],
            ["Our Services", "/services"],
            ["Gallery", "/gallery"],
            ["Blog", "/blog"],
            ["Contact Us", "/contact"],
          ].map(([label, path]) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={path}
                onClick={() => handleNavClick(false)}
                className="relative text-green-800 hover:text-[#1b7f4a] transition-all group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-green-600 to-lime-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                <motion.div
                  className="absolute inset-0 bg-green-100 rounded-lg opacity-0 group-hover:opacity-30 blur-sm transition-all"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                ></motion.div>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* 🌸 Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {[
            ["https://facebook.com/thornandthatch", <Facebook size={18} />],
            ["https://instagram.com/thornandthatch", <Instagram size={18} />],
          ].map(([url, icon], i) => (
            <motion.a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-2 rounded-full bg-gradient-to-br from-green-100 to-lime-100 text-green-700 hover:from-green-500 hover:to-lime-400 hover:text-white shadow-sm transition"
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* 🍔 Mobile Menu Button */}
        <button
          className="md:hidden text-green-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg md:hidden border-t border-green-100 z-40"
          >
            <nav className="flex flex-col space-y-5 px-8 py-6 text-green-800 font-medium">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Our Services", "/services"],
                ["Gallery", "/gallery"],
                ["Blog", "/blog"],
                ["Contact Us", "/contact"],
              ].map(([label, path]) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 8, color: "#1b7f4a" }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <Link
                    to={path}
                    onClick={() => handleNavClick(true)}
                    className="text-lg tracking-wide hover:text-[#1b7f4a] transition-all"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex justify-center space-x-6 pb-6">
              <motion.a
                href="https://facebook.com/thornandthatch"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-green-800 hover:text-[#1b7f4a]"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com/thornandthatch"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-green-800 hover:text-[#1b7f4a]"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

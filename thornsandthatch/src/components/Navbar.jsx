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

  // Scroll to top on navigation (desktop or mobile)
  const handleNavClick = (closeMenu = false) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (closeMenu) setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/80 shadow-lg border-b border-amber-100"
          : "bg-gradient-to-r from-amber-50 via-white to-green-50"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-3 md:py-4">
        {/* 🌿 Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Link
            to="/"
            onClick={() => handleNavClick(true)}
            className="flex items-center space-x-3 group hover:scale-[1.02] transition-transform duration-300"
          >
            <motion.img
              src="/assets/logo1.jpg"
              alt="Thorns & Thatch Gardens Logo"
              className="h-16 w-auto rounded-2xl shadow-md border-2 border-amber-200"
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-amber-800 tracking-tight leading-none">
                The Thorns{" "}
                <span className="text-green-700 italic">& Thatch</span>
              </h1>
              <p className="text-xs text-gray-600 mt-1 tracking-wide">
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
            <motion.div key={label} whileHover={{ scale: 1.1 }}>
              <Link
                to={path}
                onClick={() => handleNavClick(false)}
                className="relative text-gray-700 hover:text-amber-800 transition-all group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-amber-600 via-yellow-500 to-green-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* 🌸 Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {[
            ["https://facebook.com/thornsandthatch", <Facebook size={18} />],
            ["https://instagram.com/thornsandthatch", <Instagram size={18} />],
          ].map(([url, icon], i) => (
            <motion.a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-2 rounded-full bg-gradient-to-br from-amber-200 to-green-200 text-gray-700 hover:from-amber-600 hover:to-green-600 hover:text-white transition"
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* 🍔 Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
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
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg md:hidden border-t border-amber-100 z-40"
          >
            <nav className="flex flex-col space-y-5 px-8 py-6 text-gray-700 font-medium">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Our Services", "/services"],
                ["Gallery", "/gallery"],
                ["Blog", "/blog"],
                ["Contact Us", "/contact"],
              ].map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  onClick={() => handleNavClick(true)} // closes menu + scrolls top
                  className="hover:text-amber-700 text-lg tracking-wide"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex justify-center space-x-6 pb-6">
              <motion.a
                href="https://www.facebook.com/TheThornandThatchGardens"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-700 hover:text-amber-700"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com/thornsandthatch"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-700 hover:text-green-700"
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

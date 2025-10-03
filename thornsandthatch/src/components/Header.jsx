// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-8 py-4 shadow-sm bg-white relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-800">
          Thorns <span className="text-green-600 italic">& Thatch</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-amber-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-amber-700">
            About Us
          </Link>
          <Link to="/services" className="hover:text-amber-700">
            Our Services
          </Link>
          <Link to="/gallery" className="hover:text-amber-700">
            Gallery
          </Link>
          <Link to="/blog" className="hover:text-amber-700">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-amber-700">
            Contact Us
          </Link>
        </nav>

        {/* Socials (desktop only) */}
        <div className="hidden md:flex space-x-3">
          <a
            href="https://facebook.com/thornsandthatch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-gray-600 hover:text-amber-700" />
          </a>
          <a
            href="https://instagram.com/thornsandthatch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-gray-600 hover:text-amber-700" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50"
          >
            <nav className="flex flex-col space-y-4 px-6 py-6 text-gray-700">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-amber-700"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-amber-700"
              >
                About Us
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="hover:text-amber-700"
              >
                Our Services
              </Link>
              <Link
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className="hover:text-amber-700"
              >
                Gallery
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="hover:text-amber-700"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-amber-700"
              >
                Contact Us
              </Link>
            </nav>
            <div className="flex justify-center space-x-4 pb-4">
              <a
                href="https://facebook.com/thornsandthatch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-600 hover:text-amber-700" />
              </a>
              <a
                href="https://instagram.com/thornsandthatch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-600 hover:text-amber-700" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

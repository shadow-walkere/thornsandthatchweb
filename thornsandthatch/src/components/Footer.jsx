import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-amber-50 py-10 mt-12 text-center text-gray-600">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-6xl mx-auto">
        {/* Brand */}
        <h2 className="text-xl font-bold text-amber-800 mb-4 md:mb-0">
          Thorns <span className="text-green-600 italic">& Thatch</span>
        </h2>

        {/* Quick Links */}
        <nav className="flex space-x-6 text-sm mb-4 md:mb-0">
          <Link to="/" className="hover:text-amber-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-amber-700">
            About
          </Link>
          <Link to="/services" className="hover:text-amber-700">
            Services
          </Link>
          <Link to="/gallery" className="hover:text-amber-700">
            Gallery
          </Link>
          <Link to="/blog" className="hover:text-amber-700">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-amber-700">
            Contact
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Thorns & Thatch Gardens. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

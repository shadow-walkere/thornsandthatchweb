import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const postsPerPage = 6;

  const categories = [
    "All",
    "Weddings",
    "Food & Drinks",
    "Accommodation",
    "Team Building",
    "Picnics",
    "Adventure playground",
  ];

  // ✅ Fetch approved blog posts from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${SERVER_URL}/api/blogs`); // ✅ Changed to /blogs
        const data = await res.json();
        console.log("Fetched blogs:", data); // Debug log
        setBlogPosts(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // 🌸 Auto-Rotate Featured Post Every 6 Seconds
  useEffect(() => {
    if (blogPosts.length === 0) return;
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % blogPosts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [blogPosts]);

  // 🌿 Filtered + Paginated Posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title // ✅ Changed from post.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const featuredPost = blogPosts[featuredIndex];

  // Format date helper
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // 🌀 Loading & Empty States
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-green-700 text-lg">
        🌿 Loading blog posts...
      </div>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-green-700 text-lg">
        <p className="mb-4">No approved blog posts available yet 🌱</p>
        <p className="text-sm text-gray-500">Check back soon for updates!</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-green-50 to-white text-[#1a3b28] font-serif">
      {/* 🌿 Featured Story */}
      <section className="relative mt-28 sm:mt-36 mb-20 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[360px] sm:h-[420px] lg:h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={featuredPost._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <img
                src={featuredPost.image || "/assets/default-blog.jpg"}
                alt={featuredPost.title}
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-900/40 to-transparent flex items-end p-6 sm:p-10 lg:p-14 backdrop-blur-[2px]">
                <div className="text-white max-w-xl sm:max-w-2xl">
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-green-300 mb-2">
                    🌿 Featured Story
                  </p>
                  <h2 className="text-2xl sm:text-4xl font-light mb-3 leading-snug">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm sm:text-base mb-6 text-green-100">
                    {featuredPost.content?.substring(0, 150)}...
                  </p>
                  <Link
                    to={`/blog/${featuredPost._id}`}
                    className="inline-block bg-green-700 hover:bg-green-600 px-6 py-3 rounded-full text-sm font-medium text-white shadow-md transition-all"
                  >
                    Read Full Story →
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {blogPosts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setFeaturedIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === featuredIndex
                  ? "bg-green-700"
                  : "bg-green-200 hover:bg-green-400"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 🌱 Filters */}
      <section className="px-4 sm:px-8 lg:px-10 py-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-b border-green-200">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-green-700 text-white border-green-700"
                  : "bg-white text-green-800 border-green-400 hover:bg-green-50"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900 placeholder-green-400"
          />
        </div>
      </section>

      {/* 🌸 Blog Grid */}
      <section className="px-4 sm:px-8 lg:px-10 pb-16 max-w-7xl mx-auto">
        <h3 className="text-2xl sm:text-3xl text-center font-light mb-12 text-green-700 tracking-wide">
          Garden Highlights 🌸
        </h3>

        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {paginatedPosts.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-green-100 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={post.image || "/assets/default-blog.jpg"}
                    alt={post.title}
                    className="h-52 sm:h-56 lg:h-60 w-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-3 left-3 bg-green-700/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs text-green-600 mb-2">
                    {formatDate(post.createdAt)} • By {post.author}
                  </p>
                  <h2 className="text-lg sm:text-xl font-semibold text-green-800 mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-green-900/80 mb-5 text-sm leading-relaxed line-clamp-3">
                    {post.content}
                  </p>
                  <Link
                    to={`/blog/${post._id}`}
                    className="text-green-700 hover:text-green-500 font-medium text-sm transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-green-700 mt-12 text-lg">
            No posts found — try a different category or keyword 🌿
          </p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center space-x-2 flex-wrap">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md border text-sm font-medium bg-white text-green-700 border-green-400 hover:bg-green-50 disabled:opacity-50"
            >
              ← Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`px-4 py-2 rounded-md border text-sm font-medium ${
                  currentPage === i + 1
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-white text-green-800 border-green-400 hover:bg-green-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md border text-sm font-medium bg-white text-green-700 border-green-400 hover:bg-green-50 disabled:opacity-50"
            >
              Next →
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

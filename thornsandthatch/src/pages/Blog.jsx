import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// 🌿 Blog Data
const blogPosts = [
  {
    id: 1,
    title: "Enchanted Garden Weddings",
    excerpt:
      "Step into a world of romance surrounded by flowers and candlelight. Discover how we turn garden spaces into dreamy wedding venues.",
    date: "September 25, 2025",
    image: "/assets/wedding1.jpg",
    category: "Weddings",
  },
  {
    id: 2,
    title: "A Taste of Nature: Food & Drinks at Thorns & Thatch",
    excerpt:
      "From freshly brewed garden teas to chef-inspired farm-to-table meals, our menu is a tribute to nature’s flavors.",
    date: "September 10, 2025",
    image: "/assets/food1.jpg",
    category: "Food & Drinks",
  },
  {
    id: 3,
    title: "Comfort in the Garden: Stay at Our Cottage Suites",
    excerpt:
      "Relax in cozy accommodation surrounded by lush gardens, gentle breezes, and the songs of nature.",
    date: "August 28, 2025",
    image: "/assets/accomodation.jpg",
    category: "Accommodation",
  },
  {
    id: 4,
    title: "Team Building in Bloom",
    excerpt:
      "From group challenges to creative outdoor workshops, our gardens provide the perfect setting for team bonding and growth.",
    date: "August 10, 2025",
    image: "/assets/picnics1.jpg",
    category: "Team Building",
  },
  {
    id: 5,
    title: "Nature-Infused picnics",
    excerpt:
      "Unwind with a classic picnic surrounded by nature’s charm — wicker baskets, and tranquil views included.",
    date: "July 24, 2025",
    image: "/assets/picnics2.jpg",
    category: "Picnics",
  },
  {
    id: 6,
    title: "Events that Bloom",
    excerpt:
      "Whether it's a birthday, baby shower, or corporate event, our spaces adapt to create magical experiences for every occasion.",
    date: "July 10, 2025",
    image: "/assets/event1.jpg",
    category: "Events",
  },
];

const categories = [
  "All",
  "Weddings",
  "Food & Drinks",
  "Accommodation",
  "Team Building",
  "Picnics",
  "Events",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const postsPerPage = 6;

  // 🌸 Auto-Rotate Featured Post Every 6 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % blogPosts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Filtered + Paginated Posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title
      .toLowerCase()
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

  return (
    <div className="bg-[#FCF8F3] text-[#4a3c2a] font-serif">
      {/* 🌼 Auto-Rotating Featured Story */}
      <section className="relative mt-28 sm:mt-36 mb-20 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[360px] sm:h-[420px] lg:h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={featuredPost.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-5 sm:p-10 lg:p-14">
                <div className="text-white max-w-xl sm:max-w-2xl">
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-amber-300 mb-2">
                    ✨ Featured Story
                  </p>
                  <h2 className="text-2xl sm:text-4xl font-light mb-3 leading-snug">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm sm:text-base mb-6 text-gray-200">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-block bg-[#a17c50] hover:bg-[#7b6650] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium text-white shadow-md transition-all"
                  >
                    Read Full Story →
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 🌾 Indicator Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {blogPosts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setFeaturedIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === featuredIndex
                  ? "bg-[#7b6650]"
                  : "bg-[#d3c6b8] hover:bg-[#a17c50]"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 🌿 Filters */}
      <section className="px-4 sm:px-8 lg:px-10 py-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-b border-[#e5d7c8]">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-[#7b6650] text-white border-[#7b6650]"
                  : "bg-white text-[#5e4c3a] border-gray-300 hover:bg-[#f7efe5]"
              }`}
            >
              {cat}
            </button>
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
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#a17c50] text-[#4a3c2a]"
          />
        </div>
      </section>

      {/* 🌸 Blog Grid */}
      <section className="px-4 sm:px-8 lg:px-10 pb-16 max-w-7xl mx-auto">
        <h3 className="text-2xl sm:text-3xl text-center font-light mb-12 text-[#7b6650] tracking-wide">
          Garden Highlights 🌸
        </h3>

        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {paginatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-[#e9dfd4] hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-52 sm:h-56 lg:h-60 w-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-3 left-3 bg-[#7b6650]/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-lg sm:text-xl font-semibold text-[#7b6650] mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-[#5e4c3a] mb-5 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-[#a17c50] hover:text-[#7b6650] font-medium text-sm transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-12 text-lg">
            No posts found — try a different category or keyword 🌿
          </p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center space-x-2 flex-wrap">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md border text-sm font-medium bg-white text-gray-700 border-gray-300 hover:bg-[#f7efe5] disabled:opacity-50"
            >
              ← Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`px-4 py-2 rounded-md border text-sm font-medium ${
                  currentPage === i + 1
                    ? "bg-[#7b6650] text-white border-[#7b6650]"
                    : "bg-white text-[#5e4c3a] border-gray-300 hover:bg-[#f7efe5]"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md border text-sm font-medium bg-white text-gray-700 border-gray-300 hover:bg-[#f7efe5] disabled:opacity-50"
            >
              Next →
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

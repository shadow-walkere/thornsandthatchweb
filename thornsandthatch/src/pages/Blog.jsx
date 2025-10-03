import { useState } from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "A Blooming Season at Thorns & Thatch",
    excerpt:
      "Discover the vibrant colors and fresh beginnings that our gardens bring each spring.",
    date: "September 25, 2025",
    image: "/blog/b1.jpg",
    category: "Events",
  },
  {
    id: 2,
    title: "Planning the Perfect Garden Wedding",
    excerpt:
      "Tips and inspiration for creating unforgettable moments surrounded by nature.",
    date: "September 10, 2025",
    image: "/blog/b2.jpg",
    category: "Weddings",
  },
  {
    id: 3,
    title: "Behind the Scenes: Our Gardeners at Work",
    excerpt:
      "Meet the dedicated team that nurtures every corner of Thorns & Thatch Gardens.",
    date: "August 28, 2025",
    image: "/blog/b3.jpg",
    category: "Garden Care",
  },
  // ➡️ Add more posts here to test pagination
];

const categories = ["All", "Events", "Weddings", "Garden Care"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
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

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/garden-view.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Blog</h1>
          <p className="text-lg">
            Stories, updates, and inspiration from the garden
          </p>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="px-8 py-8 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1); // reset to first page
              }}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-amber-700 text-white border-amber-700"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-amber-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset to first page
            }}
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-8 pb-16 max-w-7xl mx-auto">
        {paginatedPosts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-xl font-semibold text-amber-800 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="inline-block mb-4 text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-amber-700 hover:underline font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-12">No posts found.</p>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md border text-sm font-medium bg-white text-gray-700 border-gray-300 hover:bg-amber-50 disabled:opacity-50"
            >
              ← Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`px-4 py-2 rounded-md border text-sm font-medium ${
                  currentPage === i + 1
                    ? "bg-amber-700 text-white border-amber-700"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-amber-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md border text-sm font-medium bg-white text-gray-700 border-gray-300 hover:bg-amber-50 disabled:opacity-50"
            >
              Next →
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

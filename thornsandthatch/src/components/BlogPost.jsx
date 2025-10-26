import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchPost = async () => {
      try {
        const res = await fetch(`${SERVER_URL}/api/blog/${id}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-green-700 text-lg">
        🌿 Loading post...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="px-8 py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          Post not found
        </h1>
        <Link to="/blog" className="text-green-700 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // ✅ Format the date just like Blog.jsx
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white text-[#1b3d2f] font-serif">
      {/* 🖼️ Hero Banner */}
      <section
        className="relative h-[40vh] sm:h-[55vh] flex items-center justify-center bg-cover bg-center rounded-b-3xl overflow-hidden shadow-md"
        style={{
          backgroundImage: `url(${post.image || "/assets/default-blog.jpg"})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl font-light mb-3 drop-shadow-lg">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base italic text-gray-200">
            {formatDate(post.createdAt)} • {post.category} • By {post.author}
          </p>
        </div>
      </section>

      {/* 🌿 Blog Content */}
      <section className="px-6 sm:px-10 py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg text-[#1b3d2f] max-w-none leading-relaxed">
          {post.content?.split("\n").map((para, idx) => (
            <p key={idx} className="mb-6 text-[1.05rem] sm:text-lg">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-block bg-[#2d6a4f] hover:bg-[#1b4332] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all shadow-md"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>

      {/* 🌸 Decorative Section */}
      <section className="bg-[#ebf5ec] py-12 mt-8">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl sm:text-3xl font-light text-[#2d6a4f] mb-4">
            Love what you read?
          </h3>
          <p className="text-[#1b3d2f] mb-6">
            Explore more stories and inspirations from <b>The Thorn & Thatch</b>{" "}
            garden haven.
          </p>
          <Link
            to="/blog"
            className="inline-block bg-[#52b788] hover:bg-[#40916c] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all shadow-md"
          >
            🌿 View More Posts
          </Link>
        </div>
      </section>
    </div>
  );
}

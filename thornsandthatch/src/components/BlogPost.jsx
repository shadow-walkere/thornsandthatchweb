import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch single blog post
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${SERVER_URL}/api/blogs/${id}`);
        const data = await res.json();
        setPost(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-green-700 text-lg">
        🌿 Loading blog post...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen text-green-700 text-lg">
        ❌ Blog post not found.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-green-50 to-white min-h-screen text-[#1a3b28] font-serif"
    >
      <div className="max-w-4xl mx-auto px-6 py-24">
        <img
          src={post.image || "/assets/default-blog.jpg"}
          alt={post.title}
          className="w-full h-80 object-cover rounded-2xl shadow-lg mb-10"
        />

        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          {post.title}
        </h1>

        <p className="text-sm text-green-700 mb-8">
          {formatDate(post.createdAt)} • By {post.author} •{" "}
          <span className="italic">{post.category}</span>
        </p>

        <article className="prose prose-green max-w-none text-green-900 leading-relaxed">
          {post.content?.split("\n").map((paragraph, i) => (
            <p key={i} className="mb-4">
              {paragraph}
            </p>
          ))}
        </article>

        <div className="mt-12">
          <Link
            to="/blog"
            className="text-green-700 hover:text-green-500 font-medium text-sm transition-all"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

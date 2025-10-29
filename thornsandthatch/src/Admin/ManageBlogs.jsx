import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Pencil,
  Trash2,
  PlusCircle,
  Loader,
  CheckCircle,
  ThumbsUp,
} from "lucide-react";
import { toast } from "react-hot-toast";
import BlogFormModal from "./BlogFormModal";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${SERVER_URL}/api/blogs/pending`);
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`${SERVER_URL}/api/blogs/${id}`);
      toast.success("Blog deleted successfully!");
      fetchBlogs();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete blog");
    }
  };

  const handleEdit = (blog) => {
    setEditBlog(blog);
    setModalOpen(true);
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`${SERVER_URL}/api/blogs/${id}`, { approved: true });
      toast.success("Blog approved successfully!");
      fetchBlogs();
    } catch (err) {
      console.error(err);
      toast.error("Failed to approve blog");
    }
  };

  const handleAdd = () => {
    setEditBlog(null);
    setModalOpen(true);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-800">Manage Blog Posts</h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          <PlusCircle size={20} /> Add Blog
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center mt-10">
          <Loader className="animate-spin" size={32} />
        </div>
      ) : blogs.length === 0 ? (
        <p className="text-gray-500 text-center font-semibold text-lg">
          No blog posts yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedBlogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold text-green-700">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-2">By {blog.author}</p>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {blog.content}
                </p>

                <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <ThumbsUp size={16} className="text-green-600" />
                    {blog.likes} Likes
                  </span>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      blog.approved
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {blog.approved ? "Approved" : "Pending"}
                  </span>
                </div>

                <div className="flex justify-end gap-3 mt-3">
                  {!blog.approved && (
                    <button
                      onClick={() => handleApprove(blog._id)}
                      className="text-green-600 hover:text-green-800"
                      title="Approve"
                    >
                      <CheckCircle size={18} />
                    </button>
                  )}
                  <button
                    onClick={() => handleEdit(blog)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination - only show if more than 1 page */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-4 py-2 bg-green-900 text-white rounded disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                currentPage === i + 1 ? "bg-green-500 text-white" : "bg-green-100"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-4 py-2 bg-green-900 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {modalOpen && (
        <BlogFormModal
          existing={editBlog}
          onClose={() => setModalOpen(false)}
          onSuccess={() => {
            fetchBlogs();
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default ManageBlogs;
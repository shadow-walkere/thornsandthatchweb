import React, { useState } from "react";
import axios from "axios";
import { X, Loader } from "lucide-react";
import { toast } from "react-hot-toast";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const BlogFormModal = ({ existing, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    title: existing?.title || "",
    author: existing?.author || "",
    content: existing?.content || "",
    category: existing?.category || "All",
    approved: existing?.approved || false,
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("author", form.author);
      formData.append("content", form.content);
      formData.append("category", form.category);
      formData.append("approved", form.approved);

      if (image) {
        formData.append("image", image);
      }

      if (existing) {
        await axios.put(`${SERVER_URL}/api/blogs/${existing._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Blog updated successfully!");
      } else {
        await axios.post(`${SERVER_URL}/api/blogs`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Blog created successfully!");
      }

      onSuccess();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-green-700">
          {existing ? "Edit Blog" : "Add Blog"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold mb-1">Title</label>
            <input
              name="title"
              type="text"
              placeholder="Blog Title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-semibold mb-1">Author</label>
            <input
              name="author"
              type="text"
              placeholder="Author Name"
              value={form.author}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-green-500"
            >
              <option value="All">All</option>
              <option value="Weddings">Weddings</option>
              <option value="Food & Drinks">Food & Drinks</option>
              <option value="Accommodation">Accommodation</option>
              <option value="Team Building">Team Building</option>
              <option value="Picnics">Picnics</option>
              <option value="Adventure playground">Adventure playground</option>
            </select>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold mb-1">Content</label>
            <textarea
              name="content"
              placeholder="Write blog content here..."
              rows="6"
              value={form.content}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
            />
            {existing && existing.image && !image && (
              <p className="text-sm text-gray-500 mt-1">
                Current image will be kept if no new image is uploaded
              </p>
            )}
          </div>

          {/* Approved Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="approved"
              checked={form.approved}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label className="text-sm font-medium">Mark as Approved</label>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-end pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 flex items-center justify-center disabled:opacity-50"
            >
              {loading && <Loader size={20} className="animate-spin mr-2" />}
              {existing ? "Update Blog" : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogFormModal;

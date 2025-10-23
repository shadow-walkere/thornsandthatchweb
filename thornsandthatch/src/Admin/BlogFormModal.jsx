import React, { useState } from "react";
import axios from "axios";
import { X, Loader } from "lucide-react";
import { toast } from "react-hot-toast";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const BlogFormModal = ({ existing, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    name: existing?.title || "",
    category: existing?.category || "",
    Quote: existing?.content || "",
    approved: existing?.approved || false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      for (const key in form) {
        formData.append(key, form[key]);
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
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6 relative">
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
          <input
            name="name"
            type="text"
            placeholder="Blog Title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            name="category"
            type="text"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <textarea
            name="content"
            placeholder="quote"
            rows="5"
            value={form.content}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="approved"
              checked={form.approved}
              onChange={handleChange}
            />
            <label className="text-sm">Mark as Approved</label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 flex items-center justify-center"
          >
            {loading && <Loader size={20} className="animate-spin mr-2" />}
            {existing ? "Update Blog" : "Create Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogFormModal;

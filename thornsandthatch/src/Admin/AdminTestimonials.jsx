import React, { useEffect, useState } from "react";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({
    name: "",
    message: "",
    isVerified: false,
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 5;

  // Selected for bulk delete
  const [selectedIds, setSelectedIds] = useState([]);

  // Fetch all testimonials
  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/api/testimonials`);
      setTestimonials(res.data);
      setSelectedIds([]);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("message", form.message);
      formData.append("isVerified", form.isVerified);
      if (form.image) formData.append("image", form.image);

      if (editingId) {
        await axios.put(
          `${SERVER_URL}/api/testimonials/${editingId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        await axios.post(`${SERVER_URL}/api/testimonials`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setForm({ name: "", message: "", isVerified: false, image: null });
      setPreview(null);
      setEditingId(null);
      fetchTestimonials();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      try {
        await axios.delete(`${SERVER_URL}/api/testimonials/${id}`);
        fetchTestimonials();
      } catch (err) {
        console.error("Delete error:", err);
      }
    }
  };

  // Handle edit
  const handleEdit = (t) => {
    setForm({
      name: t.name,
      message: t.message,
      isVerified: t.isVerified,
      image: null, // Only replaced if user uploads a new file
    });
    setPreview(t.image ? `${SERVER_URL}/${t.image}` : null);
    setEditingId(t._id);
  };

  // Handle selection toggle
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Handle bulk delete
  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;
    if (!window.confirm(`Delete ${selectedIds.length} testimonials?`)) return;

    try {
      await Promise.all(
        selectedIds.map((id) =>
          axios.delete(`${SERVER_URL}/api/testimonials/${id}`)
        )
      );
      setSelectedIds([]);
      fetchTestimonials();
    } catch (err) {
      console.error("Bulk delete error:", err);
    }
  };

  // Pagination logic
  const indexOfLast = currentPage * testimonialsPerPage;
  const indexOfFirst = indexOfLast - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  return (
    <div className="p-6 bg-white text-amber-900 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Manage Testimonials</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-8 border border-amber-300 rounded-lg p-4 bg-amber-50"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border border-amber-300 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 border border-amber-300 rounded"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <div>
          <label className="block font-medium mb-1">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border border-amber-300 p-2 rounded w-full"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-3 w-24 h-24 object-cover rounded border border-amber-300"
            />
          )}
        </div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.isVerified}
            onChange={(e) => setForm({ ...form, isVerified: e.target.checked })}
          />
          Verified?
        </label>
        <button
          type="submit"
          className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
        >
          {editingId ? "Update" : "Add"} Testimonial
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setForm({
                name: "",
                message: "",
                isVerified: false,
                image: null,
              });
              setPreview(null);
              setEditingId(null);
            }}
            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Bulk Delete Button */}
      {selectedIds.length > 0 && (
        <div className="mb-4">
          <button
            onClick={handleBulkDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete Selected ({selectedIds.length})
          </button>
        </div>
      )}

      {/* Testimonials List */}
      <ul className="space-y-6">
        {currentTestimonials.map((t) => (
          <li
            key={t._id}
            className={`border border-amber-300 rounded p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
              selectedIds.includes(t._id) ? "bg-amber-100" : "bg-amber-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={selectedIds.includes(t._id)}
                onChange={() => toggleSelect(t._id)}
              />
              {t.image && (
                <img
                  src={`${SERVER_URL}/${t.image}`}
                  alt={t.name}
                  className="w-16 h-16 object-cover rounded border"
                />
              )}
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="italic text-sm">"{t.message}"</p>
                <p className="text-sm mt-1">
                  Status:{" "}
                  <span
                    className={`font-bold ${
                      t.isVerified ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {t.isVerified ? "Verified" : "Unverified"}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleEdit(t)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(t._id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AdminTestimonials;

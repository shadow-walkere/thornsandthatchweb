import React, { useState } from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import {
  Users,
  BookOpenText,
  MessageCircle,
  GalleryThumbnails,
  MessageCircleDashed,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };

  return (
    <div className="flex h-screen font-inter text-white">
      {/* ────────────────── Sidebar ────────────────── */}
      <aside
        className={`bg-gray-800 border-r border-gray-700 fixed md:relative z-20 top-0 h-full w-64 p-5 transition-transform duration-300
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo + Close (mobile) */}
        <div className="flex items-center justify-between mb-10 mt-6 md:mt-0">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo1.jpg"
              alt="logo"
              className="w-9 h-9 rounded-full border-2 border-green-500 object-cover"
            />
            <h2 className="text-2xl font-extrabold text-green-400">
              The Thorn and Thatch
            </h2>
          </div>

          {/* Close button (mobile) */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden hover:text-green-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* ────────────────── Navigation Links ────────────────── */}
        <nav>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/admin/dashboard/visitors"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-lg font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-green-400 bg-gray-700 px-3 py-2 rounded-lg"
                      : "hover:text-green-400"
                  }`
                }
              >
                <Users className="w-5 h-5" />
                Visitor Details
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/dashboard/blog"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-lg font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-green-400 bg-gray-700 px-3 py-2 rounded-lg"
                      : "hover:text-green-400"
                  }`
                }
              >
                <BookOpenText className="w-5 h-5" />
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/dashboard/testimonials"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-lg font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-green-400 bg-gray-700 px-3 py-2 rounded-lg"
                      : "hover:text-green-400"
                  }`
                }
              >
                <MessageCircle className="w-5 h-5" />
                Testimonials
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/dashboard/faqs"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-lg font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-green-400 bg-gray-700 px-3 py-2 rounded-lg"
                      : "hover:text-green-400"
                  }`
                }
              >
                <MessageCircleDashed className="w-5 h-5" />
                FAQs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/dashboard/gallery"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-lg font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-green-400 bg-gray-700 px-3 py-2 rounded-lg"
                      : "hover:text-green-400"
                  }`
                }
              >
                <GalleryThumbnails className="w-5 h-5" />
                Gallery
              </NavLink>
            </li>

            <li className="pt-4 border-t border-gray-700">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 text-lg font-medium hover:text-red-400 transition-colors duration-200"
              >
                <LogOut className="w-5 h-5" />
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* ────────────────── Main Content ────────────────── */}
      <main
        className={`flex-1 bg-gray-100 text-gray-900 p-6 pt-20 md:pt-6 transition-all duration-300 overflow-y-auto ${
          isSidebarOpen ? "md:ml-2" : ""
        }`}
      >
        {/* Top bar (mobile) */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="hover:text-green-400"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

// Redirect /admin to /admin
export const AdminRoutes = () => <Navigate to="admin" replace />;

export default AdminDashboard;

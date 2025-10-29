// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// import Blog from "./pages/Blog";
// import BlogPost from "./components/BlogPost";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// import "./index.css";

// export default function App() {
//   return (
//     <Router>
//       <scrollTop />
//       <div className="font-sans text-gray-800">
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/blog/:id" element={<BlogPost />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

// 🌐 Public Pages
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import ContactUs from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import FAQs from "./pages/FAQs";

// 🧩 Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop.jsx";
import VisitorTracker from "./components/VisitorTracker.jsx";
import BlogPost from "./components/BlogPost.jsx";

// 🔐 Admin Pages
import AdminLogin from "./Admin/AdminLogin.jsx";
import ProtectedRoute from "./Admin/ProtectedRoute.jsx";
import AdminDashboard from "./Admin/AdminDashboard.jsx";
import ManageBlogs from "./Admin/ManageBlogs";
import AdminTestimonials from "./Admin/AdminTestimonials.jsx";
import AdminFAQs from "./Admin/AdminFAQs.jsx";
import UsersDetails from "./Admin/UserDetails.jsx";
import ManageGallery from "./Admin/ManageGallery.jsx";

// ─────────────────────────────────────────────
// Layout Wrapper
// ─────────────────────────────────────────────
function AppLayout() {
  const location = useLocation();

  // Hide navbar & footer on admin routes
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollTop />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: { background: "#D1FAE5", color: "#065F46" },
          },
          error: {
            style: { background: "#FEE2E2", color: "#991B1B" },
          },
        }}
      />
      <VisitorTracker />

      {!isAdminRoute && <Navbar />}
      <div className="min-h-screen">
        <AppRoutes />
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
}

// ─────────────────────────────────────────────
// Route Definitions
// ─────────────────────────────────────────────
function AppRoutes() {
  return (
    <Routes>
      {/* ─────────────── Public Routes ─────────────── */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/services" element={<Services />} />
      <Route path="/FAQs" element={<FAQs />} />
      
      {/* ─────────────── Admin Routes ─────────────── */}
      <Route path="/admin" element={<AdminLogin />} />

      <Route
        path="/admin/dashboard/*"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      >
        {/* ✅ Default redirect - Changed to visitors */}
        <Route index element={<Navigate to="visitors" replace />} />

        {/* ✅ All admin subpages */}
        <Route path="visitors" element={<UsersDetails />} />
        <Route path="blog" element={<ManageBlogs />} />
        <Route path="testimonials" element={<AdminTestimonials />} />
        <Route path="faqs" element={<AdminFAQs />} />
        <Route path="gallery" element={<ManageGallery />} />
      </Route>

      {/* 404 fallback - Moved to end */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

// ─────────────────────────────────────────────
// Root App
// ─────────────────────────────────────────────
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;

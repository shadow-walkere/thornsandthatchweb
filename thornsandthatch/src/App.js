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
import Gallery from "./pages/Gallery.jsx";
import ContactUs from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQs from "./pages/FAQs";
import Home from "./pages/Home";
import Services from "./pages/Services.jsx";
import ScrollTop from "./components/ScrollTop.jsx";
// import UsersDetails from "./Admin/UserDetails";
import AdminFAQs from "./Admin/AdminFAQs.jsx";
import ManageBlogs from "./Admin/ManageBlogs";
import AdminTestimonials from "./Admin/AdminTestimonials.jsx";
import ManageGallery from "./Admin/ManageGallery";
import AdminLogin from "./Admin/AdminLogin.jsx";
import ProtectedRoute from "./Admin/ProtectedRoute.jsx";
import AdminDashboard from "./Admin/AdminDashboard.jsx";
import VisitorTracker from "./components/VisitorTracker.jsx";

// 👇 create a wrapper component to manage layout
function AppLayout() {
  const location = useLocation();

  // Check if current route starts with /admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollTop />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: "#D1FAE5",
              color: "#065F46",
            },
          },
          error: {
            style: {
              background: "#FEE2E2",
              color: "#991B1B",
            },
          },
        }}
      />
      <VisitorTracker />

      {/* 👇 Only show Navbar & Footer if NOT on admin routes */}
      {!isAdminRoute && <Navbar />}
      <div className="min-h-screen">
        <AppRoutes />
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
}

// 👇 split routes into a separate component
function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/services" element={<Services />} />
      <Route path="/FAQs" element={<FAQs />} />
      {/* <Route path="/events/event-details" element={<EventDetails />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}

      {/* Admin routes */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard/*"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="visitors" replace />} />
        {/* <Route path="visitors" element={<UsersDetails />} /> */}

        <Route path="blog" element={<ManageBlogs />} />
        <Route path="testimonials" element={<AdminTestimonials />} />

        <Route path="faqs" element={<AdminFAQs />} />

        <Route path="gallery" element={<ManageGallery />} />
      </Route>
    </Routes>
  );
}

// 👇 Main App
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;

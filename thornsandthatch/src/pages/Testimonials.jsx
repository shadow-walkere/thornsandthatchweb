"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✨ Animation variant
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  });

  // 🌿 Fetch testimonials from backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
          }/api/testimonials?limit=3`
        );
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#e9f9ee] to-[#f9fff9] text-center relative">
      <motion.h3
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1b7f4a] mb-10 sm:mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp(0.1)}
        viewport={{ once: true }}
      >
        What Our Guests Say
      </motion.h3>

      {/* Loading Spinner */}
      {loading ? (
        <p className="text-[#2f6042] italic">Loading testimonials...</p>
      ) : testimonials.length === 0 ? (
        <p className="text-[#2f6042] italic">No testimonials yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto px-6 sm:px-10">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial._id || i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-[#c6f0d3] shadow-lg rounded-3xl p-8 sm:p-10 flex flex-col items-center hover:scale-[1.03] transition-transform duration-500"
            >
              <img
                src={testimonial.image || "/assets/default-avatar.jpg"}
                alt={testimonial.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-6 border-4 border-[#34c759]/40 shadow-md"
              />
              <p className="text-[#2f6042] italic text-sm sm:text-base leading-relaxed mb-4">
                “{testimonial.message}”
              </p>
              <h4 className="font-semibold text-[#1b7f4a] text-base sm:text-lg">
                — {testimonial.name}
              </h4>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

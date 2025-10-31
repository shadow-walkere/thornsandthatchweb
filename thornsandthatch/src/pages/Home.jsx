"use client";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import FAQs from "./FAQs";
import Testimonials from "./Testimonials"; // ✅ new import

export default function Home() {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  });

  return (
    <div className="overflow-hidden bg-white text-[#144d2d] font-serif">
      {/* 🌸 Hero Section */}
      <Hero />

      {/* 🌿 About Preview Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp(0.1)}
        viewport={{ once: true }}
        className="px-6 sm:px-8 py-16 md:py-24 text-center bg-gradient-to-b from-[#e9f9ee] to-white"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1b7f4a] mb-4 sm:mb-6 tracking-wide">
          Welcome to The Thorn & Thatch Gardens
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#2f6042] leading-relaxed mb-8 px-2">
          Hidden amidst nature’s gentle embrace,{" "}
          <span className="text-[#34c759] font-semibold">
            The Thorn & Thatch Gardens
          </span>{" "}
          is a place where every leaf whispers serenity. Whether it’s your
          wedding, a private celebration, or a quiet moment — we transform
          nature’s beauty into your perfect memory.
        </p>
        <motion.a
          href="/about"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block rounded-full bg-[#1b7f4a] hover:bg-[#34c759] text-white px-8 sm:px-10 py-3 sm:py-4 font-medium tracking-wide shadow-md transition-all text-sm sm:text-base"
        >
          Learn More About Us
        </motion.a>
      </motion.section>

      {/* ✨ Why Choose Us Section */}
      <section className="px-6 sm:px-8 py-16 md:py-24 bg-[#f9fff9] text-center relative overflow-hidden">
        <motion.h3
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1b7f4a] mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto relative z-10">
          {[
            {
              title: " Natural Beauty",
              desc: "Breathtaking gardens, tranquil water features, and timeless architecture create an unforgettable atmosphere.",
            },
            {
              title: " Crafted Experiences",
              desc: "We tailor each event with creativity, care, and charm — ensuring every celebration is uniquely yours.",
            },
            {
              title: " Top-Notch Service Delivery",
              desc: "Our team of dedicated professionals are committed to delivering excellent services in event design, hospitality, and sustainability.",
            },
            {
              title: " Customer-Centric",
              desc: "Our objective is to deliver personalized customer satisfaction and experience that exceeds your expectations",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl border border-[#c6f0d3] hover:scale-[1.03] transition-transform duration-500"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-[#34c759] mb-3">
                {item.title}
              </h4>
              <p className="text-sm sm:text-base text-[#2f6042] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Floating decorative circles */}
        <motion.div
          className="absolute top-0 left-5 w-32 sm:w-48 h-32 sm:h-48 bg-[#9ae6b4] rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-5 w-40 sm:w-64 h-40 sm:h-64 bg-[#68d391] rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -25, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </section>

      {/* 🌸 Gallery Preview */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-white text-center">
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold text-[#1b7f4a] mb-10 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp(0.1)}
          viewport={{ once: true }}
        >
          Explore Our Gardens
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {[
            "/assets/nature.jpg",
            "/assets/meeting1.jpg",
            "/assets/accomodation.jpg",
            "/assets/photoshoot1.jpg",
            "/assets/house2.jpg",
            "/assets/nature2.jpg",
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-[#c6f0d3]"
            >
              <img
                src={src}
                alt="Garden Event Space"
                className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] object-cover hover:scale-110 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌼 Testimonials (separate component now) */}
      <Testimonials />

      {/* ❓ FAQs Section */}
      <div>
        <FAQs />
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  Sparkles,
  Camera,
  Heart,
  Users,
  Coffee,
  Home,
  TreePine,
  PartyPopper,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = {
    All: [
      // "/assets/wedding4.jpeg",
      // "/assets/wedding5.jpeg",
      // "/assets/wedding6.jpeg",
      // "/assets/wedding7.jpeg",
      // "/assets/wedding10.jpg",
    ],
    Weddings: [
      "/assets/wedding4.jpeg",
      "/assets/wedding5.jpeg",
      "/assets/wedding6.jpeg",
      "/assets/wedding7.jpeg",
      "/assets/wedding10.jpg",
    ],
    "Food & Drinks": [
      "/assets/food1.jpg",
      "/assets/food2.jpg",
      "/assets/food4.jpg",
    ],
    Accommodation: [
      "/assets/accomodation.jpg",
      "/assets/accomodation2.jpg",
      "/assets/accommodation5.jpeg",
    ],
    "Team Building": [
      "/assets/team2.jpg",
      "/assets/event9.jpeg",
      "/assets/events7.jpeg",
    ],
    Picnics: [
      "/assets/picnic3.jpeg",
      "/assets/picnic4.jpeg",
      "/assets/picnic6.jpeg",
      "/assets/picnic10.jpeg",
      "/assets/picnic11.jpg",
    ],
    "Adventure playground": [
      "/assets/childpark1.jpg",
      "/assets/childpark4.jpg",
      "/assets/childpark3.jpg",
      "/assets/childpark7.jpeg",
      "/assets/childpark8.jpeg",
    ],
  };

  const filteredImages =
    filter === "All"
      ? Object.entries(categories).flatMap(([cat, imgs]) =>
          imgs.map((src) => ({ src, category: cat }))
        )
      : categories[filter].map((src) => ({ src, category: filter }));

  const nextImage = () =>
    setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
  const prevImage = () =>
    setSelectedIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );

  // ✅ Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div className="bg-gradient-to-b from-green-50 to-white overflow-x-hidden">
      {/* 🌿 Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/nature1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 drop-shadow-lg">
            The Heart of The Thorn & Thatch
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Wander through nature, laughter, and memories—captured in every
            frame.
          </p>
        </motion.div>
      </section>

      {/* 🍃 Intro Section */}
      <section className="max-w-5xl mx-auto text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          A Place Where Every Corner Tells a Story
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At{" "}
          <span className="text-green-700 font-semibold">
            The Thorn & Thatch
          </span>
          , we celebrate moments that blossom into cherished memories. From
          romantic weddings under the trees to cozy picnics beside our gardens,
          every photo carries the serenity of nature.
        </p>
      </section>

      {/* 🌸 Highlights */}
      <section className="py-10 px-6 bg-green-100/40">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: Heart,
              title: "Weddings",
              desc: "Whispers of love beneath the blooms.",
            },
            {
              icon: Coffee,
              title: "Food & Drinks",
              desc: "Savor freshness with every bite.",
            },
            {
              icon: Home,
              title: "Accommodation",
              desc: "Comfort in every sunrise view.",
            },
            {
              icon: Users,
              title: "Team Building",
              desc: "Grow together, naturally.",
            },
            {
              icon: TreePine,
              title: "Picnics",
              desc: "Simple joys under open skies.",
            },
            {
              icon: PartyPopper,
              title: "Events",
              desc: "Celebrate with nature’s touch.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-3xl p-6 flex flex-col items-center transition-all"
            >
              <item.icon className="w-10 h-10 text-green-700 mb-3" />
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌿 Filter Menu */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-8">
          Explore by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {Object.keys(categories).map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all flex items-center gap-2 shadow-sm ${
                filter === cat
                  ? "bg-green-700 text-white border-green-700"
                  : "bg-white text-green-700 border-green-500 hover:bg-green-50"
              }`}
            >
              <Sparkles className="w-4 h-4" /> {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* 🖼️ Gallery Grid */}
      <LayoutGroup>
        <motion.section
          layout
          className="px-6 pb-20 max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map(({ src, category }, index) => (
              <motion.div
                key={`${category}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedIndex(index)}
                className="relative overflow-hidden rounded-3xl shadow-lg cursor-pointer group"
              >
                <img
                  src={src}
                  alt={`${category} ${index + 1}`}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-green-800/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <Camera className="text-white w-10 h-10" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.section>
      </LayoutGroup>

      {/* 🌾 Quote Section */}
      <section className="bg-green-800 text-white py-16 text-center px-6">
        <blockquote className="text-xl md:text-2xl italic font-light max-w-3xl mx-auto">
          “In every leaf, there’s a whisper of peace. In every moment, a memory
          waiting to bloom.”
        </blockquote>
        <p className="mt-4 text-green-200">— The Thorn & Thatch Gardens</p>
      </section>

      {/* 💫 Swipeable Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10"
            >
              <X size={36} />
            </button>

            {/* Swipeable Image */}
            <motion.div
              key={filteredImages[selectedIndex].src}
              className="max-w-[90%] max-h-[80vh]"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, info) => {
                if (info.offset.x > 100) prevImage();
                else if (info.offset.x < -100) nextImage();
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={filteredImages[selectedIndex].src}
                alt="Selected"
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>

            {/* Controls */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white p-3 rounded-full hover:bg-white/10"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 text-white p-3 rounded-full hover:bg-white/10"
            >
              <ChevronRight size={40} />
            </button>

            <p className="absolute bottom-10 text-white text-sm bg-black/40 px-4 py-2 rounded-full">
              {filteredImages[selectedIndex].category} — {selectedIndex + 1} /{" "}
              {filteredImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

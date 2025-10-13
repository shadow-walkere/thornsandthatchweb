"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // ✅ Local gallery images
  const categories = {
    All: [
      "/assets/accomodation2.jpg",
      "/assets/babyshower.jpg",
      "/assets/wine.jpg",
      "/assets/childpark1.jpg",
      "/assets/chirdpark2.jpg",
      "/assets/event2.jpg",
    ],
    Weddings: [
      "/assets/wedding1.jpg",
      "/assets/wedding2.jpg",
      "/assets/wedding3.jpg",
    ],
    "Food & Drinks": [
      "/assets/food1.jpg",
      "/assets/food2.jpg",
      "/assets/food3.jpg",
    ],
    Accommodation: [
      "/assets/accomodation.jpg",
      "/assets/accomodation2.jpg",
      "/assets/photoshoot3.jpg",
    ],
    "Team Building": ["/assets/meeting1.jpg", "/assets/house2.jpg"],
    Picnics: [
      "/assets/picnics1.jpg",
      "/assets/picnics2.jpg",
      "/assets/picnics3.jpg",
    ],
    Events: [
      "/assets/eventplace1.jpg",
      "/assets/event2.jpg",
      "/assets/seats1.jpg",
    ],
  };

  const filteredImages =
    filter === "All"
      ? Object.values(categories).flat()
      : categories[filter] || [];

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
    <div className="bg-gradient-to-b from-amber-50 to-white overflow-x-hidden">
      {/* 🌅 Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/gallery-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            The Heart of The Thorn & Thatch
          </h1>
          <p className="text-lg text-amber-200 max-w-2xl mx-auto">
            Wander through beauty, laughter, and memories—captured in every
            frame.
          </p>
        </motion.div>
      </section>

      {/* 🌿 Intro Section */}
      <section className="max-w-5xl mx-auto text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-amber-800 mb-4">
          A Place Where Every Corner Tells a Story
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At{" "}
          <span className="text-amber-700 font-semibold">
            The Thorn & Thatch
          </span>
          , we celebrate moments that blossom into cherished memories. From
          romantic weddings under twinkling lights to cozy picnics beneath our
          ancient trees, our gardens capture joy in its purest form.
        </p>
      </section>

      {/* 🌸 Highlights Section */}
      <section className="py-10 px-6 bg-amber-100/40">
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
              desc: "Delight in every sip and bite.",
            },
            {
              icon: Home,
              title: "Accommodation",
              desc: "Rest where comfort meets charm.",
            },
            {
              icon: Users,
              title: "Team Building",
              desc: "Grow stronger together in nature.",
            },
            {
              icon: TreePine,
              title: "Picnics",
              desc: "Simple joys beneath open skies.",
            },
            {
              icon: PartyPopper,
              title: "Events",
              desc: "Celebrate life with color and light.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-3xl p-6 flex flex-col items-center"
            >
              <item.icon className="w-10 h-10 text-amber-700 mb-3" />
              <h3 className="text-lg font-semibold text-amber-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌻 Filter Menu */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-amber-800 mb-8">
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
                  ? "bg-amber-700 text-white border-amber-700"
                  : "bg-white text-amber-700 border-amber-500 hover:bg-amber-50"
              }`}
            >
              <Sparkles className="w-4 h-4" /> {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* 🖼️ Gallery Grid */}
      <motion.section
        layout
        className="px-6 pb-20 max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3"
      >
        <AnimatePresence>
          {filteredImages.map((src, index) => (
            <motion.div
              key={src}
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
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                <Camera className="text-white w-10 h-10" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      {/* 💡 Quote Section */}
      <section className="bg-amber-800 text-white py-16 text-center px-6">
        <blockquote className="text-xl md:text-2xl italic font-light max-w-3xl mx-auto">
          “In every flower, there’s a story waiting to be told. In every path, a
          memory waiting to be made.”
        </blockquote>
        <p className="mt-4 text-amber-200">— The Thorn & Thatch Garden</p>
      </section>

      {/* 💫 Lightbox */}
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

            <button
              onClick={prevImage}
              className="absolute left-6 text-white p-3 rounded-full hover:bg-white/10"
            >
              <ChevronLeft size={40} />
            </button>

            <motion.img
              key={filteredImages[selectedIndex]}
              src={filteredImages[selectedIndex]}
              alt="Selected"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-[90%] max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />

            <button
              onClick={nextImage}
              className="absolute right-6 text-white p-3 rounded-full hover:bg-white/10"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

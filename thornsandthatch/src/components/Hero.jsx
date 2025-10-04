import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const images = [
  "https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/118567488_180181933624006_4612463066209119452_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3w5b1zyId-wQ7kNvwHFEA7I&_nc_oc=AdmVFNdxzQUHQ_r_rNgmn0xozgDqz9ACPcruPbsSBg37dXRYTXRWeXcwo-5gzrOyqfA&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=Jy2h6omEGitjr3G0yyTh4A&oh=00_AfdKK8l4dd-CdBYU3CF_u8kcX1JMBmoTsdIy6riiU3yGYw&oe=690725B4",
  "https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-6/387785841_821757003293355_4539190100927213451_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1JGEF4DL_zUQ7kNvwHn0_L6&_nc_oc=AdkLBAtEMaffq91bxXCZfOrc9YqrOG6JVerZU-kdMY1iWB9d6E8Lfp6KV3CZs8kg7NQ&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=zHe5yI9GHvmzKpu-PrKjYg&oh=00_AfcDv4CzK7GgFCQvbfr4X6-Usq4VppJxSexDfRE7VmLvZQ&oe=68E55F1E",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Swipe detection for mobile
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  return (
    <section
      className="relative h-[40vh] md:h-[70vh] overflow-hidden flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="Thorns & Thatch Gardens"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Text */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.h1
          className="text-2xl md:text-5xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Thorns & Thatch Gardens
        </motion.h1>
        <motion.p
          className="text-sm md:text-lg max-w-2xl mx-auto mb-6 drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Where nature, elegance, and memories meet.
        </motion.p>
        <motion.a
          href="/services"
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-3 rounded-full transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover More
        </motion.a>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-10"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-10"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-amber-500 scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* 🟢 Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/+254743072126?text=Hi%20there!%20I'd%20love%20to%20know%20more%20about%20Thorns%20%26%20Thatch%20Gardens."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={30} />
      </motion.a>
    </section>
  );
}

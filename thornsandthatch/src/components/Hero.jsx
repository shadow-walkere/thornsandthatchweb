"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[95vh] md:h-screen flex items-center justify-center text-center overflow-hidden font-serif">
      {/* 🌅 Background Image with soft parallax and overlay */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="/assets/house2.jpg"
          alt="The Thorn & Thatch Gardens"
          className="w-full h-full object-cover object-center brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </motion.div>

      {/* 🌤️ Ambient Glow Overlay */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_70%)]"
      />

      {/* 🌾 Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 px-6 sm:px-10 max-w-4xl mx-auto text-white"
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-6 drop-shadow-[0_6px_8px_rgba(0,0,0,0.4)]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 animate-gradient-x">
            The Thorn & Thatch Gardens
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl sm:text-lg md:text-xl text-gray-100 leading-relaxed mb-10 italic "
        >
          Naturally Refreshing
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.08,
              backgroundColor: "#fef3c7",
              color: "#7b6650",
            }}
            whileTap={{ scale: 0.96 }}
            className="bg-white text-[#7b6650] font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all text-base sm:text-lg"
          >
            Plan Your Visit
          </motion.a>

          <motion.a
            href="/gallery"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="border border-white/80 text-white font-medium px-10 py-4 rounded-full hover:bg-white/10 transition-all text-base sm:text-lg"
          >
            View Gallery
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ✨ Floating Light Orbs */}
      <motion.div
        className="absolute top-[20%] left-[15%] w-28 h-28 bg-amber-200/30 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[10%] w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌸 Animated Petal Particles (Subtle) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-pink-200/50 rounded-full blur-sm"
          animate={{
            x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
            y: [0, 200],
            opacity: [1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 1.5,
          }}
          style={{
            top: `${Math.random() * 60 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
        />
      ))}

      {/* ⬇️ Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
      >
        <p className="text-xs sm:text-sm text-gray-200 mb-1 tracking-widest uppercase">
          Scroll Down
        </p>
        <ChevronDown className="animate-bounce text-amber-300" size={30} />
      </motion.div>
    </section>
  );
}

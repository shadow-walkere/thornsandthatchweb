import Hero from "../components/Hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <motion.section
        className="px-8 py-16 bg-white text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-light text-amber-800 mb-4">
          Welcome to Thorns & Thatch Gardens
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-8">
          Nestled in nature’s beauty, Thorns & Thatch Gardens offers the perfect
          backdrop for weddings, events, and cherished memories. With serene
          lakeside views, lush gardens, and award-winning spaces, we bring your
          dreams to life.
        </p>
        <motion.a
          href="/services"
          className="inline-block rounded-full bg-amber-700 hover:bg-amber-800 text-white px-6 py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Services
        </motion.a>
      </motion.section>

      {/* Highlight Section */}
      <section className="px-8 py-16 bg-amber-50 text-center">
        <motion.h3
          className="text-2xl font-semibold text-amber-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "🌿 Natural Beauty",
              desc: "Breathtaking scenery and lush greenery, perfect for outdoor celebrations.",
            },
            {
              title: "✨ Memorable Events",
              desc: "From intimate gatherings to grand weddings, we make every moment magical.",
            },
            {
              title: "🏆 Award Winning",
              desc: "Recognized locally and internationally for outstanding event spaces.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 shadow rounded-2xl bg-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

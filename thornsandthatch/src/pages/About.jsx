import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/118567488_180181933624006_4612463066209119452_n.jpg?...')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            About <span className="text-amber-400">& Us</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Our story, our passion, our gardens — where nature meets celebration
          </p>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="px-8 py-20 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-light text-amber-800 mb-6"
        >
          Who We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg"
        >
          At{" "}
          <span className="font-semibold text-amber-700">
            Thorns & Thatch Gardens
          </span>
          , we believe every celebration deserves a magical stage. Nestled in
          lush greenery and kissed by gentle breezes, our gardens are more than
          a venue — they are a **living canvas** for your most cherished
          memories. From dreamy weddings and elegant corporate retreats to
          intimate family gatherings, our spaces inspire joy, laughter, and
          timeless moments.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="px-8 py-20 bg-amber-50">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-amber-800 mb-4">
              🌿 Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To craft unforgettable experiences by blending the elegance of
              nature with thoughtful design. Every event at our gardens is more
              than just a gathering — it’s a story written among flowers,
              sunlight, and serenity.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-amber-800 mb-4">
              ✨ Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the region’s most beloved outdoor destination — where people
              from near and far come not just to host events, but to feel
              inspired, connected, and at peace in the embrace of nature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-20 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-light text-amber-800 mb-6"
        >
          Ready to make your story unforgettable at Thorns & Thatch Gardens?
        </motion.h3>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          href="/contact"
          className="inline-block rounded-full bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg font-medium shadow-md transition"
        >
          Get in Touch
        </motion.a>
      </section>
    </div>
  );
}

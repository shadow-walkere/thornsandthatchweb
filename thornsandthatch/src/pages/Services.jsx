"use client";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "🥗 Food & Drinks",
      description:
        "Savor garden-fresh meals and refreshing beverages — each crafted to celebrate nature’s flavors and elevate your moments.",
      image: "/assets/food1.jpg",
    },
    {
      title: "🎉 Corporate & Social Events",
      description:
        "Host unforgettable conferences, weddings, birthdays, and retreats in our elegant green spaces designed for comfort and style.",
      image: "/assets/events7.jpeg",
    },
    {
      title: "🎠 Kids Park",
      description:
        "A safe, joyful playground surrounded by trees — where laughter fills the air and childhood memories blossom.",
      image: "/assets/childpark8.jpeg",
    },
    {
      title: "📸 Photoshoots & Filming",
      description:
        "Capture your most beautiful moments in serene natural light, among scenic backdrops and tranquil gardens.",
      image: "assets/photoshoot3.jpg",
    },
    {
      title: "🌳 Picnics & Parties",
      description:
        "Celebrate life outdoors — enjoy our picnic lawns, shaded gazebos, and open-air spaces for unforgettable gatherings.",
      image: "/assets/picnic3.jpeg",
    },
    {
      title: "🌅 Serene Atmosphere",
      description:
        "Relax and reconnect with nature in our tranquil gardens — a sanctuary of peace, beauty, and fresh air.",
      image: "/assets/nature.jpg",
    },
  ];

  const accommodations = [
    {
      name: "🌿 Garden Cottage",
      desc: "Cozy private cottages surrounded by greenery — perfect for couples and solo retreats.",
      img: "/assets/accomodation.jpg",
    },
    {
      name: "🏡 Luxury Suite",
      desc: "Spacious suites with modern interiors and lush garden views for ultimate comfort.",
      img: "/assets/accomodation2.jpg",
    },
    {
      name: "🌸 Garden View Room",
      desc: "Wake up to beautiful garden vistas and the calming sounds of nature.",
      img: "/assets/accommodation5.jpeg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#e9f9ee] to-white text-[#1b3a28]">
      {/* 🌿 Hero Banner */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/nature.jpg')",
        }}
      >
        <div className="relative z-10 text-center text-white px-6 drop-shadow-lg">
          <motion.h1
            className="text-5xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-2xl text-bold text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Everything you need for a memorable garden experience
          </motion.p>
        </div>
      </section>

      {/* 🌸 Services Grid */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl border border-[#d1fae5]/60 transition transform hover:-translate-y-1 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1b7f4a] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#2f6042] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🏡 Accommodation Section */}
      <motion.section
        className="relative py-24 bg-gradient-to-r from-[#1b7f4a] to-[#34c759]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-[#000000]/20"></div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl text-bold mb-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Accommodation
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-12 leading-relaxed text-[#e9f9ee]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Stay in comfort and style — unwind in our cozy cottages, garden
            suites, and scenic rooms nestled in nature’s calm.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodations.map((room, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl text-[#1b3a28] transition transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-[#1b7f4a] mb-2">
                    {room.name}
                  </h4>
                  <p className="text-sm text-[#2f6042] leading-relaxed">
                    {room.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="/contact"
            className="inline-block mt-12 bg-white hover:bg-[#e9f9ee] text-[#1b7f4a] font-medium px-8 py-3 rounded-full shadow-md transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Stay
          </motion.a>
        </div>
      </motion.section>

      {/* 🌿 CTA Section */}
      <section className="text-center py-16 bg-gradient-to-b from-white to-[#e9f9ee]">
        <h3 className="text-2xl font-light text-[#1b7f4a] mb-6">
          Ready to experience{" "}
          <span className="text-[#34c759]">The Thorn & Thatch Gardens?</span>
        </h3>
        <a
          href="/contact"
          className="inline-block rounded-full bg-[#1b7f4a] hover:bg-[#34c759] text-white px-8 py-3 transition-all font-medium shadow-md"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
}

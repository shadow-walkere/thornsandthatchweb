import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "🍽️ Food & Drinks",
      description:
        "Delight in our freshly prepared meals and beverages — perfect for all occasions. From gourmet dishes to refreshing drinks, every bite celebrates nature’s goodness.",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "🎉 Corporate & Social Events",
      description:
        "Host memorable conferences, weddings, birthdays, and retreats in our serene and well-equipped spaces designed for elegance and comfort.",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "🎠 Kids Park",
      description:
        "A fun, safe, and exciting play area for children — filled with laughter, adventure, and family joy amidst nature.",
      image:
        "https://images.unsplash.com/photo-1614962922436-f9e9eae8bb0c?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "📸 Photoshoots & Filming",
      description:
        "Capture beautiful memories or film stunning scenes in our picture-perfect landscapes and tranquil gardens.",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "🌳 Picnic & Parties",
      description:
        "Enjoy the outdoors with your loved ones! Our picnic lawns and private gazebos are perfect for laid-back gatherings and celebrations.",
      image:
        "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "🌅 Serene Chilling Atmosphere",
      description:
        "Unwind, breathe, and soak in the tranquil environment — where nature’s calm meets luxurious relaxation.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const accommodations = [
    {
      name: "🌿 Garden Cottage",
      desc: "Cozy, private cottages surrounded by greenery — perfect for couples and solo retreats.",
      img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "🏡 Luxury Suite",
      desc: "Spacious suites featuring premium interiors, garden views, and modern comfort.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "🌸 Garden View Room",
      desc: "Wake up to breathtaking garden views and the sounds of nature all around you.",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Services</h1>
          <p className="text-lg">
            Everything you need for a memorable experience
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED Accommodation Section */}
      <motion.section
        className="relative py-24 mt-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            🏡 Accommodation
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Stay in comfort and style — unwind in our cozy garden-view cottages,
            luxurious lodges, and peaceful suites surrounded by nature. Perfect
            for weekend escapes, romantic getaways, and event guests seeking
            serenity.
          </motion.p>

          {/* Room Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodations.map((room, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl text-gray-800 transition transform hover:-translate-y-1"
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
                  <h4 className="text-lg font-semibold text-amber-700 mb-2">
                    {room.name}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {room.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="/contact"
            className="inline-block mt-10 bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-full transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Stay
          </motion.a>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-amber-50">
        <h3 className="text-2xl font-light text-amber-800 mb-6">
          Ready to experience Thorns & Thatch Gardens?
        </h3>
        <a
          href="/contact"
          className="inline-block rounded-full bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 transition"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
}

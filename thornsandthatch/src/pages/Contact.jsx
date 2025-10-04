import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_ay31rg9",
        "template_bo4u20x",
        formRef.current,
        "public_XxUfQ-js5IPCQina"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          setStatus("❌ Failed to send. Please try again later.");
        }
      );
  };

  return (
    <div className="relative bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Banner */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Contact Thorns & Thatch Gardens
          </h1>
          <p className="text-lg opacity-90">
            We’d love to bring your ideas to life — get in touch today.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100">
            <h2 className="text-2xl font-light text-amber-800 mb-6">
              Send Us a Message
            </h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 placeholder-transparent"
                  placeholder="Your Name"
                />
                <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-700 bg-white px-1">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 placeholder-transparent"
                  placeholder="Your Email"
                />
                <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-700 bg-white px-1">
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  rows="5"
                  name="message"
                  required
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 placeholder-transparent"
                  placeholder="Your Message"
                ></textarea>
                <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-amber-700 bg-white px-1">
                  Your Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px #92400e" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full rounded-full bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-3 transition"
              >
                Send Message
              </motion.button>
            </form>
            {status && (
              <p className="mt-4 text-sm text-center text-gray-700">{status}</p>
            )}
          </div>

          {/* Contact Info + Map */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-light text-amber-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Whether it’s a wedding, picnic, or corporate event, our
                dedicated team in Nambale, Busia will help you create
                unforgettable memories in a serene natural paradise.
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-700" />
                  <span>
                    Thorns & Thatch Gardens, Nambale, Busia County, Kenya
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-700" />
                  <span>+254 712 345 678</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-700" />
                  <span>janexwandera0@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="mt-10 w-full h-64 md:h-80 relative rounded-2xl overflow-hidden shadow-md border border-amber-100 group">
              <iframe
                title="Thorns and Thatch Gardens Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63515.69666115301!2d34.2135!3d0.4592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177f94ac69f1b1d3%3A0x1bba06a244dd0c53!2sNambale%2C%20Busia%20County%2C%20Kenya!5e0!3m2!1sen!2ske!4v1728016451123!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="https://maps.app.goo.gl/SZUMo6UF8qPKFkpE6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
                >
                  📍 Open in Google Maps
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 🟢 Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/254743072126?text=Hello%20Thorns%20%26%20Thatch%20Gardens!%20I%20would%20like%20to%20make%20an%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full shadow-lg p-4 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        animate={{
          boxShadow: ["0 0 0px #22c55e", "0 0 15px #22c55e", "0 0 0px #22c55e"],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  );
}

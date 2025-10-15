import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { MapPin, Phone, Mail, Clock, Leaf } from "lucide-react";

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
    <div className="relative bg-gradient-to-b from-white via-[#ebf5ec] to-[#d8f3dc]">
      {/* 🌿 Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/0a/03/b8/0a03b8191cebaae511e51064fbad6d8e.jpg"
          alt="The Thorn and Thatch Gardens"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1b4332]/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg mb-4">
            Get in Touch with Nature
          </h1>
          <p className="text-lg text-[#d8f3dc] max-w-2xl mx-auto">
            We’d love to hear from you — let’s create your next beautiful
            experience at{" "}
            <span className="font-semibold text-white">
              The Thorn & Thatch Gardens
            </span>
            .
          </p>
        </motion.div>
      </section>

      {/* 🕰️ Info Bar */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-[#2d6a4f] text-white flex flex-wrap justify-center items-center gap-8 py-6 px-4 text-center"
      >
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5" />
          <span>Nambale, Busia County, Kenya</span>
        </div>
        <a
          href="tel:+254722984568"
          className="flex items-center gap-3 hover:underline"
        >
          <Phone className="w-5 h-5" />
          <span>+254 722 984 568</span>
        </a>
        <a
          href="mailto:info@thornandthatch.co.ke"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:underline"
        >
          <Mail className="w-5 h-5" />
          <span>info@thornandthatch.co.ke</span>
        </a>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5" />
          <span>Open daily: 24/7</span>
        </div>
      </motion.section>

      {/* 🌸 Main Contact Section */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* ✉️ Contact Form */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-[#d8f3dc]"
          >
            <h2 className="text-2xl font-semibold text-[#2d6a4f] mb-6 flex items-center gap-2">
              <Leaf className="w-6 h-6 text-[#2d6a4f]" />
              Send Us a Message
            </h2>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {["name", "email"].map((field, i) => (
                <div className="relative" key={i}>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    required
                    className="peer w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] placeholder-transparent"
                    placeholder={`Your ${field === "name" ? "Name" : "Email"}`}
                  />
                  <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#2d6a4f] bg-white/70 px-1">
                    {field === "name" ? "Your Name" : "Your Email"}
                  </label>
                </div>
              ))}

              <div className="relative">
                <textarea
                  rows="5"
                  name="message"
                  required
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] placeholder-transparent"
                  placeholder="Your Message"
                ></textarea>
                <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#2d6a4f] bg-white/70 px-1">
                  Your Message
                </label>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px #1b4332",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full rounded-full bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-medium px-6 py-3 transition"
              >
                Send Message
              </motion.button>
            </form>

            {status && (
              <p className="mt-4 text-sm text-center text-gray-700">{status}</p>
            )}
          </motion.div>

          {/* 🗺️ Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold text-[#2d6a4f] mb-6">
                Visit or Call Us
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Whether you’re planning a garden wedding, a weekend retreat, or
                an intimate family picnic,{" "}
                <span className="font-medium text-[#2d6a4f]">
                  The Thorn & Thatch Gardens
                </span>{" "}
                offers a sanctuary of peace and beauty. Reach out to our team
                today — we’ll be delighted to assist with bookings, events, or
                special arrangements.
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#2d6a4f]" />
                  <span>Nambale, Busia County, Kenya</span>
                </li>
                <li className="flex items-center gap-3">
                  <a
                    href="tel:+254722984568"
                    className="flex items-center gap-3 hover:underline"
                  >
                    <Phone className="w-5 h-5 text-[#2d6a4f]" />
                    <span>+254 722 984 568</span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <a
                    href="mailto:info@thornandthatch.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:underline"
                  >
                    <Mail className="w-5 h-5 text-[#2d6a4f]" />
                    <span>info@thornandthatch.co.ke</span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#2d6a4f]" />
                  <span>Open daily: 7:00am – 11:00pm</span>
                </li>
              </ul>
            </div>

            {/* Map Embed */}
            <div className="mt-10 w-full h-64 md:h-80 relative rounded-2xl overflow-hidden shadow-lg border border-[#d8f3dc] group">
              <iframe
                title="The Thorn and Thatch Gardens Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63515.69666115301!2d34.2135!3d0.4592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177f94ac69f1b1d3%3A0x1bba06a244dd0c53!2sNambale%2C%20Busia%20County%2C%20Kenya!5e0!3m2!1sen!2ske!4v1728016451123!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <motion.div
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
              >
                <a
                  href="https://maps.app.goo.gl/SZUMo6UF8qPKFkpE6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
                >
                  📍 Open in Google Maps
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 💬 Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/254722984568?text=Hello%20Thorn%20%26%20Thatch%20Gardens!%20I%20would%20like%20to%20make%20an%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
      >
        <div className="relative">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#52b788] opacity-75 animate-ping"></span>
          <div className="relative bg-[#2d6a4f] rounded-full p-4 shadow-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-8 h-8"
            />
          </div>
        </div>
      </motion.a>
    </div>
  );
}

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "your_service_id", // 🔹 from EmailJS
        "your_template_id", // 🔹 from EmailJS
        formRef.current,
        "your_user_id" // 🔹 public key from EmailJS
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          setStatus("❌ Failed to send. Try again later.");
        }
      );
  };

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/garden-view.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg">We’d love to hear from you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-light text-amber-800 mb-6">
              Send us a message
            </h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
              ></textarea>
              <button
                type="submit"
                className="w-full rounded-full bg-amber-700 hover:bg-amber-800 text-white px-6 py-3"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-light text-amber-800 mb-6">
              Get in touch
            </h2>
            <p className="text-gray-600 mb-4">
              Whether you’re planning a wedding, a photoshoot, or a special
              event — our team is ready to help.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>📍 Address:</strong> 123 Thorns & Thatch Lane, Nature
                Valley
              </li>
              <li>
                <strong>📞 Phone:</strong> +1 (555) 123-4567
              </li>
              <li>
                <strong>✉️ Email:</strong> info@thornsandthatch.com
              </li>
            </ul>

            {/* Map Embed */}
            <div className="mt-8 w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://maps.app.goo.gl/KtiwNtoHMnDqS6oM7"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thorns and Thatch Gardens Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

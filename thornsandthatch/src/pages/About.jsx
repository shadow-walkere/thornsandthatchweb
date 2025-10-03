export default function About() {
  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/garden-view.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Us</h1>
          <p className="text-lg">Our story, our passion, our gardens</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-light text-amber-800 mb-6">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Thorns & Thatch Gardens is more than a venue — it’s a sanctuary of
          beauty and tranquility. Nestled in nature, our gardens have been a
          haven for couples, families, and organizations seeking unforgettable
          moments. With lush landscapes, serene lakes, and charming rustic
          architecture, we provide the perfect setting for life’s most cherished
          events.
        </p>
      </section>

      <section className="px-8 py-16 bg-amber-50">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">
              🌿 Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To craft meaningful experiences by blending natural beauty with
              elegant spaces, ensuring every guest leaves with lasting memories.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">
              ✨ Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most loved outdoor destination for events, celebrations,
              and escapes — recognized locally and internationally for
              excellence in hospitality.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 text-center">
        <h3 className="text-2xl font-light text-amber-800 mb-6">
          Ready to experience Thorns & Thatch Gardens?
        </h3>
        <a
          href="/contact"
          className="inline-block rounded-full bg-amber-700 hover:bg-amber-800 text-white px-6 py-3"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}

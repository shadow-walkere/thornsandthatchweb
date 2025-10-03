import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="px-8 py-16 bg-white text-center">
        <h2 className="text-3xl font-light text-amber-800 mb-4">
          Welcome to Thorns & Thatch Gardens
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-8">
          Nestled in nature’s beauty, Thorns & Thatch Gardens offers the perfect
          backdrop for weddings, events, and cherished memories. With serene
          lakeside views, lush gardens, and award-winning spaces, we bring your
          dreams to life.
        </p>
        <a
          href="/services"
          className="inline-block rounded-full bg-amber-700 hover:bg-amber-800 text-white px-6 py-3"
        >
          Explore Our Services
        </a>
      </section>

      {/* Highlight Section */}
      <section className="px-8 py-16 bg-amber-50 text-center">
        <h3 className="text-2xl font-semibold text-amber-800 mb-6">
          Why Choose Us?
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 shadow rounded-2xl bg-white">
            <h4 className="font-bold mb-2">🌿 Natural Beauty</h4>
            <p className="text-sm text-gray-600">
              Breathtaking scenery and lush greenery, perfect for outdoor
              celebrations.
            </p>
          </div>
          <div className="p-6 shadow rounded-2xl bg-white">
            <h4 className="font-bold mb-2">✨ Memorable Events</h4>
            <p className="text-sm text-gray-600">
              From intimate gatherings to grand weddings, we make every moment
              magical.
            </p>
          </div>
          <div className="p-6 shadow rounded-2xl bg-white">
            <h4 className="font-bold mb-2">🏆 Award Winning</h4>
            <p className="text-sm text-gray-600">
              Recognized locally and internationally for outstanding event
              spaces.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/garden-view.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Thorns & Thatch Gardens
        </h1>
        <p className="text-lg md:text-xl mb-6">Where nature meets elegance</p>
        <a
          href="/contact"
          className="inline-block rounded-full bg-amber-700 hover:bg-amber-800 text-white px-6 py-3"
        >
          Book Your Event
        </a>
      </div>
    </section>
  );
}

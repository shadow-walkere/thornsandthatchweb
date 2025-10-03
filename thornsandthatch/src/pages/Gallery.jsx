// src/pages/Gallery.jsx
export default function Gallery() {
  // Example images (replace with your actual images in /public/gallery/)
  const images = [
    "/gallery/g1.jpg",
    "/gallery/g2.jpg",
    "/gallery/g3.jpg",
    "/gallery/g4.jpg",
    "/gallery/g5.jpg",
    "/gallery/g6.jpg",
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/garden-view.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Gallery</h1>
          <p className="text-lg">Discover the charm of our gardens</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-amber-800 mb-10 text-center">
          Explore Our Spaces
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

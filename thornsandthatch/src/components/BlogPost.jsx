import { useParams, Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Enchanted Garden Weddings",
    content: `
      Step into a world of romance surrounded by flowers and candlelight. 
      Our gardens transform into breathtaking wedding venues that blend natural elegance with timeless charm. 
      From floral arches to evening lanterns, we ensure every moment feels magical.
    `,
    date: "September 25, 2025",
    image: "/assets/wedding1.jpg",
    category: "Weddings",
  },
  {
    id: 2,
    title: "A Taste of Nature: Food & Drinks at Thorns & Thatch",
    content: `
      Delight your senses with our garden-inspired cuisine — freshly, organic vegetables, palatable meals
      and signature drinks crafted with floral infusions. Whether it's brunch under the trees or 
      an evening dinner by candlelight, every dish celebrates nature’s bounty.
    `,
    date: "September 10, 2025",
    image: "/assets/food2.jpg",
    category: "Food & Drinks",
  },
  {
    id: 3,
    title: "Comfort in the Garden: Stay at Our Cottage Suites",
    content: `
      Nestled among the blooms are our cozy garden cottages, offering peace, privacy, and comfort. 
      Wake up to birdsong, enjoy breakfast on your private patio, and let the serenity of nature restore your soul.
    `,
    date: "August 28, 2025",
    image: "/assets/accommodation1.jpg",
    category: "Accommodation",
  },
  {
    id: 4,
    title: "Team Building in Bloom",
    content: `
      Reconnect, collaborate, and grow together in an inspiring outdoor environment. 
      From team challenges to group picnics and creative workshops, Thorns & Thatch provides 
      the perfect space to spark creativity and strengthen bonds.
    `,
    date: "August 10, 2025",
    image: "/assets/team1.jpg",
    category: "Team Building",
  },
  {
    id: 5,
    title: "Nature Infused Picnics",
    content: `
      Picture a chilling afternoon surrounded by lush greenery, gentle breezes, and the sound of birdsong. 
      Our picnic spots invite you to foster appreciation with the environment,
      create new expeiences with your family.
    `,
    date: "July 24, 2025",
    image: "/assets/picnic2.jpg",
    category: "Picnics",
  },
  {
    id: 6,
    title: "Events that Bloom",
    content: `
      From birthdays to bridal showers and corporate events, Thorns & Thatch offers spaces that adapt beautifully 
      to every celebration. Add floral backdrops, string lights, and personalized touches for an unforgettable day.
    `,
    date: "July 10, 2025",
    image: "/assets/event2.jpg",
    category: "Events",
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="px-8 py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-amber-800 mb-4">
          Post not found
        </h1>
        <Link to="/blog" className="text-amber-700 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FCF8F3] text-[#4a3c2a] font-serif">
      {/* 🖼️ Hero Banner */}
      <section
        className="relative h-[40vh] sm:h-[55vh] flex items-center justify-center bg-cover bg-center rounded-b-3xl overflow-hidden"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl font-light mb-3">{post.title}</h1>
          <p className="text-sm sm:text-base italic text-gray-200">
            {post.date} • {post.category}
          </p>
        </div>
      </section>

      {/* ✨ Blog Content */}
      <section className="px-6 sm:px-10 py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg text-[#4a3c2a] max-w-none leading-relaxed">
          {post.content.split("\n").map((para, idx) => (
            <p key={idx} className="mb-6 text-[1.05rem] sm:text-lg">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-block bg-[#a17c50] hover:bg-[#7b6650] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all shadow-md"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
}

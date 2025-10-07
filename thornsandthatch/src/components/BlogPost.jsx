import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Forever Begins in Bloom – Our Garden Weddings",
    content: `
      There’s something truly timeless about saying “I do” beneath a canopy of blossoms. 
      At Thorns & Thatch Gardens, we craft weddings where nature becomes your most elegant backdrop. 
      From rose-lined aisles to candlelit receptions, every detail whispers romance.
      
      Our wedding experts collaborate with couples to design personalized themes, floral arrangements, 
      and ambient lighting — ensuring your day is as magical as your love story. 
      Come, let your forever begin in bloom.
    `,
    date: "September 25, 2025",
    image: "/assets/weddingblog.jpg",
    category: "Weddings",
  },
  {
    id: 2,
    title: "Flavors of the Garden – Food & Drinks Inspired by Nature",
    content: `
      From farm-fresh platters to handcrafted cocktails infused with herbs from our own garden, 
      Thorns & Thatch offers a culinary experience that celebrates nature’s bounty.
      
      Whether it’s a brunch beneath the trees or an evening soirée with garden-to-table delicacies, 
      every dish is a story — fresh, colorful, and crafted to delight all senses. 
      Our chefs blend artistry and sustainability, ensuring each bite is a memory.
    `,
    date: "September 18, 2025",
    image: "/assets/foodblog.jpg",
    category: "Food & Drinks",
  },
  {
    id: 3,
    title: "Stay a While – Tranquil Accommodation in Nature’s Lap",
    content: `
      Escape the noise and find serenity in our boutique cottages surrounded by whispering trees. 
      Our accommodations offer rustic charm with a touch of modern luxury.
      
      Wake up to birdsong, enjoy coffee on your private patio, and fall asleep under starlit skies. 
      At Thorns & Thatch Gardens, every stay feels like a dream retreat.
    `,
    date: "August 30, 2025",
    image: "/assets/accommodationblog.jpg",
    category: "Accommodation",
  },
  {
    id: 4,
    title: "Together We Grow – Team Building in the Gardens",
    content: `
      Forget boardrooms — let your team connect, collaborate, and create in a refreshing outdoor setting.
      
      Our team-building experiences combine fun, creativity, and purpose. 
      From scavenger hunts in the gardens to picnic-style brainstorming sessions, 
      we cultivate stronger bonds and brighter ideas among colleagues.
    `,
    date: "August 15, 2025",
    image: "/assets/teambuildblog.jpg",
    category: "Team Building",
  },
  {
    id: 5,
    title: "Picnics in Paradise – Simple Joys Among the Trees",
    content: `
      Lay down a blanket, open a basket, and let time slow down. 
      Our curated picnic experiences bring together good food, laughter, and nature’s serenity.
      
      Whether for couples, families, or friends, a Thorns & Thatch picnic is more than a meal — 
      it’s a moment of connection and calm, wrapped in beauty.
    `,
    date: "July 20, 2025",
    image: "/assets/picnicblog.jpg",
    category: "Picnics",
  },
  {
    id: 6,
    title: "Celebrations in Full Bloom – Unforgettable Events",
    content: `
      From intimate anniversaries to grand gatherings, our garden venues adapt to every celebration. 
      String lights, flower walls, and open skies — each event feels like a page from a fairytale.
      
      Our event planners and decorators bring your vision to life with elegance, detail, and joy.
      Celebrate life the way it deserves to be celebrated — naturally and beautifully.
    `,
    date: "June 5, 2025",
    image: "/assets/eventblog.jpg",
    category: "Events",
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="px-8 py-20 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-[#7b6650] mb-4">
          Post Not Found
        </h1>
        <Link
          to="/blog"
          className="text-[#a17c50] hover:underline text-sm font-medium"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FCF8F3] text-[#4a3c2a] font-serif">
      {/* 🌿 Featured Banner */}
      <section className="relative h-[45vh] sm:h-[55vh] flex items-center justify-center bg-cover bg-center">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 sm:px-10"
        >
          <p className="text-sm text-[#f7d9a4] uppercase tracking-widest mb-3">
            {post.category}
          </p>
          <h1 className="text-3xl sm:text-5xl font-light text-white mb-4">
            {post.title}
          </h1>
          <p className="text-sm text-gray-300">{post.date}</p>
        </motion.div>
      </section>

      {/* 🌸 Blog Content */}
      <section className="px-6 sm:px-10 py-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg text-[#5e4c3a] leading-relaxed"
        >
          {post.content.split("\n").map((para, idx) => (
            <p key={idx} className="mb-5">
              {para.trim()}
            </p>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-block bg-[#7b6650] hover:bg-[#a17c50] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg transition-all"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
}

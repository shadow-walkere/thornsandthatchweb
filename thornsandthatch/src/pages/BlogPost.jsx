import { useParams, Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "A Blooming Season at Thorns & Thatch",
    content: `
      Each spring, our gardens come alive with vibrant blossoms and fresh greenery.
      Guests are invited to stroll through pathways filled with roses, tulips, and
      lavender. It's the perfect setting for photoshoots, weddings, and peaceful retreats.
    `,
    date: "September 25, 2025",
    image: "/blog/b1.jpg",
  },
  {
    id: 2,
    title: "Planning the Perfect Garden Wedding",
    content: `
      A wedding in the garden is truly magical. At Thorns & Thatch, we help couples
      create unforgettable moments surrounded by nature. From floral arches to candle-lit
      pathways, every detail can be tailored to your dream celebration.
    `,
    date: "September 10, 2025",
    image: "/blog/b2.jpg",
  },
  {
    id: 3,
    title: "Behind the Scenes: Our Gardeners at Work",
    content: `
      Our dedicated gardening team works tirelessly to keep Thorns & Thatch in full bloom.
      From sunrise watering to late-night pruning, their passion ensures that every corner
      of the garden thrives with life and beauty.
    `,
    date: "August 28, 2025",
    image: "/blog/b3.jpg",
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
    <div>
      {/* Hero Banner */}
      <section
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{post.title}</h1>
          <p className="text-lg">{post.date}</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg text-gray-700">
          {post.content.split("\\n").map((para, idx) => (
            <p key={idx} className="mb-4">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/blog"
            className="text-amber-700 hover:underline font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
}

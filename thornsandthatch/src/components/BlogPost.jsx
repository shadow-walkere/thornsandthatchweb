// import { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";

// const blogPosts = [
//   {
//     id: 1,
//     name: "Enchanted Garden Weddings",
//     quote: `
//       Step into a world of romance surrounded by flowers and candlelight.
//       Our gardens transform into breathtaking wedding venues that blend natural elegance with timeless charm.
//       From floral arches to evening lanterns, we ensure every moment feels magical.
//     `,
//     date: "September 25, 2025",
//     image: "/assets/wedding4.jpeg",
//     category: "Weddings",
//   },
//   {
//     id: 2,
//     name: "A Taste of Nature: Food & Drinks at The Thorn & Thatch",
//     quote: `
//       Delight your senses with our garden-inspired cuisine — freshly, organic vegetables, palatable meals
//       and signature drinks crafted with floral infusions. Whether it's brunch under the trees or
//       an evening dinner by candlelight, every dish celebrates nature’s bounty.
//     `,
//     date: "September 10, 2025",
//     image: "/assets/food1.jpg",
//     category: "Food & Drinks",
//   },
//   {
//     id: 3,
//     name: "Comfort in the Garden: Stay at Our Cottage Suites",
//     quote: `
//       Nestled among the blooms are our cozy garden cottages, offering peace, privacy, and comfort.
//       Wake up to birdsong, enjoy breakfast on your private patio, and let the serenity of nature restore your soul.
//     `,
//     date: "August 28, 2025",
//     image: "/assets/accommodation5.jpeg",
//     category: "Accommodation",
//   },
//   {
//     id: 4,
//     name: "Team Building in Bloom",
//     quote: `
//       Reconnect, collaborate, and grow together in an inspiring outdoor environment.
//       From team challenges to group picnics and creative workshops, The Thorn & Thatch provides
//       the perfect space to spark creativity and strengthen bonds.
//     `,
//     date: "August 10, 2025",
//     image: "/assets/picnic9.jpeg",
//     category: "Team Building",
//   },
//   {
//     id: 5,
//     name: "Nature-Infused Picnics",
//     quote: `
//       Picture a chilling afternoon surrounded by lush greenery, gentle breezes, and the sound of birdsong.
//       Our picnic spots invite you to foster appreciation with the environment,
//       create new expeiences with your family.
//     `,
//     date: "July 24, 2025",
//     image: "/assets/picnic3.jpeg",
//     category: "Picnics",
//   },
//   {
//     id: 6,
//     name: "Events that Bloom",
//     quote: `
//       From birthdays to bridal showers and corporate events, The Thorn & Thatch offers spaces that adapt beautifully
//       to every celebration. Add floral backdrops, string lights, and personalized touches for an unforgettable day.
//     `,
//     date: "July 10, 2025",
//     image: "/assets/event1.jpg",
//     category: "Events",
//   },
// ];

// export default function BlogPost() {
//   const { id } = useParams();
//   const post = blogPosts.find((p) => p.id === parseInt(id));

//   // 🌿 Scroll to top when a post is opened
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth", // for a smooth scrolling effect
//     });
//   }, [id]);

//   if (!post) {
//     return (
//       <div className="px-8 py-16 max-w-4xl mx-auto text-center">
//         <h1 className="text-3xl font-bold text-green-800 mb-4">
//           Post not found
//         </h1>
//         <Link to="/blog" className="text-green-700 hover:underline">
//           ← Back to Blog
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white text-[#1b3d2f] font-serif">
//       {/* 🖼️ Hero Banner */}
//       <section
//         className="relative h-[40vh] sm:h-[55vh] flex items-center justify-center bg-cover bg-center rounded-b-3xl overflow-hidden shadow-md"
//         style={{ backgroundImage: `url(${post.image})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-3xl sm:text-5xl font-light mb-3 drop-shadow-lg">
//             {post.name}
//           </h1>
//           <p className="text-sm sm:text-base italic text-gray-200">
//             {post.date} • {post.category}
//           </p>
//         </div>
//       </section>

//       {/* 🌿 Blog quote */}
//       <section className="px-6 sm:px-10 py-16 max-w-4xl mx-auto">
//         <div className="prose prose-lg text-[#1b3d2f] max-w-none leading-relaxed">
//           {post.quote.split("\n").map((para, idx) => (
//             <p key={idx} className="mb-6 text-[1.05rem] sm:text-lg">
//               {para}
//             </p>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <Link
//             to="/blog"
//             className="inline-block bg-[#2d6a4f] hover:bg-[#1b4332] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all shadow-md"
//           >
//             ← Back to Blog
//           </Link>
//         </div>
//       </section>

//       {/* 🌸 Decorative Section */}
//       <section className="bg-[#ebf5ec] py-12 mt-8">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h3 className="text-2xl sm:text-3xl font-light text-[#2d6a4f] mb-4">
//             Love what you read?
//           </h3>
//           <p className="text-[#1b3d2f] mb-6">
//             Explore more stories and inspirations from <b>The Thorn & Thatch</b>{" "}
//             garden haven.
//           </p>
//           <Link
//             to="/blog"
//             className="inline-block bg-[#52b788] hover:bg-[#40916c] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all shadow-md"
//           >
//             🌿 View More Posts
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchPost = async () => {
      try {
        const res = await fetch(`${SERVER_URL}/api/blog/${id}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-green-700 text-lg">
        🌿 Loading post...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="px-8 py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          Post not found
        </h1>
        <Link to="/blog" className="text-green-700 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#1b3d2f] font-serif">
      {/* 🖼️ Hero Banner */}
      <section
        className="relative h-[40vh] sm:h-[55vh] flex items-center justify-center bg-cover bg-center rounded-b-3xl overflow-hidden shadow-md"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl font-light mb-3 drop-shadow-lg">
            {post.name}
          </h1>
          <p className="text-sm sm:text-base italic text-gray-200">
            {post.date} • {post.category}
          </p>
        </div>
      </section>

      {/* 🌿 Blog quote */}
      <section className="px-6 sm:px-10 py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg text-[#1b3d2f] max-w-none leading-relaxed">
          {post.quote?.split("\n").map((para, idx) => (
            <p key={idx} className="mb-6 text-[1.05rem] sm:text-lg">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-block bg-[#2d6a4f] hover:bg-[#1b4332] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all shadow-md"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>

      {/* 🌸 Decorative Section */}
      <section className="bg-[#ebf5ec] py-12 mt-8">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl sm:text-3xl font-light text-[#2d6a4f] mb-4">
            Love what you read?
          </h3>
          <p className="text-[#1b3d2f] mb-6">
            Explore more stories and inspirations from <b>The Thorn & Thatch</b>{" "}
            garden haven.
          </p>
          <Link
            to="/blog"
            className="inline-block bg-[#52b788] hover:bg-[#40916c] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all shadow-md"
          >
            🌿 View More Posts
          </Link>
        </div>
      </section>
    </div>
  );
}

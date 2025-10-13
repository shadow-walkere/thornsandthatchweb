"use client";
import { motion } from "framer-motion";

export default function About() {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: "easeOut" },
    },
  });

  return (
    <div className="bg-[#FCF8F3] text-[#4a3c2a] font-serif overflow-hidden relative">
      {/* 🌼 Decorative Curved Background */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-[#f3ebe2] rounded-b-[50%]"></div>

      {/* Header Section */}
      <section className="pt-48 pb-20 text-center relative z-10">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.3)}
          className="text-4xl md:text-5xl tracking-[0.25em] font-light text-[#7b6650]"
        >
          ABOUT US
        </motion.h1>

        {/* Floating petals animation */}
        <motion.div
          className="absolute left-[15%] top-[30%] w-6 h-6 bg-pink-200 rounded-full opacity-70 blur-[2px]"
          animate={{ y: [0, -15, 0], x: [0, 5, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-[20%] top-[40%] w-8 h-8 bg-amber-200 rounded-full opacity-60 blur-[2px]"
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </section>

      {/* 🌹 About Content Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-16 items-center pb-24">
        {/* Left - Arched Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp(0.2)}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-t-[180px] shadow-lg border border-[#e9dfd4]">
            <img
              src="/assets/wedding1.jpg"
              alt="The Thorn & Thatch Gardens wedding setup"
              className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp(0.4)}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-xl text-[#b2987d] uppercase tracking-[3px] font-semibold">
            The Thorn & Thatch Gardens
          </h3>
          <h2 className="text-3xl md:text-4xl font-light text-[#4a3c2a] leading-relaxed">
            Wedding Ceremony & Reception Venue
          </h2>

          <p className="font-['Great_Vibes'] text-3xl text-[#a17c50]">
            Welcome to The Thorn & Thatch Gardens
          </p>

          <p className="text-[#5e4c3a] leading-relaxed text-lg">
            Whether big or small, our gardens offer the perfect setting to host
            your wedding and reception. Enjoy private access to our lush grounds
            — adorned with floral pathways, tree-lined walkways, and elegant
            water features — creating an unforgettable backdrop for your special
            day.
          </p>

          <p className="text-[#5e4c3a] leading-relaxed text-lg">
            From intimate ceremonies to grand celebrations under the stars,
            every moment here blossoms into a timeless memory.
          </p>
        </motion.div>
      </section>

      {/* 🌿 Our Philosophy Section */}
      <section className="bg-[#f3ebe2] py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp(0.2)}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light mb-6"
          >
            Our Philosophy
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp(0.4)}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-[#5e4c3a]"
          >
            Nature has a way of bringing people together. At The Thorn & Thatch,
            we believe in celebrating love, laughter, and life in harmony with
            the environment. Our mission is to provide spaces where stories
            bloom, and every guest leaves with memories rooted in joy.
          </motion.p>
        </div>
      </section>

      {/* 🌸 Experience Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 grid md:grid-cols-2 gap-16 items-start">
        {/* Left Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp(0.2)}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-[#7b6650] mb-4">
            With Over 10 Years of Experience
          </h3>
          <ul className="space-y-3 text-[#5e4c3a] text-lg">
            <li>• Happy, Satified Clients are our first priority.</li>
            <li>• We guarantee picture-perfect memories.</li>
            <li>
              • Our venue includes trees, water features, and open fields.
            </li>
            <li>
              • Hosted numerous wedding shows, social and cooperate events.
            </li>
            <li>• Cozy, budget-friendly accomodation to our Customers</li>
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp(0.3)}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl shadow-lg border border-[#e9dfd4]"
        >
          <img
            src="/assets/accomodation.jpg"
            alt="Garden Event Space"
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
          />
        </motion.div>
      </section>

      {/* 🌷 Meet Our Team */}
      {/* <section className="bg-[#FCF8F3] py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp(0.2)}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light mb-12"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Zachary Olaka",
                role: "Founder",
                image:
                  "https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-6/459826675_2460844710771768_5164823521993321831_n.jpg?stp=c0.53.480.480a_dst-jpg_s480x480_tt6&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jg-yCahzvx0Q7kNvwGiqj24&_nc_oc=AdmgqqHBfQ5fEXeWtPACbcTwoMvn2iRYw7GD8ciTtLbehGvCSba4w4B_lVjWDNAlkYk&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=ndt3KOiRE7uN2-UtwK4e-g&oh=00_AfdJd16sm5qKcCMwX_iY6qHRqH_FHEGinu4zBY6PVagyFg&oe=68EB136C",
              },
              {
                name: "Gentrix Mbalwe",
                role: "Founder",
                image:
                  "https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/118374181_113916187098266_7038813650952012574_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=caVJoafo1QUQ7kNvwGQI-N3&_nc_oc=AdnMmVQ3Flz_tAso4zQxrGlj6btHFTNuv2-jvE0oUV8cQBND2zNlqClCg49R21217DI&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=mxpW4sALqpUA59uX-NPaOQ&oh=00_AfdVedyRPbla155UmqOZ0ieQOiNurkr-40vH9HepRO0Fqg&oe=690CE656",
              },
              {
                name: "Erick Olaka",
                role: "Event Planner",
                image:
                  "https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/83246050_1055788811442086_3964142895950200832_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=VJMHAuig5zgQ7kNvwF4CSbx&_nc_oc=AdnEx6oS46X-q5sIumboaTSedsrTYLWg2yTqV1ea0-WRLYnZCbolY4b2NlmqXkQqCq4&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=TMflQbGA5IYTBfPaos9uQQ&oh=00_AfeaAtproNd7TOvX4ZX6MkHmoWJBeEF9TC7iWI3FD4DKSw&oe=690CCB2D",
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp(0.2 + idx * 0.1)}
                viewport={{ once: true }}
                className="bg-[#f3ebe2] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-2xl mb-4"
                />
                <h4 className="text-xl font-semibold text-[#7b6650]">
                  {member.name}
                </h4>
                <p className="text-[#5e4c3a] italic">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 🍃 Call to Action */}
      <section className="bg-[#7b6650] text-white py-20 text-center px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp(0.2)}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light mb-4"
        >
          Plan Your Dream Day With Us
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp(0.3)}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-lg mb-8"
        >
          Whether it’s an intimate wedding, a corporate event, or a family
          gathering, our gardens offer the perfect blend of beauty, comfort, and
          charm.
        </motion.p>
        <motion.a
          href="/contact"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp(0.4)}
          viewport={{ once: true }}
          className="bg-white text-[#7b6650] px-8 py-3 rounded-full font-semibold hover:bg-[#f3ebe2] transition"
        >
          Get In Touch
        </motion.a>
      </section>
    </div>
  );
}

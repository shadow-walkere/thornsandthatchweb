import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, DollarSign, Car, Eye } from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  // Example categorized images
  const categories = {
    All: [
      "https://cdn.pixabay.com/photo/2020/03/29/10/59/house-4980256_640.jpg",
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/118690782_180181850290681_7894771519358643733_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xzA6mHgCbhEQ7kNvwHEw3Z0&_nc_oc=AdlmO6dI_9IklMQXZzw7phHHUYxl2ms-_BCs_E_Yg6xn4-YAipE-eSYZoZqfM33kzVE&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=pji1WSyeBB-7ieupKiosyQ&oh=00_Afc6WRjb7t6atHJbRxQKd4p8Gcu3J3tiAB52PCJaxq5QqQ&oe=69071184",
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/107594103_164225741886292_8179562810355261740_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Azog0Ab66fsQ7kNvwFxO540&_nc_oc=AdmkTMKjZu_KgT1Dbvnhm_Vve2QnimbYOSOEG4sspMwe-DMzQqsMkJHLrYrM8lWKGIU&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=ZAqj4K_UN5jwxtEnaj322A&oh=00_AfciAzfczw_nHcoE7UpUE3Ruehyu6wVBZWL0YofY_q6D_A&oe=69086716",
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/107459807_164225658552967_1698824773330259497_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=x87_o3KzAhkQ7kNvwHm9bUP&_nc_oc=AdnTuXh2MQL0Owvi_wAXrGyvabIEUJAeGIcKDdp7A5_GWMuoN4HPjpYPEHWQ7dkp6RU&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=vbraljHLkEcEHi3nkDI4dg&oh=00_Afd8LePfaIBQMopEb5RDNkKCUOcoSO3IlL1ptWso_c-LtQ&oe=69086E2C",
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/99439498_145956767046523_6353167550397808640_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=67mwoqe-aH0Q7kNvwHsEm1R&_nc_oc=Adn3UTsR3d266iXMeDTUX_v7Z0sQ-07ZwO057sENW1Cq2POp0D3f4qMMlRg2ruXxiRQ&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=qR_k2o4Dh-kXj2AG4u-ghA&oh=00_AfcIffRnIL552Q494Y6PfTBshrbgr1Rarvxl_JJDr3R88w&oe=69086FBC",
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/91758657_119011216407745_7501772063116361728_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Imi4JsD9bAEQ7kNvwEraOzM&_nc_oc=AdlmPy9Y45yIMRLwpLGjRJ220eJOu8gVipHfty8BnTW-ZYiEYQtB7L1VZrvb5qUenaY&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=PwXUKjuBDijo_h8GN0iJxw&oh=00_Afe4pw-QSwMgd9RSAeQ3zpKEclYYYtBT5dBcykzLqOkjSw&oe=690873AB",
    ],
    "Wedding Events": [
      "https://cdn.pixabay.com/photo/2020/03/29/10/59/house-4980256_640.jpg",
    ],
    "Picnic and Parties": [
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/107459807_164225658552967_1698824773330259497_n.jpg?...",
    ],
    "Social & Corporate Events": [
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-6/469838363_1119142069727983_2871413534980124997_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6t35XHax1FUQ7kNvwFJFfkk&_nc_oc=Admg3CCPNpyCD88scjWb8piUXlexCTrOg8U1GixSCKrQ2O7dwtc9602rERoibqHTCEM&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=VHSBiuyMgSLX2BN9PuRj6w&oh=00_AfcomqX72br56CWcpa4Ov2xwHeTNUzPyHPd-fixM7kj9hQ&oe=68E6C747",

      " https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-6/469906016_1119142376394619_4449756412483204901_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-PnMaUMXzREQ7kNvwF_aE8M&_nc_oc=AdkOGZwuqFafIerVk2jLmbXaMmHcRyJV4_3ZoqCY_KVVfKyYXiAl1XlpRRCD3QIwFws&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=VWqTv0wDNs6cHAVmwoA9mg&oh=00_AfeMRFZgMZzOM2tiO45aNxk7s_GDVI4o8mjm0d5NkT7zfA&oe=68E6B364",
    ],
    "Photoshoots & Filming": [
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/118690782_180181850290681_7894771519358643733_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xzA6mHgCbhEQ7kNvwHEw3Z0&_nc_oc=AdlmO6dI_9IklMQXZzw7phHHUYxl2ms-_BCs_E_Yg6xn4-YAipE-eSYZoZqfM33kzVE&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=pji1WSyeBB-7ieupKiosyQ&oh=00_Afc6WRjb7t6atHJbRxQKd4p8Gcu3J3tiAB52PCJaxq5QqQ&oe=69071184",
    ],
    "Kids Park": [
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/118690782_180181850290681_7894771519358643733_n.jpg?...",
    ],
    "Foods and Drink": [
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/107594103_164225741886292_8179562810355261740_n.jpg?...",
    ],
  };

  const filteredImages = filter === "All" ? categories.All : categories[filter];

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/200731856_336980807944117_4453487866400915961_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bsRYIYJ880cQ7kNvwGq7T3t&_nc_oc=AdlYSEXk8t5UBeBNoG6tX0irKkdnAvb9VRO2oc90EUCiUo3ej_xe10-q5hpbxHh_grE&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=knsr1Y4yklL0lnPOCdg7vA&oh=00_Afdj1mypqiVl1d3SRQgpAQo61yarCRjVbraojGp5NmPoNA&oe=69085734')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Gallery</h1>
          <p className="text-lg">Discover the charm of our gardens</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-light text-amber-800 mb-16 text-center">
          Why Choose Us?
        </h2>

        <div className="relative max-w-4xl mx-auto flex justify-center">
          {/* Center Image */}
          <img
            src="https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/107459807_164225658552967_1698824773330259497_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=x87_o3KzAhkQ7kNvwHm9bUP&_nc_oc=AdnTuXh2MQL0Owvi_wAXrGyvabIEUJAeGIcKDdp7A5_GWMuoN4HPjpYPEHWQ7dkp6RU&_nc_zt=23&_nc_ht=scontent.fnbo8-1.fna&_nc_gid=98kCn_6jmv7INoBheXm7fg&oh=00_AfeXM-IKPIgCMc08ATju99PuNApfTdzYvCwVF4SKcmZEzQ&oe=69086E2C"
            alt="Our Grounds"
            className="rounded-full shadow-2xl w-80 h-80 object-cover"
          />

          {/* Surrounding Texts */}
          <div className="absolute -top-12 -left-40 w-48 text-right">
            <h3 className="flex items-center justify-end gap-2 text-amber-800 font-semibold">
              <Building2 className="text-amber-600" /> Best in Town
            </h3>
            <p className="text-gray-600 text-sm">
              Our serene grounds are perfect for receptions and spacious grounds
              can host any events you wish to host.
            </p>
          </div>

          <div className="absolute -top-12 -right-40 w-48 text-left">
            <h3 className="flex items-center gap-2 text-amber-800 font-semibold">
              <DollarSign className="text-green-600" /> Affordable Rates
            </h3>
            <p className="text-gray-600 text-sm">
              Next to a 10-acre dam, ideal for weddings and ceremonies.
            </p>
          </div>

          <div className="absolute -bottom-12 -left-40 w-48 text-right">
            <h3 className="flex items-center justify-end gap-2 text-amber-800 font-semibold">
              <Car className="text-gray-600" /> Car Parking
            </h3>
            <p className="text-gray-600 text-sm">
              Spacious parking with capacity for over 400 cars.
            </p>
          </div>

          <div className="absolute -bottom-12 -right-40 w-48 text-left">
            <h3 className="flex items-center gap-2 text-amber-800 font-semibold">
              <Eye className="text-purple-600" /> Free Viewing
            </h3>
            <p className="text-gray-600 text-sm">
              Open daily from 8 a.m. to 11 p.m. Karibu Thorns and Thatch!
            </p>
          </div>
        </div>
      </section>

      {/* Gallery with Filters */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-amber-800 mb-10 text-center">
          Explore Our Spaces
        </h2>

        {/* Filter Menu */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border ${
                filter === cat
                  ? "bg-amber-600 text-white border-amber-600"
                  : "bg-white text-amber-700 border-amber-600 hover:bg-amber-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid with Fade Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((src, index) => (
              <motion.div
                key={src}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

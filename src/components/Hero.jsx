import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <header
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="bg-black bg-opacity-80 p-8 rounded-xl text-center">
          <h1 className="text-red-500 text-5xl font-bold">Makeup Artist Studio</h1>
          <p className="text-white mt-4 text-lg">
            Professional Makeup, Nail Extensions & Mehendi Services
          </p>
          <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-full text-lg hover:bg-red-600 transition">
            Book Now
          </button>
        </div>
      </header>

      {/* Our Work Section */}
      <section className="py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold text-red-500">Our Work</h2>
        <p className="text-gray-300 mt-4">A glimpse of our latest transformations</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-6 max-w-6xl mx-auto">
          {["work1.jpg", "work2.jpg", "work3.jpg"].map((img, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <img src={`/images/${img}`} alt="Work" className="rounded-lg shadow-lg" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Gallery Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold text-red-500">Our Gallery</h2>
        <p className="text-gray-300 mt-4">Explore our stunning creations</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 px-6 max-w-6xl mx-auto">
          {["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"].map((img, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <img src={`/images/${img}`} alt="Gallery" className="rounded-lg shadow-lg" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Reviews Section */}
      <section className="py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold text-red-500">Our Reviews</h2>
        <p className="text-gray-300 mt-4">What our customers say</p>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="max-w-4xl mx-auto mt-10"
        >
          {[
            { name: "Sophia", review: "Amazing makeup!", rating: 5 },
            { name: "Ananya", review: "Loved the mehendi art!", rating: 4 },
            { name: "Riya", review: "Perfect nails!", rating: 5 },
          ].map((item, index) => (
            <SwiperSlide key={index} className="p-6 bg-black rounded-lg">
              <p className="text-lg text-gray-300">{item.review}</p>
              <p className="text-red-500 mt-2">{"⭐".repeat(item.rating)}</p>
              <p className="text-white font-bold mt-2">- {item.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default HomePage;

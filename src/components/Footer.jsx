import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  // Array of colors that change dynamically
  const colors = useMemo(
    () => [
      "text-red-400", "text-yellow-300", "text-green-400", "text-blue-400",
      "text-purple-400", "text-pink-400", "text-orange-400", "text-teal-400",
      "text-indigo-400", "text-emerald-400", "text-rose-400", "text-cyan-400",
      "text-lime-400", "text-fuchsia-400", "text-amber-400"
    ],
    []
  );

  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * colors.length);
        } while (newIndex === prevIndex); // Ensure it's different from previous
        return newIndex;
      });
    }, 1000); // Change every 1 second

    return () => clearInterval(interval);
  }, [colors]);

  return (
    <footer className="bg-black/90 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Animated Title with Changing Color */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={`text-2xl font-bold drop-shadow-md transition-colors duration-500 ${colors[colorIndex]}`}>
            Makeup Artist Studio
          </h2>
          <p className="mt-2 text-gray-200">
            Your one-stop destination for professional makeup services, nail extensions, and mehendi.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="/" className="hover:text-yellow-300 transition duration-300">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-300 transition duration-300">Services</a></li>
            <li><a href="/contact" className="hover:text-yellow-300 transition duration-300">Contact Us</a></li>
            <li><a href="/about" className="hover:text-yellow-300 transition duration-300">About</a></li>
          </ul>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="p-3 rounded-full bg-gray-800 hover:bg-yellow-300 transition">
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a href="https://instagram.com" target="_blank" className="p-3 rounded-full bg-gray-800 hover:bg-yellow-300 transition">
              <FaInstagram className="text-white text-lg" />
            </a>
            <a href="https://twitter.com" target="_blank" className="p-3 rounded-full bg-gray-800 hover:bg-yellow-300 transition">
              <FaTwitter className="text-white text-lg" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="p-3 rounded-full bg-gray-800 hover:bg-yellow-300 transition">
              <FaLinkedin className="text-white text-lg" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <motion.div
        className="text-center mt-10 text-gray-300 border-t border-gray-600 pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p>© 2024 Makeup Artist Studio. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;

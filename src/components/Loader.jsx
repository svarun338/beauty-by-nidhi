import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      {/* Makeup Brush Swipe Effect */}
      <motion.div
        className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: [0, 50, -50, 0], opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />

      {/* Text Animation */}
      <motion.h1
        className="mt-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Makeup Artistry Loading...
      </motion.h1>
    </div>
  );
};

export default Loader;

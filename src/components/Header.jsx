import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

// Animation Variants
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const menuVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Color Changing Effect for Title
const colors = [
  "text-red-400",
  "text-yellow-400",
  "text-green-400",
  "text-blue-400",
  "text-indigo-400",
  "text-purple-400",
  "text-pink-400",
  "text-rose-400",
  "text-emerald-400",
  "text-cyan-400",
  "text-teal-400",
  "text-orange-400",
  "text-lime-400",
  "text-fuchsia-400",
  "text-violet-400",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  // Change color every second
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Navigation Links
  const navLinks = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/services", label: "Services" },
      { to: "/contact", label: "Contact Us" },
      { to: "/profile", label: "Profile" },
    ],
    []
  );

  return (
    <motion.header
      className="fixed w-full top-0 z-50 shadow-lg bg-gradient-to-r bg-white/10 text-white py-4"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo with Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Link to="/" className="text-3xl font-extrabold flex items-center gap-2">
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
            {/* Animated Color Changing Title */}
            <span className={`drop-shadow-md hover:text-white transition duration-500 ${colors[colorIndex]}`}>
              Makeup Artistry
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg font-semibold">
          {navLinks.map((link) => (
            <NavItem key={link.to} to={link.to} label={link.label} />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={`md:hidden bg-black/90 absolute w-full top-full left-0 py-6 shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={menuVariants}
      >
        <nav className="flex flex-col items-center space-y-6 text-lg">
          {navLinks.map((link) => (
            <NavItem key={link.to} to={link.to} label={link.label} onClick={() => setIsOpen(false)} />
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};

// Reusable Nav Item with Brush-Like Hover Effect
const NavItem = ({ to, label, onClick }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: 3,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        to={to}
        onClick={onClick}
        className="relative px-4 py-2 font-bold transition duration-300 ease-in-out group"
      >
        {label}
        {/* Brush Hover Effect */}
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 transition-all duration-500 group-hover:w-full"></span>
        <span className="absolute top-0 left-0 w-1 h-0 bg-yellow-300 transition-all duration-500 group-hover:h-full"></span>
        <span className="absolute right-0 bottom-0 w-1 h-0 bg-yellow-300 transition-all duration-500 group-hover:h-full"></span>
        <span className="absolute right-0 top-0 w-0 h-1 bg-yellow-300 transition-all duration-500 group-hover:w-full"></span>
      </Link>
    </motion.div>
  );
};

export default Header;

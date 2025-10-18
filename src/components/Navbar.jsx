import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import sufficeLogo from "./assets/sufficelogos.jpg";
import sufficeSide from "./assets/sufficeside.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Updated: Smart routing + scrolling logic
  const handleScrollOrNavigate = (id) => {
    setMenuOpen(false);
    
    // Route-based navigation for main pages
    if (["services", "work", "contact"].includes(id)) {
      navigate(`/${id}`);
      return;
    }
    
    // Home page scrolling
    if (id === "home" || location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100); // Reduced timeout for faster response
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 max-sm:px-3">
        {/* Logo Section */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleScrollOrNavigate("home")}
        >
          <img
            src={sufficeLogo}
            alt="Suffice Logo"
            className="w-12 h-12 rounded-full object-cover border-2"
          />
          <img
            src={sufficeSide}
            alt="Suffice Side"
            className="h-10 object-contain max-sm:h-8"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <SlideTabs handleScroll={handleScrollOrNavigate} />
        </div>

        {/* Book a Call Button (Desktop Only) */}
        <div className="hidden md:flex items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleScrollOrNavigate("contact")}
            className="flex items-center gap-2 bg-[#1266A2] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0E4F7F] transition-all duration-300 shadow-sm text-base"
          >
            <PhoneCall size={20} />
            Book a Call
          </motion.button>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#1266A2] mb-1 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#1266A2] mb-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#1266A2] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden w-full bg-white px-4 pb-4 pt-2 flex flex-col items-center gap-3 shadow-lg rounded-b-lg"
        >
          <MobileMenu handleScroll={handleScrollOrNavigate} />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleScrollOrNavigate("contact")}
            className="flex items-center justify-center gap-2 bg-[#1266A2] text-white w-full py-3 rounded-full font-medium hover:bg-[#0E4F7F] transition-all duration-300 shadow-md text-base"
          >
            <PhoneCall size={20} />
            Book a Call
          </motion.button>
        </motion.div>
      )}
    </header>
  );
}

// Desktop Tabs
const SlideTabs = ({ handleScroll }) => {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      className="relative mx-auto flex w-fit rounded-full border-2 border-[#1266A2] bg-white p-1"
    >
      {["home", "services", "work", "faqs", "contact"].map((id, i) => (
        <Tab key={i} setPosition={setPosition} handleScroll={handleScroll} id={id}>
          {id === "faqs" ? "FAQs" : id.charAt(0).toUpperCase() + id.slice(1)}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

// Mobile Menu
const MobileMenu = ({ handleScroll }) => {
  const items = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "work", label: "Work" },
    { id: "faqs", label: "FAQs" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col w-full gap-2 mt-2">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 200, damping: 10 },
          }}
          transition={{ delay: i * 0.1 }}
        >
          <motion.div
            className="w-full bg-white text-black rounded-2xl p-3 shadow-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer text-center"
            whileHover={{ scale: 1.03 }}
            onClick={() => handleScroll(item.id)}
          >
            {item.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

// Desktop Tab
const Tab = ({ children, setPosition, handleScroll, id }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className="relative z-10 block cursor-pointer px-4 py-2 text-sm uppercase text-[#07263C] md:px-5 md:py-3 md:text-base"
      onClick={() => handleScroll(id)}
    >
      {children}
    </li>
  );
};

// Highlight cursor
const Cursor = ({ position }) => (
  <motion.li
    animate={{ ...position }}
    className="absolute z-0 h-8 rounded-full bg-[#1266A2]/20 md:h-12"
  />
);
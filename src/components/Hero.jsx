import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaBrain,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

// ✅ Local images
import webDevelopment from "./assets/webdevelopment.jpg";
import appDevelopment from "./assets/appdevelopment.jpg";
import logodesign from "./assets/logodesign.jpg";
import aisolutions from "./assets/aisolutions.jpg";

// ✅ Service data
const services = [
  {
    name: "Web Development",
    image: webDevelopment,
    icon: <FaLaptopCode className="text-[#48CFFB] text-xl sm:text-2xl" />,
  },
  {
    name: "App Development",
    image: appDevelopment,
    icon: <FaMobileAlt className="text-[#48CFFB] text-xl sm:text-2xl" />,
  },
  {
    name: "UI & UX",
    image: logodesign,
    icon: <MdDesignServices className="text-[#48CFFB] text-xl sm:text-2xl" />,
  },
  {
    name: "Logo Design",
    image: logodesign,
    icon: <FaPencilRuler className="text-[#48CFFB] text-xl sm:text-2xl" />,
  },
  {
    name: "AI Solutions",
    image: aisolutions,
    icon: <FaBrain className="text-[#48CFFB] text-xl sm:text-2xl" />,
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardIndexes = () => {
    const total = services.length;
    return [-2, -1, 0, 1, 2].map(
      (offset) => (currentIndex + offset + total) % total
    );
  };

  // ✅ Auto-rotate cards
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % services.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // ✅ Floating icon positions
  const iconPositions = [
    [
      { top: "12%", left: "65%" },
      { top: "50%", left: "12%" },
      { top: "80%", left: "75%" },
      { top: "70%", left: "90%" },
    ],
    [
      { top: "8%", left: "55%" },
      { top: "60%", left: "10%" },
      { top: "78%", left: "60%" },
      { top: "75%", left: "85%" },
    ],
    [
      { top: "15%", left: "70%" },
      { top: "48%", left: "15%" },
      { top: "85%", left: "70%" },
      { top: "78%", left: "90%" },
    ],
  ];

  // ✅ Generate stars for background
  const stars = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#021221] via-[#04315A] to-[#021221] flex items-center justify-center overflow-hidden">
      {/* 🌟 Twinkling Stars */}
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            opacity: 0.8,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + star.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center px-6 sm:px-8 md:px-10 lg:px-16 py-20 gap-10 md:gap-0 relative z-10">
        {/* ✅ Left Section */}
        <div className="flex-1 md:pr-12 text-center md:text-left space-y-6">
          <h1 className="font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Transform Your <br />
            Vision into Reality <br />
            with <span className="text-[#48CFFB]">SUFFICE</span> <br />
            Solution
          </h1>

          <p className="text-gray-200 text-lg sm:text-xl max-w-md mx-auto md:mx-0 leading-relaxed">
            We deliver cutting-edge web, app, AI, and digital solutions tailored
            to your business needs.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-white text-[#185abd] px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-50 transition mx-auto md:mx-0"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.498 4.493a1 1 0 01-.502 1.21l-2.25 1.13a11.045 11.045 0 005.52 5.516l1.13-2.257a1 1 0 011.21-.502l4.49 1.498a1 1 0 01.68.949v1.763a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <span>Book a Call</span>
          </motion.button>
        </div>

        {/* ✅ Right Section */}
        <div className="flex-1 flex items-center justify-center relative min-h-[350px] sm:min-h-[400px] md:min-h-[500px]">
          {/* Grid Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* 🌟 Floating Service Icons */}
          {iconPositions[currentIndex % 3].map((pos, idx) => (
            <motion.span
              key={idx}
              className="absolute bg-white rounded-full p-2 sm:p-3 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                top: pos.top,
                left: pos.left,
                opacity: 1,
                scale: [1, 1.1, 1],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3.5,
                ease: "easeInOut",
                repeat: Infinity,
                delay: idx * 0.3,
              }}
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              {services[(currentIndex + idx) % services.length].icon}
            </motion.span>
          ))}

          {/* ✅ Rotating Card Stack */}
          <div className="relative flex items-center justify-center w-[200px] h-[260px] sm:w-[240px] sm:h-[300px] md:w-[300px] md:h-[380px]">
            {getCardIndexes().map((idx, i) => {
              const rotate = -15 + i * 8;
              const scale = i === 2 ? 1.05 : 0.9 + i * 0.03;
              const z = i === 2 ? 40 : 20 - Math.abs(i - 2) * 3;
              const y = (i - 2) * 15;

              return (
                <motion.img
                  key={idx}
                  src={services[idx].image}
                  alt={services[idx].name}
                  className="absolute rounded-3xl border-4 border-white object-cover shadow-2xl transition-all"
                  style={{
                    width: "100%",
                    height: "100%",
                    left: 0,
                    top: 0,
                    zIndex: z,
                    transform: `rotate(${rotate}deg) scale(${scale}) translateY(${y}px)`,
                    opacity: i < 2 || i > 2 ? 0.8 : 1,
                  }}
                  animate={{ rotate: rotate, scale: scale }}
                  transition={{ duration: 0.6 }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

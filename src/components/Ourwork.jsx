import React from "react";
import { motion } from "framer-motion";

// ✅ Local project images
import apple from "./assets/apple.jpg";
import thursday from "./assets/thursday.jpg";
import next from "./assets/next.jpg";
import techhub from "./assets/techhub.jpg";
import pearls from "./assets/pearls.jpg";
import acsfms from "./assets/acsfms.jpg";
import leaforia from "./assets/leaforia.jpg";

const projects = [
  {
    title: "Apple Clone",
    description: "Customizable Tailwind CSS and Framer Motion Components",
    image: apple,
  },
  {
    title: "Thursday",
    description: "Open Source project on GitHub for learning and collaboration",
    image: thursday,
  },
  {
    title: "Next.js Project",
    description: "A modern web app built with Next.js and Tailwind CSS",
    image: next,
  },
  {
    title: "Tech Hub",
    description: "A Robust Software solution for students",
    image: techhub,
  },
  {
    title: "Pearls & Gems website Design",
    description: "Pearls & Gems landing website Design Using Figma",
    image: pearls,
  },
  {
    title: "ACS FMS UI/UX design",
    description: "ACS FMS facility Management Services using figma",
    image: acsfms,
  },
  {
    title: "Leaforia Website Design",
    description: "Plants e-commerce website design using Figma",
    image: leaforia,
  },
];

export default function OurWork() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-[#001f3f] to-[#003366] text-white py-20 px-6 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center mb-14 max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">Our Work</h2>
        <p className="text-gray-300 leading-relaxed">
          Explore a selection of our recent projects, showcasing our expertise
          in web, app, and software development. Each project is crafted to
          deliver real value and results for our clients.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-sm mx-auto"
          >
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-lg border border-gray-200"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

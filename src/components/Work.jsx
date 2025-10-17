import React from "react";
import webdevelopmentImg from "./assets/webdevelopment.jpg";
import appdevlelopmentImg from "./assets/appdevelopment.jpg";
import uiuxImg from "./assets/uiux.jpg";
import graphicdesigningImg from "./assets/graphicdesign.jpg";
import softwareImg from "./assets/software.jpg";
import mobileappImg from "./assets/mobileapp.jpg";
import securityImg from "./assets/security.jpg";
import barndImg from "./assets/brand.jpg";
import marketingImg from "./assets/marketing.jpg";

const works = [
  {
    tag: "Web Applications",
    title: "Web application in Web Development",
    description:
      "Build fast, responsive, and powerful websites that elevate your brand. At SUFFICE, we craft custom web solutions that blend design, performance, and functionality to drive real business growth.",
    image: webdevelopmentImg,
  },
  {
    tag: "Mobile Applications",
    title: "Mobile Apps in App Development",
    description:
      "Create seamless, high-performing mobile apps that connect, engage, and deliver results. We bring your ideas to life on every device.",
    image: appdevlelopmentImg,
  },
  {
    tag: "UI/UX Design",
    title: "UI/UX Design for Web & Mobile Apps",
    description:
      "Design experiences that captivate and convert. We focus on intuitive interfaces and visual appeal to create designs that truly connect.",
    image: uiuxImg,
  },
  {
    tag: "Graphic Designing",
    title: "Media in Video Editing / Animation / VFX / Poster",
    description:
      "Tell your brand’s story through motion that inspires. We deliver high-quality animations and visuals that make your message unforgettable.",
    image: graphicdesigningImg,
  },
  {
    tag: "Software",
    title: "Software in Custom Software Solutions",
    description:
      "Develop tailored software solutions to solve unique business challenges and enhance efficiency.",
    image: softwareImg,
  },
  {
    tag: "AI Solutions",
    title: "AI Solutions for Modern Businesses",
    description:
      "Empower your business with smart AI solutions that automate, optimize, and deliver measurable results.",
    image: mobileappImg,
  },
  {
    tag: "Security",
    title: "Security in CyberSecurity",
    description:
      "Protect your digital assets with advanced, reliable, and scalable security solutions that evolve with your systems.",
    image: securityImg,
  },
  {
    tag: "Logo Designing",
    title: "Branding in Logo Designing",
    description:
      "Craft a visual identity that speaks your brand’s language. Our creative designs make your brand memorable and timeless.",
    image: barndImg,
  },
  {
    tag: "Digital Marketing",
    title: "Marketing in Digital Marketing & SEO",
    description:
      "Reach your audience and grow faster with data-driven digital strategies that help your brand shine online.",
    image: marketingImg,
  },
];

const Work = () => {
  return (
    <section className="bg-[#003366] text-white py-20 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Solutions Tailored for Your Growth
        </h2>
        <p className="text-gray-100 text-base md:text-lg leading-relaxed">
          Explore our complete suite of digital services built to accelerate
          your business in today’s connected world. From web and app development
          to branding, marketing, and security — we craft innovative solutions
          that deliver measurable results.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 p-4"
          >
            {/* Image with Tag in Top Right Corner */}
            <div className="relative mb-4 overflow-hidden rounded-xl">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute top-0 right-0 bg-[#1266A2] text-white text-[13px] font-semibold px-4 py-1.5 rounded-bl-lg shadow-md">
                {work.tag}
              </div>
            </div>

            {/* Card Content */}
            <div>
              <h3 className="text-lg font-semibold mb-2 leading-snug">
                {work.title.split(" in ")[0]}{" "}
                <span className="text-[#1266A2] font-bold">
                  in {work.title.split(" in ")[1]}
                </span>
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

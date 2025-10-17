import React from "react";
import {
  Code,
  Headphones,
  Shield,
  Link,
  Layout,
  Zap,
  Cpu,
  Wrench,
  BarChart,
} from "lucide-react";

const features = [
  {
    icon: <Code className="text-white w-6 h-6" />,
    title: "Built for Developers",
    desc: "Engineered with precision and flexibility — SUFFICE is designed to simplify every developer’s workflow and accelerate productivity.",
  },
  {
    icon: <Headphones className="text-white w-6 h-6" />,
    title: "24/7 Dedicated Support",
    desc: "Our team is always here for you. Day or night, we ensure your projects run smoothly without interruption.",
  },
  {
    icon: <Shield className="text-white w-6 h-6" />,
    title: "Data Security First",
    desc: "Your trust matters. Every SUFFICE product is built with strong encryption and top-tier security standards.",
  },
  {
    icon: <Link className="text-white w-6 h-6" />,
    title: "Seamless Integration",
    desc: "Easily connect SUFFICE with your favorite tools, APIs, and systems — ensuring smooth collaboration and scalability.",
  },
  {
    icon: <Zap className="text-white w-6 h-6" />,
    title: "Ease of Use",
    desc: "Experience seamless interfaces and intuitive controls that make working with SUFFICE effortless and enjoyable.",
  },
  {
    icon: <Layout className="text-white w-6 h-6" />,
    title: "Creative & Modern Designs",
    desc: "We craft visually stunning, user-focused designs that don’t just look great — they perform brilliantly.",
  },
  {
    icon: <Cpu className="text-white w-6 h-6" />,
    title: "AI-Driven Solutions",
    desc: "Empower your business with smart, AI-enabled tools that automate workflows and boost efficiency.",
  },
  {
    icon: <Wrench className="text-white w-6 h-6" />,
    title: "Long-Term Technical Support",
    desc: "We believe in lasting partnerships — offering continuous updates, performance enhancements, and full technical support for your brand.",
  },
  {
    icon: <BarChart className="text-white w-6 h-6" />,
    title: "Scalable for Any Business",
    desc: "From startups to enterprises, SUFFICE grows with you — adaptable, flexible, and ready to handle your future needs.",
  },
];

const WhyChoose = () => {
  return (
    <section
      className="relative py-24 px-6 md:px-20 text-center overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `
          linear-gradient(rgba(18,102,162,0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,128,255,0.12) 1px, transparent 1px),
          linear-gradient(45deg, rgba(0,160,255,0.05) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(0,100,200,0.05) 25%, transparent 25%)
        `,
        backgroundSize: "40px 40px, 40px 40px, 80px 80px, 80px 80px",
        backgroundPosition: "0 0, 0 0, 20px 20px, 20px 20px",
      }}
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#1266A2] mb-4">
        Why Choose Suffice?
      </h2>
      <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
        Discover the power of partnering with a results-driven tech team that delivers
        innovation, performance, and long-term success for your brand.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-md border border-gray-200 transition-all duration-500 bg-white"
          >
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1266A2] to-[#0a3b63] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-80"></div>

            {/* Inner Card Content */}
            <div className="relative z-10 p-6 flex items-start gap-4 transition-colors duration-300 group-hover:bg-transparent">
              <div className="bg-[#07263C] p-3 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-[#07263C] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;

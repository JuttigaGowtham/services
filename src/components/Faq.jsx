import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import bulbImg from "./assets/blub.jpg"; // ✅ Local bulb image

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide end-to-end solutions including web development, UI/UX design, cloud integration, and custom software tailored to your business needs.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "The project duration varies depending on its scope and complexity, but we ensure transparent timelines and consistent updates throughout development.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! We provide continuous support and maintenance services to ensure your solutions stay optimized and up-to-date.",
  },
  {
    question: "Can you customize projects based on client needs?",
    answer:
      "Absolutely! We specialize in creating tailor-made solutions that align with your unique goals and requirements.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use a wide range of technologies including React, Node.js, Python, AWS, and modern frameworks to deliver cutting-edge solutions.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-28 px-6 overflow-hidden">
      {/* Lightbulb Images (Corners) */}
      <img
        src={bulbImg}
        alt="bulb"
        className="absolute top-10 left-10 w-20 h-20 opacity-90"
      />

      <img
        src={bulbImg}
        alt="bulb"
        className="absolute top-10 right-10 w-22 h-22 opacity-90"
      />

      <img
        src={bulbImg}
        alt="bulb"
        className="absolute bottom-8 left-10 w-16 h-16 opacity-90"
      />

      {/* ✅ Large Center Bulb at Bottom */}
      <img
        src={bulbImg}
        alt="bulb"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-28 h-28 opacity-95"
      />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1266A2] mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          We Get It—Curiosity Leads to Success! Got questions? That's a great
          sign. Here are some answers for you.
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#1266A2] rounded-2xl overflow-hidden bg-white shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left px-6 py-5 font-semibold text-gray-900 focus:outline-none"
            >
              {faq.question}
              <span className="text-[#1266A2]">
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 pb-5 text-gray-700 text-sm leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;

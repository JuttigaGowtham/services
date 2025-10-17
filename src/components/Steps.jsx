import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import step1Img from "./assets/step1.jpg";
import step2Img from "./assets/step2.jpg";
import step3Img from "./assets/step3.jpg";
import step4Img from "./assets/step4.jpg";
import step5Img from "./assets/step5.jpg";
import step7Img from "./assets/step7.jpg";
import step8Img from "./assets/step8.jpg";

const steps = [
  {
    number: "Step-1",
    title: "Initial Talk & Discovery",
    description:
      "You reach out, and we have a quick consultation to understand your goals and define the basic scope.",
    img: step1Img,
  },
  {
    number: "Step-2",
    title: "Proposal, Document Review",
    description:
      "We share the full project proposal and the Requirement Document for your review. Please confirm these requirements accurately reflect your vision. Your approval starts the clock!",
    img: step2Img,
  },
  {
    number: "Step-3",
    title: "Design & User Experience (UX/UI)",
    description:
      "Our team designs the visual look and feel, delivering interactive prototypes within 2–3 weeks.",
    img: step3Img,
  },
  {
    number: "Step-4",
    title: "Core Development",
    description:
      "We build the service and write the code (2–3 weeks). We’ll keep you updated on our progress.",
    img: step4Img,
  },
  {
    number: "Step-5",
    title: "Quality Assurance (QA)",
    description:
      "Our experts rigorously test the entire service to guarantee it is stable, secure, and bug-free (1–2 weeks).",
    img: step5Img,
  },
  {
    number: "Step-6",
    title: "User Acceptance Testing (UAT)",
    description:
      "You test the final product to confirm it meets all original goals before we launch.",
    img: step5Img,
  },
  {
    number: "Step-7",
    title: "Deployment & Go-Live",
    description:
      "We launch the service, moving it live for your audience to begin using.",
    img: step7Img,
  },
  {
    number: "Step-8",
    title: "Project Complete & Support",
    description:
      "We hand over all files and provide necessary post-launch support for a smooth transition.",
    img: step8Img,
  },
];

// ========================= StepCard ==========================
const StepCard = ({ step, index }) => {
  const imgControls = useAnimation();
  const textControls = useAnimation();
  const dotControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

  useEffect(() => {
    if (inView) {
      const delay = index * 0.2;
      imgControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut", delay },
      });
      textControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut", delay: delay + 0.1 },
      });
      dotControls.start({
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 260, damping: 20, delay },
      });
    }
  }, [inView, imgControls, textControls, dotControls, index]);

  return (
    <div
      ref={ref}
      className="relative flex items-start md:items-center mb-20 last:mb-0"
    >
      {/* Left image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={imgControls}
        className="w-[25%] flex justify-end pr-6 z-10"
      >
        <img
          src={step.img}
          alt={step.title}
          className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Center Dot (line is now global) */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={dotControls}
          className="w-5 h-5 bg-[#1FA8F5] rounded-full shadow-[0_0_15px_#1FA8F5] relative z-10"
        />
      </div>

      {/* Right content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={textControls}
        className="w-[65%] pl-6"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          <span className="text-[#1FA8F5]">{step.number}</span> : {step.title}
        </h3>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
};

// ========================= Steps Section ==========================
const Steps = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#021221] via-[#04294C] to-[#021221] text-white py-24 px-4 md:px-12 overflow-hidden">
      {/* Background Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05284C]/40 via-[#021C36]/50 to-[#021221]" />

      {/* Header */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          How to Get Started with{" "}
          <span className="text-[#1FA8F5]">Suffice?</span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We turn your idea into a successful digital solution through a clear,
          collaborative, 8-step journey.
        </p>
      </div>

      {/* Steps Timeline */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col">
        {/* ✅ Continuous white line (Single global line) */}
        <div className="absolute left-[25%] md:left-[26%] top-0 bottom-0 w-[3px] bg-white/50 rounded-full" />

        {steps.map((step, index) => (
          <StepCard key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Steps;

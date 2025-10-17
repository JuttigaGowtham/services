import React from "react";
import software from "./assets/software.jpg";
import marketing from "./assets/marketing.jpg";
import techhub from "./assets/techhub.jpg";
import next from "./assets/next.jpg";

const CaptureSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
      {/* ===================== LEFT IMAGE COLLAGE ===================== */}
      <div className="relative md:w-1/2 flex justify-center items-center">
        {/* Pink blob shape */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500 rounded-[40%_60%_70%_30%_/_60%_40%_30%_70%] opacity-90 -z-10"></div>

        {/* Yellow blob shape */}
        <div className="absolute bottom-4 right-4 w-40 h-40 bg-yellow-400 rounded-[60%_40%_70%_30%_/_40%_60%_30%_70%] opacity-90 -z-10"></div>

        {/* Image stack container */}
        <div className="relative w-[360px] h-[360px]">
          {/* Top image */}
          <img
            src={software}
            alt="Software"
            className="absolute top-0 right-6 w-48 h-36 object-cover rounded-lg shadow-lg"
          />
          {/* Left image */}
          <img
            src={marketing}
            alt="Marketing"
            className="absolute top-24 left-0 w-40 h-32 object-cover rounded-lg shadow-lg"
          />
          {/* Middle image */}
          <img
            src={techhub}
            alt="Tech Hub"
            className="absolute top-28 right-10 w-52 h-36 object-cover rounded-lg shadow-lg"
          />
          {/* Bottom image */}
          <img
            src={next}
            alt="Next Project"
            className="absolute bottom-0 left-10 w-64 h-40 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* ===================== RIGHT TEXT CONTENT ===================== */}
      <div className="md:w-1/2 text-left">
        <h3 className="text-5xl font-semibold text-black mb-4">
          Capture Everything with SUFFICE
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Design, develop, and launch stunning websites that reflect your brand
          at its best.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          With <span className="font-semibold">SUFFICE</span>, every site is built
          for creativity, performance, and seamless user experience.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From portfolios to enterprise solutions — we help you capture
          attention and drive results.
        </p>
      </div>
    </section>
  );
};

export default CaptureSection;

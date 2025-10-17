import React from "react";
import laptop from "./assets/laptop.jpg";
import globe from "./assets/globe.jpg";

const ShowcaseSection = () => {
  return (
    <section className="bg-white py-28 px-8 md:px-24 flex flex-col gap-32">
      {/* ===================== FIRST ROW ===================== */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Watch Our Work in{" "}
            <span className="text-blue-700">SUFFICE</span>
          </h3>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            See the transformation in action — explore our live demos and
            witness ideas turn into innovation.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            At <span className="font-semibold text-blue-700">SUFFICE</span>, every project
            blends design excellence with powerful performance to build trust
            and success.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={laptop}
            alt="Laptop Demo"
            className="w-[480px] md:w-[600px] rounded-3xl shadow-2xl object-cover transform hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>

      {/* ===================== SECOND ROW ===================== */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Left Image (Globe) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={globe}
            alt="Global Cloud"
            className="w-[420px] md:w-[520px] object-contain transform hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Deploy in <span className="text-blue-700">Seconds</span>
          </h3>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            Launch faster with{" "}
            <span className="font-semibold text-blue-700">SUFFICE’s</span> secure
            cloud infrastructure.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Our automation ensures smooth, zero-downtime deployments with top
            performance and scalability — turning your prototype into a
            production-ready experience in just a few clicks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

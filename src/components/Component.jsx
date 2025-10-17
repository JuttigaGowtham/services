import React from "react";
import tabImage from "./assets/tabimage.jpg"; 

const Component = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 flex flex-col items-center text-center">
      {/* Heading Section */}
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
          Packed with Thousands of Powerful Features
        </h2>
        <p className="text-gray-600 text-lg font-medium">
          From Website Design to App Development —{" "}
          <span className="font-semibold">SUFFICE</span> Delivers It All.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
        {/* Left Text */}
        <div className="text-left md:w-1/2">
          <h3 className="text-5xl font-semibold text-black mb-4">
            Build Your Business Tech Solution
          </h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            Supercharge your business with custom web and mobile apps, AI
            solutions, and digital transformation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold">SUFFICE</span>, we build
            technology that grows with your brand — fast, secure, and scalable.
            Our team blends creativity and performance to deliver impactful
            results from concept to launch.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative md:w-1/2 flex justify-center">
          {/* Floating Decorative Dots */}
          <span className="absolute top-0 left-1/3 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></span>
          <span className="absolute top-10 right-6 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></span>
          <span className="absolute bottom-8 left-10 w-5 h-5 bg-pink-500 rotate-45"></span>
          <span className="absolute bottom-0 right-12 w-4 h-4 bg-blue-700 rotate-45"></span>

          {/* Tablet Image */}
          <img
            src={tabImage}
            alt="Tablet Preview"
            className="w-[500px] md:w-[550px] drop-shadow-lg transform rotate-3"
          />
        </div>
      </div>
    </section>
  );
};

export default Component;

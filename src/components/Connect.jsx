"use client";

import React from "react";
import { Component } from "./ui/circular-gallery";
import { Phone } from "lucide-react";

// ✅ Import your local images
import webdevelopment from "./assets/webdevelopment.jpg";
import appdevelopment from "./assets/appdevelopment.jpg";
import graphicdesign from "./assets/graphicdesign.jpg";
import security from "./assets/security.jpg";
import software from "./assets/software.jpg";
import uiux from "./assets/uiux.jpg";
import logodesign from "./assets/logodesign.jpg";
import brand from "./assets/brand.jpg";
import aisolutions from "./assets/aisolutions.jpg";

const connectItems = [
  { image: webdevelopment, text: "Web Development" },
  { image: appdevelopment, text: "App Development" },
  { image: graphicdesign, text: "Graphic Design" },
  { image: security, text: "Cyber Security" },
  { image: software, text: "Software Development" },
  { image: uiux, text: "UI/UX Design" },
  { image: logodesign, text: "Logo Design" },
  { image: brand, text: "Brand Strategy" },
  { image: aisolutions, text: "AI Solutions" },
];

const Connect = () => {
  return (
    <section className="flex flex-col w-full min-h-screen justify-center items-center bg-[#002B5B] text-white text-center relative overflow-hidden py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        You’ve reached the end — now let’s start something new!
      </h1>

      {/* Book a Call Button */}
      <button className="flex items-center gap-2 bg-white text-[#002B5B] px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-blue-100 transition-all mb-10">
        <Phone className="w-5 h-5" />
        Book a Call
      </button>

      {/* Circular Gallery */}
      <div className="w-full max-w-screen-xl mx-auto h-[70vh] overflow-hidden relative border-none shadow-none">
        <Component
          items={connectItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
        />
      </div>
    </section>
  );
};

export default Connect;

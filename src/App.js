import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Component from "./components/Component";
import CaptureSection from "./components/CaptureSection";
import ShowcaseSection from "./components/ShowcaseSection";
import WhyChoose from "./components/WhyChoose";
import Steps from "./components/Steps";
import Work from "./components/Work";
import Demo from "./components/demo";
import OurWork from "./components/Ourwork";
import Faq from "./components/Faq";
import Connect from "./components/Connect";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      {/* ✅ Navbar visible everywhere */}
      <Navbar />

      <div className="overflow-x-hidden scroll-smooth">
        {/* ✅ Home sections */}
        <section id="home">
          <Hero />
        </section>

        <section id="component">
          <Component />
        </section>

        <section id="capture">
          <CaptureSection />
        </section>

        <section id="showcase">
          <ShowcaseSection />
        </section>

        <section id="whychoose">
          <WhyChoose />
        </section>

        <section id="steps">
          <Steps />
        </section>

        {/* ✅ Services Page */}
        <section id="services">
          <Work />
        </section>

        <section id="demo">
          <Demo />
        </section>

        {/* ✅ Our Work Page */}
        <section id="work">
          <OurWork />
        </section>

        <section id="faqs">
          <Faq />
        </section>

        {/* ✅ Contact Page (Connect + Form) */}
        <section id="connect">
          <Connect />
        </section>

        <section id="contact">
          <Form />
        </section>

        {/* ✅ Footer and bottom contact */}
        <div className="mt-0">
          <Footer />
        </div>

        <div className="-mt-40 sm:-mt-44 md:-mt-48">
          <Contact />
        </div>
      </div>
    </Router>
  );
}

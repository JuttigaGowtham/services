import React from "react";
import sufficeLogo from "./assets/sufficelogos.jpg";
import sufficeSide from "./assets/sufficeside.jpg";

// === ICONS ===
const Github = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Twitter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-3.3 1.4H6.7c-1.6 0-3.3-1.4-3.3-1.4s1.7-3 3.3-4.4C5.7 6.1 5 4 5 4s1 .8 2.5 1.6C9 4.2 12.5 3 12.5 3s3.5 1.2 4.5 2.6c1.5-.8 2.5-1.6 2.5-1.6z" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Facebook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const MapPin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Clock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// === UPDATED LOGO SECTION (same as Navbar) ===
const SufficeLogoSection = () => (
  <div className="flex items-center gap-3 cursor-pointer">
    {/* Main Logo */}
    <img
      src={sufficeLogo}
      alt="Suffice Logo"
      className="w-12 h-12 rounded-full object-cover border-2 border-white"
    />

    {/* Side Text Image */}
    <img
      src={sufficeSide}
      alt="Suffice Side"
      className="h-8  "
    />
  </div>
);

export default function Footer() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-end">
      <footer className="w-full bg-[#0d243d] text-gray-300 font-sans p-8 md:p-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Logo and Info */}
            <div className="space-y-6">
              <SufficeLogoSection />
              <p className="text-sm">
                Strategic web design, and campaigns tailored to drive results and
                conversions.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>
                    Address: Phase 9, Road No 15, KPHB, Hyderabad, India
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>
                    Office Hours: Monday to Friday, 9:00 AM - 6:00 PM IST
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Company */}
            <div className="md:pl-8">
              <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Achievements</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ's</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brands</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">App Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Logo Creation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Graphic Designing</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">News Letter</h3>
              <p className="text-sm mb-4">
                Stay ahead with design & marketing tips and strategies that drive results.
              </p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter E-mail"
                  className="w-full bg-white text-gray-800 px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-white p-3 rounded-r-md hover:bg-gray-200 transition-colors">
                  <ArrowRight className="text-[#0d243d] w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-8" />

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
            <p>&copy;2025 Suffice. All rights reserved</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Terms of service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

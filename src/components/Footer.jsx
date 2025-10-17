import React from "react";
import { FiDownload } from "react-icons/fi";

export const ScreenFitText = () => {
  const containerRef = React.useRef(null);
  const textRef = React.useRef(null);

  React.useEffect(() => {
    const resizeText = () => {
      const container = containerRef.current;
      const text = textRef.current;
      if (!container || !text) return;
      const containerWidth = container.offsetWidth;
      let min = 1;
      let max = 2500;
      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = mid + "px";
        if (text.offsetWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }
      text.style.fontSize = max + "px";
    };
    resizeText();
    window.addEventListener("resize", resizeText);
    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  return (
    <div
      className="flex h-full w-full items-center overflow-hidden bg-white absolute inset-0 z-0 pointer-events-none"
      ref={containerRef}
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              whitespace-nowrap text-center font-bold uppercase
              bg-clip-text text-transparent
              bg-gradient-to-r from-black/10 to-black/10 drop-shadow-md"
          ref={textRef}
        >
          Suffice
        </span>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative w-full px-6 py-32 text-center text-black overflow-hidden z-10 bg-white min-h-[400px]">
      {/* Animated Background Fit Text */}
      <ScreenFitText />

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col md:flex-row items-center justify-between px-6 py-4 text-black text-sm z-20 border-t border-white/10">
        {/* Left side */}
        {/* <p>©2025 Suffice. All rights reserved</p> */}

        {/* Right side */}
        {/* <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#terms" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="#privacy" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div> */}
      </div>

      {/* Responsive styles */}
      <style>{`
        .newsletter {
          position: absolute;
          left: 32px;
          bottom: 32px;
          z-index: 20;
        }
        @media (max-width: 700px) {
          .newsletter {
            left: 50%;
            bottom: 16px;
            transform: translateX(-50%);
            width: 90vw;
            max-width: 98vw;
          }
          footer {
            padding-bottom: 64px !important;
            min-height: 340px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

"use client";

import React from "react";

export default function WorldMapSection() {
  return (
    <div className="relative w-full h-[700px] bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-10 z-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Remote Connectivity
        </h2>
        <p className="text-neutral-400 mt-3 max-w-xl">
          Break free from traditional boundaries. Work from anywhere with seamless global connections.
        </p>
      </div>

      {/* Map Container */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        
        {/* SVG World Map */}
        <svg
          viewBox="0 0 1200 600"
          className="w-full max-w-6xl"
          fill="none"
        >
          {/* Dotted Map */}
          <image
            href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution_gray_dots.png"
            width="1200"
            height="600"
            opacity="0.4"
          />

          {/* Animated Paths */}
          <path
            d="M200 200 Q400 100 600 300"
            stroke="#00bfff"
            strokeWidth="2"
            fill="none"
            className="animate-path"
          />
          <path
            d="M600 300 Q800 100 1000 200"
            stroke="#00bfff"
            strokeWidth="2"
            fill="none"
            className="animate-path"
          />
          <path
            d="M300 400 Q500 200 700 400"
            stroke="#00bfff"
            strokeWidth="2"
            fill="none"
            className="animate-path"
          />

          {/* Dots */}
          <circle cx="200" cy="200" r="5" fill="#00bfff" />
          <circle cx="600" cy="300" r="5" fill="#00bfff" />
          <circle cx="1000" cy="200" r="5" fill="#00bfff" />
          <circle cx="300" cy="400" r="5" fill="#00bfff" />
          <circle cx="700" cy="400" r="5" fill="#00bfff" />
        </svg>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        .animate-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: dash 4s linear infinite;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
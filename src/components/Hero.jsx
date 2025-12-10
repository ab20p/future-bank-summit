import React from "react";
import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-100">
      {/* Background Accents */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.15),transparent)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold tracking-wide">
              4th Annual Event
            </span>

            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Future Banks Summit & Awards
            </h1>

            <p className="text-lg text-gray-700 mt-4">
              September 11–12, 2023 • Riyadh Marriott Hotel
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Shaping the future of banking transformation through innovation,
              digitalization, customer experience, fintech integration, and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-md hover:shadow-lg transition"
                href="#"
              >
                Register Now
              </a>
              <a
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
                href="#about"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="p-6 bg-white rounded-3xl shadow-xl border w-fit">
              <img
                src={hero}
                alt="Future Banks Summit"
                className="h-48 md:h-56 object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

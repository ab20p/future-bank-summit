import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-center text-gray-900">
          Event Overview
        </h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600 mt-3">
          Discover how KSA’s banking sector is transforming for the future.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-10">

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900">Digital Banking Evolution</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              The banking industry worldwide is undergoing phenomenal change,
              creating new opportunities for modernization and innovation.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900">Why Future Banks Summit?</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              The 4th Annual Future Banks Summit KSA 2023 showcases innovation,
              real-world case studies, and strategic insights for banking leaders.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from "react";
import { FcPortraitMode } from "react-icons/fc";

const topics = [
  "Vision 2030 – KSA as a global financial leader",
  "Digital transformation & agile banking",
  "Digital payments & future payment innovations",
  "Next-gen customer experience",
  "Data & analytics for smarter banking",
  "Open banking & financial inclusion",
  "Cloud transformation",
  "Future of NBFIs",
  "Digital-only banks for Gen-Z",
  "Metaverse banking"
];

const attendees = [
  "CIOs, CTOs, Heads of Technology",
  "Chief Digital Officers, Heads of Digital Transformation",
  "Chief Marketing Officers, Heads of Marketing",
  "Heads of Retail Banking",
  "Heads of Corporate Banking",
  "Heads of Customer Experience",
  "Heads of Cards & Payments",
  "Head of Data & Analytics",
  "Heads of Governance & Compliance"
];

export default function Topics() {
  return (
    <section id="topics" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topics Section */}
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Topic Highlights
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Key strategic areas shaping the future of Saudi banking.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl border shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-gray-900 font-medium leading-relaxed">
                {topic}
              </h4>
            </div>
          ))}
        </div>

        {/* Who Will You Meet Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Who Will You Meet
          </h2>
          <p className="mt-3 text-center text-gray-600">
            Leading professionals and decision-makers in the banking sector.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attendees.map((person, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl border shadow-sm hover:shadow-md transition flex items-center gap-4"
              >
                <FcPortraitMode  className="w-10 h-10 text-blue-500 flex-shrink-0" />
                <h4 className="text-gray-900 font-medium leading-relaxed">
                  {person}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Topics from "./components/Topics";
import Footer from "./components/Footer";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar with prop to open modal */}
      <Navbar onRegisterClick={openModal} />

      <main className="flex-grow">
        <Hero />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
          <Topics />
        </div>
      </main>

      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative transform transition-all">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
              Register Now
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Join us at the Future Banks Summit, Riyadh
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
              <button
                type="submit"
                className="mt-2 px-5 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Topics from "./components/Topics";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
        
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
          <Topics />
        </div>
      </main>
      <Footer />
    </div>
  );
}

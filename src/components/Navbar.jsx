import React from "react";
import logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
  return (
    <header className="backdrop-blur-lg bg-white/70 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10" />
            {/* <div>
              <h3 className="font-semibold text-gray-900 leading-none">
                Future Banks Summit
              </h3>
              <p className="text-xs text-gray-600">Riyadh, KSA</p>
            </div> */}
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition">
              About
            </a>
            <a href="#topics" className="hover:text-primary transition">
              Topics
            </a>
            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-primary text-white rounded-lg shadow hover:shadow-lg transition"
            >
              Register
            </a>
          </nav>

          <button className="md:hidden p-2 rounded border"><TiThMenu /></button>
        </div>
      </div>
    </header>
  );
}

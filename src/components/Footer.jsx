import React from "react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-white">Future Banks Summit KSA</h3>
            <p className="mt-2 text-sm">Riyadh Marriott Hotel</p>
            <p className="text-sm">September 11–12, 2023</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white">Contact Us</h4>
            <p className="mt-2 text-sm">Email: info@example.com</p>
            <p className="text-sm">Website: ksa.futurebanksummit.com</p>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Future Banks Summit — All rights reserved.
        </div>
      </div>
    </footer>
  );
}

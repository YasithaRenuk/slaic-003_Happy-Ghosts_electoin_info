import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo and title */}
        <div className="flex flex-col items-center">
          <img src="/path-to-your-logo.png" alt="Election Info" className="block h-12 w-auto mb-2" />
          <p className="font-bold text-lg">Submission for AI Driven Hackathon</p>
        </div>

        {/* Team Information */}
        <div className="mt-4">
          <p className="text-sm">
            Team DUMNOOBS · Yasitha Renuka · Sanoj Vishwajith · Jithma Menuka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

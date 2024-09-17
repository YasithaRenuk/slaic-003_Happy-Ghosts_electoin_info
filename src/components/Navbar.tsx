import React from "react";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <nav className="bg-red-800 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo and title */}
              <img src="/path-to-your-logo.png" alt="Election Info" className="block h-8 w-auto" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Navigation Links */}
                <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/win-predictor" className="text-white px-3 py-2 rounded-md text-sm font-medium">Win Predictor</a>
                <a href="/manifesto" className="text-white px-3 py-2 rounded-md text-sm font-medium">Manifesto</a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y--0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Button> Ask Live</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

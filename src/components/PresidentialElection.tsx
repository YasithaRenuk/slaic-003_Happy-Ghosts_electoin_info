import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const PresidentialElection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-10">
      {/* Title */}
      <h1 className="text-5xl font-bold text-red-700 tracking-wide">
        PRESIDENTIAL ELECTION
      </h1>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Link href="/#winprediction">
          <Button className="px-6 py-2 bg-white text-red-700 font-semibold border-2 border-red-700 rounded-full hover:bg-red-50 transition-colors">
            Win Predictor
          </Button>
        </Link>
        <Link href="/chat">
          <Button className="px-6 py-2 bg-red-700 text-white font-semibold rounded-full hover:bg-red-800 transition-colors">
            ⚡ Compare Candidates
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PresidentialElection;

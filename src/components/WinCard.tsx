import Image from "next/image";
import React from "react";
import Anura from "../public/Anura.png";
import Ranil from "../public/ranil.png";
import Sajith from "../public/sajith.png";
import Namal from "../public/namal.png";

interface CardProps {
  percentage: number;
  description: string;
  name: string;
}

const WinCard: React.FC<CardProps> = ({ percentage, description, name }) => {
  let image;

  if (name === "anura") {
    image = Anura;
  } else if (name === "sajith") {
    image = Sajith;
  } else if (name === "namal") {
    image = Namal;
  } else {
    image = Ranil;
  }

  return (
    <div className="max-w-64 bg-white shadow-lg rounded-xl overflow-hidden border-2 border-gray-300">
      <div className=" flex justify-center items-center">
        <Image
          className="max-w-xs h-auto"
          src={image}
          alt="Person"
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-5xl font-bold text-gray-800">{percentage}%</h2>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default WinCard;

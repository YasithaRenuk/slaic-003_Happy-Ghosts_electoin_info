import Image from "next/image";
import React from "react";
import Npp from "../public/NPP.png";
import RW from "../public/RW.png";
import Sjb from "../public/SJB.png";
import Np from "../public/NP.png";
import { Button } from "./ui/button";

interface CardProps {
  description: string;
  name: string;
  pdfLink: string; // New prop for the Google Drive PDF link
}

const ManifestosCard: React.FC<CardProps> = ({ description, name, pdfLink }) => {
  let image;

  if (name === "npp") {
    image = Npp;
  } else if (name === "sjb") {
    image = Sjb;
  } else if (name === "np") {
    image = Np;
  } else {
    image = RW;
  }

  return (
    <div className="max-w-64 bg-white shadow-lg rounded-xl overflow-hidden border-2 border-gray-300">
      <div className="flex justify-center items-center">
        <Image className="max-w-xs h-auto mt-2" src={image} alt="Party Logo" />
      </div>
      <div className="p-6 text-center">
        <p className=" text-gray-600">{description}</p>
        <a href={pdfLink} target="_blank" rel="noopener noreferrer">
          <Button>View Manifesto</Button>
        </a>
      </div>
    </div>
  );
};

export default ManifestosCard;

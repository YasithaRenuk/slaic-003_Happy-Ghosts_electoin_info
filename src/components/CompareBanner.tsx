import React from "react";
import Image from "next/image";
import Link from "next/link";
import Background from "../public/coverC.png";
import { Button } from "./ui/button";

const CompareBanner: React.FC = () => {
  return (
    <div className="relative h-[600px] w-full flex justify-center items-center bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={Background}
          alt="Candidates Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="z-0"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-end w-full max-w-screen-xl px-8 py-4">
        <h1 className="text-5xl font-extrabold text-black mb-4">
          Compare Your Candidate with Others
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mb-8">
          Every candidate brings a unique vision and manifesto to the table. To
          help you make an informed decision, we’ve created an AI assistant that
          allows you to compare the manifestos of different parties and
          candidates side by side. Discover who aligns with your values.
        </p>
        <Link href="/chat">
          <Button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-500 transition">
            ⚡ Compare Candidates
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CompareBanner;

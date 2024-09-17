import React from "react";
import WinCard from "./WinCard";

const WinPrediction: React.FC = () => {
  const description =
    "Majority of people are about to give their chance for this guy wow patta patat pata elama gemmac thawa monahari methanta danna one";

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8" id="winprediction">
      <h5 className="text-center text-black font-bold">Win Prediction</h5>
      <h2 className="text-center text-red-700 font-bold">June 2024</h2>
      <h2 className="text-center text-red-700 font-bold mb-8">IHP’s Sri Lanka Opinion Tracker Survey (SLOTS) MRP provisional estimates of Presidential Election voting intent in all adults</h2>
      <div className="flex justify-center gap-8">
        {/* Card for Anura */}
        <WinCard percentage={30} description={description} name="anura" />

        {/* Card for Sajith */}
        <WinCard percentage={43} description={description} name="sajith" />

        {/* Card for Ranil */}
        <WinCard percentage={20} description={description} name="ranil" />

        {/* Card for Namal */}
        <WinCard percentage={7} description={description} name="namal" />
      </div>
    </div>
  );
};

export default WinPrediction;

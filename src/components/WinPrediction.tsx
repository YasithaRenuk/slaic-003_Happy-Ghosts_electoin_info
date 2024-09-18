import React from "react";
import WinCard from "./WinCard";

const WinPrediction: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8" id="winprediction">
      <h5 className="text-center text-black font-bold"><b>Win Prediction</b></h5>
      <h2 className="text-center text-red-700 font-bold">June 2024</h2>
      <h2 className="text-center text-red-700 font-bold mb-8">IHP’s Sri Lanka Opinion Tracker Survey (SLOTS) MRP provisional estimates of Presidential Election voting intent in all adults</h2>
      <div className="flex justify-center gap-8">
        {/* Card for Anura */}
        <WinCard percentage={30} description={"Anura Kumara Dissanayake is a Sri Lankan politician known for advocating social justice, economic reform, and anti-corruption through the JVP."} name="anura" />

        {/* Card for Sajith */}
        <WinCard percentage={43} description={"Sajith Premadasa is a Sri Lankan politician, leader of the SJB, advocating for social welfare, youth empowerment, and infrastructure development."} name="sajith" />

        {/* Card for Ranil */}
        <WinCard percentage={20} description={"Ranil Wickremesinghe is a veteran Sri Lankan politician, former Prime Minister, and leader of the UNP, focusing on economic development."} name="ranil" />

        {/* Card for Namal */}
        <WinCard percentage={7} description={"Namal Rajapaksa is a Sri Lankan politician, son of former President Mahinda Rajapaksa, serving as a member of parliament since 2010."} name="namal" />
      </div>
    </div>
  );
};

export default WinPrediction;

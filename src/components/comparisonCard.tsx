import React from "react";

interface ComparisonCardProps {
  name: string;
  pointArray: Array<{
    pointTitle: string;
    point: string;
  }>;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  name,
  pointArray = [],
}) => {
  let color = "bg-amber-600"; // Default color

  const simpleName = name.toLowerCase(); // Corrected to `toLowerCase()`
  if (simpleName.includes("npp")) {
    color = "bg-purple-700";
  } else if (simpleName.includes("sajith")) {
    color = "bg-green-700";
  }

  return (
    <div className="border p-4 rounded-lg relative">
      {/* Dynamic color class applied */}
      <div
        className={`absolute top-[-16px] px-3 py-1 rounded-lg text-white ${color}`}
      >
        <h4 className="font-semibold">{name}</h4>
      </div>
      <div className="mt-6">
        <h5 className="font-bold text-gray-700 mb-2">Main Points</h5>
        <ul className="list-disc list-inside">
          {pointArray.map((point, idx) => (
            <li key={idx} className="text-gray-700 mb-2">
              <strong>{point.pointTitle}:</strong> {point.point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComparisonCard;

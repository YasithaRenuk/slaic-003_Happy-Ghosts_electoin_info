import React from 'react';

interface ComparisonBubbleProps {
  title?: string;
  ComparisonArray?: Array<{
    name: string;
    pointArray: Array<{
      pointTitle: string;
      point: string;
    }>;
  }>;
  keyPoints?: string;
}

const ComparisonBubble: React.FC<ComparisonBubbleProps> = ({
  title = "Here's a Comparison between NPP and SJP Economic views",
  ComparisonArray = [],
  keyPoints = "",
}) => {
  return (
    <div className="bg-white p-6 m-4 rounded-xl border shadow-md">
      <h3 className="font-bold text-lg text-black mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-8">
        {ComparisonArray.length > 0 ? (
          ComparisonArray.map((manifesto, index) => (
            <div key={index} className="border p-4 rounded-lg relative">
              <div
                className={`absolute top-[-16px] px-3 py-1 rounded-lg text-white ${
                  manifesto.name.includes("NPP")
                    ? "bg-purple-700"
                    : "bg-green-700"
                }`}
              >
                <h4 className="font-semibold">{manifesto.name}</h4>
              </div>
              <div className="mt-6">
                <h5 className="font-bold text-gray-700 mb-2">Main Points</h5>
                <ul className="list-disc list-inside">
                  {manifesto.pointArray.map((point, idx) => (
                    <li key={idx} className="text-gray-700 mb-2">
                      <strong>{point.pointTitle}:</strong> {point.point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p>No comparison data available.</p>
        )}
      </div>
      {keyPoints && (
        <div className="mt-6 border-t pt-4">
          <p className="text-sm text-gray-800">
            <strong>In Conclusion:</strong> {keyPoints}
          </p>
        </div>
      )}
    </div>
  );
};

export default ComparisonBubble;

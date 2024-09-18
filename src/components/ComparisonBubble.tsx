import React from 'react';
import ComparisonCard from './comparisonCard';

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
              <ComparisonCard name={manifesto.name} pointArray={manifesto.pointArray}/>
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

import React from 'react';

export default function Histogram({ data }) {
  if (!data || data.length === 0) {
    return <div style={{ padding: '20px' }}>No data to display</div>;
  }

  const maxValue = Math.max(...data);

  return (
    <div className="flex flex-row items-end justify-center w-full h-screen border-2 border-gray-300">

      {data.map((value, index) => (
        <div 
        className="bg-red-800 w-1/6"
        style={{
            height: `${(value / maxValue) * 100}%`,
          }}
        />
      ))}

    </div>
  );
}
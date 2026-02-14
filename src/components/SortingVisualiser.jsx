import Histogram from './Histogram.jsx';
import { useState, useEffect } from 'react'
import { shuffleArray } from "../algorithms/shuffle";

export default function SortingVisualiser() {
  const [array, setArray] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [size, setSize] = useState(10);

  useEffect(() => {
    const orderedArray = Array.from({ length: size }, (_, i) => i + 1);
    setArray(orderedArray);
  }, [size]);

  return (
    <div className="p-12">
      <div className="flex text-3xl gap-10">
        <p className="">BubbleSort</p>
        <button onClick={() => setArray(shuffleArray(array))} className="hover:text-gray-300 cursor-pointer ml-15">Shuffle</button>
        <button className="hover:text-gray-300 cursor-pointer">Sort</button>

        {/* Number of elements*/}
        <div className='flex flex-col'>
          <h1>Number of elements: {size}</h1>
          <input
          type="range"
          min="10"
          max="500"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="mb-4"
          />
        </div>
      </div>
    <div className="flex flex-col items-center justify-center w-full h-screen border-2 border-gray-300">
      <Histogram data={array} /> 
    </div>
    </div>
  );
}
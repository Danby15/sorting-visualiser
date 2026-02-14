import Histogram from './Histogram.jsx';
import { useState, useEffect } from 'react'
import { shuffleArray } from "../algorithms/shuffle";
import { bubbleSort } from "../algorithms/bubbleSort"; // Import your algorithm
import useSortingPlayback from "../hooks/useSortingPlayback"; // Import the hook

export default function SortingVisualiser() {
  const [array, setArray] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [size, setSize] = useState(10);
  const [steps, setSteps] = useState([]);
  
  const {
    currentState,
    isPlaying,
    stop
  } = useSortingPlayback(steps, 1); // 100ms per step

  useEffect(() => {
    const orderedArray = Array.from({ length: size }, (_, i) => i + 1);
    setArray(orderedArray);
    stop(); // Stop animation when size changes
    setSteps([]);
  }, [size]);

  const handleShuffle = () => {
    stop(); // Stop any ongoing animation
    const shuffled = shuffleArray(array);
    setArray(shuffled);
    setSteps([]); // Clear any existing steps
  };

  const handleSort = () => {
    stop(); // Stop any ongoing animation
    const sortingSteps = bubbleSort(array);
    setSteps(sortingSteps);
  };

  // Display either the current step's array or the original array
  const displayArray = steps.length > 0 ? currentState.array : array;

  return (
    <div className="p-12">
      <div className="flex text-3xl gap-10">
        <p className="">BubbleSort</p>
        <button 
          onClick={handleShuffle} 
          className="hover:text-gray-300 cursor-pointer ml-15"
        >
          Shuffle
        </button>
        <button 
          onClick={handleSort}
          className="hover:text-gray-300 cursor-pointer"
        >
          Sort
        </button>

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
        <Histogram 
          data={displayArray}
          comparingIndices={currentState.type === 'compare' ? currentState.indices : []}
          swappingIndices={currentState.type === 'swap' ? currentState.indices : []}
        /> 
      </div>
    </div>
  );
}
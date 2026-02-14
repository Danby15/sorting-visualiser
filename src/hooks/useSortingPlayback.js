import { useState, useEffect, useRef } from 'react';

function useSortingPlayback(steps, speed = 100) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  // Get current state from the current step
  const currentState = steps[currentStep] || { 
    type: 'idle', 
    indices: [], 
    array: [] 
  };

  // Auto-play when steps are loaded
  useEffect(() => {
    if (steps.length > 0) {
      setCurrentStep(0);
      setIsPlaying(true);
    }
  }, [steps]);

  // Playback effect
  useEffect(() => {
    if (isPlaying && currentStep < steps.length - 1) {
      intervalRef.current = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentStep, steps.length, speed]);

  const stop = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return {
    currentState,
    isPlaying,
    stop
  };
}

export default useSortingPlayback;
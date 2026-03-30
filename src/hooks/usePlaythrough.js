import { useEffect, useRef } from 'react';
import { useWorkflow } from '../context/WorkflowContext';

export function usePlaythrough(stages) {
  const {
    isPlaying,
    currentStage,
    setCurrentStage,
    markStageCompleted,
    setIsPlaying,
    playbackSpeed,
  } = useWorkflow();

  const currentIndexRef = useRef(0);
  const timerRef = useRef(null);

  // Timing: 10 seconds per stage to allow time to read technical details
  const baseDelay = 10000;
  const actualDelay = baseDelay / playbackSpeed;

  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    // Start from beginning
    if (currentStage === null) {
      currentIndexRef.current = 0;
      setCurrentStage(stages[0].id);
      return;
    }

    // Find current index
    const currentIdx = stages.findIndex((s) => s.id === currentStage);

    if (currentIdx === -1 || currentIdx >= stages.length - 1) {
      // Reached the end
      timerRef.current = setTimeout(() => {
        markStageCompleted(currentStage);
        setIsPlaying(false);
        setCurrentStage(null);
      }, actualDelay);
      return;
    }

    // Advance to next stage after delay
    timerRef.current = setTimeout(() => {
      markStageCompleted(currentStage);
      const nextStage = stages[currentIdx + 1];
      setCurrentStage(nextStage.id);
    }, actualDelay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isPlaying, currentStage, playbackSpeed, actualDelay, stages, setCurrentStage, markStageCompleted, setIsPlaying]);

  return {
    isPlaying,
    currentStage,
  };
}

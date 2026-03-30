import { createContext, useContext, useState } from 'react';

const WorkflowContext = createContext(null);

export function WorkflowProvider({ children }) {
  const [currentStage, setCurrentStage] = useState(null);
  const [completedStages, setCompletedStages] = useState([]);
  const [selectedStage, setSelectedStage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const selectStage = (stageId) => {
    setSelectedStage(stageId);
  };

  const startPlaythrough = () => {
    setIsPlaying(true);
    setCompletedStages([]);
    setCurrentStage(null);
  };

  const pausePlaythrough = () => {
    setIsPlaying(false);
  };

  const resetWorkflow = () => {
    setIsPlaying(false);
    setCurrentStage(null);
    setCompletedStages([]);
    setSelectedStage(null);
  };

  const markStageCompleted = (stageId) => {
    if (!completedStages.includes(stageId)) {
      setCompletedStages((prev) => [...prev, stageId]);
    }
  };

  const value = {
    currentStage,
    setCurrentStage,
    completedStages,
    markStageCompleted,
    selectedStage,
    selectStage,
    isPlaying,
    setIsPlaying,
    playbackSpeed,
    setPlaybackSpeed,
    startPlaythrough,
    pausePlaythrough,
    resetWorkflow,
  };

  return (
    <WorkflowContext.Provider value={value}>
      {children}
    </WorkflowContext.Provider>
  );
}

export function useWorkflow() {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error('useWorkflow must be used within a WorkflowProvider');
  }
  return context;
}

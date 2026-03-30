import { useWorkflow } from '../../context/WorkflowContext';
import { usePlaythrough } from '../../hooks/usePlaythrough';
import { WORKFLOW_STAGES } from '../../data/workflowData';
import styles from './ControlPanel.module.css';

export default function ControlPanel() {
  const {
    isPlaying,
    startPlaythrough,
    pausePlaythrough,
    resetWorkflow,
    playbackSpeed,
    setPlaybackSpeed,
    currentStage,
    completedStages,
  } = useWorkflow();

  usePlaythrough(WORKFLOW_STAGES);

  const handlePlayPause = () => {
    if (isPlaying) {
      pausePlaythrough();
    } else {
      startPlaythrough();
    }
  };

  const handleReset = () => {
    resetWorkflow();
  };

  const handleSpeedChange = (e) => {
    setPlaybackSpeed(Number(e.target.value));
  };

  // Calculate progress
  const currentStageIndex = WORKFLOW_STAGES.findIndex((s) => s.id === currentStage);
  const progress =
    currentStageIndex >= 0 ? `Stage ${currentStageIndex + 1} of ${WORKFLOW_STAGES.length}` : 'Ready';

  return (
    <div className={styles.controlPanel}>
      <div className={styles.controls}>
        <button
          className={`${styles.button} ${styles.primaryButton}`}
          onClick={handlePlayPause}
          aria-label={isPlaying ? 'Pause playthrough' : 'Start playthrough'}
        >
          {isPlaying ? '⏸ Pause' : '▶ Play Demo'}
        </button>

        <button
          className={styles.button}
          onClick={handleReset}
          disabled={!isPlaying && completedStages.length === 0}
          aria-label="Reset workflow"
        >
          ↻ Reset
        </button>

        <select
          className={styles.speedSelector}
          value={playbackSpeed}
          onChange={handleSpeedChange}
          aria-label="Playback speed"
        >
          <option value="0.5">Very Slow (20s)</option>
          <option value="0.75">Slow (13s)</option>
          <option value="1">Normal (10s)</option>
          <option value="1.5">Fast (7s)</option>
          <option value="2">Very Fast (5s)</option>
        </select>
      </div>

      <div className={styles.progress}>{progress}</div>

      <div className={styles.hint}>
        💡 Click any stage for details
      </div>
    </div>
  );
}

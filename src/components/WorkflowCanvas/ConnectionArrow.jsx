import { useWorkflow } from '../../context/WorkflowContext';
import { WORKFLOW_STAGES, SIDE_OUTPUTS } from '../../data/workflowData';
import styles from './ConnectionArrow.module.css';

export default function ConnectionArrow({ connection }) {
  const { currentStage, completedStages } = useWorkflow();

  // Find stage positions
  const allNodes = [...WORKFLOW_STAGES, ...SIDE_OUTPUTS];
  const fromStage = allNodes.find((s) => s.id === connection.from);
  const toStage = allNodes.find((s) => s.id === connection.to);

  if (!fromStage || !toStage) return null;

  // Convert percentage to viewBox coordinates (0-100 scale)
  const fromX = fromStage.position.x;
  const fromY = fromStage.position.y;
  const toX = toStage.position.x;
  const toY = toStage.position.y;

  // Determine if connection is active
  const isActive =
    (currentStage === connection.from || completedStages.includes(connection.from)) &&
    !completedStages.includes(connection.to);

  // Connection type styling
  const isFeedback = connection.type === 'feedback';
  const isSideOutput = connection.type === 'side-output';

  const classNames = [
    styles.arrowContainer,
    isActive && styles.active,
    isFeedback && styles.feedback,
    isSideOutput && styles.sideOutput,
  ]
    .filter(Boolean)
    .join(' ');

  // Create path - using quadratic curve for smoother lines
  let pathD;

  if (isFeedback) {
    // Curved feedback loop
    const controlX = (fromX + toX) / 2;
    const controlY = fromY + 15; // Curve downward
    pathD = `M ${fromX} ${fromY} Q ${controlX} ${controlY} ${toX} ${toY}`;
  } else {
    // Straight or slightly curved line
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2;
    pathD = `M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`;
  }

  return (
    <svg
      className={classNames}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <marker
          id={`arrowhead-${connection.id}`}
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
        </marker>
      </defs>
      <path
        d={pathD}
        className={styles.arrowPath}
        markerEnd={`url(#arrowhead-${connection.id})`}
        fill="none"
      />
      {isActive && connection.animated && (
        <circle className={styles.pulseDot} r="0.8">
          <animateMotion dur="2s" repeatCount="indefinite" path={pathD} />
        </circle>
      )}
    </svg>
  );
}

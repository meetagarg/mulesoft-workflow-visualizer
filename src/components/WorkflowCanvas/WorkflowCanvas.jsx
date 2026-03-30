import { WORKFLOW_STAGES, CONNECTIONS, SIDE_OUTPUTS } from '../../data/workflowData';
import StageNode from './StageNode';
import ConnectionArrow from './ConnectionArrow';
import SideOutput from './SideOutput';
import TechnicalDetails from './TechnicalDetails';
import styles from './WorkflowCanvas.module.css';

export default function WorkflowCanvas() {
  return (
    <div className={styles.canvas}>
      {/* Visual workflow path lines */}
      <svg className={styles.flowLines} viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(74, 144, 226, 0.5)" />
          </marker>
          <marker
            id="arrowhead-feedback"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(0, 188, 212, 0.5)" />
          </marker>
        </defs>

        {/* Primary flow: Authoring → Validation → Events */}
        <path
          d="M 15 25 L 37 25"
          className={styles.flowLine}
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M 37 25 L 59 25"
          className={styles.flowLine}
          markerEnd="url(#arrowhead)"
        />

        {/* Events → Publishing */}
        <path
          d="M 59 25 Q 54.5 36.5 50 48"
          className={styles.flowLine}
          markerEnd="url(#arrowhead)"
        />

        {/* Events → Distribution */}
        <path
          d="M 59 25 Q 65.5 36.5 72 48"
          className={styles.flowLine}
          markerEnd="url(#arrowhead)"
        />

        {/* Publishing → Maintenance */}
        <path
          d="M 50 48 Q 39 48 28 48"
          className={styles.flowLine}
          markerEnd="url(#arrowhead)"
        />

        {/* Distribution → Maintenance */}
        <path
          d="M 72 48 Q 50 48 28 48"
          className={styles.flowLine}
          markerEnd="url(#arrowhead)"
        />

        {/* Feedback loop: Maintenance → Authoring */}
        <path
          d="M 28 48 Q 21.5 60 21.5 72 Q 21.5 80 15 25"
          className={styles.feedbackLine}
          markerEnd="url(#arrowhead-feedback)"
        />

        {/* Feedback loop: Maintenance → Events */}
        <path
          d="M 28 48 Q 35 60 42 72 Q 48 80 59 25"
          className={styles.feedbackLine}
          markerEnd="url(#arrowhead-feedback)"
        />

        {/* Side outputs */}
        <path
          d="M 72 48 L 87 38"
          className={styles.sideOutputLine}
        />
        <path
          d="M 72 48 L 87 58"
          className={styles.sideOutputLine}
        />
      </svg>

      {/* Technical details overlay - shows during playthrough */}
      <TechnicalDetails />

      {/* Render connection arrows with animation */}
      {CONNECTIONS.map((connection) => (
        <ConnectionArrow key={connection.id} connection={connection} />
      ))}

      {/* Render main workflow stages */}
      {WORKFLOW_STAGES.map((stage) => (
        <StageNode key={stage.id} stage={stage} />
      ))}

      {/* Render side outputs (RSS, MCP) */}
      {SIDE_OUTPUTS.map((output) => (
        <SideOutput key={output.id} output={output} />
      ))}
    </div>
  );
}

import { useWorkflow } from '../../context/WorkflowContext';
import { WORKFLOW_STAGES } from '../../data/workflowData';
import styles from './TechnicalDetails.module.css';

export default function TechnicalDetails() {
  const { currentStage, isPlaying } = useWorkflow();

  const stage = WORKFLOW_STAGES.find((s) => s.id === currentStage);

  if (!stage || !isPlaying) return null;

  return (
    <div className={styles.technicalOverlay}>
      <div className={styles.header}>
        <span className={styles.icon}>⚙️</span>
        <h3 className={styles.title}>Technical Implementation</h3>
        <span className={styles.stageName}>{stage.shortTitle}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>What's Happening:</h4>
          <ul className={styles.detailsList}>
            {stage.technicalDetails.map((detail, idx) => (
              <li
                key={idx}
                className={styles.detailItem}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className={styles.bullet}>▸</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.codeSection}>
          <div className={styles.codeHeader}>
            <span className={styles.codeIcon}>📄</span>
            <span className={styles.codeTitle}>{stage.sampleData.description}</span>
          </div>
          <pre className={styles.codeBlock}>
            <code>{stage.sampleData.content.substring(0, 400)}...</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

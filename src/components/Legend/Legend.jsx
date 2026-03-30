import styles from './Legend.module.css';

export default function Legend() {
  return (
    <div className={styles.legend}>
      <h3 className={styles.title}>Legend</h3>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.line} style={{ borderColor: 'var(--color-authoring)' }} />
          <span>Primary Flow</span>
        </div>
        <div className={styles.item}>
          <div className={styles.line} style={{ borderColor: 'var(--color-maintenance)', borderStyle: 'dashed' }} />
          <span>Feedback Loop</span>
        </div>
        <div className={styles.item}>
          <div className={styles.line} style={{ borderColor: 'var(--text-muted)', borderStyle: 'dotted' }} />
          <span>Side Output</span>
        </div>
      </div>
    </div>
  );
}

import * as Icons from '../icons';
import styles from './SideOutput.module.css';

export default function SideOutput({ output }) {
  const Icon = Icons[output.icon];

  return (
    <div
      className={styles.sideOutput}
      style={{
        left: `${output.position.x}%`,
        top: `${output.position.y}%`,
        '--output-color': output.color,
      }}
    >
      <div className={styles.iconContainer}>
        {Icon && <Icon className={styles.icon} size={24} />}
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{output.title}</h4>
        <p className={styles.description}>{output.description}</p>
      </div>
    </div>
  );
}

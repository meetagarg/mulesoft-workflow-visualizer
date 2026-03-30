import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>MuleSoft Content Workflow</h1>
        <p className={styles.subtitle}>
          From AsciiDoc Authoring to SSOT Distribution and Maintenance
        </p>
      </div>
    </header>
  );
}

import { useState } from 'react';
import styles from './SampleDataViewer.module.css';

export default function SampleDataViewer({ sampleData }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleData.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.viewer}>
      <div className={styles.header}>
        <span className={styles.label}>Sample Data</span>
        <button
          className={styles.copyButton}
          onClick={handleCopy}
          aria-label="Copy sample data"
        >
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
      </div>
      <p className={styles.description}>{sampleData.description}</p>
      <pre className={styles.codeBlock}>
        <code>{sampleData.content}</code>
      </pre>
    </div>
  );
}

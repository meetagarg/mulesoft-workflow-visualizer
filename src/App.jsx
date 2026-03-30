import { WorkflowProvider } from './context/WorkflowContext';
import Header from './components/Header/Header';
import ControlPanel from './components/ControlPanel/ControlPanel';
import WorkflowCanvas from './components/WorkflowCanvas/WorkflowCanvas';
import StageDetailPanel from './components/StageDetailPanel/StageDetailPanel';
import Legend from './components/Legend/Legend';
import styles from './App.module.css';

export default function App() {
  return (
    <WorkflowProvider>
      <div className={styles.app}>
        <Header />
        <ControlPanel />
        <main className={styles.main}>
          <WorkflowCanvas />
        </main>
        <StageDetailPanel />
        <Legend />
      </div>
    </WorkflowProvider>
  );
}

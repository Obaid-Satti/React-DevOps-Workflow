import './App.css';
import { Button } from './components/common/Button/Button';
import { Card } from './components/common/Card/Card';

function App() {
  return (
    <div className="starter-container">
      <header className="starter-header">
        <span className="starter-badge">GitHub & CI/CD Practice Lab</span>
        <h1>Production Architecture Template</h1>
        <p className="starter-description">
          Folder structure and reusable UI components are prepared. You are ready to practice feature branch workflows, commits, PRs, and CI/CD pipelines!
        </p>
      </header>

      <main className="starter-content">
        <Card title="🚀 Quick Start Guide" subtitle="Next steps for your GitHub workflow">
          <ul className="starter-steps">
            <li>Initialize or push this repository to GitHub.</li>
            <li>Configure GitHub Actions CI/CD workflows.</li>
            <li>Create a new feature branch (e.g. <code>git checkout -b feature/auth</code>).</li>
            <li>Develop your feature in <code>src/features/</code>.</li>
            <li>Submit a Pull Request and merge through CI checks.</li>
          </ul>
          <div className="starter-actions">
            <Button variant="primary">Start Building</Button>
            <Button variant="outline">View Structure Docs</Button>
          </div>
        </Card>
      </main>
    </div>
  );
}

export default App;

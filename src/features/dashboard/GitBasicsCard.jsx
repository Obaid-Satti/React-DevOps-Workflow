import { useState } from 'react';
import { Badge } from '../../components/common';

export function GitBasicsCard({ concept }) {
  const [copied, setCopied] = useState(false);
  const [showFullSnippet, setShowFullSnippet] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(concept.codeExample.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="concept-card" style={{ '--accent-glow': concept.accentColor }}>
      <div className="concept-card-inner">
        {/* Card Header */}
        <div className="concept-header">
          <div className="concept-header-left">
            <div className="concept-num-badge">
              <span className="num-text">{concept.number}</span>
              <span className="concept-icon">{concept.icon}</span>
            </div>
            <div className="concept-title-wrap">
              <h3 className="concept-title">{concept.title}</h3>
              <span className="concept-subtitle">{concept.subtitle}</span>
            </div>
          </div>
          <div className="concept-badges">
            <Badge variant={concept.badgeVariant}>{concept.scope}</Badge>
            <span className="concept-category-tag">{concept.category}</span>
          </div>
        </div>

        {/* Core Summary */}
        <p className="concept-summary">{concept.summary}</p>

        {/* Daily Life Example Section */}
        <div className="concept-analogy-box">
          <div className="analogy-header">
            <span className="analogy-pill">
              <span className="analogy-icon">{concept.dailyLife.icon}</span>
              <span className="analogy-label">Daily Life Analogy</span>
            </span>
            <strong className="analogy-title">{concept.dailyLife.title}</strong>
          </div>
          <p className="analogy-text">{concept.dailyLife.analogy}</p>
        </div>

        {/* Code & Command Section */}
        <div className="concept-terminal">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="terminal-label">{concept.codeExample.label}</span>
            </div>
            <button
              type="button"
              className={`copy-btn ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
              title="Copy command to clipboard"
            >
              {copied ? (
                <>
                  <span className="copy-icon">✓</span>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <span className="copy-icon">📋</span>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="terminal-body">
            <div className="command-row">
              <span className="terminal-prompt">$</span>
              <code className="command-code">{concept.codeExample.command}</code>
            </div>
            <p className="terminal-desc">{concept.codeExample.description}</p>
            
            {showFullSnippet && (
              <pre className="terminal-snippet">
                <code>{concept.codeExample.snippet}</code>
              </pre>
            )}

            <button
              type="button"
              className="toggle-snippet-btn"
              onClick={() => setShowFullSnippet(prev => !prev)}
            >
              {showFullSnippet ? '▴ Hide Output & Details' : '▾ Show Output & Workflow'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitBasicsCard;

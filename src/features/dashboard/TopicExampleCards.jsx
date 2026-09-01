import { useState } from 'react';

export function AnalogyBox({ icon = '💡', title, text, className = '' }) {
  return (
    <div className={`concept-analogy-box ${className}`}>
      <div className="analogy-header">
        <span className="analogy-pill">
          <span className="analogy-icon">{icon}</span>
          <span className="analogy-label">Daily Life Analogy</span>
        </span>
        {title && <strong className="analogy-title">{title}</strong>}
      </div>
      <p className="analogy-text">{text}</p>
    </div>
  );
}

export function CodeSnippetBox({
  title = 'Command & Workflow Example',
  command,
  description,
  snippet,
  language = 'bash',
  className = ''
}) {
  const [copied, setCopied] = useState(false);
  const [showSnippet, setShowSnippet] = useState(true);

  const handleCopy = () => {
    const textToCopy = command || snippet;
    if (navigator.clipboard && textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`concept-terminal ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <span className="terminal-label">{title}</span>
        </div>
        <button
          type="button"
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          title="Copy command"
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
        {command && (
          <div className="command-row">
            <span className="terminal-prompt">{language === 'yaml' ? '⚙' : '$'}</span>
            <code className="command-code">{command}</code>
          </div>
        )}
        {description && <p className="terminal-desc">{description}</p>}

        {snippet && (
          <>
            {showSnippet && (
              <pre className="terminal-snippet">
                <code>{snippet}</code>
              </pre>
            )}
            <button
              type="button"
              className="toggle-snippet-btn"
              onClick={() => setShowSnippet(prev => !prev)}
            >
              {showSnippet ? '▴ Hide Code Details' : '▾ Show Full Code & Output'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

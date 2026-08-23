import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-root glass-panel">
      <div className="footer-container container">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Enterprise Production Architecture. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <span>Clean Code</span>
          <span className="dot">•</span>
          <span>Scalable Modular Pattern</span>
          <span className="dot">•</span>
          <span>Production Ready</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

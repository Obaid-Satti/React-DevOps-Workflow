import './Sidebar.css';

export const Sidebar = ({ isOpen, activeRoute, onRouteChange }) => {
  const menuItems = [
    { id: 'home', label: 'Home Overview', icon: '🏠' },
    { id: 'dashboard', label: 'Analytics Dashboard', icon: '📊' },
    { id: 'architecture', label: 'Architecture & Scalability', icon: '📐' },
    { id: 'login', label: 'Authentication', icon: '🔐' },
  ];

  return (
    <aside className={`sidebar-root glass-panel ${isOpen ? 'is-open' : 'is-collapsed'}`}>
      <div className="sidebar-header">
        <span className="sidebar-section-title">Navigation</span>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-link ${activeRoute === item.id ? 'active' : ''}`}
            onClick={() => onRouteChange(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {isOpen && <span className="sidebar-label">{item.label}</span>}
          </button>
        ))}
      </nav>
      {isOpen && (
        <div className="sidebar-footer">
          <div className="sidebar-status-card">
            <span className="status-indicator online" />
            <div className="status-text">
              <strong>System Status</strong>
              <small>Production v1.0.0</small>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

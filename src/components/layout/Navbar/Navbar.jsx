import './Navbar.css';
import { Button } from '../../common/Button/Button';

export const Navbar = ({
  onToggleSidebar,
  activeRoute = 'home',
  onRouteChange,
  isDark = true,
  onToggleTheme,
  user = null,
  onSignIn,
  onSignOut,
}) => {
  return (
    <header className="navbar-root glass-panel">
      <div className="navbar-left">
        {onToggleSidebar && (
          <button
            className="navbar-toggle-btn"
            onClick={onToggleSidebar}
            aria-label="Toggle navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        )}
        <div className="navbar-brand" onClick={() => onRouteChange && onRouteChange('home')}>
          <span className="brand-logo">⚡</span>
          <span className="brand-title gradient-text">EnterpriseHub</span>
        </div>
      </div>

      <nav className="navbar-nav">
        <button
          className={`nav-link ${activeRoute === 'home' ? 'active' : ''}`}
          onClick={() => onRouteChange && onRouteChange('home')}
        >
          Home
        </button>
        <button
          className={`nav-link ${activeRoute === 'dashboard' ? 'active' : ''}`}
          onClick={() => onRouteChange && onRouteChange('dashboard')}
        >
          Dashboard
        </button>
      </nav>

      <div className="navbar-right">
        {onToggleTheme && (
          <button
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            title={`Switch theme`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        )}

        {user ? (
          <div className="navbar-user">
            <span className="user-badge">
              <span className="user-avatar">{user?.name?.charAt(0).toUpperCase() || 'U'}</span>
              <span className="user-name">{user?.name || user?.email}</span>
            </span>
            <Button size="sm" variant="ghost" onClick={onSignOut}>
              Sign Out
            </Button>
          </div>
        ) : (
          <Button size="sm" variant="primary" onClick={onSignIn}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;

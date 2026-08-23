import { useState } from 'react';
import './MainLayout.css';
import { Navbar } from './Navbar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

export const MainLayout = ({ children, activeRoute, onRouteChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="layout-root">
      <Navbar
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        activeRoute={activeRoute}
        onRouteChange={onRouteChange}
      />
      <div className="layout-body">
        <Sidebar
          isOpen={isSidebarOpen}
          activeRoute={activeRoute}
          onRouteChange={onRouteChange}
        />
        <main className="layout-content">
          <div className="container">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

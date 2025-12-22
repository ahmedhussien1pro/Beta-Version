// src/UserDashboard/Dashboard.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { navItems, userData } from './components/data';
import sections from './components/sections';
import './components/style.css';
import './main-style.css';
import ThemeSwitcher from '../../../Pages/Website/UserHome/Components/ThemeSwitcher/ThemeSwitcher';

export default function Dashboard() {
  const getInitialSection = () => {
    const saved = localStorage.getItem('activeSection');
    return saved && saved !== 'null' ? saved : 'dashboard';
  };

  const [activeSection, setActiveSection] = useState(getInitialSection);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    return saved === 'true';
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState(userData);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 992);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', sidebarCollapsed);
  }, [sidebarCollapsed]);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    if (window.innerWidth < 992) {
      setSidebarOpen(false);
    }
  };

  const CurrentSection = sections[activeSection] || sections.dashboard;

  return (
    <div
      className='d-flex'
      style={{
        height: '100vh',
        backgroundColor: 'var(--primary-bg)',
        overflow: 'hidden',
      }}>
      <ThemeSwitcher />

      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
        navItems={navItems}
      />

      {/* Mobile Overlay */}
      {sidebarOpen && window.innerWidth < 992 && (
        <div
          className='position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-60'
          style={{ zIndex: 1040 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div
        className={`flex-grow-1 ${sidebarCollapsed ? 'main-with-sidebar collapsed' : 'main-with-sidebar'
          }`}>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main
          className='p-3 p-md-4 overflow-auto primary-bg'
          style={{ height: 'calc(100vh - 70px)' }}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}>
              <CurrentSection data={data} setData={setData} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

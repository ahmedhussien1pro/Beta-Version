// src/AdminDashboard/Dashboard.jsx

import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './section/Sidebar';
import { adminNavItems } from './adminNavItems';
import sections from './section/section';
import fakeUsers from './data/fakeUsers';
import { fakeCourses } from './data/fakeCourses';

// import adminSections from './components/adminSections';
import ThemeSwitcher from '../../../Pages/Website/UserHome/Components/ThemeSwitcher/ThemeSwitcher';
import MobileHeader from './section/MobileHeader';

export default function AdminDashboard() {
  // #region Select Initial Section for Sidebar
  const getInitialSection = () => {
    const saved = localStorage.getItem('activeSection');
    return saved && saved !== 'null' ? saved : 'overview';
  };
  const [activeSection, setActiveSection] = useState(getInitialSection);

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  const CurrentSection = sections[activeSection] || sections.overview;

  // #endregion

  // #region Sidebar State
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    return saved === 'true';
  });

  // أهم حاجة: الـ useEffect ده
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 992);
    };

    handleResize(); // عند التحميل الأول
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', sidebarCollapsed);
  }, [sidebarCollapsed]);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    if (window.innerWidth < 992) {
      setSidebarOpen(false);
    }
  };
  // #endregion

  // #region Users Data and Handlers and Courses Data and Handlers
  // Users Data
  const [users, setUsers] = useState([...fakeUsers]);

  const addUser = (newUser) => {
    setUsers((prev) => [...prev, { id: crypto.randomUUID(), ...newUser }]);
  };
  const editUser = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
  };
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };
  // Courses Data
  const [courses, setCourses] = useState([...fakeCourses]);

  const addCourse = (newCourse) => {
    setCourses((prev) => [...prev, { id: crypto.randomUUID(), ...newCourse }]);
  };

  const editCourse = (updatedCourse) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === updatedCourse.id ? updatedCourse : c))
    );
  };
  const deleteCourse = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  // #endregion

  return (
    <div
      className='d-flex'
      style={{
        height: '100vh',
        backgroundColor: 'var(--primary-bg)',
        overflow: 'hidden',
      }}>
      <ThemeSwitcher />
      <MobileHeader setOpen={setSidebarOpen} />

      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
        navItems={adminNavItems} // nav items بتاعة الـ admin
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
        className={`flex-grow-1 ${
          sidebarCollapsed ? 'main-with-sidebar collapsed' : 'main-with-sidebar'
        }`}>
        <main
          className='p-3 p-md-4 overflow-auto primary-bg'
          style={{ height: '100vh' }}>
          <CurrentSection
            data={{
              users,
              addUser,
              editUser,
              deleteUser,
              courses,
              addCourse,
              editCourse,
              deleteCourse,
            }}
          />
        </main>
      </div>
    </div>
  );
}

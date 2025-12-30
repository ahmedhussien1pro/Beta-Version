import React from 'react';
import { FaDownload, FaCode, FaEye, FaSun, FaMoon } from 'react-icons/fa';

const TopBar = ({
  title = 'Edit Topic',
  sidebarCollapsed,
  onToggleSidebar,
  onSave,
  onCopyJSON,
  onToggleTheme,
  onPreview,
}) => {
  return (
    <div className='topbar'>
      <div className='topbar__container'>
        {/* Left Section */}
        <div className='topbar__left'>
          {/* Menu Toggle Button */}
          <button
            className={`topbar__menu-toggle ${
              !sidebarCollapsed ? 'topbar__menu-toggle--active' : ''
            }`}
            onClick={onToggleSidebar}
            aria-label='Toggle Sidebar'>
            <div className='topbar__hamburger'>
              <span className='topbar__hamburger-line'></span>
              <span className='topbar__hamburger-line'></span>
              <span className='topbar__hamburger-line'></span>
            </div>
          </button>

          {/* Title */}
          <div className='topbar__title-section'>
            <span className='topbar__label'>Current View</span>
            <h1 className='topbar__title  main-color'>{title}</h1>
          </div>
        </div>

        {/* Right Section */}
        <div className='topbar__right'>
          {/* Theme Toggle */}
          <div
            className='theme-toggle'
            onClick={onToggleTheme}
            role='button'
            aria-label='Toggle Theme'
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onToggleTheme();
              }
            }}>
            <div className='theme-toggle__track'>
              <FaSun className='theme-toggle__icon theme-toggle__icon--sun' />
              <FaMoon className='theme-toggle__icon theme-toggle__icon--moon' />
              <div className='theme-toggle__slider'></div>
            </div>
          </div>

          {/* Save Button */}
          <button className='topbar__btn topbar__btn--primary' onClick={onSave}>
            <FaDownload className='topbar__btn-icon' />
            <span className='topbar__btn-text'>Download</span>
          </button>

          {/* Copy JSON Button */}
          <button
            className='topbar__btn topbar__btn--secondary'
            onClick={onCopyJSON}>
            <FaCode className='topbar__btn-icon' />
            <span className='topbar__btn-text'>Copy JSON</span>
          </button>
          <button
            className='topbar__btn topbar__btn--preview'
            onClick={onPreview}
            title='Open Live Preview'>
            <FaEye className='topbar__btn-icon' />
            <span className='topbar__btn-text'>Preview</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

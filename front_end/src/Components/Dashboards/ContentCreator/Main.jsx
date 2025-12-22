// src/components/ContentCreatorDashboard/Main.jsx
import React from 'react';
import Cards from './Cards';
export default function Main({
  collapsed,
  isMobile,
  mobileOpen,
  activePanel,
  setActivePanel,
  Icon,
  goto,
  stats,
  activity,
  setActivity,
  expandedWidget,
  toggleExpand,
  selectedChat,
  setSelectedChat,
}) {
  return (
    <main className={`cc-main ${isMobile && mobileOpen ? 'shifted' : ''}`}>
      <header className='cc-header d-flex justify-content-between align-items-center mb-3'>
        <div className='cc-header__left d-flex align-items-center gap-3'>
          <h1 className='cc-title mb-0'>
            {activePanel === 'overview' ? 'Overview' : activePanel}
          </h1>
          <div className='cc-actions d-flex gap-2'>
            <button
              className='cc-btn btn-main-color2 btn-main-color-sm d-flex align-items-center'
              onClick={() => goto('/create/course')}>
              {Icon.plus}
              {!collapsed && <span className='ms-2'>New</span>}
            </button>
            <button
              className='cc-btn btn-main-color btn-main-color-sm d-flex align-items-center'
              onClick={() => goto('/help')}
              title='Chat'>
              {Icon.chat}
              {!collapsed && <span className='ms-2'>Support</span>}
            </button>
          </div>
        </div>

        <div className='cc-header__right d-flex align-items-center gap-2'>
          {/* Add small userbar here if needed */}
        </div>
      </header>

      <section className='cc-content'>
        {activePanel === 'overview' ? (
          <Cards
            stats={stats}
            activity={activity}
            setActivity={setActivity}
            expandedWidget={expandedWidget}
            toggleExpand={toggleExpand}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            goto={goto}
          />
        ) : (
          <div className='cc-panel'>
            <h2 className='cc-panel__title'>{activePanel}</h2>
            <div className='cc-card p-3'>
              <p className='muted'>
                This is a placeholder for the route{' '}
                <strong>{activePanel}</strong>. Replace with your page or
                component.
              </p>
              <div style={{ marginTop: 8 }}>
                <button
                  className='btn btn-sm btn-primary'
                  onClick={() => setActivePanel('overview')}>
                  Back to overview
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

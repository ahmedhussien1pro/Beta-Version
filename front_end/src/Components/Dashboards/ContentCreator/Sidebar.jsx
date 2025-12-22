// src/components/ContentCreatorDashboard/Sidebar.jsx
import React from 'react';

export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
  isMobile,
  SIDEBAR_GROUPS,
  openGroup,
  setOpenGroup,
  user,
  Icon,
  goto,
  handleLogout,
}) {
  function toggleGroup(id) {
    setOpenGroup((s) => (s === id ? null : id));
  }

  function handleMenuClick() {
    if (isMobile) setMobileOpen((s) => !s);
    else setCollapsed((s) => !s);
  }

  return (
    <aside
      className={`cc-sidebar ${collapsed ? 'cc-sidebar--collapsed' : ''} ${
        mobileOpen ? 'mobile-open' : ''
      }`}>
      <div className='cc-sidebar__top d-flex align-items-center justify-content-between'>
        <div
          className='cc-brand d-flex align-items-center gap-2'
          onClick={() => goto('overview')}
          title='Dashboard'
          style={{ cursor: 'pointer' }}>
          <div className='cc-brand__logo'>{Icon.dashboard}</div>
          {!collapsed && (
            <strong className='cc-brand__name'>CyberLab CMS</strong>
          )}
        </div>

        <button
          className='btn btn-sm btn-link cc-sidebar__collapse'
          onClick={handleMenuClick}
          aria-label='Toggle sidebar'>
          {Icon.menu}
        </button>
      </div>

      <nav className='cc-nav' role='navigation'>
        {SIDEBAR_GROUPS.map((g) => (
          <div
            key={g.id}
            className={`cc-group ${openGroup === g.id ? 'open' : ''}`}>
            <button
              className='cc-group__btn'
              onClick={() => toggleGroup(g.id)}
              title={g.label}
              aria-expanded={openGroup === g.id}>
              <span className='cc-icon'>{g.icon}</span>
              {!collapsed && <span className='cc-group__label'>{g.label}</span>}
              {!collapsed && <span className='cc-group__caret'>▾</span>}
            </button>

            <div
              className={`cc-group__links ${
                openGroup === g.id ? 'visible' : ''
              }`}>
              {g.links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => goto(l.path)}
                  className='cc-link'
                  title={l.label}>
                  <span className='cc-icon'>{l.icon}</span>
                  {!collapsed && (
                    <span className='cc-link__label'>{l.label}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className='cc-sidebar__footer mt-auto'>
        <div className='cc-user d-flex align-items-center gap-2'>
          <div className='cc-avatar'>
            {user.avatar ? <img src={user.avatar} alt='avatar' /> : Icon.user}
          </div>
          {!collapsed && (
            <div className='cc-user__meta d-flex flex-column'>
              <div className='cc-user__name'>{user.name}</div>
              <button
                className='btn btn-sm btn-link cc-logout p-0'
                onClick={handleLogout}
                title='Logout'>
                {Icon.logout}
                <span className='cc-logout__text'> Sign out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

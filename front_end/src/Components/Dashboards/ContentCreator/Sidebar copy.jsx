import React from 'react';

const styles = `
/* Sidebar */
.cc-sidebar {
  width: var(--sidebar-w);
  background: var(--secondary-bg);
  color: var(--main-color);
  padding: 18px;
  transition: width 0.35s var(--timing-fn), transform 0.28s var(--timing-fn);
  display: flex;
  flex-direction: column;
  /* box-shadow: 0 8px 30px rgba(2, 6, 23, 0.45); */
  /* border-right: 1px solid rgba(255, 255, 255, 0.02); */
  z-index: 50;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
}
.cc-sidebar--collapsed {
  width: var(--sidebar-collapsed-w);
}
.cc-sidebar__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cc-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}
.cc-brand__logo i {
  font-size: 20px;
  color: var(--main-color);
}
.cc-brand__name {
  font-size: 16px;
}
.cc-sidebar__collapse {
  background: transparent;
  border: none;
  color: var(--main-color);
  cursor: pointer;
}
.cc-nav {
  margin-top: 18px;
  overflow: auto;
}
.cc-group {
  margin-bottom: 8px;
}
.cc-group__btn {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  background: transparent;
  border: none;
  padding: 10px;
  border-radius: 10px;
  color: var(--primary-text);
  cursor: pointer;
  transition: background 0.18s var(--timing-fn),
    transform 0.18s var(--timing-fn);
}
.cc-group__btn:hover {
  background: rgba(255, 255, 255, 0.03);
  transform: translateY(-2px);
}
.cc-icon i {
  color: var(--main-color);
}
.cc-group__links {
  display: none;
  margin-left: 6px;
}
.cc-group__links.visible {
  display: block;
}
.cc-link {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: 8px;
  color: var(--main-color);
  cursor: pointer;
  text-align: left;
  transition: background 0.14s var(--timing-fn),
    transform 0.14s var(--timing-fn);
}
.cc-link.active {
  background: rgba(13, 110, 253, 0.12);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
}
.cc-link:hover {
  background: var(--glass);
  transform: translateY(-2px);
}
.cc-group__caret {
  color: var(--main-color);
}
.cc-sidebar__footer {
  margin-top: auto;
}
.cc-user {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--main-color);
}
.btn-link,
.cc-userbar {
  color: var(--main-color);
}
.cc-avatar i {
  font-size: 36px;
}
.cc-avatar img {
  width: 36px;
  height: 36px;
  border-radius: 999px;
}
.cc-user__meta {
  display: flex;
  flex-direction: column;
}
.cc-logout {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: var(--primary-text);
  text-decoration: none;
  cursor: pointer;
}
.cc-logout:hover {
  color: var(--main-color);
}
.cc-expand-btn {
  background: transparent;
  border: none;
  color: var(--main-color);
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  top: 0px;
  right: 0px;
}`;

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

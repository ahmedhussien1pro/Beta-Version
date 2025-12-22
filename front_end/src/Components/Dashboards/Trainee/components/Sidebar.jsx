// src/components/Sidebar.jsx
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faUserCircle,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

import Cookie from 'cookie-universal';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Sidebar = ({
  collapsed,
  setCollapsed,
  open,
  setOpen,
  activeSection,
  setActiveSection,
  navItems,
}) => {
  const cookie = Cookie();
  const token = cookie.get('CuberWeb');
  const userRole = cookie.get('userRole');
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState('');
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await axios.post(
        'https://digitopia-project-backend.vercel.app/api/logout',
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      cookie.remove('CuberWeb');
      window.location.pathname = '/';
    } catch (err) {
      console.error('Logout failed:', err);
      Swal.fire({
        icon: 'error',
        title: 'Logout failed',
        text: 'Please try again',
      });
    }
  }

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
      return;
    }

    let cancelled = false;

    const fetchAll = async () => {
      try {
        const [userRes, infoRes] = await Promise.all([
          axios.get('https://digitopia-project-backend.vercel.app/api/user', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(
            'https://digitopia-project-backend.vercel.app/api/personalInfo',
            { headers: { Authorization: `Bearer ${token}` } }
          ),
        ]);

        if (cancelled) return;

        const userData = userRes?.data?.data;
        const infoData = infoRes?.data?.data;

        setUser(userData);

        const img = infoData?.image?.path
          ? infoData.image.path.replace(/\\/g, '/')
          : '';

        setUserImage(img);
      } catch (err) {
        console.error('Fetch failed:', err);
        navigate('/login', { replace: true });
      }
    };

    fetchAll();

    return () => {
      cancelled = true;
    };
  }, [token, navigate]);

  return (
    <aside
      className={`app-sidebar ${collapsed ? 'sidebar-collapsed' : ''} ${
        open ? 'mobile-open' : 'mobile-closed'
      } d-flex flex-column`}
      style={{ minHeight: '100vh' }}>
      {/* ===== Logo / Initials ===== */}
      <div className='p-4 border-bottom border-gray'>
        <div className='d-flex align-items-center justify-content-between w-100'>
          {/* onclick navigate to / */}
          <div
            className='d-flex align-items-center gap-5'
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}>
            {collapsed ? (
              <div
                className='rounded-circle d-flex align-items-center justify-content-center primary-text fw-bold'
                style={{
                  width: 44,
                  height: 44,
                  background: 'linear-gradient(135deg, #0d6efd, #0a58ca)',
                  fontSize: '1.2rem',
                }}>
                CL
              </div>
            ) : (
              <div className='header__logo mx-0 d-flex align-items-center gap-2'>
                <h2 className='header__logo-title mb-0 me-2'>
                  Cyber<span> Labs</span>
                </h2>
              </div>
            )}

            {/* Close icon next to logo (when sidebar is open) */}
            {!collapsed && (
              <button
                className='btn btn-link '
                onClick={() => setCollapsed(true)}
                aria-label='Close Sidebar'
                style={{ gap: '14px', fontWeight: '500' }}>
                <FontAwesomeIcon icon={faArrowLeft} size='lg' />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ===== Navigation ===== */}
      <nav className='flex-grow-1 p-3'>
        <ul className='list-unstyled'>
          {navItems.map((item) => (
            <li key={item.id} className='mb-1'>
              <button
                className={`d-flex align-items-center w-100 px-3 py-3 rounded-3 text-start border-0 transition-all ${
                  activeSection === item.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'secondary-text hover-bg'
                }`}
                onClick={() => {
                  setActiveSection(item.id);
                  if (window.innerWidth < 992) setOpen(false);
                }}
                style={{
                  gap: '14px',
                  fontWeight: activeSection === item.id ? '600' : '500',
                  background:
                    activeSection === item.id
                      ? 'var(--gradient-primary)'
                      : 'transparent',
                }}>
                <FontAwesomeIcon icon={item.icon} fixedWidth size='lg' />
                <span className='nav-text'>{item.title}</span>
              </button>
            </li>
          ))}

          {/* Open button when collapsed */}
          {collapsed && (
            <li className='mb-1'>
              <button
                className='d-flex align-items-center w-100 px-3 py-3 rounded-3 text-start border-0 transition-all secondary-text  bg-transparent'
                onClick={() => setCollapsed(false)}
                aria-label='Open Sidebar'
                style={{ gap: '14px', fontWeight: '500' }}>
                <FontAwesomeIcon icon={faArrowRight} fixedWidth size='lg' />
                <span className='nav-text'>Open</span>
              </button>
            </li>
          )}

          {userRole === 'admin' && !collapsed && (
            <li key='createContent' className='mb-1'>
              <button
                className={`d-flex align-items-center w-100 px-3 py-3 rounded-3 text-start border-0 transition-all ${
                  activeSection === 'createContent'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-secondary-text hover-bg'
                }`}
                onClick={() => {
                  setActiveSection('createContent');
                  if (window.innerWidth < 992) setOpen(false);
                  navigate('/content-creator/dashboard');
                }}
                style={{
                  gap: '14px',
                  fontWeight: activeSection === 'createContent' ? '600' : '500',
                  background:
                    activeSection === 'createContent'
                      ? 'var(--gradient-primary)'
                      : 'transparent',
                }}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  fixedWidth
                  size='lg'
                  style={{ color: 'inherit' }}
                />
                <span className='nav-text'>Create Content</span>
              </button>
            </li>
          )}
        </ul>
      </nav>

      {/* ===== User Info ===== */}
      <div className='user-box mb-4 pt-4 d-flex flex-column align-items-center border-top border-gray'>
        {!collapsed ? (
          <>
            <div className='d-flex align-items-center mb-3 gap-3'>
              {userImage ? (
                <img
                  src={userImage}
                  alt='Profile'
                  className='rounded-circle'
                  style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size='3x'
                  className='text-secondary mb-2'
                />
              )}
              <div>
                <div className='fw-semibold text-secondary-text'>
                  {user ? user.name : ''}
                </div>
                <small className='text-secondary-text'>
                  {user ? user.role : ''}
                </small>
              </div>
            </div>
            <button
              className='btn btn-outline-danger btn-sm px-3 d-flex align-items-center gap-2 rounded-pill logout-btn'
              onClick={handleLogout}>
              <i className='fa-solid fa-arrow-right-from-bracket'></i>
              <span>Sign out</span>
            </button>
          </>
        ) : (
          <div className='d-flex justify-content-center w-100'>
            {userImage ? (
              <img
                src={userImage}
                alt='Profile'
                className='rounded-circle'
                style={{ width: '36px', height: '36px', objectFit: 'cover' }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faUserCircle}
                size='2x'
                className='text-secondary'
              />
            )}
          </div>
        )}
      </div>

      {/* ===== Mobile Close Button ===== */}
      <div className='p-3 border-top border-gray d-lg-none'>
        <button
          className='btn btn-link main-color p-2 w-100 d-flex align-items-center justify-content-center'
          onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faArrowLeft} />{' '}
          <span className='ms-2'>Close</span>
        </button>
      </div>
    </aside>
  );
};

export default React.memo(Sidebar);

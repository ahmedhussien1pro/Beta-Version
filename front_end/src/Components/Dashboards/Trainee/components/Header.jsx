// src/components/Header.jsx

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSearch,
  faBell,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import Cookie from 'cookie-universal';
import axios from 'axios';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const cookie = Cookie();
  const token = cookie.get('CuberWeb');

  const [search, setSearch] = useState('');
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    const contentContainer = document.getElementsByTagName('main')[0];
    if (!contentContainer) return;

    const handleScroll = () => setDropdownOpen(false);

    contentContainer.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      contentContainer.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Fetch User Data
  useEffect(() => {
    if (!token) return;

    const fetchUser = async () => {
      try {
        const res = await fetch(
          'https://digitopia-project-backend.vercel.app/api/user',
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = await res.json();
        setUser(data?.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [token]);

  // Compute Initials
  const getInitials = () => {
    if (!user?.name) return 'U';
    const parts = user.name.trim().split(' ');
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return parts[0].charAt(0).toUpperCase() + parts[1].charAt(0).toUpperCase();
  };

  // Logout
  const handleLogout = async () => {
    try {
      await axios.post(
        'https://digitopia-project-backend.vercel.app/api/logout',
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      cookie.remove('CuberWeb');
      window.location.pathname = '/';
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <header
      className='top-header position-sticky top-0 start-0 w-100 d-flex align-items-center px-3 px-md-4 py-3'
      style={{
        height: '70px',
        backdropFilter: 'blur(12px)',
        zIndex: 1040,
        marginLeft: 0,
      }}>
      {/* Left: Hamburger */}
      <div className='d-flex align-items-center'>
        <button
          className='btn btn-link primary-text me-4 d-lg-none'
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label='Toggle Sidebar'>
          <FontAwesomeIcon icon={faBars} size='lg' />
        </button>
      </div>

      {/* Search */}
      <div className='flex-grow-1 mx-4 d-none d-md-block'>
        <div className='position-relative'>
          <input
            type='text'
            className='form-control bg-transparent border-gray primary-text shadow-sm'
            style={{
              width: '100%',
              maxWidth: '220px',
              paddingLeft: '42px',
              borderRadius: '12px',
              fontSize: '0.95rem',
            }}
            placeholder='Search labs, courses, challenges...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className='position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary'
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>

      {/* Right icons */}
      <div className='d-flex align-items-center gap-3 gap-md-4'>
        {/* Mobile Search */}
        <button className='btn btn-link primary-text d-md-none'>
          <FontAwesomeIcon icon={faSearch} size='lg' />
        </button>

        {/* Notifications */}
        <div className='position-relative'>
          <button className='btn btn-link'>
            <FontAwesomeIcon icon={faBell} size='lg' />
            <span
              className='position-absolute top-0 start-50 badge rounded-pill bg-danger'
              style={{
                fontSize: '0.65rem',
                width: 'fit-content',
                transform: 'translate(15%, 4%)',
              }}>
              3
            </span>
          </button>
        </div>

        {/* User Avatar */}
        <div className='position-relative' ref={dropdownRef}>
          <button
            className='btn btn-link primary-text d-flex align-items-center gap-2 p-0 text-decoration-none'
            type='button'
            onClick={toggleDropdown}>
            {user?.image ? (
              <img
                src={user.image}
                alt='User'
                className='rounded-circle shadow-sm'
                style={{ width: 40, height: 40, objectFit: 'cover' }}
              />
            ) : (
              <div
                className='rounded-circle d-flex align-items-center justify-content-center primary-text fw-bold shadow-sm'
                style={{
                  width: 40,
                  height: 40,
                  background: 'linear-gradient(135deg, #0d6efd, #0a58ca)',
                  fontSize: '0.9rem',
                }}>
                {getInitials()}
              </div>
            )}
            <FontAwesomeIcon
              icon={faChevronDown}
              className='text-secondary d-none d-md-block'
            />
          </button>

          {dropdownOpen && (
            <ul
              className='dropdown-menu border-gray shadow-lg show text-center'
              style={{
                position: 'absolute',
                right: 0,
                top: '100%',
                marginTop: '4px',
              }}>
              <li>
                <a className='dropdown-item py-2' href='/dashboard/profile'>
                  Profile
                </a>
              </li>
              <li>
                <a className='dropdown-item py-2' href='/dashboard/profile'>
                  Settings
                </a>
              </li>
              <li>
                <hr className='dropdown-divider my-1' />
              </li>
              <li>
                <button
                  className='dropdown-item py-2 text-danger'
                  onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);

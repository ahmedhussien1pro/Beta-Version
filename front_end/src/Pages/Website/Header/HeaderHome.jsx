import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import ThemeToggler from '../UserHome/Components/Theme/ThemeToggler';
import LangToggler from '../UserHome/Components/Lang/LangToggler';
import Cookie from 'cookie-universal';
import axios from 'axios';
import Aos from 'aos';

const HeaderHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileListVisible, setProfileListVisible] = useState(false);
  const [userImage, setUserImage] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const cookie = Cookie();
  const token = cookie.get('CuberWeb');

  const navbarCollapseRef = useRef(null);
  const navbarTogglerRef = useRef(null);
  const profileRef = useRef(null);

  const toggleProfileList = () => {
    setProfileListVisible(!profileListVisible);
  };

  const toggleNavbar = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(
          'https://digitopia-project-backend.vercel.app/api/personalInfo',
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = res.data.data;
        const imageUrl = data.image
          ? `${data.image.path.replace('\\', '/')}`
          : '';
        setUserImage(imageUrl);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    if (token) fetchUserProfile();
  }, [token]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleScrollClose = () => {
      setIsDropdownOpen(false);
      setProfileListVisible(false);
    };

    window.addEventListener('scroll', handleScrollClose);
    return () => window.removeEventListener('scroll', handleScrollClose);
  }, []);

  useEffect(() => {
    const handleClickOutsideNavbar = (event) => {
      if (
        navbarCollapseRef.current &&
        !navbarCollapseRef.current.contains(event.target) &&
        navbarTogglerRef.current &&
        !navbarTogglerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutsideNavbar);
    }

    return () => {
      document.removeEventListener('click', handleClickOutsideNavbar);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutsideProfile = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileListVisible(false);
      }
    };

    if (profileListVisible) {
      document.addEventListener('click', handleClickOutsideProfile);
    }

    return () => {
      document.removeEventListener('click', handleClickOutsideProfile);
    };
  }, [profileListVisible]);
  return (
    <header className={`header  ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className='navbar navbar-expand-lg '>
        <div
          className={
            isScrolled
              ? 'container px-4 px-lg-5'
              : 'container-fluid px-4 px-lg-5'
          }>
          {/* Logo */}
          <Link
            className='navbar-brand header__logo d-flex align-items-center'
            to='/'>
            <h2 className='header__logo-title mb-0 me-2'>
              Cyber <span>Labs</span>
            </h2>
            <span className='badge small main-color underline'>v1.0</span>
          </Link>

          {/* Toggler */}
          <button
            className='navbar-toggler border-0'
            type='button'
            onClick={toggleNavbar}
            aria-controls='main-navbar'
            aria-expanded={isDropdownOpen}
            aria-label='Toggle navigation'
            ref={navbarTogglerRef}>
            <FontAwesomeIcon
              icon={isDropdownOpen ? faXmark : faBars}
              className=' fs-4'
            />
          </button>

          {/* Nav Content */}
          <div
            className={`collapse navbar-collapse ${
              isDropdownOpen ? 'show' : ''
            }`}
            id='main-navbar'
            ref={navbarCollapseRef}>
            {/* Nav Links */}
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0 '>
              <li className='nav-item'>
                <NavLink
                  className='nav-link '
                  to='/'
                  ar-data='الرئيسة'
                  en-data='Home'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link '
                  to='/home'
                  ar-data='التعلم'
                  en-data='Learning'>
                  Learning
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link '
                  to='/about-us'
                  ar-data='من نحن'
                  en-data='About Us'>
                  About Us
                </NavLink>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link '
                  href='/labs/all-labs'
                  ar-data='جميع المختبرات'
                  en-data='All Labs'>
                  All Labs
                </a>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link '
                  to='/contact'
                  ar-data='اتصل بنا'
                  en-data='Contact'>
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className='d-flex align-items-center ms-3'>
              <ThemeToggler isDropdownOpen={isDropdownOpen} />
              <LangToggler />
              {token ? (
                <div className='dropdown position-relative' ref={profileRef}>
                  <button
                    className=' profile-img btn border-0 p-0  ms-3'
                    type='button'
                    onClick={toggleProfileList}>
                    {userImage ? (
                      <img
                        src={userImage}
                        alt='Profile'
                        className='rounded-circle'
                        style={{
                          width: '40px',
                          height: '40px',
                          objectFit: 'cover',
                        }}
                      />
                    ) : (
                      <i className='fa-solid fa-circle-user primary-text fs-2'></i>
                    )}
                  </button>
                  {profileListVisible && (
                    <ul className='header__profile-dropdown'>
                      <li>
                        <NavLink
                          to='/trainee-dashboard'
                          className='dropdown-item '
                          ar-data='عرض الملف الشخصي'
                          en-data='View Profile'>
                          View Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to='/dashboard/profile'
                          className='dropdown-item '
                          ar-data='إدارة الحساب'
                          en-data='Manage Account'>
                          Manage Account
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <div className='d-flex'>
                  <Link
                    to='/login'
                    className='btn btn-outline-light me-2'
                    ar-data='تسجيل الدخول'
                    en-data='Login'>
                    Login
                  </Link>
                  <Link
                    to='/register'
                    className='btn btn-primary'
                    ar-data='تسجيل'
                    en-data='Register'>
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderHome;

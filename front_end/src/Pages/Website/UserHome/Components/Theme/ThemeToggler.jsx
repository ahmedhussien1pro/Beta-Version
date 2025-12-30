import React, { useState, useEffect } from 'react';
import './ThemeToggler.css';
const darkTheme = {
  '--primary-bg': '#191B21',
  '--secondary-bg': '#23272F',
  '--tertiary-bg': '#0a0b0db8',
  '--primary-text': '#ffffff',
  '--tertiary-text': '#91a3baff',
  '--secondary-text': '#EBECF0',
  '--main-color': '#0d6efd',
  '--faq-body-bg': '#282626',
  '--faq-header': '#3a3c40',
  '--faq-header-hover': '#3a3c40',
  '--box-shadow': '0 2px 6px rgb(0 0 0 / 20%), 0 2px 12px rgb(0 0 0 / 16%)',
  '--course-card-bg': '#ffffff0a',
};

const lightTheme = {
  '--primary-bg': '#ffffff',
  '--secondary-bg': '#EFF0F3',
  '--tertiary-text': '#44556bff',
  '--tertiary-bg': '#ffffff',
  '--primary-text': '#191B21',
  '--secondary-text': '#3a3c40',
  '--main-color': '#0c65ebff',
  '--faq-body-bg': '#bebebe',
  '--faq-header': '#3a3c40',
  '--faq-header-hover': '#505358',
  '--box-shadow': '0 4px 12px rgba(0,0,0,0.08)',
  '--course-card-bg': 'rgba(255, 255, 255, 0.8)',
  '--course-card-border': 'rgba(0, 0, 0, 0.1)',
};

const ThemeSwitcher = (isDropdownOpen) => {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'dark' : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    const theme = isDark ? darkTheme : lightTheme;

    Object.keys(theme).forEach((variable) => {
      document.documentElement.style.setProperty(variable, theme[variable]);
    });
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <button
      className={`theme-btn border-0 d-flex align-items-center cursor-pointer secondary-bg ${
        isDark ? 'active' : ''
      } ${isDropdownOpen ? 'primary-bg' : 'secondary-bg'}`}
      onClick={toggleTheme}
      title='Toggle Theme'>
      <span className='theme-icon position-relative '></span>
    </button>
  );
};

export default ThemeSwitcher;

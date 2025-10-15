import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css';

const darkTheme = {
  '--primary-bg': '#0f0f0f',
  '--secondary-bg': '#1b1b1b',
  '--primary-text': '#ffffff',
  '--secondary-text': '#c4c2c2',
  '--main-color': '#00e77f',
  '--faq-body-bg': '#282626',
  '--faq-header': '#3a3c40',
  '--faq-header-hover': '#3a3c40',
};

const lightTheme = {
  '--primary-bg': '#ffffff',
  '--secondary-bg': '#c4c2c2',
  // '--primary-bg': '#c4c2c2',
  // '--secondary-bg': '#ffffff',
  '--primary-text': '#0f0f0f',
  '--secondary-text': '#1b1b1b',
  '--main-color': '#048a4e',
  '--faq-body-bg': '#bebebe',
  '--faq-header': '#3a3c40',
  '--faq-header-hover': '#505358',
};

const ThemeSwitcher = () => {
  // Initialize state from local storage or default to false (light theme)
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'dark' : false;
  });

  useEffect(() => {
    // Save current theme state to local storage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    const theme = isDark ? darkTheme : lightTheme;
    Object.keys(theme).forEach((variable) => {
      document.documentElement.style.setProperty(variable, theme[variable]);
    });
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className='switch-box'>
      <label id='switch' className='switch'>
        <input
          type='checkbox'
          onChange={toggleTheme}
          id='slider'
          checked={isDark}
        />
        <span className='slider round'></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;

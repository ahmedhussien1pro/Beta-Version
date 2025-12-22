import React, { useState, useEffect } from 'react';
// import "./Theme.css";

// Define preset themes (using hex values).
const presets = {
  dark: {
    '--primary-bg': '#0f0f0f',
    '--secondary-bg': '#1b1b1bd0',
    '--primary-text': '#ffffff',
    '--secondary-text': '#c4c2c2',
    '--main-color': '#00e77f',
  },
  light: {
    '--primary-bg': '#ffffff',
    '--secondary-bg': '#c4c2c2',
    '--primary-text': '#0f0f0f',
    '--secondary-text': '#1b1b1bd0',
    '--main-color': '#00e77f',
  },
};

// List of all CSS custom properties to control.
const cssKeys = [
  '--primary-bg',
  '--secondary-bg',
  '--primary-text',
  '--secondary-text',
  '--main-color',
];

function ThemeCustomizer() {
  // Selected preset name. It will be "custom" if the user edits any color.
  const [selectedPreset, setSelectedPreset] = useState('dark');
  // Holds the current theme values (preset or custom).
  const [customTheme, setCustomTheme] = useState(presets.dark);

  // Apply the theme to the document and save to localStorage.
  useEffect(() => {
    Object.entries(customTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    localStorage.setItem('selectedPreset', selectedPreset);
    localStorage.setItem('customTheme', JSON.stringify(customTheme));
  }, [customTheme, selectedPreset]);

  // Load saved theme from localStorage on mount.
  useEffect(() => {
    const savedPreset = localStorage.getItem('selectedPreset');
    const savedTheme = localStorage.getItem('customTheme');
    if (savedPreset && presets[savedPreset]) {
      setSelectedPreset(savedPreset);
      setCustomTheme(presets[savedPreset]);
    } else if (savedTheme) {
      try {
        const theme = JSON.parse(savedTheme);
        setSelectedPreset('custom');
        setCustomTheme(theme);
      } catch (error) {
        console.error('Error parsing saved theme', error);
      }
    }
  }, []);

  // When a preset is selected.
  const handlePresetSelect = (presetName) => {
    setSelectedPreset(presetName);
    setCustomTheme(presets[presetName]);
  };

  // Update theme colors on color picker change.
  const handleColorChange = (key, newColor) => {
    setSelectedPreset('custom');
    setCustomTheme((prevTheme) => ({
      ...prevTheme,
      [key]: newColor,
    }));
  };

  return (
    <div className='settings-container'>
      <div className='theme-customizer-form card'>
        <div className='card-body'>
          <h2 className='card-title'>Theme Customizer</h2>
          <div className='preset-options mb-4'>
            <div className='btn-group d-flex'>
              {Object.keys(presets).map((presetName) => (
                <button
                  key={presetName}
                  className={`btn ${
                    selectedPreset === presetName
                      ? 'btn-primary'
                      : 'btn-outline-primary'
                  } flex-fill`}
                  onClick={() => handlePresetSelect(presetName)}>
                  {presetName.charAt(0).toUpperCase() + presetName.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className='custom-colors'>
            {cssKeys.map((key) => (
              <div className='form-group row' key={key}>
                <label className='col-sm-4 col-form-label'>{key}</label>
                <div className='col-sm-8'>
                  <input
                    type='color'
                    className='form-control form-control-color'
                    value={customTheme[key]}
                    onChange={(e) => handleColorChange(key, e.target.value)}
                    title={`Choose ${key} color`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeCustomizer;

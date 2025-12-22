import React from 'react';
import './Preloader.css';
import preloaderImage from './logo.png';

const Preloader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className='preloader'>
      <div className='loading-container'>
        <div className='loading'></div>
        <div id='loading-icon'>
          <img src={preloaderImage} alt='Preloader' />
        </div>
      </div>
    </div>
  );
};

export default Preloader;

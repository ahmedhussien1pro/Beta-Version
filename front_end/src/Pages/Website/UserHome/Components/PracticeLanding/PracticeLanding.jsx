import React from 'react';
// import "../../assets/css/Landing.css";
import defaultBg from '../../assets/css/bg.jpg';

const PracticeLanding = () => {
  const handleTryLab = () => {
    console.log('Try a Lab');
  };
  return (
    <div
      className='my-landing'
      style={{
        backgroundImage: `url(${defaultBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className='landing__overlay'></div>
      <div className='landing__content'>
        <div className='landing__text'>
          <h1 className='landing__title'>Practice</h1>
          <h2 className='landing__subtitle'>Labs for Attack & Vulnerability</h2>
          <p className='landing__description'>
            Put your knowledge into action by solving hands-on lab challenges.
            Sharpen your skills against real vulnerabilities.
          </p>
          <button className='landing__cta' onClick={handleTryLab}>
            Try a Lab
          </button>
        </div>

        <div className='landing__icon'>
          <div className='landing__icon-border'>
            {/* Edge Icons */}
            <div className='landing__edge-icon landing__edge-icon--top '>
              <i className='fas fa-user-secret'></i>
            </div>
            <div className='landing__edge-icon landing__edge-icon--right'>
              <i className='fas fa-book-open'></i>
            </div>
            <div className='landing__edge-icon landing__edge-icon--left landing__edge-icon--active '>
              <i className='fas fa-lightbulb'></i>
            </div>

            {/* Center Circle */}
            <div className='landing__icon-circle'>Practice</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeLanding;

import React from 'react';
import MatrixRain from '../Landing/MatrixRain/MatrixRain';
import practiceImage from './Practice.png';

const PracticeLanding = () => {
  const handleTryLab = () => {
    console.log('Try a Lab');
  };

  return (
    <div className='my-landing'>
      {/* Matrix Background */}
      <MatrixRain opacity={0.15} />
      <div className='landing__overlay'></div>

      <div className='container landing__container'>
        <div className='row align-items-center gy-4'>
          {/* LEFT CONTENT */}
          <div className='col-lg-8'>
            {/* Title */}
            <h1
              className='d-none d-lg-block  landing__title mb-3'
              ar-data='تدرب'
              en-data='Practice'>
              Practice
            </h1>
            <div className='d-lg-none'>
              <div className='d-flex justify-content-between align-items-center mb-3 gap-3'>
                <div className='flex-grow-1'>
                  <h1
                    className='landing__title mb-2'
                    ar-data='تدرب'
                    en-data='Practice'>
                    Practice
                  </h1>
                  {/* Description */}
                  <h3
                    className='landing__subtitle mb-3'
                    ar-data='مختبرات الهجوم والثغرات'
                    en-data='Labs for Attack & Vulnerability'>
                    Labs for Attack & Vulnerability
                  </h3>
                </div>

                {/* Mobile Image */}
                <div className='landing__mobile-image flex-shrink-0'>
                  <img
                    src={practiceImage}
                    alt='Practice Labs'
                    className='rounded-circle'
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      border: '3px solid var(--main-color)',
                      boxShadow: '0 4px 12px rgba(13, 110, 253, 0.3)',
                    }}
                  />
                </div>
              </div>
            </div>
            {/* Subtitle */}
            <h3
              className='d-none d-lg-block  landing__subtitle mb-3'
              ar-data='مختبرات الهجوم والثغرات'
              en-data='Labs for Attack & Vulnerability'>
              Labs for Attack & Vulnerability
            </h3>

            {/* Description */}
            <p
              className='landing__description mb-4'
              ar-data='ضع معرفتك موضع التنفيذ من خلال حل تحديات المختبر العملية. اصقل مهاراتك ضد الثغرات الحقيقية.'
              en-data='Put your knowledge into action by solving hands-on lab challenges. Sharpen your skills against real vulnerabilities.'>
              Put your knowledge into action by solving hands-on lab challenges.
              Sharpen your skills against real vulnerabilities.
            </p>

            {/* Action Button */}
            <div className='d-flex gap-2 flex-wrap align-items-center'>
              <button
                className='btn btn-primary px-4 py-2 fw-bold shadow-sm'
                ar-data='جرب مختبر'
                en-data='Try a Lab'
                onClick={handleTryLab}>
                Try a Lab
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE (DESKTOP ONLY) */}
          <div className='col-lg-4 d-none d-lg-block'>
            <div className='landing__image-section d-flex flex-column align-items-center gap-3 sticky-top'>
              <div className='landing__image-wrapper'>
                <img
                  src={practiceImage}
                  alt='Practice Labs'
                  className='landing__image '
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeLanding;

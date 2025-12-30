import React from 'react';
import MatrixRain from '../Landing/MatrixRain/MatrixRain';
import learningImage from './images/learning.png';

const LearnLanding = () => {
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
              className='landing__title mb-3'
              ar-data='تعلم الأمن السيبراني'
              en-data='Learn Cybersecurity'>
              Learn Cybersecurity
            </h1>

            {/* Subtitle */}
            <h2
              className='landing__subtitle mb-3'
              ar-data='القرصنة العملية'
              en-data='Hands-on Hacking'>
              Hands-on Hacking
            </h2>

            {/* Description */}
            <p
              className='landing__description mb-4'
              ar-data='يستند محتوانا إلى تمارين تفاعلية مبنية على سيناريوهات واقعية — من اختراق الأجهزة إلى التحقيق في الهجمات، نحن نغطي كل شيء لك.'
              en-data="Our content is guided by interactive exercises based on real-world scenarios—from hacking machines to investigating attacks, we've got you covered.">
              Our content is guided by interactive exercises based on real-world
              scenarios—from hacking machines to investigating attacks, we've
              got you covered.
            </p>

            {/* Action Button */}
            <div className='d-flex gap-2 flex-wrap align-items-center'>
              <button
                className='btn btn-primary px-4 py-2 fw-bold shadow-sm'
                ar-data='ابدأ التعلم'
                en-data='Start Learning'>
                Start Learning
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE (DESKTOP ONLY) */}
          <div className='col-lg-4 d-none d-lg-block'>
            <div className='landing__image-section d-flex flex-column align-items-center gap-3 sticky-top'>
              <div className='landing__image-wrapper'>
                <img
                  src={learningImage}
                  alt='Learn Cybersecurity'
                  className='landing__image '
                />
              </div>
            </div>
          </div>

          {/* MOBILE IMAGE */}
          <div className='col-12 d-lg-none text-center'>
            <div className='landing__mobile-image-wrapper mx-auto'>
              <img
                src={learningImage}
                alt='Learn Cybersecurity'
                className='rounded-circle'
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  border: '3px solid var(--main-color)',
                  boxShadow: '0 4px 12px rgba(13, 110, 253, 0.3)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnLanding;

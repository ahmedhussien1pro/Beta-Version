import React from 'react';
// import '../../assets/css/Landing.css';
import defaultBg from '../../assets/bgs/bg1 (1).jpg';

const LearnLanding = () => {
  return (
    <div
      className='my-landing'
      style={{
        backgroundImage: `url(${defaultBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className='landing__overlay'></div>
      <div className='landing__content section'>
        <div className='landing__text'>
          <h1
            className='landing__title'
            ar-data='تعلم مجال الأمن السيبراني'
            en-data='Learn Cybersecurity'>
            Learn Cybersecurity
          </h1>
          <h2
            className='landing__subtitle'
            ar-data='القرصنة العملية'
            en-data='Hands-on Hacking'>
            Hands-on Hacking
          </h2>
          <p
            className='landing__description'
            ar-data='يستند محتوىنا إلى تمارين تفاعلية مبنية على سيناريوهات واقعية — من اختراق الأجهزة إلى التحقيق في الهجمات، نحن نغطي كل شيء لك.'
            en-data='Our content is guided by interactive exercises based on real-world scenarios—from hacking machines to investigating attacks, we’ve got you covered.'>
            Our content is guided by interactive exercises based on real-world
            scenarios—from hacking machines to investigating attacks, we’ve got
            you covered.
          </p>
          <button
            className='landing__cta'
            ar-data='ابدأ التعلم'
            en-data='Start Learning'>
            Start Learning
          </button>
        </div>

        <div className='landing__icon'>
          <div className='landing__icon-border'>
            {/* Edge Icons */}
            <div className='landing__edge-icon landing__edge-icon--top landing__edge-icon--active'>
              <i className='fas fa-user-secret'></i>
            </div>
            <div className='landing__edge-icon landing__edge-icon--right'>
              <i className='fas fa-book-open'></i>
            </div>
            {/* <div className="landing__edge-icon landing__edge-icon--bottom">
              <i className="fas fa-chalkboard-teacher"></i>
            </div> */}
            <div className='landing__edge-icon landing__edge-icon--left'>
              <i className='fas fa-lightbulb'></i>
            </div>

            {/* Center Circle */}
            <div
              className='landing__icon-circle'
              ar-data='تعلم'
              en-data='Learn'>
              Learn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnLanding;

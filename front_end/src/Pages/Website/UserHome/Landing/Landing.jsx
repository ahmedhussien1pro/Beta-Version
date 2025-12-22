import React from 'react';
import '../Components/LearnLanding/LearnLanding';
const Landing = () => {
  return (
    <div className='my-landing'>
      <div className='landing__overlay'></div>
      <div className='landing__content'>
        {/* Left Text Section */}
        <div className='landing__text'>
          <h1 className='landing__title' ar-data='تعلم مجال الأمن السيبراني' en-data='Learn Cybersecurity'>
            Learn Cybersecurity
          </h1>
          <h2 className='landing__subtitle' ar-data='القرصنة العملية' en-data='Hands-on Hacking'>Hands-on Hacking</h2>
          <p className='landing__description' ar-data='يستند محتوىنا إلى تمارين تفاعلية مبنية على سيناريوهات واقعية — من اختراق الأجهزة إلى التحقيق في الهجمات، نحن نغطي كل شيء لك.' en-data='Our content is guided by interactive exercises based on real-world scenarios—from hacking machines to investigating attacks, we’ve got you covered.'>
            Our content is guided by interactive exercises based on real-world
            scenarios—from hacking machines to investigating attacks, we’ve got
            you covered.
          </p>
          <button className='landing__cta' ar-data='ابدأ التعلم' en-data='Start Learning'>Start Learning</button>
        </div>

        {/* Right Icon/Circle Section */}
        <div className='landing__icon'>
          <div className='landing__icon-border'>
            {/* Edge Icons */}
            <div className='landing__edge-icon landing__edge-icon--top'>
              <i className='fas fa-key'></i>
            </div>
            <div className='landing__edge-icon landing__edge-icon--right'>
              <i className='fas fa-lock'></i>
            </div>
            {/* <div className="landing__edge-icon landing__edge-icon--bottom">
              <i className="fas fa-shield-alt"></i>
            </div> */}
            <div className='landing__edge-icon landing__edge-icon--left'>
              <i className='fas fa-bug'></i>
            </div>

            {/* Center Text */}
            <div className='landing__icon-circle' ar-data='تعلم' en-data='Learn'>Learn</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

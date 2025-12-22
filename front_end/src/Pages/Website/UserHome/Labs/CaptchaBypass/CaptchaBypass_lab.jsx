import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/Captcha Bypass/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function CaptchaBypass_lab() {
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingPractice />
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Captcha Bypass'} />
          <div className='row'>
            <Card
              link={'/captchabypass/captchabypass_lab/lab1'}
              image={image}
              title={'Captcha Bypass'}
              brief={
                'Get rid of CAPTCHA with the help of ROBOTS! Remember, CAPTCHA is constantly being refreshed.'
              }
              difficulty={'Easy'}
            />

            <Card
              link={'/captchabypass/captchabypass_lab/lab2'}
              image={image}
              title={'Broken Captcha'}
              brief={'Bypass captcha like a hacker, not manually.'}
              difficulty={'Intermediate'}
            />

            <Card
              link={'/captchabypass/captchabypass_lab/lab3'}
              image={image}
              title={'Bypass reCAPTCHA v2'}
              brief={'Bypass captcha like a hacker'}
              difficulty={'Intermediate'}
            />
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}

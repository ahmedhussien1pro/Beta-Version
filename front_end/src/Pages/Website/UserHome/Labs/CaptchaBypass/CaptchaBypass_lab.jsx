import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/Captcha Bypass/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function CaptchaBypass_lab() {
  const Labs = [
    {
      en_title: 'Captcha Bypass',
      en_brief:
        'Get rid of CAPTCHA with the help of ROBOTS! Remember, CAPTCHA is constantly being refreshed.',
      en_difficulty: 'Easy',
      ar_title: 'تجاوز الكابتشا',
      ar_brief:
        'تخلص من CAPTCHA بمساعدة الروبوتات! تذكر، يتم تحديث CAPTCHA باستمرار.',
      ar_difficulty: 'سهل',
      link: '/captchabypass/captchabypass_lab/lab1',
      image: image,
      isFree: true,
      topicsCount: 2,
    },
    {
      en_title: 'Broken Captcha',
      en_brief: 'Bypass captcha like a hacker, not manually.',
      en_difficulty: 'Medium', // ← غيرت لـ Medium
      ar_title: 'كابتشا معطلة',
      ar_brief: 'تجاوز الكابتشا مثل الهاكر، وليس يدويًا.',
      ar_difficulty: 'متوسط',
      link: '/captchabypass/captchabypass_lab/lab2',
      image: image,
      isFree: true,
      topicsCount: 3,
    },
    {
      en_title: 'Bypass reCAPTCHA v2',
      en_brief: 'Bypass captcha like a hacker',
      en_difficulty: 'Medium', // ← غيرت لـ Medium
      ar_title: 'تجاوز reCAPTCHA v2',
      ar_brief: 'تجاوز الكابتشا مثل الهاكر',
      ar_difficulty: 'متوسط',
      link: '/captchabypass/captchabypass_lab/lab3',
      image: image,
      isFree: true,
      topicsCount: 4,
    },
  ];

  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingPractice />
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Captcha Bypass'} />
          <div className='row'>
            {Labs.map((lab, index) => {
              return <Card key={index} {...lab} />;
            })}
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}

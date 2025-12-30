import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Auth_Photo from '../../assets/img/Burp_Suit/Labs-Burp-Suit.jpg';
import { Card } from '../../Components/Card/Card';
import GoTop from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function BurpSuitLabs() {
  const Labs = [
    {
      // English Content
      en_title: 'Proxy',
      en_brief:
        'Gain many instead of buying by proxy manipulation and traffic control.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'البروكسي',
      ar_brief:
        'احصل على الكثير بدلاً من الشراء عن طريق التلاعب بالبروكسي والتحكم في حركة المرور.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Burp_Suit/Burp_Suit_Labs/lab1',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 2,
    },
    {
      // English Content
      en_title: 'Intruder',
      en_brief:
        'Can you find the correct username and password using Intruder?',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'المتطفل',
      ar_brief:
        'هل يمكنك العثور على اسم المستخدم وكلمة المرور الصحيحة باستخدام Intruder؟',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Burp_Suit/Burp_Suit_Labs/lab2',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'Repeater',
      en_brief: 'Find the valid pages',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'المكرر',
      ar_brief: 'ابحث عن الصفحات الصالحة',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Burp_Suit/Burp_Suit_Labs/lab3',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 2,
    },
    {
      // English Content
      en_title: 'Decoder',
      en_brief: 'Try to decode messages and find the hidden password.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'فك التشفير',
      ar_brief: 'حاول فك تشفير الرسائل والعثور على كلمة المرور المخفية.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/coming-soon',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 1,
    },
  ];

  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      {/* Start Course */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Burp Suit'} />
          <div className='row'>
            {Labs.map((lab, index) => {
              return <Card key={index} {...lab} />;
            })}
          </div>
        </div>
      </div>
      <GoTop />
      <Footer />
    </>
  );
}

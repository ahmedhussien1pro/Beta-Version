import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Auth_Photo from '../../assets/img/Condition_Race/Race Condition Background.png';
import { Card } from '../../Components/Card/Card';
import GoTop from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function RaceConditionLabs() {
  const Labs = [
    {
      // English Content
      en_title: 'Race Attack: Multi-Accounts, One Email',
      en_brief:
        'Exploit a race condition to create multiple accounts using the same email. Bypass validation, break logic, and understand why timing is critical in security.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'هجوم السباق: حسابات متعددة، بريد إلكتروني واحد',
      ar_brief:
        'استغل ثغرة السباق لإنشاء حسابات متعددة باستخدام نفس البريد الإلكتروني. تجاوز التحقق، اكسر المنطق، وافهم لماذا التوقيت حاسم في الأمان.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Race_Condition/Race_Condition_Labs/Lab1',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 4,
    },
    {
      // English Content
      en_title: 'Race Attack: One Coupon, Infinite Uses',
      en_brief:
        'Exploit a race condition to reuse a single coupon multiple times. Break payment logic, drain resources, and understand why atomicity is crucial.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'هجوم السباق: كوبون واحد، استخدامات لا نهائية',
      ar_brief:
        'استغل ثغرة السباق لإعادة استخدام كوبون واحد عدة مرات. اكسر منطق الدفع، استنزف الموارد، وافهم لماذا الذرية ضرورية.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/coming-soon',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 5,
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
          <PracticeTitle title={'Race Condition'} />
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

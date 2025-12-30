import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Auth_Photo from '../../assets/img/Command Injection/command-injection-labs.png';
import { Card } from '../../Components/Card/Card';
import GoTop from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function CommandInjectionLabs() {
  const Labs = [
    {
      // English Content
      en_title: 'Pingject',
      en_brief: 'Try to execute a forbidden command.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'حقن الأوامر عبر Ping',
      ar_brief: 'حاول تنفيذ أمر محظور.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Command_Injection/Command_Injection_labs/lab1',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 2,
    },
    {
      // English Content
      en_title: 'Blacklist Breakout',
      en_brief: 'Find a way to bypass the blacklist.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'كسر القائمة السوداء',
      ar_brief: 'ابحث عن طريقة لتجاوز القائمة السوداء.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Command_Injection/Command_Injection_labs/lab3',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'URLject',
      en_brief: 'Hack the Address Bar',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'حقن الأوامر عبر URL',
      ar_brief: 'اختراق شريط العنوان',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Command_Injection/Command_Injection_labs/lab2',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 2,
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
          <PracticeTitle title={'Command Injection'} />
          <div className='row'>
            <div className='row'>
              {Labs.map((lab, index) => {
                return <Card key={index} {...lab} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <GoTop />
      <Footer />
    </>
  );
}

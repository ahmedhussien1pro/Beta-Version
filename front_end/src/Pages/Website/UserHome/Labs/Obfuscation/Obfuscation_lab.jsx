import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/Obfuscation/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function Obfuscation_lab() {
  const Labs = [
    {
      // English Content
      en_title: 'Legendary Process',
      en_brief:
        'Master the basics of obfuscation, a powerful technique for securing code and protecting intellectual property in cybersecurity environments',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'العملية الأسطورية',
      ar_brief:
        'أتقن أساسيات التشويش، وهي تقنية قوية لتأمين الكود وحماية الملكية الفكرية في بيئات الأمن السيبراني',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Obfuscation/obfuscation_lab/login',
      image: image,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'Obfuscation Quiz',
      en_brief:
        'Test your knowledge of obfuscation techniques and code protection methods in cybersecurity',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'اختبار التشويش',
      ar_brief:
        'اختبر معرفتك بتقنيات التشويش وطرق حماية الكود في الأمن السيبراني',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Obfuscation/obfuscation_lab/quiz',
      image: image,
      isFree: true,
      topicsCount: 2,
    },
  ];

  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingPractice />
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Obfuscation'} />
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

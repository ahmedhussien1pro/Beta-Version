import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets/img/Cryptography/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function CryptoGraphy_lab() {
  const Labs = [
    {
      // English Content
      en_title: 'Top Secret',
      en_brief:
        'Cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'سري للغاية',
      ar_brief:
        'التشفير، مهارة حاسمة لتأمين البيانات وفهم تقنيات التشفير في بيئات الأمن السيبراني. 🚀',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/cryptography/cryptography_lab/top-secret',
      image: image,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'Decode the Image',
      en_brief:
        'Cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'فك تشفير الصورة',
      ar_brief:
        'التشفير، مهارة حاسمة لتأمين البيانات وفهم تقنيات التشفير في بيئات الأمن السيبراني. 🚀',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/cryptography/cryptography_lab/decode-the-image',
      image: image,
      isFree: true,
      topicsCount: 2,
    },
    {
      // English Content
      en_title: 'Corrupted',
      en_brief:
        'Cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'ملف تالف',
      ar_brief:
        'التشفير، مهارة حاسمة لتأمين البيانات وفهم تقنيات التشفير في بيئات الأمن السيبراني. 🚀',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/cryptography/cryptography_lab/corrupted',
      image: image,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'Hash Crack',
      en_brief:
        'Cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'كسر التجزئة',
      ar_brief:
        'التشفير، مهارة حاسمة لتأمين البيانات وفهم تقنيات التشفير في بيئات الأمن السيبراني. 🚀',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/cryptography/cryptography_lab/hash-crack',
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
          <PracticeTitle title={'CryptoGraphy'} />
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

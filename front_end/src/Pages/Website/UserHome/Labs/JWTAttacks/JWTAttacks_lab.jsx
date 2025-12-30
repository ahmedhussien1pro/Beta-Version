import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/JWT attacks/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function JWTAttacks_lab() {
  const Labs = [
    {
      // English Content
      en_title: 'JWT Unverified Signature',
      en_brief:
        "This lab uses a JWT-based mechanism for handling sessions. Due to implementation flaws, the server doesn't verify the signature of any JWTs that it receives.",
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'توقيع JWT غير مُتحقق منه',
      ar_brief:
        'يستخدم هذا المعمل آلية تعتمد على JWT للتعامل مع الجلسات. بسبب عيوب في التنفيذ، لا يتحقق الخادم من توقيع أي JWT يتلقاه.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/jwtattacks/jwtattacks_lab/lab1',
      image: image,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'JWT Flawed Signature Verification',
      en_brief:
        'This lab uses a JWT-based mechanism for handling sessions. The server is insecurely configured to accept unsigned JWTs.',
      en_difficulty: 'Medium',

      // Arabic Content
      ar_title: 'التحقق المعيب من توقيع JWT',
      ar_brief:
        'يستخدم هذا المعمل آلية تعتمد على JWT للتعامل مع الجلسات. تم تكوين الخادم بشكل غير آمن لقبول JWT غير موقعة.',
      ar_difficulty: 'متوسط',

      // Common Data
      link: '/jwtattacks/jwtattacks_lab/lab2',
      image: image,
      isFree: true,
      topicsCount: 4,
    },
    {
      // English Content
      en_title: 'JWT Weak Signing Key',
      en_brief:
        'This lab uses a JWT-based mechanism for handling sessions. It uses an extremely weak secret key to both sign and verify tokens. This can be easily brute-forced using a wordlist of common secrets.',
      en_difficulty: 'Medium',

      // Arabic Content
      ar_title: 'مفتاح توقيع JWT ضعيف',
      ar_brief:
        'يستخدم هذا المعمل آلية تعتمد على JWT للتعامل مع الجلسات. يستخدم مفتاحًا سريًا ضعيفًا للغاية لكل من توقيع الرموز والتحقق منها. يمكن كسر هذا بسهولة باستخدام قائمة كلمات من الأسرار الشائعة.',
      ar_difficulty: 'متوسط',

      // Common Data
      link: '/jwtattacks/jwtattacks_lab/lab3',
      image: image,
      isFree: true,
      topicsCount: 5,
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
          <PracticeTitle title={'JWT Attacks'} />
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

import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Auth_Photo from '../../assets/img/Broken Authentication/Auth_Icon.png';
import { Card } from '../../Components/Card/Card';
import GoTop from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function BrokenAuthenticationLab() {
  const Labs = [
    {
      en_title: 'Brute Force Attack - Level 1',
      ar_title: 'هجوم القوة الغاشمة - المستوى 1',

      en_brief:
        'Test your skills in password cracking. Can you find the correct password using a brute force attack technique?',
      ar_brief:
        'اختبر مهاراتك في كسر كلمات المرور. هل يمكنك العثور على كلمة المرور الصحيحة باستخدام تقنية الهجوم بالقوة الغاشمة؟',

      en_difficulty: 'Easy',
      ar_difficulty: 'سهل',

      link: '/broken-auth/Broken_Authentication_Lab/lab1',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 2,
    },
    {
      en_title: 'Brute Force Attack - Level 2',
      ar_title: 'هجوم القوة الغاشمة - المستوى 2',

      en_brief:
        'Advanced brute force challenge. Can you discover both the username and password to gain access?',
      ar_brief:
        'تحدي متقدم في القوة الغاشمة. هل يمكنك اكتشاف اسم المستخدم وكلمة المرور للحصول على الوصول؟',

      en_difficulty: 'Easy',
      ar_difficulty: 'سهل',

      link: '/broken-auth/Broken_Authentication_Lab/lab2',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 3,
    },
    {
      en_title: 'Login Bypass - No Redirect',
      ar_title: 'تجاوز تسجيل الدخول - بدون إعادة توجيه',

      en_brief:
        'Exploit a broken authentication mechanism. Can you bypass the login page without proper credentials?',
      ar_brief:
        'استغل آلية مصادقة معطلة. هل يمكنك تجاوز صفحة تسجيل الدخول بدون بيانات اعتماد صحيحة؟',

      en_difficulty: 'Easy',
      ar_difficulty: 'سهل',

      link: '/broken-auth/Broken_Authentication_Lab/lab3',
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
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Broken Authentication'} />
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

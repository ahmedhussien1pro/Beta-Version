import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Auth_Photo from '../../assets/img/Insecure_Deserialization/Labs_Photo_Insecure.png';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function InsecureDeserializationLabs() {
  const Labs = [
    {
      // English Content
      en_title: 'Bake Your Own Cookies',
      en_brief: "When 'user' isn't enough—forge the cookie and become admin",
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'اصنع ملفات تعريف الارتباط الخاصة بك',
      ar_brief:
        'عندما لا يكفي أن تكون "مستخدم"—قم بتزوير الكوكيز وأصبح مسؤولاً',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Insecure_Deserialization/Insecure_Deserialization_Labs/lab1',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'Cookie Cracking Cascade',
      en_brief:
        "A lab where cookies aren't snacks… they're keys to admin power.",
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'شلال كسر الكوكيز',
      ar_brief:
        'معمل حيث الكوكيز ليست وجبات خفيفة... بل هي مفاتيح لسلطة المسؤول.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Insecure_Deserialization/Insecure_Deserialization_Labs/lab2',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 4,
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
          <PracticeTitle title={'Insecure Deserialization'} />
          <div className='row'>
            {Labs.map((lab, index) => {
              return <Card key={index} {...lab} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

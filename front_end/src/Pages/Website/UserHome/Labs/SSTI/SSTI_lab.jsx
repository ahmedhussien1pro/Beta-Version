import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/Server Side Template Injection/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function SSTI_lab() {
  const Labs = [
    {
      // English Content
      en_title: 'SSTI Store Vulnerability',
      en_brief:
        'This lab is vulnerable to server-side template injection due to the unsafe construction of a Handlebars template.',
      en_difficulty: 'Medium',

      // Arabic Content
      ar_title: 'ثغرة SSTI في المتجر',
      ar_brief:
        'هذا المعمل عرضة لحقن القوالب من جانب الخادم بسبب البناء غير الآمن لقالب Handlebars.',
      ar_difficulty: 'متوسط',

      // Common Data
      link: 'SSTIlab1/store',
      image: image,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'Basic server-side template injection',
      en_brief:
        'This lab is vulnerable to server-side template injection due to the way it unsafely uses a Handlebars template.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'حقن القوالب الأساسي من جانب الخادم',
      ar_brief:
        'هذا المعمل عرضة لحقن القوالب من جانب الخادم بسبب الطريقة غير الآمنة في استخدام قالب Handlebars.',
      ar_difficulty: 'سهل',

      // Common Data
      link: 'SSTIlab2/blog',
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
          <PracticeTitle title={'SSTI'} />
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

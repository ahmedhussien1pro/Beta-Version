import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/Server Side Template Injection/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function SSRF_lab() {
  const Labs = [
    {
      // English Content
      en_title: 'SSRF Store Vulnerability',
      en_brief:
        'This lab is vulnerable to server-side request forgery due to unsafe URL handling in the store application.',
      en_difficulty: 'Medium',

      // Arabic Content
      ar_title: 'ثغرة SSRF في المتجر',
      ar_brief:
        'هذا المعمل عرضة لتزوير الطلبات من جانب الخادم بسبب المعالجة غير الآمنة لعناوين URL في تطبيق المتجر.',
      ar_difficulty: 'متوسط',

      // Common Data
      link: 'ssrf_lab1/store',
      image: image,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'SSRF Store Vulnerability - Advanced',
      en_brief:
        'This lab contains an advanced server-side request forgery vulnerability with additional security measures to bypass.',
      en_difficulty: 'Medium',

      // Arabic Content
      ar_title: 'ثغرة SSRF في المتجر - متقدم',
      ar_brief:
        'يحتوي هذا المعمل على ثغرة متقدمة في تزوير الطلبات من جانب الخادم مع إجراءات أمنية إضافية يجب تجاوزها.',
      ar_difficulty: 'متوسط',

      // Common Data
      link: 'ssrf_lab2/store',
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
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'SSRF'} />
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

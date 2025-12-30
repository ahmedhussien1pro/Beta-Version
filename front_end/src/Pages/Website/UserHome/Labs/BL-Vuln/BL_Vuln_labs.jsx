import React from 'react';
import Header from '../../Header/Header';
import labImg from '../../assets/img/BLV/lab1.jpeg';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import Banner from '../../Components/Banner/Banner';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function BL_Vuln_labs() {
  const Labs = [
    {
      // English Content
      en_title: 'Excessive trust in client-side controls',
      en_brief:
        "This lab has an issue with its client-side controls that allows you to change the price of items in the store. To solve the lab, buy a 'Lightweight l33t leather jacket'. You can log in to your own account using the following credentials.",
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'الثقة المفرطة في عناصر التحكم من جانب العميل',
      ar_brief:
        "يحتوي هذا المعمل على مشكلة في عناصر التحكم من جانب العميل تسمح لك بتغيير سعر العناصر في المتجر. لحل المعمل، قم بشراء 'Lightweight l33t leather jacket'. يمكنك تسجيل الدخول إلى حسابك باستخدام بيانات الاعتماد التالية.",
      ar_difficulty: 'سهل',

      // Common Data
      link: '/BL-Vuln/BL_Vuln_labs/first_lab',
      image: labImg,
      isFree: true,
      topicsCount: 2,
    },
    {
      // English Content
      en_title: 'High-level logic vulnerability',
      en_brief:
        "This lab has a logic flaw in its purchasing workflow that allows you to buy items for free. To solve the lab, buy a 'Lightweight l33t leather jacket'. You can log in to your own account using the following credentials.",
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'ثغرة منطقية على مستوى عالي',
      ar_brief:
        "يحتوي هذا المعمل على عيب منطقي في سير عمل الشراء يسمح لك بشراء العناصر مجانًا. لحل المعمل، قم بشراء 'Lightweight l33t leather jacket'. يمكنك تسجيل الدخول إلى حسابك باستخدام بيانات الاعتماد التالية.",
      ar_difficulty: 'سهل',

      // Common Data
      link: '/BL-Vuln/BL_Vuln_labs/second_lab',
      image: labImg,
      isFree: true,
      topicsCount: 3,
    },
  ];

  return (
    <>
      <Banner />
      <Header />
      <LandingPractice />

      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Business logic vulnerabilities'} />
          <div className='row'>
            {Labs.map((lab, index) => {
              return <Card key={index} {...lab} />;
            })}
          </div>
        </div>
      </div>
      <Go2TopBtn />
      <Footer />
    </>
  );
}

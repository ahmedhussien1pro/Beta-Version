import React from 'react';
import Header from '../../Header/Header';
import labImg from '../../assets/img/ACV/lab.jpeg';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function AC_Vuln_labs() {
  const Labs = [
    {
      // English Content
      en_title: 'Vulnerability allowing login bypass',
      en_brief:
        'This lab has an unprotected admin panel. Solve the lab by deleting the user carlos.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'ثغرة تسمح بتجاوز تسجيل الدخول',
      ar_brief:
        'يحتوي هذا المعمل على لوحة إدارة غير محمية. قم بحل المعمل عن طريق حذف المستخدم carlos.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/AC-Vuln/AC_Vuln_labs/first_lab',
      image: labImg,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'Unprotected admin functionality with unpredictable URL',
      en_brief:
        "This lab has an unprotected admin panel. It's located at an unpredictable location.",
      en_difficulty: 'Medium',

      // Arabic Content
      ar_title: 'لوحة إدارة غير محمية برابط غير متوقع',
      ar_brief:
        'يحتوي هذا المعمل على لوحة إدارة غير محمية. تقع في موقع غير متوقع.',
      ar_difficulty: 'متوسط',

      // Common Data
      link: '/AC-Vuln/AC_Vuln_labs/second_lab',
      image: labImg,
      isFree: false, // Premium Lab
      topicsCount: 5,
    },
    {
      // English Content
      en_title:
        'Vulnerability in WHERE clause allowing retrieval of hidden data',
      en_brief:
        'This lab has an admin panel at /admin, which identifies administrators using a forgeable cookie.',
      en_difficulty: 'Hard',

      // Arabic Content
      ar_title: 'ثغرة في جملة WHERE تسمح باسترجاع البيانات المخفية',
      ar_brief:
        'يحتوي هذا المعمل على لوحة إدارة في /admin، والتي تحدد المسؤولين باستخدام ملف تعريف ارتباط قابل للتزوير.',
      ar_difficulty: 'صعب',

      // Common Data
      link: '/AC-Vuln/AC_Vuln_labs/third_lab',
      image: labImg,
      isFree: true,
      topicsCount: 4,
    },
  ];

  return (
    <>
      <Banner />
      <Header />
      <LandingPractice />
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Access control vulnerability'} />
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

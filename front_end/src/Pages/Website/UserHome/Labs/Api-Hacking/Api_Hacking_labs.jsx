import React from 'react';
import Header from '../../Header/Header';
import labImg from '../../assets/img/Api_Hacking/lab.jpg';
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
      en_title: 'MCQ Question Review',
      en_brief:
        'These are multiple choice questions that are designed to be a review for the exam.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'مراجعة أسئلة الاختيار من متعدد',
      ar_brief: 'هذه أسئلة اختيار من متعدد مصممة لتكون مراجعة للامتحان.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Api_Hacking/Api_Hacking_labs/lab1',
      image: labImg,
      isFree: true,
      topicsCount: 1,
    },
    {
      // English Content
      en_title: 'Unprotected admin functionality with unpredictable URL',
      en_brief: (
        <>
          This lab has an unprotected admin panel. It's located at an
          unpredictable location, but the location is disclosed somewhere in the
          application. Solve the lab by accessing the admin panel, and using it
          to delete the user <mark>Carlos</mark>.
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'لوحة إدارة غير محمية برابط غير متوقع',
      ar_brief: (
        <>
          يحتوي هذا المعمل على لوحة إدارة غير محمية. تقع في موقع غير متوقع، لكن
          يتم الكشف عن الموقع في مكان ما في التطبيق. قم بحل المعمل عن طريق
          الوصول إلى لوحة الإدارة واستخدامها لحذف المستخدم <mark>Carlos</mark>.
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Api_Hacking/Api_Hacking_labs/lab2',
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
          <PracticeTitle title={'Api Hacking'} />
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

import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Idor_cover from '../../assets/img/IDOR/IDOR_Cover.jpg';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function InsecureDirectObjectReferenceLabs() {
  const Labs = [
    {
      // English Content
      en_title: 'Invoices',
      en_brief: "Gain unauthorized access to other users' invoices",
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'الفواتير',
      ar_brief: 'احصل على وصول غير مصرح به إلى فواتير المستخدمين الآخرين',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/coming-soon',
      image: Idor_cover,
      isFree: true,
      topicsCount: 2,
    },
    {
      // English Content
      en_title: 'Ticket Sales',
      en_brief: 'Buy tickets for less than the regular price',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'بيع التذاكر',
      ar_brief: 'اشترِ التذاكر بأقل من السعر العادي',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Insecure_Direct_Object_Reference(IDOR)/Insecure_Direct_Object_Reference(IDOR)Labs/lab2',
      image: Idor_cover,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'Money Transfer',
      en_brief:
        "Transfer money from another user's account to your own account without any permission",
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'تحويل الأموال',
      ar_brief:
        'قم بتحويل الأموال من حساب مستخدم آخر إلى حسابك الخاص بدون أي إذن',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Insecure_Direct_Object_Reference(IDOR)/Insecure_Direct_Object_Reference(IDOR)Labs/lab3',
      image: Idor_cover,
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
      {/* Start Courses */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Insecure Direct Object Reference (IDOR)'} />
          <div className='row'>
            {Labs.map((lab, index) => {
              return <Card key={index} {...lab} />;
            })}
          </div>
        </div>
      </div>

      {/* End Courses */}
      <Footer />
    </>
  );
}

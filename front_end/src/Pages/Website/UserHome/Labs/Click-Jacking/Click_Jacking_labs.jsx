import React from 'react';
import Header from '../../Header/Header';
import labImg from '../../assets/img/ACV/lab.jpeg';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function Click_Jacking_Labs() {
  const Labs = [
    {
      // English Content
      en_title: 'Basic clickjacking with CSRF token protection',
      en_brief: (
        <>
          This lab contains login functionality and a delete account button that
          is protected by a CSRF token. A user will click on elements that
          display the word 'click' on a decoy website. To solve the lab, craft
          some HTML that frames the account page and fools the user into
          deleting their account. The lab is solved when the account is deleted.
          You can log in to your own account using the following credentials:{' '}
          <mark>wiener:peter</mark>.
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'اختطاف النقر الأساسي مع حماية رمز CSRF',
      ar_brief: (
        <>
          يحتوي هذا المعمل على وظيفة تسجيل الدخول وزر حذف الحساب المحمي برمز
          CSRF. سينقر المستخدم على العناصر التي تعرض كلمة 'انقر' على موقع خداع.
          لحل المعمل، قم بإنشاء HTML يؤطر صفحة الحساب ويخدع المستخدم لحذف حسابه.
          يتم حل المعمل عند حذف الحساب. يمكنك تسجيل الدخول إلى حسابك باستخدام
          بيانات الاعتماد التالية: <mark>wiener:peter</mark>.
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Click_Jacking/Click_Jacking_labs/lab1',
      image: labImg,
      isFree: true,
      topicsCount: 3,
    },
  ];

  return (
    <>
      <Header />
      <LandingPractice />
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Click Jacking'} />
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

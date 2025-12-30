import React from 'react';
import './XSS.css';
import Header from '../../Header/Header';
import lab_Cover from '../../assets/img/Cross_Site_Scripting/labs_cover.jpg';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function XSS_lab() {
  const Labs = [
    {
      // English Content
      en_title: 'Reflected XSS into HTML context',
      en_brief: (
        <>
          This lab contains a{' '}
          <span className='highlight'>
            simple reflected cross-site scripting vulnerability
          </span>{' '}
          in the search functionality. To solve the lab, perform a cross-site
          scripting attack that calls the{' '}
          <span className='highlight'>alert function</span>.
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'XSS منعكس في سياق HTML',
      ar_brief: (
        <>
          يحتوي هذا المعمل على{' '}
          <span className='highlight'>
            ثغرة بسيطة في البرمجة النصية عبر المواقع المنعكسة
          </span>{' '}
          في وظيفة البحث. لحل المعمل، قم بتنفيذ هجوم XSS يستدعي{' '}
          <span className='highlight'>دالة alert</span>.
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/xss/xss_lab/first_lab',
      image: lab_Cover,
      isFree: true,
      topicsCount: 2,
    },
    {
      // English Content
      en_title: 'Stored XSS into HTML context',
      en_brief: (
        <>
          This lab contains a{' '}
          <span className='highlight'>
            stored cross-site scripting vulnerability
          </span>{' '}
          in the comment functionality. To solve the lab, submit a comment that
          calls the <span className='highlight'>alert function</span> when the
          blog post is viewed.
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'XSS مخزن في سياق HTML',
      ar_brief: (
        <>
          يحتوي هذا المعمل على{' '}
          <span className='highlight'>
            ثغرة في البرمجة النصية عبر المواقع المخزنة
          </span>{' '}
          في وظيفة التعليقات. لحل المعمل، أرسل تعليقًا يستدعي{' '}
          <span className='highlight'>دالة alert</span> عند عرض منشور المدونة.
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/xss/xss_lab/second_lab',
      image: lab_Cover,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'DOM XSS',
      en_brief: (
        <>
          This lab contains a{' '}
          <span className='highlight'>
            DOM-based cross-site scripting vulnerability
          </span>{' '}
          in the search query tracking functionality. It uses the JavaScript{' '}
          <span className='highlight'>document.write</span> function, which
          writes data out to the page. The{' '}
          <span className='highlight'>document.write</span> function is called
          with data from <span className='highlight'>location.search</span>,
          which you can control using the website URL. To solve this lab,
          perform a cross-site scripting attack that calls the{' '}
          <span className='highlight'>alert function</span>.
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'XSS مبني على DOM',
      ar_brief: (
        <>
          يحتوي هذا المعمل على{' '}
          <span className='highlight'>
            ثغرة في البرمجة النصية عبر المواقع مبنية على DOM
          </span>{' '}
          في وظيفة تتبع استعلام البحث. تستخدم دالة JavaScript{' '}
          <span className='highlight'>document.write</span> التي تكتب البيانات
          إلى الصفحة. يتم استدعاء دالة{' '}
          <span className='highlight'>document.write</span> ببيانات من{' '}
          <span className='highlight'>location.search</span>، والتي يمكنك التحكم
          فيها باستخدام عنوان URL للموقع. لحل المعمل، قم بتنفيذ هجوم XSS يستدعي{' '}
          <span className='highlight'>دالة alert</span>.
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/xss/xss_lab/third_lab',
      image: lab_Cover,
      isFree: true,
      topicsCount: 4,
    },
    {
      // English Content
      en_title: (
        <>
          Stored XSS in anchor <q>href</q>
        </>
      ),
      en_brief: (
        <>
          This lab contains a{' '}
          <span className='highlight'>
            stored cross-site scripting vulnerability
          </span>{' '}
          in the comment functionality. To solve this lab, submit a comment that
          calls the <span className='highlight'>alert function</span> when the
          comment author name is clicked.
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: (
        <>
          XSS مخزن في رابط <q>href</q>
        </>
      ),
      ar_brief: (
        <>
          يحتوي هذا المعمل على{' '}
          <span className='highlight'>
            ثغرة في البرمجة النصية عبر المواقع المخزنة
          </span>{' '}
          في وظيفة التعليقات. لحل المعمل، أرسل تعليقًا يستدعي{' '}
          <span className='highlight'>دالة alert</span> عند النقر على اسم كاتب
          التعليق.
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/xss/xss_lab/fourth_lab',
      image: lab_Cover,
      isFree: true,
      topicsCount: 3,
    },
  ];

  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      {/* Start Courses  */}
      <div class='course'>
        <div class='container'>
          <PracticeTitle title={'XSS'} />
          <div class='row'>
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

import React from 'react';
import Header from '../../Header/Header';
import '../Page_Styles/Lab.css';
import labImg from '../../assets/img/SQL_Injection/lab.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function SQLInjection_lab() {
  const Labs = [
    {
      // English Content
      en_title: 'Vulnerability allowing login bypass',
      en_brief: (
        <>
          This lab contains a SQL injection vulnerability in the login function.
          <br />
          <b>To solve the lab:</b> perform a SQL injection attack that logs in
          to the application as the <mark>Ahmed</mark> user.
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'ثغرة تسمح بتجاوز تسجيل الدخول',
      ar_brief: (
        <>
          يحتوي هذا المعمل على ثغرة حقن SQL في وظيفة تسجيل الدخول.
          <br />
          <b>لحل المعمل:</b> قم بتنفيذ هجوم حقن SQL يسجل الدخول إلى التطبيق
          كمستخدم <mark>Ahmed</mark>.
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Sql_Injection/sql_Injection_lab/login',
      image: labImg,
      isFree: true,
      topicsCount: 2,
    },
    {
      // English Content
      en_title:
        'Vulnerability in WHERE clause allowing retrieval of hidden data',
      en_brief: (
        <>
          This lab contains a SQL injection vulnerability in the product
          category filter. When the user selects a category, the application
          carries out a SQL query.
          <br />
          <b>To solve the lab:</b> perform a SQL injection attack that causes
          the application to display one or more unreleased products.
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'ثغرة في جملة WHERE تسمح باسترجاع البيانات المخفية',
      ar_brief: (
        <>
          يحتوي هذا المعمل على ثغرة حقن SQL في فلتر فئة المنتج. عندما يختار
          المستخدم فئة، يقوم التطبيق بتنفيذ استعلام SQL.
          <br />
          <b>لحل المعمل:</b> قم بتنفيذ هجوم حقن SQL يجعل التطبيق يعرض منتجًا
          واحدًا أو أكثر غير منشور.
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Sql_Injection/sql_Injection_lab/second_lab/our_store',
      image: labImg,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'UNION attack, determining the number of columns',
      en_brief: (
        <>
          <b>To solve the lab:</b> determine the number of columns returned by
          the query by performing a SQL injection <mark>UNION</mark> attack that
          returns an additional row containing null values.
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'هجوم UNION، تحديد عدد الأعمدة',
      ar_brief: (
        <>
          <b>لحل المعمل:</b> حدد عدد الأعمدة المرجعة من الاستعلام عن طريق تنفيذ
          هجوم حقن SQL <mark>UNION</mark> الذي يرجع صفًا إضافيًا يحتوي على قيم
          فارغة.
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Sql_Injection/sql_Injection_lab/third_lab/show-prices',
      image: labImg,
      isFree: true,
      topicsCount: 4,
    },
    {
      // English Content
      en_title: 'UNION attack, finding a column containing text',
      en_brief: (
        <>
          The lab will provide a random value that you need to make appear
          within the query results.
          <br />
          <b>To solve the lab:</b>{' '}
          <i>
            perform a SQL injection UNION attack that returns an additional row
            containing the value provided. This technique helps you determine
            which columns are compatible with string data.
          </i>
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'هجوم UNION، إيجاد عمود يحتوي على نص',
      ar_brief: (
        <>
          سيوفر المعمل قيمة عشوائية تحتاج إلى جعلها تظهر في نتائج الاستعلام.
          <br />
          <b>لحل المعمل:</b>{' '}
          <i>
            قم بتنفيذ هجوم حقن SQL UNION الذي يرجع صفًا إضافيًا يحتوي على القيمة
            المقدمة. تساعدك هذه التقنية على تحديد الأعمدة المتوافقة مع بيانات
            النص.
          </i>
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Sql_Injection/sql_Injection_lab/fourth_lab/show_prices',
      image: labImg,
      isFree: true,
      topicsCount: 5,
    },
  ];

  return (
    <>
      <Header />
      <LandingPractice />
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'SQL Injection'} />
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

import React from 'react';
import Header from '../../Header/Header';
import labImg from '../../assets/img/CSRF/lab1.jpeg';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function CSRF_labs() {
  const Labs = [
    {
      // English Content
      en_title: 'CSRF vulnerability with no defenses',
      en_brief: (
        <>
          Discover how attackers can exploit CSRF vulnerabilities to perform
          unauthorized actions. In this lab, you will:
          <br />
          - Learn how attackers can exploit CSRF vulnerabilities to change user
          email addresses.
          <br />- Practice logging in as an admin and performing malicious
          actions, like deleting user accounts.
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'ثغرة CSRF بدون دفاعات',
      ar_brief: (
        <>
          اكتشف كيف يمكن للمهاجمين استغلال ثغرات CSRF لتنفيذ إجراءات غير مصرح
          بها. في هذا المعمل، ستقوم بـ:
          <br />
          - تعلم كيف يمكن للمهاجمين استغلال ثغرات CSRF لتغيير عناوين البريد
          الإلكتروني للمستخدمين.
          <br />- ممارسة تسجيل الدخول كمسؤول وتنفيذ إجراءات ضارة، مثل حذف حسابات
          المستخدمين.
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/CSRF/CSRF_labs/first_lab',
      image: labImg,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'CSRF Exploiting SQL Injection via WHERE Clause',
      en_brief: (
        <>
          Learn how attackers can exploit poorly implemented SQL queries through
          CSRF attacks. This lab covers:
          <br />
          - Crafting input to manipulate SQL queries and retrieve hidden data.
          <br />
          - Understanding how CSRF tokens help secure sensitive actions.
          <br />- Implementing input validation and protection mechanisms to
          prevent unauthorized data access.
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'استغلال CSRF لحقن SQL عبر جملة WHERE',
      ar_brief: (
        <>
          تعلم كيف يمكن للمهاجمين استغلال استعلامات SQL سيئة التنفيذ من خلال
          هجمات CSRF. يغطي هذا المعمل:
          <br />
          - صياغة المدخلات للتلاعب باستعلامات SQL واسترجاع البيانات المخفية.
          <br />
          - فهم كيفية مساعدة رموز CSRF في تأمين الإجراءات الحساسة.
          <br />- تنفيذ التحقق من صحة المدخلات وآليات الحماية لمنع الوصول غير
          المصرح به للبيانات.
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/CSRF/CSRF_labs/second_lab',
      image: labImg,
      isFree: true,
      topicsCount: 4,
    },
    {
      // English Content
      en_title: 'Preventing CSRF Attacks on Sensitive Actions',
      en_brief: (
        <>
          Investigate how CSRF attacks can target authenticated users to perform
          malicious actions. In this lab, you will:
          <br />
          - Analyze the injection of malicious forms that exploit CSRF
          vulnerabilities.
          <br />
          - Implement anti-CSRF tokens to prevent unauthorized requests from
          being executed.
          <br />- Apply the SameSite cookie attribute for additional protection
          against cross-site request forgery.
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'منع هجمات CSRF على الإجراءات الحساسة',
      ar_brief: (
        <>
          تحقق في كيفية استهداف هجمات CSRF للمستخدمين المصادق عليهم لتنفيذ
          إجراءات ضارة. في هذا المعمل، ستقوم بـ:
          <br />
          - تحليل حقن النماذج الضارة التي تستغل ثغرات CSRF.
          <br />
          - تنفيذ رموز مكافحة CSRF لمنع تنفيذ الطلبات غير المصرح بها.
          <br />- تطبيق خاصية ملف تعريف الارتباط SameSite للحماية الإضافية ضد
          تزوير الطلبات عبر المواقع.
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/CSRF/CSRF_labs/third_lab',
      image: labImg,
      isFree: true,
      topicsCount: 5,
    },
    {
      // English Content
      en_title: 'MCQ Quiz',
      en_brief: (
        <>
          This quiz will test your knowledge of CSRF attacks and how to prevent
          them. You will be asked to answer multiple-choice questions on:
          <br />
          - The impact of CSRF attacks on web applications.
          <br />
          - Techniques to prevent CSRF attacks.
          <br />- The importance of CSRF tokens in securing web applications.
        </>
      ),
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'اختبار الاختيار من متعدد',
      ar_brief: (
        <>
          سيختبر هذا الاختبار معرفتك بهجمات CSRF وكيفية منعها. سيُطلب منك
          الإجابة على أسئلة الاختيار من متعدد حول:
          <br />
          - تأثير هجمات CSRF على تطبيقات الويب.
          <br />
          - تقنيات منع هجمات CSRF.
          <br />- أهمية رموز CSRF في تأمين تطبيقات الويب.
        </>
      ),
      ar_difficulty: 'سهل',

      // Common Data
      link: '/CSRF/CSRF_labs/MCQQuiz',
      image: labImg,
      isFree: true,
      topicsCount: 1,
    },
  ];

  return (
    <>
      <Header />
      <LandingPractice />
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Cross-Site Request Forgery (CSRF)'} />
          <div className='row'>
            <div className='row'>
              {Labs.map((lab, index) => {
                return <Card key={index} {...lab} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Go2TopBtn />
      <Footer />
    </>
  );
}

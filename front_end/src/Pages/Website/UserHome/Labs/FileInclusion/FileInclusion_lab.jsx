import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/File Inclusion/card_image.png';
import { Card } from '../../Components/Card/Card';
import Footer from '../../Footer/Footer';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function FileInclusion_lab() {
  const Labs = [
    {
      // English Content
      en_title: 'Learn The Capital',
      en_brief: 'Access the admin page without permission.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'تعلم العاصمة',
      ar_brief: 'قم بالوصول إلى صفحة الإدارة بدون إذن.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/fileinclusion/fileinclusion_lab/Learn-the-capital-1',
      image: image,
      isFree: true,
      topicsCount: 2,
    },
    {
      // English Content
      en_title: 'Learn Fruits',
      en_brief:
        "We have taken some security measures. Let's see if you can access the admin page without permission.",
      en_difficulty: 'Medium',

      // Arabic Content
      ar_title: 'تعلم الفواكه',
      ar_brief:
        'لقد اتخذنا بعض الإجراءات الأمنية. دعنا نرى إذا كنت تستطيع الوصول إلى صفحة الإدارة بدون إذن.',
      ar_difficulty: 'متوسط',

      // Common Data
      link: '/fileinclusion/fileinclusion_lab/Learn-the-capital-2',
      image: image,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'Learn Car Brand Logos',
      en_brief:
        "We have increased our security measures. Now it's not easy to access the admin page :)",
      en_difficulty: 'Hard',

      // Arabic Content
      ar_title: 'تعلم شعارات العلامات التجارية للسيارات',
      ar_brief:
        'لقد قمنا بزيادة إجراءاتنا الأمنية. الآن ليس من السهل الوصول إلى صفحة الإدارة :)',
      ar_difficulty: 'صعب',

      // Common Data
      link: '/fileinclusion/fileinclusion_lab/Learn-the-capital-3',
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
          <PracticeTitle title={'File Inclusion'} />
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

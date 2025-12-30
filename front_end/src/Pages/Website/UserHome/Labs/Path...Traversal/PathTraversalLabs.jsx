import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Auth_Photo from '../../assets/img/Path__Traversal/Photo_Labs_Path_Traversal.png';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function PathTraversalLabs() {
  const Labs = [
    {
      // English Content
      en_title: 'Path to Passwd',
      en_brief: 'Try to reach /etc/passwd',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'المسار إلى Passwd',
      ar_brief: 'حاول الوصول إلى /etc/passwd',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Path__Traversal/Path_Traversal_Labs/lab1',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 2,
    },
    {
      // English Content
      en_title: 'Path Traversal MCQ 1',
      en_brief:
        'Answer the questions to test your knowledge on path traversal vulnerabilities.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'اختبار اجتياز المسار 1',
      ar_brief: 'أجب على الأسئلة لاختبار معرفتك بثغرات اجتياز المسار.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Path__Traversal/Path_Traversal_Labs/lab2',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 1,
    },
    {
      // English Content
      en_title: 'Path Traversal MCQ 2',
      en_brief:
        'Answer the questions to test your knowledge on path traversal vulnerabilities.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'اختبار اجتياز المسار 2',
      ar_brief: 'أجب على الأسئلة لاختبار معرفتك بثغرات اجتياز المسار.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Path__Traversal/Path_Traversal_Labs/lab3',
      image: Auth_Photo,
      isFree: true,
      topicsCount: 1,
    },
  ];

  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Path Traversal'} />

          <div className='row'>
            {' '}
            {Labs.map((lab, index) => {
              return <Card key={index} {...lab} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

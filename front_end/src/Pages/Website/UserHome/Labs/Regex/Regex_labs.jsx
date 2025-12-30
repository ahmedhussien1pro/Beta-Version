import React from 'react';
import Header from '../../Header/Header';
import labImg from '../../assets/img/Regex/lab.jpg';
import Footer from '../../Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import { Card } from '../../Components/Card/Card';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function Regex_labs() {
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
      link: '/Regex/Regex_labs/MCQReview',
      image: labImg,
      isFree: true,
      topicsCount: 10,
    },
    {
      // English Content
      en_title: 'Complete Question Review',
      en_brief:
        'These are complete questions that are designed to be a review for the exam.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'مراجعة الأسئلة الكاملة',
      ar_brief: 'هذه أسئلة كاملة مصممة لتكون مراجعة للامتحان.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Regex/Regex_labs/CompleteReview',
      image: labImg,
      isFree: true,
      topicsCount: 15,
    },
  ];

  return (
    <>
      <Banner />
      <Header />
      <LandingPractice />
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Regular Expressions'} />
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

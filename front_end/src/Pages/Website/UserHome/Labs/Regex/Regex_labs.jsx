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
      title: 'MCQ Question Review',
      link: '/Regex/Regex_labs/MCQReview',
      image: labImg,
      brief: [
        'These are multiple choice questions that are designed to be a review for the exam.',
      ],
      difficulty: 'Easy',
    },
    {
      title: 'Complete Question Review',
      link: '/Regex/Regex_labs/CompleteReview',
      image: labImg,
      brief: [
        'These are Complete questions that are designed to be a review for the exam.',
      ],
      difficulty: 'Easy',
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
              return (
                <Card
                  title={lab.title}
                  link={lab.link}
                  image={lab.image}
                  brief={lab.brief}
                  difficulty={lab.difficulty}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Go2TopBtn />
      <Footer />
    </>
  );
}

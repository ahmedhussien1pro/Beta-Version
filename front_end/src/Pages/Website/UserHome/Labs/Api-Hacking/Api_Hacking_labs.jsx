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
      title: 'MCQ Question Review',
      link: '/Api_Hacking/Api_Hacking_labs/lab1',
      image: labImg,
      brief: [
        'These are multiple choice questions that are designed to be a review for the exam.',
      ],
      difficulty: 'Easy',
    },
    {
      title: 'Unprotected admin functionality with unpredictable URL',
      link: '/Api_Hacking/Api_Hacking_labs/lab2',
      image: labImg,
      brief: [
        "This lab has an unprotected admin panel. It's located at an unpredictable location, but the location is disclosed somewhere in the application. Solve the lab by accessing the admin panel, and using it to delete the user ",
        <mark>Carlos</mark>,
        '.',
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
          <PracticeTitle title={'Api Hacking'} />
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

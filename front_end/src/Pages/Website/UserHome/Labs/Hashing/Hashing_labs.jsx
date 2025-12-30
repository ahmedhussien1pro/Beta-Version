import React from 'react';
import Header from '../../Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Footer/Footer';
import '../Page_Styles/Lab.css';
import labImg from '../../assets/img/Hashing/Generator.jpg';
import { Card } from '../../Components/Card/Card';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function Hashing_labs() {
  const Labs = [
    {
      title: 'Hashing Tools',
      link: '/Hashing/Hashing_labs/lab1',
      image: labImg,
      brief: [
        'Generate, compare, and crack hashes, and see how salting adds security to password hashing.',
      ],
      difficulty: 'Easy',
    },
    {
      title: 'Hashing Task',
      link: '/Hashing/Hashing_labs/lab2',
      image: labImg,
      brief: [
        'This task helps you understand: How hashing works ,Differences between MD5, SHA-1, and SHA-256,and other.',
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
          <PracticeTitle title={'Hashing'} />
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
      {/* End Course */}
      <Go2TopBtn />
      <Footer />
    </>
  );
}

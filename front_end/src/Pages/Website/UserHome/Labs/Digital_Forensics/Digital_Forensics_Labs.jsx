import React from 'react';
import Header from '../../Header/Header';
import mcqData from './MCQCards';
import labImg from '../../assets/img/DigitalForensics/Email.jpg';
import Footer from '../../Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import { Card } from '../../Components/Card/Card';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function Digital_Forensics_labs() {
  const Labs = [
    {
      title: 'Audio Forensics',
      link: '/Digital_Forensics/Digital_Forensics_labs/lab1',
      image: labImg,
      brief: ['Analyze audio files to extract information and solve the case.'],
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
          <PracticeTitle title={'Digital Forensics'} />
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
            {mcqData.map((mcq) => (
              <Card
                link={mcq.link}
                image={mcq.image}
                alt={mcq.title}
                title={mcq.title}
                brief={mcq.description}
                difficulty={mcq.difficulty}
              />
            ))}
          </div>
        </div>
      </div>
      {/* End Course */}
      <Go2TopBtn />
      <Footer />
    </>
  );
}

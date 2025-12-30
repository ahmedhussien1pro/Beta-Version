import React from 'react';
import Header from '../../Header/Header';
import mcqData from './MCQCards';
import labImg from '../../assets/img/DigitalForensics/Email.jpg';
import Footer from '../../Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import { Card } from '../../Components/Card/Card';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function Digital_Forensics_labs() {
  const Labs = [
    {
      // English Content
      en_title: 'Audio Forensics',
      en_brief:
        'Analyze audio files to extract information and solve the case.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'الطب الشرعي الصوتي',
      ar_brief: 'قم بتحليل الملفات الصوتية لاستخراج المعلومات وحل القضية.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Digital_Forensics/Digital_Forensics_labs/lab1',
      image: labImg,
      isFree: true,
      topicsCount: 3,
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
              return <Card key={index} {...lab} />;
            })}
            {mcqData.map((mcq, index) => (
              <Card key={mcq.id || index} {...mcq} />
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

import React from 'react';
import Header from '../../Header/Header';
import labImg from '../../assets/img/ACV/lab.jpeg';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function AC_Vuln_labs() {
  const Labs = [
    {
      title: 'Vulnerability allowing login bypass',
      link: '/AC-Vuln/AC_Vuln_labs/first_lab',
      image: labImg,
      brief:
        'This lab has an unprotected admin panel. Solve the lab by deleting the user carlos.',
      difficulty: 'Easy',
      isFree: true,
      topicsCount: 3,
    },
    {
      title: 'Unprotected admin functionality with unpredictable URL',
      link: '/AC-Vuln/AC_Vuln_labs/second_lab',
      image: labImg,
      brief:
        "This lab has an unprotected admin panel. It's located at an unpredictable location.",
      difficulty: 'Medium',
      isFree: false, // Premium Lab
      topicsCount: 5,
    },
    {
      title: 'Vulnerability in WHERE clause allowing retrieval of hidden data',
      link: '/AC-Vuln/AC_Vuln_labs/third_lab',
      image: labImg,
      brief:
        'This lab has an admin panel at /admin, which identifies administrators using a forgeable cookie.',
      difficulty: 'Hard',
      isFree: true,
      topicsCount: 4,
    },
  ];

  return (
    <>
      <Banner />
      <Header />
      <LandingPractice />
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Access control vulnerability'} />
          <div className='row'>
            {Labs.map((lab, index) => {
              return (
                <Card
                  title={lab.title}
                  link={lab.link}
                  image={lab.image}
                  brief={lab.brief}
                  difficulty={lab.difficulty}
                  isFree={lab.isFree}
                  topicsCount={lab.topicsCount}
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

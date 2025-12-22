import React from 'react';
import Header from '../../Header/Header';
import labImg from '../../assets/img/ACV/lab.jpeg';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function AC_Vuln_labs() {
  const Labs = [
    {
      title: 'vulnerability allowing login bypass',
      link: '/AC-Vuln/AC_Vuln_labs/first_lab',
      image: labImg,
      brief: [
        'This lab has an unprotected admin panel. Solve the lab by deleting the user',
        <mark>carlos</mark>,
        '.',
      ],
      difficulty: 'Easy',
    },
    {
      title: 'Unprotected admin functionality with unpredictable URL',
      link: '/AC-Vuln/AC_Vuln_labs/second_lab',
      image: labImg,
      brief: [
        `This lab has an unprotected admin panel. It's located at an
                unpredictable location, but the location is disclosed
                somewhere in the application. Solve the lab by accessing the
                admin panel, and using it to delete the user`,
        <mark>carlos</mark>,
        '.',
      ],
      difficulty: 'Easy',
    },
    {
      title: 'vulnerability in WHERE clause allowing retrieval of hidden data',
      link: '/AC-Vuln/AC_Vuln_labs/third_lab',
      image: labImg,
      brief: [
        `This lab has an admin panel at /admin, which identifies
                  administrators using a forgeable cookie. Solve the lab by
                  accessing the admin panel and using it to delete the user
                  carlos. You can log in to your own account using the following
                  credentials: `,
        <code>wiener:peter</code>,
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

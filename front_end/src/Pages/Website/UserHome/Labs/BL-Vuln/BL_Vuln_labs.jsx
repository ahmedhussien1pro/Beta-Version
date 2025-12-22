import React from 'react';
import Header from '../../Header/Header';
import labImg from '../../assets/img/BLV/lab1.jpeg';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import Banner from '../../Components/Banner/Banner';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function BL_Vuln_labs() {
  const Courses = [
    {
      link: '/BL-Vuln/BL_Vuln_labs/first_lab',
      image: labImg,
      title: 'Excessive trust in client-side controls',
      brief: [
        "This lab has an issue with its client-side controls that allows you to change the price of items in the store. To solve the lab, buy a 'Lightweight l33t leather jacket'. You can log in to your own account using the following credentials: ",
      ],
      difficulty: 'Easy',
    },
    {
      link: '/BL-Vuln/BL_Vuln_labs/second_lab',
      image: labImg,
      title: 'High-level logic vulnerability',
      brief: [
        "This lab has a logic flaw in its purchasing workflow that allows you to buy items for free. To solve the lab, buy a 'Lightweight l33t leather jacket'. You can log in to your own account using the following credentials: ",
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
          <PracticeTitle title={'Business logic vulnerabilities'} />
          <div className='row'>
            {Courses.map((course, index) => (
              <Card
                key={index}
                link={course.link}
                image={course.image}
                title={course.title}
                brief={course.brief}
                difficulty={course.difficulty}
              />
            ))}
            {Courses.map((course, index) => (
              <Card
                key={index}
                link={course.link}
                image={course.image}
                title={course.title}
                brief={course.brief}
                difficulty={course.difficulty}
              />
            ))}
          </div>
        </div>
      </div>
      <Go2TopBtn />
      <Footer />
    </>
  );
}

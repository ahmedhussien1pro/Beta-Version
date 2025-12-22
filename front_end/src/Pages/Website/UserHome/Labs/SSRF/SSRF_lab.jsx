import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/Server Side Template Injection/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function SSRF_lab() {
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingPractice />
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'SSRF'} />
          <div className='row'>
            <Card
              link={'ssrf_lab1/store'}
              image={image}
              title={'SSRF Store Vulnerability'}
              brief={
                'This lab is vulnerable to server-side template injection due to the unsafe construction of an Handlebars template.'
              }
              difficulty={'Intermediate'}
            />
            <Card
              link={'ssrf_lab2/store'}
              image={image}
              title={'SSRF Store Vulnerability'}
              brief={
                'This lab is vulnerable to server-side template injection due to the unsafe construction of an Handlebars template.'
              }
              difficulty={'Intermediate'}
            />
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}

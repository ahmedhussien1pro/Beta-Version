import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/Server Side Template Injection/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function SSTI_lab() {
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingPractice />
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'SSTI'} />
          <div className='row'>
            <Card
              link={'SSTIlab1/store'}
              image={image}
              title={'SSTI Store Vulnerability'}
              brief={
                'This lab is vulnerable to server-side template injection due to the unsafe construction of an Handlebars template.'
              }
              difficulty={'Intermediate'}
            />

            <Card
              link={'SSTIlab2/blog'}
              image={image}
              title={'Basic server-side template injection'}
              brief={
                'This lab is vulnerable to server-side template injection due to the way it unsafely uses a Handlebars template.'
              }
              difficulty={'Easy'}
            />

            {/* <Card
            link={""}
            image={image}
            title={"Vulnerable Flask Application"}
            brief={"Understanding Server-Side Template Injection (SSTI) in Flask/Jinja2 Applications"}
            difficulty={"Hard"}
            /> */}
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}

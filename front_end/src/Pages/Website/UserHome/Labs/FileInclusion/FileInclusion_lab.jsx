import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/File Inclusion/card_image.png';
import { Card } from '../../Components/Card/Card';
import Footer from '../../Footer/Footer';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function FileInclusion_lab() {
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingPractice />
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'File Inclusion'} />
          <div className='row'>
            <Card
              link={'/fileinclusion/fileinclusion_lab/Learn-the-capital-1'}
              image={image}
              title={'Learn The Capital'}
              brief={'Access the admin page without permission.'}
              difficulty={'Easy'}
            />
            <Card
              link={'/fileinclusion/fileinclusion_lab/Learn-the-capital-2'}
              image={image}
              title={'Learn Fruits'}
              brief={
                "We have taken some security measures. Let's see if you can access the admin page without permission."
              }
              difficulty={'Intermediate'}
            />
            <Card
              link={'/fileinclusion/fileinclusion_lab/Learn-the-capital-3'}
              image={image}
              title={'Learn  Car Brand Logos'}
              brief={
                "We have increased our security measures. Now it's not easy to access the admin page :)"
              }
              difficulty={'Hard'}
            />
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}

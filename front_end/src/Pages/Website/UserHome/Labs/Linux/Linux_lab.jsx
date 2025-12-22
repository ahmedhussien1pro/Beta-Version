import React, { useEffect } from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets/img/linux/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function Linux_lab() {
  useEffect(() => {
    document.title = 'Linux Lab';
  }, []);
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingPractice />
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Linux'} />
          <div className='row'>
            <Card
              link='/linux/linux_lab/patient'
              image={image}
              title='Be Patient or Skillful'
              brief='Try to Capture the Flag'
              difficulty={'Easy'}
            />
            <Card
              link='/linux/linux_lab/power-of-command'
              image={image}
              title='Power Of Command'
              brief='Try to Capture the Flag'
              difficulty={'Easy'}
            />
            <Card
              link='/linux/linux_lab/welcome'
              image={image}
              title='Welcome'
              brief='Try to Capture the Flag'
              difficulty={'Easy'}
            />
            <Card
              link='/linux/linux_lab/test-yourself'
              image={image}
              title='Test YourSelf'
              brief='Try to Capture the Flag'
              difficulty={'Easy'}
            />
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}

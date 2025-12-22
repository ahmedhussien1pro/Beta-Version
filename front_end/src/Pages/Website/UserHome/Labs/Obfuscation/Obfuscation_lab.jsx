import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/Obfuscation/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function Obfuscation_lab() {
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingPractice />
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Obfuscation'} />
          <div className='row'>
            <Card
              link={'/Obfuscation/obfuscation_lab/login'}
              image={image}
              title={'Legendary Process'}
              brief={
                'Master the basics of obfuscation, a powerful technique for securing code and protecting intellectual property in cybersecurity environments'
              }
              difficulty={'Easy'}
            />
            <Card
              link={'/Obfuscation/obfuscation_lab/quiz'}
              image={image}
              title={'Legendary Process'}
              brief={
                'Master the basics of obfuscation, a powerful technique for securing code and protecting intellectual property in cybersecurity environments'
              }
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

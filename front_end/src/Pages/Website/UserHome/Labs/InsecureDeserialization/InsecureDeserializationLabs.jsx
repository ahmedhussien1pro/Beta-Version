import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Auth_Photo from '../../assets/img/Insecure_Deserialization/Labs_Photo_Insecure.png';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function InsecureDeserializationLabs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      {/* Start Course */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Insecure Deserialization'} />
          <div className='row'>
            {/* lab1 */}
            <Card
              link={
                '/Insecure_Deserialization/Insecure_Deserialization_Labs/lab1'
              }
              image={Auth_Photo}
              title={'Bake Your Own Cookies'}
              brief={
                'When ‘user’ isn’t enough—forge the cookie and become admin'
              }
              difficulty={'Easy'}
            />
            {/* lab2 */}
            <Card
              link={
                '/Insecure_Deserialization/Insecure_Deserialization_Labs/lab2'
              }
              image={Auth_Photo}
              title={'Cookie Cracking Cascade'}
              brief={
                'A lab where cookies aren’t snacks… they’re keys to admin power.'
              }
              difficulty={'Easy'}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

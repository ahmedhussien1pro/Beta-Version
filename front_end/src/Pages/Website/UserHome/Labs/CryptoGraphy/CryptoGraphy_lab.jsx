import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets/img/Cryptography/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function CryptoGraphy_lab() {
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingPractice />
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'CryptoGraphy'} />
          <div className='row'>
            <Card
              link={'/cryptography/cryptography_lab/top-secret'}
              image={image}
              title={'Top Secret'}
              brief={
                'cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀'
              }
              difficulty={'Easy'}
            />
            <Card
              link={'/cryptography/cryptography_lab/decode-the-image'}
              image={image}
              title={'Decode the Image'}
              brief={
                'cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀'
              }
              difficulty={'Easy'}
            />
            <Card
              link={'/cryptography/cryptography_lab/corrupted'}
              image={image}
              title={'Corrupted'}
              brief={
                'cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀'
              }
              difficulty={'Easy'}
            />
            <Card
              link={'/cryptography/cryptography_lab/hash-crack'}
              image={image}
              title={'Hash Crack'}
              brief={
                'cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀'
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

import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/JWT attacks/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function JWTAttacks_lab() {
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingPractice />
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'JWT Attacks'} />
          <div className='row'>
            <Card
              link={'/jwtattacks/jwtattacks_lab/lab1'}
              image={image}
              title={'JWT Unverified Signature'}
              brief={
                "This lab uses a JWT-based mechanism for handling sessions. Due to implementation flaws, the server doesn't verify the signature of any JWTs that it receives."
              }
              difficulty={'Easy'}
            />
            <Card
              link={'/jwtattacks/jwtattacks_lab/lab2'}
              image={image}
              title={'JWT  Flawed Signature Verification'}
              brief={
                'This lab uses a JWT-based mechanism for handling sessions. The server is insecurely configured to accept unsigned JWTs.'
              }
              difficulty={'Intermediate'}
            />
            <Card
              link={'/jwtattacks/jwtattacks_lab/lab3'}
              image={image}
              title={'JWT  Weak Signing Key'}
              brief={
                'This lab uses a JWT-based mechanism for handling sessions. It uses an extremely weak secret key to both sign and verify tokens. This can be easily brute-forced using a wordlist of common secrets.'
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

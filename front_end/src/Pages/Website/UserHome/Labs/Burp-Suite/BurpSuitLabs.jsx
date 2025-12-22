import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Auth_Photo from '../../assets/img/Burp_Suit/Labs-Burp-Suit.jpg';
import { Card } from '../../Components/Card/Card';
import GoTop from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function BurpSuitLabs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      {/* Start Course */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Burp Suit'} />
          <div className='row'>
            {/* lab1 */}
            <Card
              link={'/Burp_Suit/Burp_Suit_Labs/lab1'}
              image={Auth_Photo}
              title={'Proxy'}
              brief={
                'gain many instead of buying by proxy manipulation and traffic control.'
              }
              difficulty={'Easy'}
            />
            {/* lab2 */}
            <Card
              link={'/Burp_Suit/Burp_Suit_Labs/lab2'}
              image={Auth_Photo}
              title={'Intruder'}
              brief={
                'Can you find the correct username and password using Intruder?'
              }
              difficulty={'Easy'}
            />
            {/* lab3 */}
            <Card
              link={'/Burp_Suit/Burp_Suit_Labs/lab3'}
              image={Auth_Photo}
              title={'Repeater'}
              brief={'Find the valid padges'}
              difficulty={'Easy'}
            />
            {/* lab4 */}
            <Card
              // link={'/Burp_Suit/Burp_Suit_Labs/lab4'}
              link={'/coming-soon'}
              image={Auth_Photo}
              title={'Decoder'}
              brief={'Try to decode massages and find the hidden password.'}
              difficulty={'Easy'}
            />
          </div>
        </div>
      </div>
      <GoTop />
      <Footer />
    </>
  );
}

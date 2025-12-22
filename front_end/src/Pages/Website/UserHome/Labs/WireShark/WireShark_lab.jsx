import React from 'react';
import '../Page_Styles/Lab.css';
import Header from '../../Header/Header';
import image from '../../assets//img/Obfuscation/card_image.png';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function WireShark_lab() {
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingPractice />
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Wire Shark'} />
          <div className='row'>
            <Card
              link={'/wireshark/wireshark_lab/arp-trick'}
              image={image}
              title={'ARP Trick'}
              brief={
                'Master the basics of obfuscation, a powerful technique for securing code and protecting intellectual property in cybersecurity environments'
              }
              difficulty={'Easy'}
            />
            <Card
              link={'/wireshark/wireshark_lab/tcp-intrusion'}
              image={image}
              title={'TCP Intrusion'}
              brief={
                'Master the basics of obfuscation, a powerful technique for securing code and protecting intellectual property in cybersecurity environments'
              }
              difficulty={'Intermediate'}
            />
            <Card
              link={'/wireshark/wireshark_lab/stolen-flag'}
              image={image}
              title={'Stolen Flag'}
              brief={
                'Master the basics of obfuscation, a powerful technique for securing code and protecting intellectual property in cybersecurity environments'
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

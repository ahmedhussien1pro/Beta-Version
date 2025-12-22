import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Auth_Photo from '../../assets/img/Command Injection/command-injection-labs.png';
import { Card } from '../../Components/Card/Card';
import GoTop from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function CommandInjectionLabs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      {/* Start Course */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Command Injection'} />
          <div className='row'>
            {/* lab1 */}
            <Card
              link={'/Command_Injection/Command_Injection_labs/lab1'}
              image={Auth_Photo}
              title={'Pingject'}
              brief={'Try to execute a forbidden command.'}
              difficulty={'Easy'}
            />
            {/* lab3 */}
            <Card
              link={'/Command_Injection/Command_Injection_labs/lab3'}
              image={Auth_Photo}
              title={'Blacklist Breakout'}
              brief={'Find a way to bypass the blacklist.'}
              difficulty={'Easy'}
            />
            {/* lab2 */}
            <Card
              link={'/Command_Injection/Command_Injection_labs/lab2'}
              image={Auth_Photo}
              title={'URLject'}
              brief={'Hack the Address Bar'}
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

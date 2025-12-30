import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Auth_Photo from '../../assets/img/Broken Authentication/Auth_Icon.png';
import { Card } from '../../Components/Card/Card';
import GoTop from '../../Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function BrokenAuthenticationLab() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Broken Authentication'} />
          <div className='row'>
            {/* lab1 */}
            <Card
              link={'/broken-auth/Broken_Authentication_Lab/lab1'}
              image={Auth_Photo}
              title={'Brute Force 1'}
              brief={'Can you find the correct password?'}
              difficulty={'Easy'}
            />
            {/* lab2 */}
            <Card
              link={'/broken-auth/Broken_Authentication_Lab/lab2'}
              image={Auth_Photo}
              title={'Brute Force 2'}
              brief={'Can you find the correct username and password?'}
              difficulty={'Easy'}
            />
            {/* lab3 */}
            <Card
              link={'/broken-auth/Broken_Authentication_Lab/lab3'}
              image={Auth_Photo}
              title={'No Redirect'}
              brief={'Can you bypass the login?'}
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

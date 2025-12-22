import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Auth_Photo from '../../assets/img/Path__Traversal/Photo_Labs_Path_Traversal.png';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function PathTraversalLabs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Path Traversal'} />

          <div className='row'>
            {/* lab1 */}
            <Card
              link={'/Path__Traversal/Path_Traversal_Labs/lab1'}
              image={Auth_Photo}
              title={'Path to Passwd'}
              brief={'Try to reach /etc/passwd '}
              difficulty={'Easy'}
            />
            {/* lab2 */}
            <Card
              link={'/Path__Traversal/Path_Traversal_Labs/lab2'}
              image={Auth_Photo}
              title={'Path Traversal MCQ 1'}
              brief={
                'Answer the questions to test your knowledge on path traversal vulnerabilities.'
              }
              difficulty={'Easy'}
            />
            {/* lab3 */}
            <Card
              link={'/Path__Traversal/Path_Traversal_Labs/lab3'}
              image={Auth_Photo}
              title={'Path Traversal MCQ 2'}
              brief={
                'Answer the questions to test your knowledge on path traversal vulnerabilities.'
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

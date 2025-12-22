import React from 'react';
import './XSS.css';
import Header from '../../Header/Header';
import lab_Cover from '../../assets/img/Cross_Site_Scripting/labs_cover.jpg';
import Footer from '../../Footer/Footer';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/PracticeLanding/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';
export default function XSS_lab() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      {/* Start Courses  */}
      <div class='course'>
        <div class='container'>
          <PracticeTitle title={'XSS'} />
          <div class='row'>
            {/* lab1 */}
            <Card
              link={'/xss/xss_lab/first_lab'}
              image={lab_Cover}
              title={'Reflected XSS into HTML context'}
              brief={[
                'This lab contains a ',
                <span className='highlight'>
                  simple reflected cross-site scripting vulnerability
                </span>,
                ' in the search functionality. To solve the lab, perform a cross-site scripting attack that calls the ',
                <span className='highlight'>alert function</span>,
                '.',
              ]}
              difficulty={'Easy'}
            />
            {/* lab2 */}
            <Card
              link={'/xss/xss_lab/second_lab'}
              image={lab_Cover}
              title={'Stored XSS into HTML context'}
              brief={[
                'This lab contains a ',
                <span className='highlight'>
                  stored cross-site scripting vulnerability{' '}
                </span>,
                ' in the comment functionality. To solve the lab, submit a comment that calls the ',
                <span className='highlight'>alert function</span>,
                ' when the blog post is viewed.',
              ]}
              difficulty={'Easy'}
            />
            {/* lab3 */}
            <Card
              link={'/xss/xss_lab/third_lab'}
              image={lab_Cover}
              title={'DOM XSS'}
              brief={[
                'This lab contains a ',
                <span className='highlight'>
                  DOM-based cross-site scripting vulnerability
                </span>,
                '  in the search query tracking functionality. It uses the JavaScript',
                <span class='highlight'>document.write</span>,
                ' function, which writes data out to the page. The ',
                <span class='highlight'>document.write</span>,
                'function is called with data from ',
                <span class='highlight'>location.search</span>,
                ', which you can control using the website URL. To solve this lab, perform a cross-site scripting attack that calls the',
                <span class='highlight'>alert function</span>,
                '.',
              ]}
              difficulty={'Easy'}
            />
            {/* lab4 */}
            <Card
              link={'/xss/xss_lab/fourth_lab'}
              image={lab_Cover}
              title={['Stored XSS in anchor ', <q>href</q>]}
              brief={[
                'This lab contains a ',
                <span className='highlight'>
                  stored cross-site scripting vulnerability
                </span>,
                '  in the comment functionality. To solve this lab, submit a comment that calls the ',
                <span className='highlight'>alert function</span>,
                ' when the comment author name is clicked.',
              ]}
              difficulty={'Easy'}
            />

            {/* lab7 */}
            {/* <Link to="/xss/xss_lab/seven_lab" class="course-card">
              <div class="course-image">
                <img src={lab_Cover} alt="" />
              </div>
              <div class="course-text">
                <h3>DOM XSS inside Selected Element</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul class="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div class="easy">
                <i class="fa-solid fa-signal lab"></i>
                <p>Easy</p>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}

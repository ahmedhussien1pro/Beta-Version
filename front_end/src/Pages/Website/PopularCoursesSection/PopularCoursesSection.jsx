import React from 'react';
import './PopularCoursesSection.css';
import teamImage from '../assets//img/team-img/radwan.jpg';
import teamImage1 from '../assets//img/team-img/nasar.jpg';
import teamImage2 from '../assets//img/team-img/emad.jpg';
import courseImage1 from '../UserHome/assets/img/BLV/Landing.jpg';
import courseImage2 from '../UserHome/assets/img/bash/bash_course_logo.png';
import courseImage3 from '../UserHome/assets/img/Cross_Site_Scripting/xss.jpeg.jpg';
import Aos from 'aos';
const coursesData = [
  {
    id: 1,
    category: 'Web Vulnerability',
    price: 'free',
    title: 'Business Logic Vulnerability',
    description:
      'Analyze business logic flaws, exploitation methods, and strategies for mitigation.',
    image: courseImage1,
    detailsLink: '/BL_Vuln',
    trainer: {
      name: 'Eng. Ahmed Radwan ',
      image: teamImage,
      userCount: 50,
      heartCount: 65,
    },
    aosDelay: 100,
  },
  {
    id: 2,
    category: 'Fundamentals',
    price: 'free',
    title: 'Bash Scripting',
    description:
      'Develop efficient Bash scripts to automate tasks and system management.',
    image: courseImage2,
    detailsLink: '/bash-scripting',
    trainer: {
      name: 'Eng. Ebrahim Nasar',
      image: teamImage1,
      userCount: 35,
      heartCount: 42,
    },
    aosDelay: 200,
  },
  {
    id: 3,
    category: 'Web Security',
    price: '$180',
    title: 'Cross Site Scripting',
    description:
      'Understand CSRF attack vectors, mitigation techniques, and prevention best practices.',
    image: courseImage3,
    detailsLink: '/xss',
    trainer: {
      name: 'Eng. Mohamed Emad',
      image: teamImage2,
      userCount: 20,
      heartCount: 85,
    },
    aosDelay: 300,
  },
];

const PopularCoursesSection = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id='courses' className='popular-courses'>
      {/* Section Header */}
      <div className='courses__header container' data-aos='fade-up'>
        <h2 className='courses__title'>Courses</h2>
        <p className='courses__subtitle'>Popular Courses</p>
      </div>

      <div className='container'>
        <div className='row gy-lg-0 gy-sm-4'>
          {coursesData.map((course) => (
            <div
              key={course.id}
              className='col-lg-4 col-md-6 d-flex align-items-stretch'
              data-aos='zoom-in'
              data-aos-delay={course.aosDelay}>
              <div className='popular-courses__item'>
                <img
                  src={course.image}
                  alt={course.title}
                  className='popular-courses__item-image img-fluid '
                />
                <div className='popular-courses__item-content'>
                  <div className='popular-courses__item-header d-flex justify-content-between align-items-center mb-3'>
                    <p className='popular-courses__item-category'>
                      {course.category}
                    </p>
                    <p
                      className={`popular-courses__item-price ${
                        course.price === 'free' ? 'free' : ''
                      }`}>
                      {course.price}
                    </p>
                  </div>
                  <h3 className='popular-courses__item-title'>
                    <a
                      href={course.detailsLink}
                      className='popular-courses__item-link'>
                      {course.title}
                    </a>
                  </h3>
                  <p className='popular-courses__item-description'>
                    {course.description}
                  </p>
                  <div className='popular-courses__item-trainer d-flex justify-content-between align-items-center'>
                    <div className='popular-courses__item-trainer-profile d-flex align-items-center'>
                      <img
                        src={course.trainer.image}
                        alt={course.trainer.name}
                        className='popular-courses__item-trainer-image '
                      />
                      <a
                        href='/'
                        className='popular-courses__item-trainer-link'>
                        {course.trainer.name}
                      </a>
                    </div>
                    <div className='popular-courses__item-trainer-rank d-flex align-items-center'>
                      <i className='fa-regular fa-user popular-courses__item-trainer-icon popular-courses__item-trainer-icon--user'></i>
                      &nbsp;<span>{course.trainer.userCount}</span>
                      &nbsp;&nbsp;
                      <i className='fa-regular fa-heart popular-courses__item-trainer-icon popular-courses__item-trainer-icon--heart'></i>
                      &nbsp;<span>{course.trainer.heartCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;

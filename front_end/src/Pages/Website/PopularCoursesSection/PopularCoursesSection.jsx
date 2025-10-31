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
    ar_category: 'ثغرات الويب',
    en_category: 'Web Vulnerability',
    ar_price: 'مجاني',
    en_price: 'Free',
    ar_title: 'ثغرة منطق الأعمال',
    en_title: 'Business Logic Vulnerability',
    ar_description:
      'تحليل ثغرات منطق الأعمال، طرق الاستغلال، واستراتيجيات التخفيف.',
    en_description:
      'Analyze business logic flaws, exploitation methods, and strategies for mitigation.',
    image: courseImage1,
    detailsLink: '/BL_Vuln',
    trainer: {
      ar_name: 'م. أحمد رضوان',
      en_name: 'Eng. Ahmed Radwan',
      image: teamImage,
      userCount: 50,
      heartCount: 65,
    },
    aosDelay: 100,
  },
  {
    id: 2,
    ar_category: 'أساسيات',
    en_category: 'Fundamentals',
    ar_price: 'مجاني',
    en_price: 'free',
    ar_title: 'برمجة الباش',
    en_title: 'Bash Scripting',
    ar_description:
      'تعلم برمجة سكريبتات باش فعالة لأتمتة المهام وإدارة النظام.',
    en_description:
      'Develop efficient Bash scripts to automate tasks and system management.',
    image: courseImage2,
    detailsLink: '/bash-scripting',
    trainer: {
      ar_name: 'م. إبراهيم نصار',
      en_name: 'Eng. Ebrahim Nasar',
      image: teamImage1,
      userCount: 35,
      heartCount: 42,
    },
    aosDelay: 200,
  },
  {
    id: 3,
    ar_category: 'أمن الويب',
    en_category: 'Web Security',
    ar_price: '$180',
    en_price: '$180',
    ar_title: 'ثغرة XSS',
    en_title: 'Cross Site Scripting',
    ar_description:
      'فهم أساليب هجوم CSRF، تقنيات التخفيف، وأفضل ممارسات الوقاية.',
    en_description:
      'Understand CSRF attack vectors, mitigation techniques, and prevention best practices.',
    image: courseImage3,
    detailsLink: '/xss',
    trainer: {
      ar_name: 'م. محمد عماد',
      en_name: 'Eng. Mohamed Emad',
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
        <h2 className='courses__title'
        ar_title="الدورات"
        en_title="Courses"
        >{""}</h2>
        <p className='courses__subtitle'
        ar_title="الدورات الشائعة"
        en_title="Popular Courses"
        >{""}</p>
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
                  alt={course.en_title}
                  className='popular-courses__item-image img-fluid '
                />
                <div className='popular-courses__item-content'>
                  <div className='popular-courses__item-header d-flex justify-content-between align-items-center mb-3'>
                    <p className='popular-courses__item-category'
                    ar_title={course.ar_category}
                    en_title={course.en_category}>
                      {""}
                    </p>
                    <p
                      className={`popular-courses__item-price ${
                        course.price === 'free' ? 'free' : ''
                      }`}
                      ar_title={course.ar_price}
                      en_title={course.en_price}>
                      {""}
                    </p>
                  </div>
                  <h3 className='popular-courses__item-title'>
                    <a
                      href={course.detailsLink}
                      className='popular-courses__item-link'
                      ar_title={course.ar_title}
                      en_title={course.en_title}
                      >
                      {""}
                    </a>
                  </h3>
                  <p className='popular-courses__item-description'
                  ar_title={course.ar_description}
                  en_title={course.en_description}
                  >
                    {""}
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
                        className='popular-courses__item-trainer-link'
                        ar_title={course.trainer.ar_name}
                        en_title={course.trainer.en_name}
                        >
                        {""}
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

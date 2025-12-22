import React from "react";
import "./PopularCoursesSection.css";
import teamImage from "../assets//img/team-img/radwan.jpg";
import teamImage1 from "../assets//img/team-img/nasar.jpg";
import teamImage2 from "../assets//img/team-img/emad.jpg";
import courseImage1 from "../UserHome/assets/img/BLV/Landing.jpg";
import courseImage2 from "../UserHome/assets/img/bash/bash_course_logo.png";
import courseImage3 from "../UserHome/assets/img/Cross_Site_Scripting/xss.jpeg.jpg";
import Aos from "aos";
const coursesData = [
  {
    id: 1,
    image: courseImage1,
    detailsLink: "/BL_Vuln",
    category: "Web Vulnerability",
    aosDelay: 100,
    en_data: {
      price: "free",
      title: "Business Logic Vulnerability",
      description:
        "Analyze business logic flaws, exploitation methods, and strategies for mitigation.",
      trainer: {
        name: "Eng. Ahmed Radwan ",
        image: teamImage,
        userCount: 50,
        heartCount: 65,
      },
    },
    ar_data: {
      price: "مجاني",
      title: "ثغرات منطق الأعمال",
      description:
        "تحليل عيوب منطق الأعمال، وطرق الاستغلال، واستراتيجيات التخفيف.",
      trainer: {
        name: "م. أحمد رضوان",
        image: teamImage,
        userCount: 50,
        heartCount: 65,
      },
    },
  },
  {
    id: 2,
    image: courseImage2,
    detailsLink: "/bash-scripting",
    aosDelay: 200,
    en_data: {
      category: "Fundamentals",
      price: "free",
      title: "Bash Scripting",
      description:
        "Develop efficient Bash scripts to automate tasks and system management.",
      trainer: {
        name: "Eng. Ebrahim Nasar",
        image: teamImage1,
        userCount: 35,
        heartCount: 42,
      },
    },
    ar_data: {
      category: "الأساسيات",
      price: "مجاني",
      title: "برمجة باش",
      description: "تطوير سكريبتات باش فعالة لأتمتة المهام وإدارة النظام.",
      trainer: {
        name: "م. إبراهيم نصار",
        image: teamImage1,
        userCount: 35,
        heartCount: 42,
      },
    },
  },
  {
    id: 3,
    image: courseImage3,
    detailsLink: "/xss",
    aosDelay: 300,
    en_data: {
      category: "Web Security",
      price: "paid",
      title: "Cross Site Scripting",
      description:
        "Understand CSRF attack vectors, mitigation techniques, and prevention best practices.",
      trainer: {
        name: "Eng. Mohamed Emad",
        image: teamImage2,
        userCount: 20,
        heartCount: 85,
      },
    },
    ar_data: {
      category: "أمن الويب",
      price: "مدفوع",
      title: "البرمجة عبر المواقع",
      description:
        "فهم متجهات هجوم CSRF، وتقنيات التخفيف، وأفضل الممارسات للوقاية.",
      trainer: {
        name: "م. محمد عماد",
        image: teamImage2,
        userCount: 20,
        heartCount: 85,
      },
    },
  },
];

const PopularCoursesSection = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="courses" className="popular-courses">
      {/* Section Header */}
      <div className="courses__header container" data-aos="fade-up">
        <h2 className="courses__title" ar-data="الدورات" en-data="Courses">
          Courses
        </h2>
        <p
          className="courses__subtitle"
          ar-data="الدورات المميزة"
          en-data="Popular Courses"
        >
          Popular Courses
        </p>
      </div>

      <div className="container">
        <div className="row gy-lg-0 gy-sm-4">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={course.aosDelay}
            >
              <div className="popular-courses__item">
                <img
                  src={course.image}
                  alt={course.title}
                  className="popular-courses__item-image img-fluid "
                />
                <div className="popular-courses__item-content">
                  <div className="popular-courses__item-header d-flex justify-content-between align-items-center mb-3">
                    <p className="popular-courses__item-category"
                      ar-data={course.ar_data.category}
                      en-data={course.en_data.category}
                    >
                      {course.category}
                    </p>
                    <p
                      className={`popular-courses__item-price ${course.price === "free" ? "free" : ""
                        }`}
                      ar-data={course.ar_data.price}
                      en-data={course.en_data.price}
                    >
                      {course.price}
                    </p>
                  </div>
                  <h3 className="popular-courses__item-title">
                    <a
                      href={course.detailsLink}
                      className="popular-courses__item-link"
                      ar-data={course.ar_data.title}
                      en-data={course.en_data.title}
                    >
                      {course.title}
                    </a>
                  </h3>
                  <p className="popular-courses__item-description"
                    ar-data={course.ar_data.description}
                    en-data={course.en_data.description}
                  >
                   {course.en_data.description}
                  </p>
                  <div className="popular-courses__item-trainer d-flex justify-content-between align-items-center">
                    <div className="popular-courses__item-trainer-profile d-flex align-items-center">
                      <img
                        src={course.en_data.trainer.image}
                        alt={course.en_data.trainer.name}
                        className="popular-courses__item-trainer-image "
                      />
                      <a
                        href="/"
                        className="popular-courses__item-trainer-link"
                        ar-data={course.ar_data.trainer.name}
                        en-data={course.en_data.trainer.name}
                      >
                        {course.en_data.trainer.name}
                      </a>
                    </div>
                    <div className="popular-courses__item-trainer-rank d-flex align-items-center">
                      <i className="fa-regular fa-user popular-courses__item-trainer-icon popular-courses__item-trainer-icon--user"></i>
                      &nbsp;<span en-data={course.en_data.trainer.userCount} ar-data={course.ar_data.trainer.userCount}>{course.en_data.trainer.userCount} </span>
                      &nbsp;&nbsp;
                      <i className="fa-regular fa-heart popular-courses__item-trainer-icon popular-courses__item-trainer-icon--heart"></i>
                      &nbsp;<span en-data={course.en_data.trainer.heartCount} ar-data={course.ar_data.trainer.heartCount}>{course.en_data.trainer.heartCount}</span>
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

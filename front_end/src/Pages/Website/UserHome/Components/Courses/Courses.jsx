import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Courses.css";
import courseData from "./courseData";
import PaginatedCourses from "./PaginatedCourses";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn";
import {
  FaBook,
  FaBug,
  FaTools,
  FaUserGraduate,
  FaHeart,
  FaLayerGroup,
} from "react-icons/fa";
const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [isArabic, setIsArabic] = useState(
    () => localStorage.getItem("lang") === "ar"
  );
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
    });

    const handleLangChange = () => {
      setIsArabic(localStorage.getItem("lang") === "ar");
    };
    window.addEventListener("langChange", handleLangChange);
    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  const categories = [
    {
      name: "All Courses",
      en_title: "All Courses",
      ar_title: "جميع الدورات",
      icon: <FaLayerGroup />,
    },
    {
      name: "Fundamentals",
      en_title: "Fundamentals",
      ar_title: "الأساسيات",
      icon: <FaBook />,
    },
    {
      name: "Vulnerabilities",
      en_title: "Vulnerabilities",
      ar_title: "الثغرات",
      icon: <FaBug />,
    },
    {
      name: "Tools & Techniques",
      en_title: "Tools & Techniques",
      ar_title: "الأدوات والتقنيات",
      icon: <FaTools />,
    },
    {
      name: "My Courses",
      en_title: "My Courses",
      ar_title: "دوراتي",
      icon: <FaUserGraduate />,
    },
    {
      name: "Fav Topics",
      en_title: "Fav Topics",
      ar_title: "المواضيع المفضلة",
      icon: <FaHeart />,
    },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = (courseData || []).filter((course) => {
    const matchesCategory =
      selectedCategory === "All Courses" ||
      course.category === selectedCategory;

    return matchesCategory;
  });

  return (
    <div className="course">
      <div className="container">
        <div className="menu-row">
          <div className="category-menu-container">
            <ul className="category-list">
              {categories.map((category) => (
                <li className="category-item" key={category.name}>
                  <button
                    className={`category-button ${
                      selectedCategory === category.name ? "active" : ""
                    }`}
                    onClick={() => handleCategorySelect(category.name)}
                  >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-text mx-2">
                      {isArabic ? category.ar_title : category.en_title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row gap-4 justify-content-center">
          <PaginatedCourses filteredCourses={filteredCourses} />
        </div>
      </div>
      <Go2TopBtn />
    </div>
  );
};

export default Courses;

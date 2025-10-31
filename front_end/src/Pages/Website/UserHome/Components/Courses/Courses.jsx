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

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);

  const categories = [
    { name: "All Courses", icon: <FaLayerGroup /> },
    { name: "Fundamentals", icon: <FaBook /> },
    { name: "Vulnerabilities", icon: <FaBug /> },
    { name: "Tools & Techniques", icon: <FaTools /> },
    { name: "My Courses", icon: <FaUserGraduate /> },
    { name: "Fav Topics", icon: <FaHeart /> },
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
                    <span className="category-text mx-2">{category.name}</span>
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

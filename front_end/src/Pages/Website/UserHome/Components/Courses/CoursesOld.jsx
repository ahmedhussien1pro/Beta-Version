import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Courses.css';
import courseData from './courseData';
import PaginatedCourses from './PaginatedCourses';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import {
  FaBook,
  FaBug,
  FaTools,
  FaUserGraduate,
  FaHeart,
  FaLayerGroup,
} from 'react-icons/fa';

const Courses = () => {
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem('lang') || 'en'
  );
  const [selectedCategory, setSelectedCategory] = useState('All Courses');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newLang = document.documentElement.lang;
      setCurrentLang(newLang);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setSelectedCategory('All Courses');
  }, [currentLang]);

  useEffect(() => {
    AOS.init({ duration: 500, once: false, mirror: true });
  }, []);

  const categories = [
    { en: 'All Courses', ar: 'جميع الدورات', icon: <FaLayerGroup /> },
    { en: 'Fundamentals', ar: 'الأساسيات', icon: <FaBook /> },
    { en: 'Vulnerabilities', ar: 'الثغرات', icon: <FaBug /> },
    { en: 'Tools & Techniques', ar: 'الأدوات والتقنيات', icon: <FaTools /> },
    { en: 'My Courses', ar: 'دوراتي', icon: <FaUserGraduate /> },
    { en: 'Fav Topics', ar: 'المواضيع المفضلة', icon: <FaHeart /> },
  ];

  const handleCategorySelect = (categoryEn) => {
    setSelectedCategory(categoryEn);
  };

  const filteredCourses = courseData.filter((course) => {
    const courseCategoryEn = course.en_data.category;
    return (
      selectedCategory === 'All Courses' ||
      courseCategoryEn === selectedCategory
    );
  });

  return (
    <div className='course'>
      <div className='container'>
        <div className='menu-row'>
          <div className='category-menu-container'>
            <ul className='category-list'>
              {categories.map((cat) => (
                <li className='category-item' key={cat.en}>
                  <button
                    className={`category-button ${
                      selectedCategory === cat.en ? 'active' : ''
                    }`}
                    onClick={() => handleCategorySelect(cat.en)}>
                    <span className='category-icon'>{cat.icon}</span>
                    <span className='category-text ms-2'>
                      {currentLang === 'ar' ? cat.ar : cat.en}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='row gap-4 justify-content-center'>
          <PaginatedCourses courses={filteredCourses} lang={currentLang} />
        </div>
      </div>

      <Go2TopBtn />
    </div>
  );
};

export default Courses;

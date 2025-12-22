import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Courses.css';
import courseData from './courseData';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn';
import {
  FaBook,
  FaBug,
  FaTools,
  FaUserGraduate,
  FaHeart,
  FaLayerGroup,
  FaSignal,
  FaClock,
  FaTag,
  FaCertificate,
  FaHourglassHalf,
  FaCheckCircle,
  FaCrown,
  FaGift,
  // pro & free icon
  FaClock as FaComingSoon,
  FaTh,
  FaList,
} from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Button, Dropdown } from 'react-bootstrap';
import { Box, Pagination as MUIPagination } from '@mui/material';

const Courses = () => {
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem('lang') || 'en'
  );
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [favorites, setFavorites] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Placeholder for admin check
    const userRole = localStorage.getItem('userRole');
    setIsAdmin(userRole === 'admin');
  }, []);

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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
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
    setCurrentPage(1);
  };

  const filteredCourses = courseData.filter((course) => {
    const courseCategoryEn = course.en_data.category;
    return (
      selectedCategory === 'All Courses' ||
      courseCategoryEn === selectedCategory
    );
  });

  // Pagination logic
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const coursesList = Array.isArray(filteredCourses) ? filteredCourses : [];

  const totalPages = Math.ceil(coursesList.length / itemsPerPage);

  const handlePageChange = (event, page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  const toggleFavorite = async (courseId) => {
    const currentStatus = favorites[courseId] ?? false;

    setFavorites((prev) => ({
      ...prev,
      [courseId]: !currentStatus,
    }));

    try {
      const response = await fetch('/api/favorite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId, favorite: !currentStatus }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed');
    } catch (error) {
      console.error('Error updating favorite:', error);
      setFavorites((prev) => ({
        ...prev,
        [courseId]: currentStatus,
      }));
      Swal.fire(
        'Error',
        'Could not update favorite status.\nDB not Ready! Please try again later.',
        'error'
      );
    }
  };

  const handleInfoClick = (course, e) => {
    e.preventDefault();
    e.stopPropagation();

    const data = currentLang === 'ar' ? course.ar_data : course.en_data;

    Swal.fire({
      title: data.title,
      html: `<p>${data.description}</p>
             <ul>
               ${data.topics.map((topic) => `<li>${topic}</li>`).join('')}
             </ul>`,
      icon: 'info',
      confirmButtonText: currentLang === 'ar' ? 'حسنًا' : 'OK',
    });
  };

  const handleEnroll = (course, e) => {
    e.preventDefault();
    e.stopPropagation();
    const data = currentLang === 'ar' ? course.ar_data : course.en_data;
    Swal.fire('Enrolled!', `You have enrolled in ${data.title}.`, 'success');
  };

  const getDisplayState = (status, lang) => {
    const translations = {
      pending: { en: 'Pending', ar: 'قيد الانتظار' },
      published: { en: 'Available', ar: 'متاح' },
      'coming-soon': { en: 'Coming Soon', ar: 'قريبًا' },
      'semi-published': { en: 'Semi-Published', ar: 'شبه متاح' },
    };
    return translations[status]?.[lang] || status;
  };

  const getAccessText = (access, lang) => {
    const translations = {
      free: { en: 'Free', ar: 'مجانًا' },
      pro: { en: 'Pro', ar: 'برو' },
    };
    return translations[access]?.[lang] || access;
  };

  const getDifficultyClass = (difficulty, lang) => {
    const diff = difficulty.toLowerCase();
    if (diff === 'beginner' || diff === 'مبتدئ')
      return 'course-card__level--beginner';
    if (diff === 'intermediate' || diff === 'متوسط')
      return 'course-card__level--intermediate';
    if (diff === 'advanced' || diff === 'متقدم')
      return 'course-card__level--advanced';
    return 'course-card__level--default';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <FaHourglassHalf className='course-card__badge-icon' />;
      case 'published':
        return <FaCheckCircle className='course-card__badge-icon' />;
      case 'coming-soon':
        return <FaComingSoon className='course-card__badge-icon' />;
      case 'semi-published':
        return <FaCertificate className='course-card__badge-icon' />;
      default:
        return null;
    }
  };

  const getAccessIcon = (access) => {
    switch (access) {
      case 'Pro':
        return <FaCrown className='course-card__detail-icon' />;
      case 'Free':
        return <FaGift className='course-card__detail-icon' />;
      default:
        return null;
    }
  };
  const displayedCourses = coursesList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  const selectedCat = categories.find((cat) => cat.en === selectedCategory);
  const selectedTitle = currentLang === 'ar' ? selectedCat.ar : selectedCat.en;

  return (
    <div className='course-page py-5'>
      <div className='container'>
        <div className='controls-row mb-5 d-flex justify-content-between align-items-center flex-wrap gap-3'>
          {isMobile ? (
            <Dropdown>
              <Dropdown.Toggle
                className='category-button active'
                variant='outline-primary'
                id='category-dropdown'>
                <span className='category-icon me-2'>{selectedCat.icon}</span>
                <span className='category-text'>{selectedTitle}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categories.map((cat) => (
                  <Dropdown.Item
                    key={cat.en}
                    onClick={() => handleCategorySelect(cat.en)}
                    active={selectedCategory === cat.en}>
                    <span className='category-icon me-2'>{cat.icon}</span>
                    <span className='category-text'>
                      {currentLang === 'ar' ? cat.ar : cat.en}
                    </span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <ul className='category-list d-flex flex-wrap align-items-center gap-3 m-0 p-0 list-unstyled'>
              {categories.map((cat) => (
                <li key={cat.en}>
                  <button
                    className={`category-button btn btn-outline-primary ${
                      selectedCategory === cat.en ? 'active' : ''
                    }`}
                    onClick={() => handleCategorySelect(cat.en)}>
                    <span className='category-icon me-2'>{cat.icon}</span>
                    <span className='category-text'>
                      {currentLang === 'ar' ? cat.ar : cat.en}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className='view-toggle'>
            <button
              className='btn btn-outline-primary'
              onClick={toggleViewMode}>
              {viewMode === 'grid' ? <FaList /> : <FaTh />}
            </button>
          </div>
        </div>

        <div className='row g-4 justify-content-center'>
          {displayedCourses.map((course, index) => {
            const data = currentLang === 'ar' ? course.ar_data : course.en_data;
            const status = course.status;
            const displayState = getDisplayState(status, currentLang);
            const isAvailable = status === 'published';
            const isAccessible = isAvailable || isAdmin;
            const accessText = getAccessText(course.access, currentLang);
            const enrollText = isAvailable
              ? `${currentLang === 'ar' ? 'التسجيل' : 'Enroll'} ${accessText}`
              : displayState;
            const lessonsText = `${data.topics.length} ${
              currentLang === 'ar' ? 'مواضيع' : 'Topics'
            }`;
            const difficultyClass = getDifficultyClass(
              data.difficulty,
              currentLang
            );

            const CardContent = (
              <div
                className={`card course-card shadow-sm rounded-4 overflow-hidden h-100 ${
                  viewMode === 'list' ? 'course-card--list' : ''
                }`}>
                {/* Image */}
                <div className='position-relative course-card__image-wrapper'>
                  <img
                    src={course.image}
                    alt={data.title}
                    className='w-100 course-card__image'
                  />

                  {/* Badge */}
                  <div className='position-absolute top-0 mt-3 ms-3'>
                    <div
                      className={`course-card__badge d-flex align-items-center gap-2 ${status}`}>
                      {getStatusIcon(status)}
                      <span className='course-card__badge-text '>
                        {displayState}
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className='card-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start justify-content-end gap-3 bg-dark bg-opacity-50 opacity-0 transition-opacity duration-300 p-2'>
                    <Button
                      variant='light'
                      className='icon-button favorite-button rounded-circle shadow-sm'
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(course.id);
                      }}>
                      <i
                        className={`${
                          favorites[course.id]
                            ? 'fas fa-heart text-danger'
                            : 'far fa-heart secondary-text'
                        } fs-5`}
                      />
                    </Button>
                  </div>
                </div>

                {/* Body */}
                <div className='card-body d-flex flex-column pt-4 pb-3 px-4'>
                  <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h5 className='course-card__title m-0'>{data.title}</h5>
                    <p className='course-card__category m-0'>{data.category}</p>
                  </div>

                  {/* Description */}
                  <p className='card-description mb-3 flex-grow-1'>
                    {data.description}
                  </p>

                  {/* Details */}
                  <div className='d-flex justify-content-between align-items-center course-card__details mb-4'>
                    <div
                      className={`course-card__level d-flex align-items-center gap-2 ${difficultyClass}`}>
                      <FaSignal className='course-card__level-icon' />
                      <span className='course-card__level-text'>
                        {data.difficulty}
                      </span>
                    </div>
                    <div
                      className={`course-card__access d-flex align-items-center gap-2 ${accessText}`}>
                      {/* <FaTag className='course-card__detail-icon' /> */}
                      {getAccessIcon(accessText)}
                      <span className='course-card__detail-text'>
                        {accessText}
                      </span>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                      <FaClock className='course-card__detail-icon' />
                      <span className='course-card__detail-text'>
                        {lessonsText}
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className='d-flex gap-3 mt-auto'>
                    <button
                      className='btn btn-outline-secondary w-50 course-card__btn--info'
                      onClick={(e) => handleInfoClick(course, e)}>
                      {currentLang === 'ar' ? 'مزيد من المعلومات' : 'More Info'}
                    </button>
                    <button
                      className={`btn w-50 course-card__btn--start ${
                        isAvailable ? '' : 'disabled'
                      }`}
                      disabled={!isAvailable}
                      onClick={(e) => handleEnroll(course, e)}>
                      {isAvailable
                        ? currentLang === 'ar'
                          ? 'ابدأ التعلم'
                          : 'Start Learning'
                        : displayState}
                    </button>
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div
                key={course.id}
                className={
                  viewMode === 'grid' ? 'col-lg-4 col-md-6 col-sm-12' : 'col-12'
                }
                variants={cardVariants}
                initial='hidden'
                animate='visible'
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: (index % 3) * 0.1 }}>
                {isAccessible ? (
                  <a
                    href={course.link}
                    className='text-decoration-none shadow-sm'>
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </motion.div>
            );
          })}
        </div>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 5,
            mb: 4,
          }}>
          <MUIPagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            size='large'
            showFirstButton
            showLastButton
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'var(--main-color)',
                '&:hover': {
                  backgroundColor: 'var(--main-color)',
                  color: 'var(--whiteColor)',
                },
              },
              '& .Mui-selected': {
                backgroundColor: 'var(--main-color)!important',
                color: 'var(--whiteColor)',
                '&:hover': {
                  backgroundColor: 'var(--main-color4)!important',
                },
              },
              '& .MuiPaginationItem-ellipsis': {
                color: 'var(--main-color)',
              },
            }}
          />
        </Box>
      </div>

      <Go2TopBtn />
    </div>
  );
};

export default Courses;

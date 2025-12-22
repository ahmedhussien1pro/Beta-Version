import { useState } from 'react';
import Swal from 'sweetalert2';

const itemsPerPage = 9;

const PaginatedCourses = ({ courses = [], lang = 'en' }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState({});

  const coursesList = Array.isArray(courses) ? courses : [];

  const totalPages = Math.ceil(coursesList.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
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

    const data = lang === 'ar' ? course.ar_data : course.en_data;

    Swal.fire({
      title: data.title,
      html: `<p>${data.description}</p>
             <ul>
               ${data.topics.map((topic) => `<li>${topic}</li>`).join('')}
             </ul>`,
      icon: 'info',
      confirmButtonText: lang === 'ar' ? 'حسنًا' : 'OK',
    });
  };

  const displayedCourses = coursesList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {displayedCourses.map((course, index) => {
        const data = lang === 'ar' ? course.ar_data : course.en_data;

        return (
          <div
            key={course.id}
            className='course-card-container col-lg-4 col-md-6 col-sm-12 mb-4'
            data-aos='fade-up'
            data-aos-delay={(index % 3) * 50}>
            <a href={course.link} className='course-card'>
              <div className='card-image-container'>
                <img
                  src={course.image}
                  alt={data.title}
                  className='card-image'
                />

                {/* Status Badge */}
                <div
                  className={`status-badge ${data.state
                    .replace(' ', '-')
                    .toLowerCase()}`}>
                  {data.state === 'pending' || data.state === 'قيد الانتظار'
                    ? lang === 'ar'
                      ? 'قيد الانتظار'
                      : 'Pending'
                    : data.state === 'published' || data.state === 'متاح'
                    ? lang === 'ar'
                      ? 'متاح'
                      : 'Available'
                    : data.state === 'coming-soon'
                    ? lang === 'ar'
                      ? 'قريبًا'
                      : 'Coming Soon'
                    : data.state}
                </div>

                {/* Card Overlay Icons */}
                <div className='card-hover-overlay'>
                  <button
                    className='icon-button favorite-button'
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(course.id);
                    }}>
                    <i
                      className={`${
                        favorites[course.id]
                          ? 'fas fa-heart filled'
                          : 'far fa-heart'
                      }`}
                    />
                  </button>
                  <button
                    className='icon-button info-button'
                    onClick={(e) => handleInfoClick(course, e)}>
                    <i className='fas fa-info' />
                  </button>
                </div>
              </div>

              <div className='card-content'>
                <h3 className='card-title'>{data.title}</h3>
                <p className='card-description'>{data.description}</p>
              </div>
            </a>
          </div>
        );
      })}

      {/* Pagination */}
      <div className='pagination-container'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`pagination-item ${
              currentPage === index + 1 ? 'active' : ''
            }`}
            onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default PaginatedCourses;

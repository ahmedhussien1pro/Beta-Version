// src/pages/EditorPage/CoursesEditorPage.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Header from '../../../../Pages/Website/UserHome/Header/Header';
import Footer from '../../../../Pages/Website/UserHome/Footer/Footer';
import ThemeSwitcher from '../../../../Pages/Website/UserHome/Components/ThemeSwitcher/ThemeSwitcher';
import GoBackDashboard from '../GoBackDashboard';

// Helper: convert uploaded file to base64
const fileToBase64 = (file) =>
  new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result);
    reader.onerror = (e) => rej(e);
    reader.readAsDataURL(file);
  });

export default function CoursesEditorPage() {
  const [courses, setCourses] = useState([]);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewLang, setPreviewLang] = useState('en');

  // Add a new course
  const addCourse = () => {
    setCourses((prev) => [
      ...prev,
      {
        id: `course-${Date.now()}`,
        category_en: '',
        category_ar: '',
        title_en: '',
        title_ar: '',
        description_en: '',
        description_ar: '',
        topics_en: [''],
        topics_ar: [''],
        difficulty: 'Beginner',
        image: '',
        state: 'published',
        link: '',
        favorite: false,
        myCourses: false,
        isArabic: false,
      },
    ]);
  };

  const updateCourseField = (id, field, value) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  // Update topic
  const updateCourseTopic = (id, lang, index, value) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              [`topics_${lang}`]: c[`topics_${lang}`].map((t, i) =>
                i === index ? value : t
              ),
            }
          : c
      )
    );
  };

  const addTopic = (id, lang) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, [`topics_${lang}`]: [...c[`topics_${lang}`], ''] }
          : c
      )
    );
  };

  const removeTopic = (id, lang, index) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              [`topics_${lang}`]: c[`topics_${lang}`].filter(
                (_, i) => i !== index
              ),
            }
          : c
      )
    );
  };

  const uploadCourseImage = async (e, id) => {
    const file = e.target.files[0];
    if (!file) return;
    const b64 = await fileToBase64(file);
    updateCourseField(id, 'image', b64);
  };

  const toggleFavorite = (id) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, favorite: !c.favorite } : c))
    );
  };

  const toggleMyCourses = (id) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, myCourses: !c.myCourses } : c))
    );
  };

  const toggleLanguage = (id) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isArabic: !c.isArabic } : c))
    );
  };

  const saveDraft = () => {
    localStorage.setItem('courseDraft', JSON.stringify(courses));
    Swal.fire({
      icon: 'success',
      title: 'Saved',
      text: 'Draft saved to localStorage',
      timer: 1400,
      showConfirmButton: false,
    });
  };

  const handleInfoClick = (course, lang) => {
    const title = course[`title_${lang}`] || 'Course Info';
    const description = course[`description_${lang}`] || 'No description';
    const topics = course[`topics_${lang}`] || [];
    Swal.fire({
      title,
      html: `<p>${description}</p>
             <ul>${
               topics.length
                 ? topics.map((t) => `<li>${t}</li>`).join('')
                 : previewLang === 'ar'
                 ? '<li>لا توجد مواضيع</li>'
                 : '<li>No topics</li>'
             }</ul>`,
      icon: 'info',
    });
  };

  const preview = () => {
    localStorage.setItem('coursePreview', JSON.stringify(courses));

    // Show short SweetAlert first
    Swal.fire({
      icon: 'info',
      title: 'Opening preview',
      timer: 700,
      showConfirmButton: false,
    }).then(() => setShowPreviewModal(true));
    const handleOutsideClick = (event) => {
      if (
        event.target.classList.contains('preview-overlay') ||
        event.target.classList.contains('btn-close')
      ) {
        setShowPreviewModal(false);
        document.removeEventListener('click', handleOutsideClick);
      }
    };
    document.addEventListener('click', handleOutsideClick);
  };

  return (
    <div className='Custom__body--bg'>
      <Header />
      <ThemeSwitcher />
      <div className='container py-4'>
        <div className='d-flex justify-content-between align-items-center mb-4'>
          <h2 className='fw-bold'>
            <i className='fa-solid fa-file-lines me-2 main-color'></i> Editor —
            Courses
          </h2>
          <button className='btn-main-color2' onClick={addCourse}>
            <i className='fa-solid fa-plus me-1'></i> Add Course
          </button>
        </div>

        <div className='row'>
          {courses.map((course) => {
            const lang = course.isArabic ? 'ar' : 'en';
            return (
              <div key={course.id} className='col-lg-12 mb-4'>
                <div className='card p-3 shadow-sm secondary-bg primary-text'>
                  <h4 className='mb-3'>Course Information</h4>
                  <button
                    onClick={() => toggleLanguage(course.id)}
                    className='btn-main-color2 btn-main-color-sm mb-3 align-self-end'>
                    {course.isArabic
                      ? 'Switch to English'
                      : 'التبديل إلى العربية'}
                  </button>
                  {['category', 'title', 'description', 'link'].map((field) => (
                    <div key={field} className='mb-2'>
                      <label className='form-label'>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      {field === 'description' ? (
                        <textarea
                          className='form-control focus-bg-transparent'
                          placeholder={
                            course.isArabic
                              ? 'اكتب وصف الدورة هنا...'
                              : 'Enter course description here...'
                          }
                          rows={3}
                          value={course[`${field}_${lang}`] || ''}
                          onChange={(e) =>
                            updateCourseField(
                              course.id,
                              `${field}_${lang}`,
                              e.target.value
                            )
                          }
                        />
                      ) : (
                        <input
                          className='form-control focus-bg-transparent'
                          placeholder={
                            course.isArabic
                              ? 'اكتب عنوان الدورة هنا...'
                              : 'Enter course title here...'
                          }
                          value={course[`${field}_${lang}`] || ''}
                          onChange={(e) =>
                            updateCourseField(
                              course.id,
                              `${field}_${lang}`,
                              e.target.value
                            )
                          }
                        />
                      )}
                    </div>
                  ))}

                  {/* Topics */}
                  <div className='mb-2'>
                    <label className='form-label'>Topics</label>
                    {(course[`topics_${lang}`] || []).map((topic, i) => (
                      <div key={i} className='d-flex mb-1'>
                        <input
                          type='text'
                          className='form-control focus-bg-transparent me-1'
                          value={topic}
                          placeholder={
                            course.isArabic
                              ? 'اكتب موضوع الدورة هنا...'
                              : 'Enter course topic here...'
                          }
                          onChange={(e) =>
                            updateCourseTopic(
                              course.id,
                              lang,
                              i,
                              e.target.value
                            )
                          }
                        />
                        <button
                          className='btn btn-sm btn-danger'
                          onClick={() => removeTopic(course.id, lang, i)}>
                          &times;
                        </button>
                      </div>
                    ))}
                    <button
                      className='btn btn-sm btn-outline-primary mt-1'
                      onClick={() => addTopic(course.id, lang)}>
                      + Add Topic
                    </button>
                  </div>

                  {/* Difficulty */}
                  <div className='mb-2'>
                    <label className='form-label'>Difficulty</label>
                    <select
                      className='form-select focus-bg-transparent main-color '
                      value={course.difficulty}
                      onChange={(e) =>
                        updateCourseField(
                          course.id,
                          'difficulty',
                          e.target.value
                        )
                      }>
                      <option value='Beginner'>Beginner</option>
                      <option value='Intermediate'>Intermediate</option>
                      <option value='Advanced'>Advanced</option>
                    </select>
                  </div>

                  {/* Image */}
                  <div className='mb-2'>
                    <label className='form-label'>Course Image</label>
                    <input
                      type='file'
                      className='form-control focus-bg-transparent'
                      accept='image/*'
                      onChange={(e) => uploadCourseImage(e, course.id)}
                    />
                    {course.image && (
                      <img
                        src={course.image}
                        alt='course'
                        className='img-thumbnail mt-2'
                        style={{
                          width: 100,
                          maxHeight: 70,
                          objectFit: 'cover',
                        }}
                      />
                    )}
                  </div>

                  {/* State */}
                  <div className='mb-2'>
                    <label className='form-label'>State</label>
                    <select
                      className='form-select focus-bg-transparent main-color '
                      value={course.state}
                      onChange={(e) =>
                        updateCourseField(course.id, 'state', e.target.value)
                      }>
                      <option value='published'>Published</option>
                      <option value='semi-published'>Semi-Published</option>
                      <option value='pending'>Pending</option>
                      <option value='coming-soon'>Coming Soon</option>
                    </select>
                  </div>

                  {/* Toggles */}
                  <div className='d-flex justify-content-between mt-3'>
                    <button
                      className={`btn btn-sm ${
                        course.favorite ? 'btn-danger' : 'btn-outline-danger'
                      }`}
                      onClick={() => toggleFavorite(course.id)}>
                      {course.favorite ? '♥ Favorite' : '♡ Favorite'}
                    </button>
                    <button
                      className={`btn btn-sm ${
                        course.myCourses ? 'btn-success' : 'btn-outline-success'
                      }`}
                      onClick={() => toggleMyCourses(course.id)}>
                      {course.myCourses ? 'My Course' : 'Add to My Courses'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='text-center my-4'>
          <button className='btn-main-color2 me-2' onClick={saveDraft}>
            <i className='fa-solid fa-save me-1'></i> Save Draft
          </button>
          <button className='btn-main-color' onClick={preview}>
            <i className='fa-solid fa-eye me-1'></i> Preview
          </button>
          <GoBackDashboard />
        </div>
      </div>

      {/* Overlay Preview Modal */}
      {showPreviewModal && (
        <div className='preview-overlay'>
          <div className='preview-content'>
            <button
              className='btn btn-sm btn-outline-secondary mb-3'
              onClick={() =>
                setPreviewLang(previewLang === 'en' ? 'ar' : 'en')
              }>
              Switch Language
            </button>
            <button
              className='btn-close text-danger float-end'
              onClick={() => setShowPreviewModal(false)}></button>

            {/* <div className='row '> */}
            {courses.map((course) => (
              <div
                key={course.id}
                className=' mb-4 d-flex justify-content-center'>
                <div className='course-card-container col-lg-12 col-md-12 col-sm-12 mb-4'>
                  <a href={course.link || '#'} className='course-card'>
                    <div className='card-image-container'>
                      {course.image && (
                        <img
                          src={course.image}
                          alt={course[`title_${previewLang}`]}
                          className='card-image'
                        />
                      )}
                      <div
                        className={`status-badge ${course.state.replace(
                          '-',
                          ''
                        )}`}>
                        {course.state.replace('-', ' ')}
                      </div>
                      <div className='card-hover-overlay'>
                        <button
                          className='icon-button favorite-button'
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(course.id);
                          }}>
                          <i
                            className={`${
                              course.favorite
                                ? 'fas fa-heart filled'
                                : 'far fa-heart'
                            }`}
                          />
                        </button>
                        <button
                          className='icon-button info-button'
                          onClick={(e) => {
                            e.preventDefault();
                            handleInfoClick(course, previewLang);
                          }}>
                          <i className='fas fa-info' />
                        </button>
                      </div>
                    </div>
                    <div className='card-content'>
                      <h3 className='card-title'>
                        {course[`title_${previewLang}`] || previewLang === 'ar'
                          ? 'عنوان الدورة...'
                          : 'Course Title...'}
                      </h3>
                      <p className='card-description'>
                        {course[`description_${previewLang}`] ||
                          (previewLang === 'ar'
                            ? 'وصف الدورة...'
                            : 'Course description...')}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

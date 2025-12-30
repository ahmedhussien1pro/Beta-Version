import React from 'react';
import {
  FaLanguage,
  FaGraduationCap,
  FaClock,
  FaUsers,
  FaStar,
  FaChartBar,
} from 'react-icons/fa';

const CourseInfoEditor = ({ courseInfo = {}, onCourseInfoChange }) => {
  // Default values to prevent undefined errors
  const safeInfo = {
    title: courseInfo?.title || { en: '', ar: '' },
    description: courseInfo?.description || { en: '', ar: '' },
    difficulty: courseInfo?.difficulty || { en: '', ar: '' },
    duration: courseInfo?.duration || { en: '', ar: '' },
    instructor: courseInfo?.instructor || '',
    rating: courseInfo?.rating || '',
    students: courseInfo?.students || '',
  };

  const handleChange = (field, value, lang = null) => {
    if (lang) {
      onCourseInfoChange({
        ...courseInfo,
        [field]: { ...safeInfo[field], [lang]: value },
      });
    } else {
      onCourseInfoChange({ ...courseInfo, [field]: value });
    }
  };

  return (
    <div className='course-info'>
      <div className='course-info__section'>
        <div className='course-info__section-header'>
          <div className='course-info__section-title'>
            <div className='course-info__section-icon'>
              <FaGraduationCap />
            </div>
            Landing Page Data
          </div>
        </div>

        <div className='course-info__form'>
          {/* Title */}
          <div className='course-info__row'>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaLanguage /> Course Title (EN)
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='e.g., Broken Access Control'
                value={safeInfo.title.en}
                onChange={(e) => handleChange('title', e.target.value, 'en')}
              />
            </div>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaLanguage /> Course Title (AR)
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='مثال: ثغرات التحكم في الوصول'
                dir='rtl'
                value={safeInfo.title.ar}
                onChange={(e) => handleChange('title', e.target.value, 'ar')}
              />
            </div>
          </div>

          {/* Description */}
          <div className='course-info__row'>
            <div className='course-info__field'>
              <label className='course-info__label'>Description (EN)</label>
              <textarea
                className='course-info__textarea'
                placeholder='Learn how authorization failures...'
                value={safeInfo.description.en}
                onChange={(e) =>
                  handleChange('description', e.target.value, 'en')
                }
              />
            </div>
            <div className='course-info__field'>
              <label className='course-info__label'>Description (AR)</label>
              <textarea
                className='course-info__textarea'
                placeholder='تعلم كيف تؤدي إخفاقات التفويض...'
                dir='rtl'
                value={safeInfo.description.ar}
                onChange={(e) =>
                  handleChange('description', e.target.value, 'ar')
                }
              />
            </div>
          </div>

          {/* Difficulty & Duration */}
          <div className='course-info__row'>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaChartBar /> Difficulty (EN/AR)
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type='text'
                  className='course-info__input'
                  placeholder='Intermediate'
                  value={safeInfo.difficulty.en}
                  onChange={(e) =>
                    handleChange('difficulty', e.target.value, 'en')
                  }
                />
                <input
                  type='text'
                  className='course-info__input'
                  placeholder='متوسط'
                  dir='rtl'
                  value={safeInfo.difficulty.ar}
                  onChange={(e) =>
                    handleChange('difficulty', e.target.value, 'ar')
                  }
                />
              </div>
            </div>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaClock /> Duration (EN/AR)
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type='text'
                  className='course-info__input'
                  placeholder='45 min'
                  value={safeInfo.duration.en}
                  onChange={(e) =>
                    handleChange('duration', e.target.value, 'en')
                  }
                />
                <input
                  type='text'
                  className='course-info__input'
                  placeholder='45 دقيقة'
                  dir='rtl'
                  value={safeInfo.duration.ar}
                  onChange={(e) =>
                    handleChange('duration', e.target.value, 'ar')
                  }
                />
              </div>
            </div>
          </div>

          {/* Stats (Single Language) */}
          <div className='course-info__row'>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaUsers /> Instructor
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='CyberLab'
                value={safeInfo.instructor}
                onChange={(e) => handleChange('instructor', e.target.value)}
              />
            </div>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaStar /> Rating
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='4.9'
                value={safeInfo.rating}
                onChange={(e) => handleChange('rating', e.target.value)}
              />
            </div>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaUsers /> Students Count
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='3400'
                value={safeInfo.students}
                onChange={(e) => handleChange('students', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoEditor;

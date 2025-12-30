import React, { useState, useEffect } from 'react';
import {
  FaLanguage,
  FaGraduationCap,
  FaClock,
  FaUsers,
  FaStar,
  FaChartBar,
  FaLink,
  FaImage,
  FaUpload,
  FaTimes,
} from 'react-icons/fa';

const CourseInfoEditor = ({ courseInfo = {}, onCourseInfoChange }) => {
  // ✅ Initialize state with all fields including labsLink as object
  const [formData, setFormData] = useState({
    title: courseInfo?.title || { en: '', ar: '' },
    description: courseInfo?.description || { en: '', ar: '' },
    difficulty: courseInfo?.difficulty || { en: '', ar: '' },
    duration: courseInfo?.duration || { en: '', ar: '' },
    instructor: courseInfo?.instructor || '',
    rating: courseInfo?.rating || '',
    students: courseInfo?.students || '',
    courseImage: courseInfo?.courseImage || '',
    labsLink: courseInfo?.labsLink || { link: '' },
  });

  // ✅ Image upload mode state
  const [imageMode, setImageMode] = useState('url'); // 'url' or 'upload'
  const [imagePreview, setImagePreview] = useState(
    courseInfo?.courseImage || ''
  );

  // ✅ Update formData when courseInfo prop changes
  useEffect(() => {
    setFormData({
      title: courseInfo?.title || { en: '', ar: '' },
      description: courseInfo?.description || { en: '', ar: '' },
      difficulty: courseInfo?.difficulty || { en: '', ar: '' },
      duration: courseInfo?.duration || { en: '', ar: '' },
      instructor: courseInfo?.instructor || '',
      rating: courseInfo?.rating || '',
      students: courseInfo?.students || '',
      courseImage: courseInfo?.courseImage || '',
      labsLink: courseInfo?.labsLink || { link: '' },
    });
    setImagePreview(courseInfo?.courseImage || '');
  }, [courseInfo]);

  // ✅ Unified handleChange function
  const handleChange = (field, value, lang = null) => {
    let updatedData;

    if (lang) {
      updatedData = {
        ...formData,
        [field]: { ...formData[field], [lang]: value },
      };
    } else {
      updatedData = {
        ...formData,
        [field]: value,
      };
    }

    setFormData(updatedData);
    onCourseInfoChange(updatedData);
  };

  // ✅ Handle image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image (JPEG, PNG, WebP)');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImagePreview(base64String);
        handleChange('courseImage', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Handle image URL input
  const handleImageUrl = (url) => {
    setImagePreview(url);
    handleChange('courseImage', url);
  };

  // ✅ Clear image
  const clearImage = () => {
    setImagePreview('');
    handleChange('courseImage', '');
  };

  return (
    <div className='course-info'>
      <div className='course-info__section'>
        <div className='course-info__section-header'>
          <div className='course-info__section-title'>
            <div className='course-info__section-icon'>
              <FaGraduationCap />
            </div>
            Landing Section Data
          </div>
        </div>

        <div className='course-info__form'>
          {/* Title */}
          <div className='course-info__row'>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaLanguage size={16} color='var(--main-color)' /> Course Title
                (EN)
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='e.g., Broken Access Control'
                value={formData.title.en}
                onChange={(e) => handleChange('title', e.target.value, 'en')}
              />
            </div>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaLanguage size={16} color='var(--main-color)' /> Course Title
                (AR)
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='مثال: ثغرات التحكم في الوصول'
                dir='rtl'
                value={formData.title.ar}
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
                value={formData.description.en}
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
                value={formData.description.ar}
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
                <FaChartBar size={16} color='var(--main-color)' /> Difficulty
                (EN/AR)
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type='text'
                  className='course-info__input'
                  placeholder='Intermediate'
                  value={formData.difficulty.en}
                  onChange={(e) =>
                    handleChange('difficulty', e.target.value, 'en')
                  }
                />
                <input
                  type='text'
                  className='course-info__input'
                  placeholder='متوسط'
                  dir='rtl'
                  value={formData.difficulty.ar}
                  onChange={(e) =>
                    handleChange('difficulty', e.target.value, 'ar')
                  }
                />
              </div>
            </div>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaClock size={16} color='var(--main-color)' /> Duration (EN/AR)
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type='text'
                  className='course-info__input'
                  placeholder='45 min'
                  value={formData.duration.en}
                  onChange={(e) =>
                    handleChange('duration', e.target.value, 'en')
                  }
                />
                <input
                  type='text'
                  className='course-info__input'
                  placeholder='45 دقيقة'
                  dir='rtl'
                  value={formData.duration.ar}
                  onChange={(e) =>
                    handleChange('duration', e.target.value, 'ar')
                  }
                />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className='course-info__row'>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaUsers size={16} color='var(--main-color)' /> Instructor
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='CyberLab'
                value={formData.instructor}
                onChange={(e) => handleChange('instructor', e.target.value)}
              />
            </div>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaStar size={16} color='var(--main-color)' /> Rating
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='4.9'
                value={formData.rating}
                onChange={(e) => handleChange('rating', e.target.value)}
              />
            </div>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaUsers size={16} color='var(--main-color)' /> Students Count
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='3400'
                value={formData.students}
                onChange={(e) => handleChange('students', e.target.value)}
              />
            </div>
          </div>

          {/* Labs Link - Full Width */}
          <div className='course-info__row'>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaLink size={16} color='var(--main-color)' /> Labs Link
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='/cookies/cookies_lab'
                value={formData.labsLink?.link || ''}
                onChange={(e) =>
                  handleChange('labsLink', { link: e.target.value })
                }
              />
            </div>
          </div>

          {/* ✅ Course Image - Upload or URL */}
          <div className='course-info__row'>
            <div className='course-info__field course-info__field--full'>
              <label className='course-info__label'>
                <FaImage size={16} color='var(--main-color)' /> Course Image
              </label>

              {/* Mode Toggle Buttons */}
              <div className='course-info__image-mode-toggle'>
                <button
                  type='button'
                  className={`course-info__mode-btn ${
                    imageMode === 'url' ? 'active' : ''
                  }`}
                  onClick={() => setImageMode('url')}>
                  <FaLink size={16} color='var(--main-color)' /> Image URL
                </button>
                <button
                  type='button'
                  className={`course-info__mode-btn ${
                    imageMode === 'upload' ? 'active' : ''
                  }`}
                  onClick={() => setImageMode('upload')}>
                  <FaUpload size={16} color='var(--main-color)' /> Upload Image
                </button>
              </div>

              {/* URL Input Mode */}
              {imageMode === 'url' && (
                <div className='course-info__image-url-input'>
                  <input
                    type='text'
                    className='course-info__input'
                    placeholder='https://example.com/image.jpg'
                    value={formData.courseImage}
                    onChange={(e) => handleImageUrl(e.target.value)}
                  />
                </div>
              )}

              {/* Upload Input Mode */}
              {imageMode === 'upload' && (
                <div className='course-info__image-upload'>
                  <label className='course-info__upload-label'>
                    <input
                      type='file'
                      accept='image/jpeg,image/png,image/jpg,image/webp'
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                    />
                    <div className='course-info__upload-box'>
                      <FaUpload className='course-info__upload-icon' />
                      <span>Click to upload or drag and drop</span>
                      <small>PNG, JPG, WEBP (max 5MB)</small>
                    </div>
                  </label>
                </div>
              )}

              {/* Image Preview */}
              {imagePreview && (
                <div className='course-info__image-preview'>
                  <button
                    type='button'
                    className='course-info__image-remove'
                    onClick={clearImage}
                    title='Remove image'>
                    <FaTimes />
                  </button>
                  <img
                    src={imagePreview}
                    alt='Course preview'
                    onError={(e) => {
                      e.target.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not found%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoEditor;

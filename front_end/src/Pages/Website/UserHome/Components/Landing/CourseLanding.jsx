import React, { useState } from 'react';
import {
  FaClock,
  FaSignal,
  FaBookmark,
  FaHeart,
  FaStar,
  FaUsers,
  FaUserCircle,
} from 'react-icons/fa';
import './Landing.css';
import defaultImage from '../../assets/css/defaultImage.png';
import MatrixRain from './MatrixRain/MatrixRain';

/* ================= MAIN COMPONENT ================= */
const CourseLanding = ({
  title = { ar: 'أساسيات الفريق الأحمر', en: 'Red Team Fundamentals' },
  description = {
    ar: 'تعلم أساسيات العمليات الهجومية، تكتيكات الخصوم، ومحاكاة الاختراق الحقيقي.',
    en: 'Learn the foundations of red teaming, adversary tactics, and real-world attack simulations.',
  },
  difficulty = { ar: 'متوسط', en: 'Intermediate' },
  duration = { ar: '30 دقيقة', en: '30 min' },
  courseImage,
  instructor = 'CyberLab',
  rating = 4.8,
  students = 2543,
}) => {
  const [saved, setSaved] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <div className='my-landing'>
      <MatrixRain opacity={0.15} />
      <div className='landing__overlay'></div>

      <div className='container landing__container'>
        <div className='row align-items-center gy-4'>
          {/* LEFT CONTENT */}
          <div className='col-lg-8'>
            {/* Desktop Header */}
            <div className='d-none d-lg-flex align-items-baseline mb-3 gap-5 gy-3'>
              <h1
                className='landing__title mb-0 flex-grow-0'
                ar-data={title.ar}
                en-data={title.en}>
                {title.en}
              </h1>
              <div className='landing__instructor flex-shrink-1'>
                <FaUserCircle className='me-2' />
                <span>by {instructor}</span>
              </div>
            </div>

            {/* Mobile Header */}
            <div className='d-lg-none'>
              <div className='d-flex justify-content-between align-items-start mb-3 gap-3'>
                <div className='flex-grow-1'>
                  <h1
                    className='landing__title mb-2'
                    ar-data={title.ar}
                    en-data={title.en}>
                    {title.en}
                  </h1>
                  <div className='landing__instructor'>
                    <FaUserCircle className='me-2' />
                    <span>by {instructor}</span>
                  </div>
                </div>

                <div className='landing__mobile-image flex-shrink-0'>
                  <img
                    src={courseImage || defaultImage}
                    alt={title.en}
                    className='rounded-circle'
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      border: '3px solid var(--main-color)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              className='landing__description mb-4'
              ar-data={description.ar}
              en-data={description.en}>
              {description.en}
            </p>

            {/* Stats Bar */}
            <div className='landing__stats-bar d-flex align-items-center p-3 rounded-3 mb-4'>
              <div className='d-flex align-items-center gap-2 flex-fill'>
                <FaStar className='stat-icon' />
                <div className='stat-info'>
                  <div className='stat-value'>{rating}</div>
                  <div className='stat-label' ar-data='تقييم' en-data='Rating'>
                    Rating
                  </div>
                </div>
              </div>

              <div className='stat-divider'></div>

              <div className='d-flex align-items-center gap-2 flex-fill'>
                <FaSignal className='stat-icon' />
                <div className='stat-info'>
                  <div
                    className='stat-value'
                    ar-data={difficulty.ar}
                    en-data={difficulty.en}>
                    {difficulty.en}
                  </div>
                  <div className='stat-label' ar-data='المستوى' en-data='Level'>
                    Level
                  </div>
                </div>
              </div>

              <div className='stat-divider'></div>

              <div className='d-flex align-items-center gap-2 flex-fill'>
                <FaClock className='stat-icon' />
                <div className='stat-info'>
                  <div
                    className='stat-value'
                    ar-data={duration.ar}
                    en-data={duration.en}>
                    {duration.en}
                  </div>
                  <div
                    className='stat-label'
                    ar-data='المدة'
                    en-data='Duration'>
                    Duration
                  </div>
                </div>
              </div>

              <div className='stat-divider'></div>

              <div className='d-flex align-items-center gap-2 flex-fill'>
                <FaUsers className='stat-icon' />
                <div className='stat-info'>
                  <div className='stat-value'>{students.toLocaleString()}+</div>
                  <div className='stat-label' ar-data='طالب' en-data='Students'>
                    Students
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='d-flex gap-2 flex-wrap align-items-center'>
              <button
                className='btn btn-primary px-4 py-2 fw-bold shadow-sm'
                ar-data='ابدأ التعلم'
                en-data='Start Learning'>
                Start Learning
              </button>

              <div className='landing__action-group d-inline-flex align-items-center rounded-3 overflow-hidden shadow-sm'>
                <button
                  className={`landing__action-btn px-4 py-2 fw-bold border-0 ${
                    saved ? 'is-active' : ''
                  }`}
                  onClick={() => setSaved(!saved)}>
                  <FaBookmark
                    className={`me-2 ${saved ? 'text-primary' : ''}`}
                  />
                  <span
                    ar-data={saved ? 'تم الحفظ' : 'حفظ'}
                    en-data={saved ? 'Saved' : 'Save'}>
                    {saved ? 'Saved' : 'Save'}
                  </span>
                </button>

                <div className='landing__action-divider'></div>

                <button
                  className={`landing__action-btn p-2 border-0 ${
                    favorite ? 'is-active' : ''
                  }`}
                  onClick={() => setFavorite(!favorite)}
                  title={
                    favorite ? 'Remove from favorites' : 'Add to favorites'
                  }>
                  <FaHeart
                    size={20}
                    className={favorite ? 'text-danger' : ''}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className='col-lg-4 d-none d-lg-block'>
            <div className='landing__image-section d-flex flex-column align-items-center gap-3 sticky-top'>
              <div className='landing__image-wrapper'>
                <img
                  src={courseImage || defaultImage}
                  alt={title.en}
                  className='landing__image'
                />
              </div>
              <div className='students-badge d-flex align-items-center gap-2 px-3 py-2 rounded-pill'>
                <FaUsers style={{ color: 'var(--main-color)' }} />
                <span>{students.toLocaleString()}+ enrolled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLanding;

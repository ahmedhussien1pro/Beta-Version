import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaClock,
  FaSignal,
  FaBookmark,
  FaThumbsUp,
  FaThumbsDown,
  FaPlay,
  FaStar,
} from 'react-icons/fa';
import './CourseLanding.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultImage from '../../assets/css/defaultImage.png';

/* ================= OPTIMIZED MATRIX BACKGROUND ================= */
const MatrixRain = ({ opacity = 0.08 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.7;
    };
    resize();

    const resizeObserver = window.addEventListener('resize', resize);

    const chars = '01█▓▒░';
    const fontSize = 20;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    let animationId;
    let frameCount = 0;

    const draw = () => {
      frameCount++;
      if (frameCount % 3 !== 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.fillStyle = `rgba(2, 6, 23, ${opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(34, 197, 94, 0.6)';
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeObserver);
    };
  }, [opacity]);

  return <canvas ref={canvasRef} className='course-landing__matrix' />;
};

/* ================= MAIN COMPONENT ================= */
const CourseLanding = ({
  courseTitle = 'Red Team Fundamentals',
  courseDescription = 'Learn the foundations of red teaming, adversary tactics, and real-world attack simulations.',
  difficulty = 'Intermediate',
  duration = '20 min',
  courseImage,
  instructor = 'Security Expert',
  rating = 4.8,
  students = 2543,
}) => {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className='course-landing'>
      <MatrixRain opacity={0.1} />

      <div className='course-landing__overlay' />

      <div className='container-fluid course-landing__container'>
        <div className='row align-items-center g-5 py-5'>
          {/* LEFT CONTENT */}
          <div className='col-lg-6 col-md-12 course-landing__content'>
            {/* Breadcrumb */}
            <nav className='course-landing__breadcrumb'>
              <Link to='/home'>Home</Link>
              <span className='mx-2'>/</span>
              <span className='course-landing__breadcrumb-current'>
                {courseTitle}
              </span>
            </nav>

            {/* Title with Gradient */}
            <h1 className='course-landing__title'>{courseTitle}</h1>

            {/* Description */}
            <p className='course-landing__description'>{courseDescription}</p>

            {/* Stats Row */}
            <div className='course-landing__stats'>
              <div className='course-landing__stat-item'>
                <div className='stat-icon'>
                  <FaStar />
                </div>
                <div>
                  <p className='stat-label'>Rating</p>
                  <p className='stat-value'>{rating} / 5.0</p>
                </div>
              </div>

              <div className='course-landing__stat-item'>
                <div className='stat-icon'>
                  <FaSignal />
                </div>
                <div>
                  <p className='stat-label'>Level</p>
                  <p className='stat-value'>{difficulty}</p>
                </div>
              </div>

              <div className='course-landing__stat-item'>
                <div className='stat-icon'>
                  <FaClock />
                </div>
                <div>
                  <p className='stat-label'>Duration</p>
                  <p className='stat-value'>{duration}</p>
                </div>
              </div>
            </div>

            {/* Instructor Info */}
            <div className='course-landing__instructor'>
              <img
                src={defaultImage}
                alt='instructor'
                className='instructor-avatar'
              />
              <div>
                <p className='instructor-label'>Taught by</p>
                <p className='instructor-name'>{instructor}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='course-landing__actions'>
              <button
                className='course-landing__btn course-landing__btn--primary'
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                <FaPlay className={isHovering ? 'play-icon-animate' : ''} />
                Start Learning
              </button>

              <button
                className={`course-landing__btn course-landing__btn--icon ${
                  saved ? 'is-active' : ''
                }`}
                onClick={() => setSaved(!saved)}
                title={saved ? 'Remove from favorites' : 'Add to favorites'}>
                <FaBookmark />
              </button>

              <div className='course-landing__reaction-btns'>
                <button
                  className={`course-landing__btn course-landing__btn--reaction ${
                    liked ? 'is-active' : ''
                  }`}
                  onClick={() => {
                    setLiked(!liked);
                    if (disliked) setDisliked(false);
                  }}
                  title='Like this course'>
                  <FaThumbsUp />
                </button>

                <button
                  className={`course-landing__btn course-landing__btn--reaction ${
                    disliked ? 'is-active' : ''
                  }`}
                  onClick={() => {
                    setDisliked(!disliked);
                    if (liked) setLiked(false);
                  }}
                  title='Dislike this course'>
                  <FaThumbsDown />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className='col-lg-6 col-md-12 d-flex justify-content-center'>
            <div className='course-landing__image-container'>
              <div className='course-landing__image-wrapper'>
                <div className='image-glow'></div>
                <img
                  src={courseImage || defaultImage}
                  alt={courseTitle}
                  className='course-landing__image'
                />
              </div>
              <div className='course-landing__badge-count'>
                +{students} students enrolled
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLanding;

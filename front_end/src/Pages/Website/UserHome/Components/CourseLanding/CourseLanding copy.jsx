import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaClock,
  FaSignal,
  FaBookmark,
  FaThumbsUp,
  FaThumbsDown,
} from 'react-icons/fa';
import './CourseLanding.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultImage from '../../assets/css/defaultImage.png';

/* ================= MATRIX BACKGROUND ================= */
const MatrixRain = ({ opacity = 0.15 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.7;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    const draw = () => {
      ctx.fillStyle = `rgba(2,6,23,${opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#22c55e';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
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
}) => {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  return (
    <div className='course-landing'>
      <MatrixRain />

      <div className='course-landing__overlay' />

      <div className='container course-landing__container'>
        <div className='row align-items-center gy-5'>
          {/* CONTENT */}
          <div className='col-lg-7 course-landing__content'>
            <nav className='course-landing__breadcrumb'>
              <Link to='/home'>Home</Link>
              <span>/</span>
              <span>{courseTitle}</span>
            </nav>

            <h1 className='course-landing__title'>{courseTitle}</h1>
            <p className='course-landing__description'>{courseDescription}</p>

            <div className='course-landing__meta'>
              <span className='course-landing__badge'>
                <FaSignal /> {difficulty}
              </span>
              <span className='course-landing__badge'>
                <FaClock /> {duration}
              </span>
            </div>

            <div className='course-landing__actions'>
              <button className='course-landing__btn course-landing__btn--primary'>
                Start Learning
              </button>

              <button
                className={`course-landing__btn course-landing__btn--outline ${
                  saved ? 'is-active' : ''
                }`}
                onClick={() => setSaved(!saved)}>
                <FaBookmark /> {saved ? 'Saved' : 'Save'}
              </button>

              <div className='course-landing__likes'>
                <button
                  className={`course-landing__icon-btn ${
                    liked ? 'is-active' : ''
                  }`}
                  onClick={() => {
                    setLiked(!liked);
                    setDisliked(false);
                  }}>
                  <FaThumbsUp />
                </button>

                <button
                  className={`course-landing__icon-btn ${
                    disliked ? 'is-active' : ''
                  }`}
                  onClick={() => {
                    setDisliked(!disliked);
                    setLiked(false);
                  }}>
                  <FaThumbsDown />
                </button>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className='col-lg-5 text-center'>
            <div className='course-landing__image-wrapper'>
              <img
                src={courseImage || defaultImage}
                alt={courseTitle}
                className='course-landing__image'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLanding;

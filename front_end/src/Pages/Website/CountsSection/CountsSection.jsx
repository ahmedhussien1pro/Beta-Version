import React, { useState, useEffect, useRef } from 'react';
import {
  FaUserShield,
  FaLaptopCode,
  FaNetworkWired,
  FaShieldAlt,
} from 'react-icons/fa';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CountsSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// CountUp: calls onComplete() when finished
const CountUp = ({ start = 0, end, duration = 1, onComplete, ...props }) => {
  const [count, setCount] = useState(start);
  const elementRef = useRef(null);
  const wasVisible = useRef(false);
  const requestRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);
  useEffect(() => {
    const animateCount = () => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min(
          (timestamp - startTimestamp) / (duration * 1000),
          1
        );
        const value = Math.floor(progress * (end - start) + start);
        setCount(value);
        if (progress < 1) {
          requestRef.current = window.requestAnimationFrame(step);
        } else {
          if (typeof onComplete === 'function') onComplete();
        }
      };
      requestRef.current = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !wasVisible.current) {
            setCount(start);
            animateCount();
            wasVisible.current = true;
          } else if (!entry.isIntersecting) {
            wasVisible.current = false;
            if (requestRef.current)
              window.cancelAnimationFrame(requestRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentElement = elementRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
      if (requestRef.current) window.cancelAnimationFrame(requestRef.current);
    };
  }, [start, end, duration, onComplete]);

  return (
    <span ref={elementRef} aria-live='polite' {...props}>
      {count}
    </span>
  );
};

export default function CountsSection() {
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem('lang') || 'en'
  );
  // track finished state per stat to reveal icon when finished
  const [finished, setFinished] = useState([false, false, false, false]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setCurrentLang(document.documentElement.lang || 'en');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang'],
    });
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <FaUserShield className='stat__icon' aria-hidden />,
      end: 1232,
      label: currentLang === 'ar' ? 'الطلاب' : 'Students',
    },
    {
      icon: <FaLaptopCode className='stat__icon' aria-hidden />,
      end: 30,
      label: currentLang === 'ar' ? 'الدورات' : 'Courses',
    },
    {
      icon: <FaNetworkWired className='stat__icon' aria-hidden />,
      end: 42,
      label: currentLang === 'ar' ? 'الفعاليات' : 'Events',
    },
    {
      icon: <FaShieldAlt className='stat__icon' aria-hidden />,
      end: 24,
      label: currentLang === 'ar' ? 'المدربون' : 'Trainers',
    },
  ];

  // handler to mark a stat finished (reveals icon fully)
  const handleComplete = (idx) => {
    setFinished((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  return (
    <section id='counts' className='counts section'>
      <Container>
        <div className='courses__header'>
          <h2 className='courses__title'>
            {currentLang === 'ar' ? 'نشاطنا' : 'Our Stats'}
          </h2>
          <p className='courses__subtitle'>
            {currentLang === 'ar'
              ? 'إحصائياتنا الحالية'
              : 'Our Current Statistics'}
          </p>
        </div>

        <Row className='gy-3 justify-content-center ' data-aos='fade-up'>
          {stats.map((stat, index) => (
            <Col lg={3} md={6} sm={6} key={index}>
              <Card className='stat-card border-0 position-relative'>
                <div
                  className={`stat__icon-wrapper absolute-icon ${
                    finished[index] ? 'visible' : ''
                  }`}
                  aria-hidden>
                  {stat.icon}
                </div>

                <Card.Body className='d-flex flex-column justify-content-center align-items-end  short-card-body'>
                  <div className='stat__number'>
                    <CountUp
                      start={0}
                      end={stat.end}
                      duration={1.6}
                      onComplete={() => handleComplete(index)}
                    />
                  </div>
                  <Card.Text className='stat__label mt-1'>
                    {stat.label}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import Courses from './Components/Courses/Courses';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Landing from './Components/Landing/LearnLanding';
import Preloader from '../Preloader/Preloader';
export default function UserHome() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <Preloader loading={loading} />
      <Landing />
      <Courses />
      <Footer />
    </div>
  );
}

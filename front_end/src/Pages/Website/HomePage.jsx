import React, { useEffect, useState } from 'react';
import Preloader from './Preloader/Preloader';
import Header from './Header/HeaderHome';
import CountsSection from './CountsSection/CountsSection';
import Services from './Services/Services';
import Platform from './Platform/Platform';
import PopularCoursesSection from './PopularCoursesSection/PopularCoursesSection';
import Footer from './Footer/FooterHome';
import HomeLanding from './HomeLanding/HomeLanding';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';
import Go2TopBtn from './UserHome/Components/Go2Top_Btn/Go2Top_Btn';
export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=' home__page--bg' style={{ overflowX: 'hidden' }}>
      <Go2TopBtn />
      <Preloader loading={loading} />
      <Header />
      <HomeLanding />
      <CountsSection />
      <Services />
      <Platform />
      {/* <PopularCoursesSection /> */}
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

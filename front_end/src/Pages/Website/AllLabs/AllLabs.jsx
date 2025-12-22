import React, { useEffect, useState } from 'react';
import Header from '../Header/HeaderHome';
import Labs from './Labs';
import Footer from '../../Website/UserHome/Footer/Footer';
import Go2TopBtn from '../UserHome/Components/Go2Top_Btn/Go2Top_Btn';
import Preloader from '../Preloader/Preloader';
export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=' home__page--bg'>
      <Go2TopBtn />
      <Preloader loading={loading} />
      <Header />
      <Labs />
      <Footer />
    </div>
  );
}

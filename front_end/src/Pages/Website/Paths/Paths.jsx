import React, { useEffect, useState } from 'react';
import Header from '../../Website/UserHome/Header/Header';
import Footer from '../../Website/UserHome/Footer/Footer';
import PathsTree from './PathsTree';
import Go2TopBtn from '../UserHome/Components/Go2Top_Btn/Go2Top_Btn';
import Preloader from '../Preloader/Preloader';
export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className=' home__page container-fluid '
      style={{ overflowX: 'hidden' }}>
      <Go2TopBtn />
      <Preloader loading={loading} />
      <Header />
      <PathsTree />
      {/* <Footer /> */}
    </div>
  );
}

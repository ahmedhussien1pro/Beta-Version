import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Banner from '../../Components/Banner/Banner.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn.jsx';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CyberCurriculum from '../../Components/CyberCurriculum/CyberCurriculum.jsx';

// Import JSON Data
import contentData from './ac_vuln_content.json';

// Assets Imports
import courseImage from '../../assets/img/ACV/courseImage.png';
import IntroImage from '../../assets/img/ACV/topic2.png';
import DacImage from '../../assets/img/ACV/DAC.png';
import MacImage from '../../assets/img/ACV/MAC.png';
import RbacImage from '../../assets/img/ACV/RBAC.png';
import AbacImage from '../../assets/img/ACV/ABAC.png';
import ACVImage from '../../assets/img/ACV/access-control.svg';
import BrokenAccImage from '../../assets/img/ACV/BrokeAcc.png';
import IdorImage from '../../assets/img/ACV/IDOR.png';

const imageMap = {
  courseImage,
  IntroImage,
  DacImage,
  MacImage,
  RbacImage,
  AbacImage,
  ACVImage,
  BrokenAccImage,
  IdorImage,
};

export default function AC_Vuln() {
  const { handleGoToLab } = UseFaqSection();

  const landingData = {
    ...contentData.landingData,
    courseImage: imageMap.courseImage,
  };

  return (
    <div className='page-wrapper'>
      <Banner />
      <Header />
      <CourseLanding {...landingData} />
      <main className='d-flex flex-column gap-2'>
        <CyberCurriculum
          topics={contentData.topics}
          labsLink={contentData.landingData.labsLink}
          imageMap={imageMap}
          onLabClick={handleGoToLab}
        />
      </main>

      <Go2TopBtn />
      <Footer />
    </div>
  );
}

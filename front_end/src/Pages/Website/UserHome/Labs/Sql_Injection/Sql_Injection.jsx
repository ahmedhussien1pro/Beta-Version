import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import background from '../../assets/img/SQL_Injection/New/background.png';
import courseImage from '../../assets/img/SQL_Injection/New/courseImage.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import Banner from '../../Components/Banner/Banner.jsx';
import '../Page_Styles/Content_sec.css';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn.jsx';
import DBServer from '../../assets/img/SQL_Injection/DBServer.png';
import OutOfBand from '../../assets/img/SQL_Injection/Out-of-Band SQLi.png';
import table from '../../assets/img/SQL_Injection/table.png';
import CyberCurriculum from '../../Components/CyberCurriculum/CyberCurriculum.jsx';
// Import JSON Data
import contentData from './sql_injection_content.json';
const imageMap = {
  courseImage,
  DBServer,
  OutOfBand,
  table,
  background,
};
export default function Sql_Injection() {
  const { handleGoToLab } = UseFaqSection();
  const landingData = {
    ...contentData.landingData,
    courseImage: imageMap.courseImage,
  };

  return (
    <>
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
    </>
  );
}

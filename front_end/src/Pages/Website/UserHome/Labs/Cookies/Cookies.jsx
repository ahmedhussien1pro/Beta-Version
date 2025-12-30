import React from 'react';
import Header from '../../Header/Header';
import '../../Components/Topics CSS/topics.css';
import courseImage from '../../assets/img/cookies/course_image.png';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn.jsx';
import InLab3 from '../../assets/img/inLab3.png';
import Footer from '../../Footer/Footer';
// Import JSON Data
import contentData from './cookies_content.json';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CyberCurriculum from '../../Components/CyberCurriculum/CyberCurriculum.jsx';
const imageMap = {
  courseImage,
  InLab3,
};
export default function Cookies() {
  const { handleGoToLab } = UseFaqSection();

  const landingData = {
    ...contentData.landingData,
    courseImage: imageMap.courseImage,
  };

  return (
    <div className='page-wrapper'>
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

import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import courseImage from '../../assets/img/Api_Hacking/courseImage.png';
import Banner from '../../Components/Banner/Banner.jsx';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn.jsx';
import image1 from '../../assets/img/Api_Hacking/image1.png';
import image4 from '../../assets/img/Api_Hacking/image4.jpg';
import image3 from '../../assets/img/Api_Hacking/image3.jpg';
import contentData from './api_hacking_content.json';
import CyberCurriculum from '../../Components/CyberCurriculum/CyberCurriculum.jsx';
const imageMap = {
  courseImage: courseImage,
  image1: image1,
  image3: image3,
  image4: image4,
};
export default function Api_Hacking() {
  const { handleGoToLab } = UseFaqSection();

  const landingData = {
    ...contentData.landingData,
    courseImage: imageMap.courseImage,
  };

  return (
    <>
      <Banner />
      <Header />
      {/* Start Landing */}
      <CourseLanding {...landingData} />
      {/* End Landing */}
      {/* Start Course */}

      <CyberCurriculum
        topics={contentData.topics}
        imageMap={imageMap}
        labsLink={contentData.landingData.labsLink}
        onLabClick={handleGoToLab}
      />

      {/* End Course */}
      <Go2TopBtn />
      <Footer />
    </>
  );
}

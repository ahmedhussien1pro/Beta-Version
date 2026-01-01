import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import Banner from '../../Components/Banner/Banner';
import courseImage from '../../assets/img/CSRF/CourseImage.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn.jsx';
import IntroImage from '../../assets/img/CSRF/intro.png';
import Topic2 from '../../assets/img/CSRF/topic2.svg';
import Topic3 from '../../assets/img/CSRF/Topic3.svg';
import Topic31 from '../../assets/img/CSRF/topic3.1.svg';
import Topic4 from '../../assets/img/CSRF/topic4.png';
import Topic41 from '../../assets/img/CSRF/topic41.png';
import Topic42 from '../../assets/img/CSRF/topic42.png';
import Topic43 from '../../assets/img/CSRF/topic43.png';
import CyberCurriculum from '../../Components/CyberCurriculum/CyberCurriculum.jsx';
// Import JSON Data
import contentData from './csrf_content.json';
const imageMap = {
  courseImage: courseImage,
  IntroImage: IntroImage,
  Topic2: Topic2,
  Topic3: Topic3,
  Topic31: Topic31,
  Topic4: Topic4,
  Topic41: Topic41,
  Topic42: Topic42,
  Topic43: Topic43,
};
export default function CSRF() {
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

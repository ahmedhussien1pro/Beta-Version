import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import lab_Cover from '../../assets/img/Unrestricted File Upload/file-upload-vector.jpg';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function UnrestrictedFileUploadLabs() {
  const Labs = [
    {
      // English Content
      en_title: 'Unrestricted File Upload',
      en_brief: 'Upload disallowed file type.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'رفع الملفات غير المقيد',
      ar_brief: 'قم برفع نوع ملف غير مسموح به.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Unrestricted File Upload/lab_Unrestricted_File_Uplode/first_lab',
      image: lab_Cover,
      isFree: true,
      topicsCount: 2,
    },
    {
      // English Content
      en_title: 'MIME Type Bypass',
      en_brief: 'Upload disallowed file type, bypassing MIME type checking.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'تجاوز نوع MIME',
      ar_brief: 'قم برفع نوع ملف غير مسموح به، متجاوزًا فحص نوع MIME.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Unrestricted File Upload/lab_Unrestricted_File_Uplode/second_lab',
      image: lab_Cover,
      isFree: true,
      topicsCount: 3,
    },
    {
      // English Content
      en_title: 'Blacklist Bypass',
      en_brief: 'Upload disallowed file type, bypassing the blacklist check.',
      en_difficulty: 'Easy',

      // Arabic Content
      ar_title: 'تجاوز القائمة السوداء',
      ar_brief: 'قم برفع نوع ملف غير مسموح به، متجاوزًا فحص القائمة السوداء.',
      ar_difficulty: 'سهل',

      // Common Data
      link: '/Unrestricted File Upload/lab_Unrestricted_File_Uplode/third_lab',
      image: lab_Cover,
      isFree: true,
      topicsCount: 4,
    },
  ];

  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      {/* Start Courses */}
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Unrestricted File Upload'} />
          <div className='row'>
            {Labs.map((lab, index) => {
              return <Card key={index} {...lab} />;
            })}
          </div>
        </div>
      </div>
      {/* End Courses */}
      <Footer />
    </>
  );
}

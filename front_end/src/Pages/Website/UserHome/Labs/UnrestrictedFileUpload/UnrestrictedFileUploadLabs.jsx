import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import lab_Cover from '../../assets/img/Unrestricted File Upload/file-upload-vector.jpg';
import { Card } from '../../Components/Card/Card';
import LandingPractice from '../../Components/Landing/PracticeLanding';
import PracticeTitle from '../../Components/PracticeTitle/PracticeTitle';

export default function UnrestrictedFileUploadLabs() {
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
            {/* lab1 */}
            <Card
              link={
                '/Unrestricted File Upload/lab_Unrestricted_File_Uplode/first_lab'
              }
              image={lab_Cover}
              title={'Unrestricted:'}
              brief={'Upload disallowed file type.'}
              difficulty={'Easy'}
            />
            {/* lab2 */}
            <Card
              link={
                '/Unrestricted File Upload/lab_Unrestricted_File_Uplode/second_lab'
              }
              image={lab_Cover}
              title={'MIME Type:'}
              brief={
                'Upload disallowed file type, bypassing MIME type checking.'
              }
              difficulty={'Easy'}
            />
            {/* lab3 */}
            <Card
              link={
                '/Unrestricted File Upload/lab_Unrestricted_File_Uplode/third_lab'
              }
              image={lab_Cover}
              title={'Blacklist:'}
              brief={
                'Upload disallowed file type, bypassing the blacklist check.'
              }
              difficulty={'Easy'}
            />
          </div>
        </div>
      </div>
      {/* End Courses */}
      <Footer />
    </>
  );
}

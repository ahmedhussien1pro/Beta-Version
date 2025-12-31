import React, { useState, useEffect } from 'react';
import Header from '../../../../Pages/Website/UserHome/Header/Header';
import Footer from '../../../../Pages/Website/UserHome/Footer/Footer';
import { Card } from '../../../../Pages/Website/UserHome/Components/Card/Card';
import Go2TopBtn from '../../../../Pages/Website/UserHome/Components/Go2Top_Btn/Go2Top_Btn';
import LandingPractice from '../../../../Pages/Website/UserHome/Components/Landing/PracticeLanding';
import PracticeTitle from '../../../../Pages/Website/UserHome/Components/PracticeTitle/PracticeTitle';
import { FaFlask } from 'react-icons/fa';
import './PreviewPage.css';

const LabPreviewPage = () => {
  const [previewData, setPreviewData] = useState({
    labs: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMessage = (event) => {
      // Accept messages from any origin during development
      // if (event.origin !== window.location.origin) return;

      if (
        event.data.type === 'PREVIEW_DATA' ||
        event.data.type === 'PREVIEW_UPDATE'
      ) {
        console.log('Received preview data:', event.data.data);
        setPreviewData(event.data.data);
        setIsLoading(false);
      }
    };

    window.addEventListener('message', handleMessage);

    // Request data from opener immediately
    if (window.opener && !window.opener.closed) {
      console.log('Requesting preview data from opener...');
      window.opener.postMessage(
        { type: 'REQUEST_PREVIEW_DATA' },
        window.location.origin
      );

      // Set a timeout to stop loading if no response
      const timeout = setTimeout(() => {
        console.log('No response from opener, stopping loading...');
        setIsLoading(false);
      }, 3000);

      return () => {
        clearTimeout(timeout);
        window.removeEventListener('message', handleMessage);
      };
    } else {
      console.log('No opener window found');
      setIsLoading(false);
    }

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  if (isLoading) {
    return (
      <div className='preview-page'>
        <div className='preview-page__loading'>
          <div className='preview-page__spinner'></div>
          <h3>Loading Preview...</h3>
          <p>Connecting to editor...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <LandingPractice />

      <div className='course'>
        <div className='container'>
          <PracticeTitle title={'Labs Preview'} />

          {previewData.labs && previewData.labs.length > 0 ? (
            <div className='row'>
              {previewData.labs.map((lab, index) => {
                return <Card key={lab.id || index} {...lab} />;
              })}
            </div>
          ) : (
            <div className='preview-page__empty container'>
              <FaFlask className='preview-page__empty-icon' />
              <h3>No Labs Yet</h3>
              <p>Start adding labs in the editor to see them here</p>
            </div>
          )}
        </div>
      </div>

      {/* Live Preview Badge */}
      <div className='preview-page__badge'>
        <span className='preview-page__badge-dot'></span>
        Live Preview
      </div>

      <Go2TopBtn />
      <Footer />
    </>
  );
};

export default LabPreviewPage;

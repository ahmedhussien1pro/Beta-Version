import React, { useState, useEffect } from 'react';
import CyberCurriculum from '../../../../Pages/Website/UserHome/Components/CyberCurriculum/CyberCurriculum';
import Header from '../../../../Pages/Website/UserHome/Header/Header';
import Footer from '../../../../Pages/Website/UserHome/Footer/Footer';
import CourseLanding from '../../../../Pages/Website/UserHome/Components/Landing/CourseLanding';
import { FaUndo } from 'react-icons/fa';
import './PreviewPage.css';

const PreviewPage = () => {
  const [previewData, setPreviewData] = useState({
    landingData: {
      title: { en: '', ar: '' },
      description: { en: '', ar: '' },
      difficulty: { en: '', ar: '' },
      duration: { en: '', ar: '' },
      instructor: '',
      rating: '',
      students: '',
    },
    topics: [],
    imageMap: {},
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) return;

      if (
        event.data.type === 'PREVIEW_DATA' ||
        event.data.type === 'PREVIEW_UPDATE'
      ) {
        setPreviewData(event.data.data);
        setIsLoading(false);
      }
    };

    window.addEventListener('message', handleMessage);

    if (window.opener) {
      window.opener.postMessage(
        { type: 'REQUEST_PREVIEW_DATA' },
        window.location.origin
      );
    } else {
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
    <div className='preview-page'>
      <Header />

      {/* Landing Section */}
      <CourseLanding landingData={previewData.landingData} />

      {/* Curriculum Section */}
      <>
        {previewData.topics.length > 0 ? (
          <CyberCurriculum
            topics={previewData.topics}
            imageMap={previewData.imageMap}
          />
        ) : (
          <div className='preview-page__empty container'>
            <FaUndo className='preview-page__empty-icon' />
            <h3>No Topics Yet</h3>
            <p>Start adding topics in the editor to see them here</p>
          </div>
        )}
      </>
      {/* Live Preview Badge */}

      <div className='preview-page__badge '>
        <span className='preview-page__badge-dot'></span>
        Live Preview
      </div>
      <Footer />
    </div>
  );
};

export default PreviewPage;

// src/pages/EditorPage/LabsPreviewPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../../Pages/Website/UserHome/Header/Header';
import Footer from '../../../../Pages/Website/UserHome/Footer/Footer';
import ThemeSwitcher from '../../../../Pages/Website/UserHome/Components/ThemeSwitcher/ThemeSwitcher';
import Go2TopBtn from '../../../../Pages/Website/UserHome/Components/Go2Top_Btn/Go2Top_Btn';
import Banner from '../../../../Pages/Website/UserHome/Components/Banner/Banner';
import PracticeTitle from '../../../../Pages/Website/UserHome/Components/PracticeTitle/PracticeTitle';
import { Card } from '../../../../Pages/Website/UserHome/Components/Card/Card';
import labImg from '../Website/UserHome/assets/img/ACV/lab.jpeg';
import LandingPractice from '../../../../Pages/Website/UserHome/Components/PracticeLanding/PracticeLanding';

export default function LabsPreviewPage() {
  const [courseName, setCourseName] = useState('');
  const [labs, setLabs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('labsPreview'));
    if (data) {
      setCourseName(data.courseName || 'Unnamed Course');
      setLabs(
        data.labs.map((lab) => ({
          ...lab,
          image: lab.image || labImg, // fallback image if none uploaded
        }))
      );
    } else {
      // No data, redirect back to editor
      navigate('/labs-editor');
    }
  }, [navigate]);

  return (
    <>
      <Banner />
      <Header />
      <ThemeSwitcher />
      <LandingPractice />
      <div className='course'>
        <div className='container'>
          <PracticeTitle title={courseName} />
          <div className='row'>
            {labs.map((lab, index) => (
              <Card
                key={lab.id || index}
                title={lab.title || `Lab ${index + 1}`}
                link={lab.link || '#'}
                image={lab.image}
                brief={lab.brief.map((line, i) => (
                  <span key={i}>
                    {line} <br />
                  </span>
                ))}
                difficulty={lab.difficulty || 'Easy'}
              />
            ))}
          </div>
        </div>
      </div>
      <Go2TopBtn />
      <Footer />
    </>
  );
}

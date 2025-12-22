// src/pages/DraftsPage/DraftsPage.jsx
import React, { useEffect, useState } from 'react';
import Header from '../../../../Pages/Website/UserHome/Header/Header';
import Footer from '../../../../Pages/Website/UserHome/Footer/Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import ThemeSwitcher from '../../../../Pages/Website/UserHome/Components/ThemeSwitcher/ThemeSwitcher';
import GoBackDashboard from '../GoBackDashboard';

export default function DraftsPage() {
  const navigate = useNavigate();

  const [courseDrafts, setCourseDrafts] = useState([]);
  const [labDrafts, setLabDrafts] = useState([]);
  const [contentDrafts, setContentDrafts] = useState([]);

  useEffect(() => {
    const c = JSON.parse(localStorage.getItem('courseDrafts') || '[]');
    const l = JSON.parse(localStorage.getItem('labDrafts') || '[]');
    const t = JSON.parse(localStorage.getItem('contentDrafts') || '[]');

    setCourseDrafts(c);
    setLabDrafts(l);
    setContentDrafts(t);
  }, []);

  const deleteDraft = (key, index) => {
    Swal.fire({
      icon: 'warning',
      title: 'Delete draft?',
      text: 'This action cannot be undone.',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((res) => {
      if (res.isConfirmed) {
        const arr = JSON.parse(localStorage.getItem(key) || '[]');
        arr.splice(index, 1);
        localStorage.setItem(key, JSON.stringify(arr));

        if (key === 'courseDrafts') setCourseDrafts(arr);
        if (key === 'labDrafts') setLabDrafts(arr);
        if (key === 'contentDrafts') setContentDrafts(arr);

        Swal.fire('Deleted!', '', 'success');
      }
    });
  };

  const continueEdit = (type, index) => {
    if (type === 'course') navigate(`/edit-course?draft=${index}`);
    if (type === 'lab') navigate(`/edit-lab?draft=${index}`);
    if (type === 'content') navigate(`/edit-content?draft=${index}`);
  };

  const previewDraft = (type, index) => {
    localStorage.setItem('previewDraft', JSON.stringify({ type, index }));
    navigate('/draft-preview');
  };

  const Section = ({ title, data, type }) => (
    <div className='mb-4'>
      <h3 className='mb-3'>{title}</h3>
      <div className='list-group'>
        {data.length === 0 && (
          <div className='secondary-text p-3 border-main-color rounded '>
            No drafts found
          </div>
        )}

        {data.map((draft, i) => (
          <div
            key={i}
            className='list-group-item d-flex justify-content-between align-items-center'>
            <div>
              <strong>{draft.title || `Untitled ${type} draft`}</strong>
              <div className='small secondary-text'>
                Last edit: {draft.lastEdit || 'Unknown'}
              </div>
            </div>

            <div className='btn-group'>
              <button
                className='btn-main-color2 btn-main-color-sm me-2'
                onClick={() => continueEdit(type, i)}>
                Continue
              </button>

              <button
                className='btn-main-color btn-main-color-sm me-2'
                onClick={() => previewDraft(type, i)}>
                Preview
              </button>

              <button
                className='btn btn-danger btn-main-color-sm'
                onClick={() => deleteDraft(`${type}Drafts`, i)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <ThemeSwitcher />
      <div className='Custom__body--bg'>
        <div className='container py-5 '>
          <h1 className='mb-4'>Draft Manager</h1>

          <Section title='Course Drafts' data={courseDrafts} type='course' />
          <Section title='Lab Drafts' data={labDrafts} type='lab' />
          <Section title='Content Drafts' data={contentDrafts} type='content' />
        </div>
        <div className='go-to-section'>
          <GoBackDashboard />
        </div>
      </div>
      <Footer />
    </>
  );
}

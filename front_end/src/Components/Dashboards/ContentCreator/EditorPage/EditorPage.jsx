// src/pages/EditorPage/LabsEditorPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from '../../../../Pages/Website/UserHome/Header/Header';
import Footer from '../../../../Pages/Website/UserHome/Footer/Footer';
import ThemeSwitcher from '../../../../Pages/Website/UserHome/Components/ThemeSwitcher/ThemeSwitcher';

// Helper to convert uploaded file to base64
const fileToBase64 = (file) =>
  new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result);
    reader.onerror = (e) => rej(e);
    reader.readAsDataURL(file);
  });

export default function LabsEditorPage() {
  const [courseName, setCourseName] = useState('');
  const [numLabs, setNumLabs] = useState(1);
  const [labs, setLabs] = useState([]);
  const navigate = useNavigate();

  // delete lab by id
  const deleteLab = (id) => {
    setLabs((prev) => prev.filter((lab) => lab.id !== id));
  };

  const updateLabField = (id, field, value) => {
    setLabs((prev) =>
      prev.map((lab) => (lab.id === id ? { ...lab, [field]: value } : lab))
    );
  };

  const updateLabBrief = (id, index, value) => {
    setLabs((prev) =>
      prev.map((lab) =>
        lab.id === id
          ? {
              ...lab,
              brief: lab.brief.map((b, i) => (i === index ? value : b)),
            }
          : lab
      )
    );
  };

  const addBriefLine = (id) => {
    setLabs((prev) =>
      prev.map((lab) =>
        lab.id === id ? { ...lab, brief: [...lab.brief, ''] } : lab
      )
    );
  };

  const removeBriefLine = (id, index) => {
    setLabs((prev) =>
      prev.map((lab) =>
        lab.id === id
          ? { ...lab, brief: lab.brief.filter((_, i) => i !== index) }
          : lab
      )
    );
  };

  const uploadLabImage = async (e, id) => {
    const file = e.target.files[0];
    if (!file) return;
    const b64 = await fileToBase64(file);
    updateLabField(id, 'image', b64);
  };

  const saveDraft = () => {
    localStorage.setItem('labsDraft', JSON.stringify({ courseName, labs }));
    Swal.fire({
      icon: 'success',
      title: 'Saved',
      text: 'Draft saved to localStorage',
      timer: 1400,
      showConfirmButton: false,
    });
  };

  const previewLabs = () => {
    if (!courseName || labs.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete data',
        text: 'Please enter course name and at least one lab',
      });
      return;
    }
    localStorage.setItem('labsPreview', JSON.stringify({ courseName, labs }));
    Swal.fire({
      icon: 'info',
      title: 'Opening preview',
      timer: 700,
      showConfirmButton: false,
    }).then(() => {
      navigate('/preview'); // Redirect to a dedicated preview page
    });
  };

  // Initially set number of labs
  const handleNumLabs = () => {
    const count = parseInt(numLabs);
    if (count <= 0) return;
    setLabs(
      Array.from({ length: count }, () => ({
        id: `lab-${Date.now()}-${Math.random()}`,
        title: '',
        link: '',
        image: '',
        brief: [''],
        difficulty: 'Easy',
      }))
    );
  };

  return (
    <>
      <div className='Custom__body--bg'>
        <Header />
        <ThemeSwitcher />
        <div className='container py-4'>
          <h2 className='fw-bold mb-4'>Labs Editor</h2>

          {/* Course Name */}
          <div className='mb-3'>
            <label className='form-label'>Course Name</label>
            <input
              type='text'
              className='form-control focus-bg-transparent'
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>

          {/* Number of labs */}
          <div className='mb-3'>
            <label className='form-label mb-0 '>Number of Labs:</label>
            <div className='d-flex align-items-center gap-2'>
              <input
                type='number'
                min={1}
                className='form-control focus-bg-transparent'
                value={numLabs}
                onChange={(e) => setNumLabs(e.target.value)}
              />
              <button
                className='btn-main-color px-3 py-2 w-25 '
                onClick={handleNumLabs}>
                Create Labs
              </button>
            </div>
          </div>

          {/* Labs fields */}
          {labs.map((lab, idx) => (
            <div
              key={lab.id}
              className='card p-3 mb-4 shadow-sm secondary-bg primary-text'>
              <button
                className='btn btn-danger btn-sm mb-2 d-block ms-auto'
                onClick={() => deleteLab(lab.id)}>
                Delete Lab
              </button>
              <h4 className='mb-3'>Lab {idx + 1}</h4>
              <div className='mb-2'>
                <label className='form-label'>Title</label>
                <input
                  type='text'
                  className='form-control focus-bg-transparent'
                  value={lab.title}
                  onChange={(e) =>
                    updateLabField(lab.id, 'title', e.target.value)
                  }
                />
              </div>
              <div className='mb-2'>
                <label className='form-label'>Link</label>
                <input
                  type='text'
                  className='form-control focus-bg-transparent'
                  value={lab.link}
                  onChange={(e) =>
                    updateLabField(lab.id, 'link', e.target.value)
                  }
                />
              </div>
              <div className='mb-2'>
                <label className='form-label'>Image</label>
                <input
                  type='file'
                  className='form-control   focus-bg-transparent'
                  accept='image/*'
                  onChange={(e) => uploadLabImage(e, lab.id)}
                />
                {lab.image && (
                  <img
                    src={lab.image}
                    alt='lab'
                    style={{ width: 100, maxHeight: 70, objectFit: 'cover' }}
                    className='mt-2 img-thumbnail'
                  />
                )}
              </div>
              <div className='mb-2'>
                <label className='form-label'>Brief</label>
                {lab.brief.map((line, i) => (
                  <div key={i} className='d-flex gap-2 mb-1'>
                    <input
                      type='text'
                      className='form-control focus-bg-transparent'
                      value={line}
                      onChange={(e) =>
                        updateLabBrief(lab.id, i, e.target.value)
                      }
                    />
                    <button
                      className='btn btn-danger btn-sm'
                      onClick={() => removeBriefLine(lab.id, i)}>
                      &times;
                    </button>
                  </div>
                ))}
                <button
                  className='btn-main-color btn-main-color-sm mt-1'
                  onClick={() => addBriefLine(lab.id)}>
                  <i className='fa fa-plus'></i> Add line
                </button>
              </div>
              <div className='mb-2'>
                <label className='form-label'>Difficulty</label>
                <select
                  className='form-select focus-bg-transparent main-color'
                  value={lab.difficulty}
                  onChange={(e) =>
                    updateLabField(lab.id, 'difficulty', e.target.value)
                  }>
                  <option value='Easy'>Easy</option>
                  <option value='Medium'>Medium</option>
                  <option value='Hard'>Hard</option>
                </select>
              </div>
            </div>
          ))}

          <div className='text-center my-4'>
            <button
              className='btn-main-color2 btn-main-color-sm'
              onClick={saveDraft}>
              Save Draft
            </button>
            <button
              className='btn-main-color btn-main-color-sm'
              onClick={previewLabs}>
              Preview Labs
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

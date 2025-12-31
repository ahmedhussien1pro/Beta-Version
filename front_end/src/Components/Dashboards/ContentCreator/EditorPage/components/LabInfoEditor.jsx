import React, { useState, useEffect } from 'react';
import {
  FaLanguage,
  FaFlask,
  FaChartBar,
  FaLink,
  FaImage,
  FaUpload,
  FaTimes,
  FaUnlock,
  FaCrown,
  FaLayerGroup,
  FaSave,
  FaCode,
} from 'react-icons/fa';

const LabInfoEditor = ({
  labInfo = {},
  onLabInfoChange,
  onAddLab,
  isEditing,
}) => {
  const [formData, setFormData] = useState({
    en_title: '',
    ar_title: '',
    en_brief: '',
    ar_brief: '',
    en_difficulty: 'Easy',
    ar_difficulty: 'سهل',
    link: '',
    image: '',
    imageVariableName: '',
    isFree: true,
    topicsCount: 1,
  });

  const [imageMode, setImageMode] = useState('url');
  const [uploadedImagePreview, setUploadedImagePreview] = useState('');

  // Difficulty mapping
  const difficultyMap = {
    Easy: 'سهل',
    Medium: 'متوسط',
    Hard: 'صعب',
  };

  // Update form when labInfo changes - use JSON.stringify to detect deep changes
  useEffect(() => {
    const newFormData = {
      en_title: labInfo?.en_title || '',
      ar_title: labInfo?.ar_title || '',
      en_brief: labInfo?.en_brief || '',
      ar_brief: labInfo?.ar_brief || '',
      en_difficulty: labInfo?.en_difficulty || 'Easy',
      ar_difficulty: labInfo?.ar_difficulty || 'سهل',
      link: labInfo?.link || '',
      image: labInfo?.image || '',
      imageVariableName: labInfo?.imageVariableName || '',
      isFree: labInfo?.isFree !== undefined ? labInfo.isFree : true,
      topicsCount: labInfo?.topicsCount || 1,
    };

    setFormData(newFormData);

    // Reset image preview when form is reset
    if (!labInfo?.image && !labInfo?.imageVariableName) {
      setUploadedImagePreview('');
      setImageMode('url');
    } else if (labInfo?.image && labInfo?.image.startsWith('http')) {
      setImageMode('url');
      setUploadedImagePreview('');
    } else if (labInfo?.imageVariableName) {
      setImageMode('upload');
      setUploadedImagePreview('placeholder');
    }
  }, [JSON.stringify(labInfo)]); // Use JSON.stringify to detect all changes

  const handleChange = (field, value) => {
    let updatedData = { ...formData };

    if (field === 'en_difficulty') {
      updatedData.en_difficulty = value;
      updatedData.ar_difficulty = difficultyMap[value];
    } else {
      updatedData[field] = value;
    }

    setFormData(updatedData);
    onLabInfoChange(updatedData);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image (JPEG, PNG, WebP)');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setUploadedImagePreview(base64String);
        handleChange('image', '');
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setUploadedImagePreview('');
    handleChange('image', '');
    handleChange('imageVariableName', '');
  };

  const handleImageModeSwitch = (mode) => {
    setImageMode(mode);
    if (mode === 'upload') {
      handleChange('image', '');
    } else if (mode === 'url') {
      setUploadedImagePreview('');
      handleChange('imageVariableName', '');
    }
  };

  return (
    <div className='course-info'>
      <div className='course-info__section'>
        <div className='course-info__section-header'>
          <div className='course-info__section-title'>
            <div className='course-info__section-icon'>
              <FaFlask />
            </div>
            {isEditing ? 'Edit Lab Information' : 'New Lab Information'}
          </div>
        </div>

        <div className='course-info__form'>
          {/* Title */}
          <div className='course-info__row'>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaLanguage size={16} color='var(--color-primary-500)' /> Lab
                Title (EN)
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='e.g., SQL Injection Basics'
                value={formData.en_title}
                onChange={(e) => handleChange('en_title', e.target.value)}
              />
            </div>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaLanguage size={16} color='var(--color-primary-500)' /> Lab
                Title (AR)
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='مثال: أساسيات حقن SQL'
                dir='rtl'
                value={formData.ar_title}
                onChange={(e) => handleChange('ar_title', e.target.value)}
              />
            </div>
          </div>

          {/* Brief */}
          <div className='course-info__row'>
            <div className='course-info__field'>
              <label className='course-info__label'>Brief (EN)</label>
              <textarea
                className='course-info__textarea'
                placeholder='Lab description in English...'
                value={formData.en_brief}
                onChange={(e) => handleChange('en_brief', e.target.value)}
              />
            </div>
            <div className='course-info__field'>
              <label className='course-info__label'>Brief (AR)</label>
              <textarea
                className='course-info__textarea'
                placeholder='وصف المعمل بالعربية...'
                dir='rtl'
                value={formData.ar_brief}
                onChange={(e) => handleChange('ar_brief', e.target.value)}
              />
            </div>
          </div>

          {/* Difficulty */}
          <div className='course-info__row'>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaChartBar size={16} color='var(--color-primary-500)' />{' '}
                Difficulty (EN/AR)
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <select
                  className='course-info__select'
                  value={formData.en_difficulty}
                  onChange={(e) =>
                    handleChange('en_difficulty', e.target.value)
                  }>
                  <option value='Easy'>Easy</option>
                  <option value='Medium'>Medium</option>
                  <option value='Hard'>Hard</option>
                </select>
                <input
                  type='text'
                  className='course-info__input'
                  value={formData.ar_difficulty}
                  disabled
                  dir='rtl'
                />
              </div>
            </div>

            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaLayerGroup size={16} color='var(--color-primary-500)' />{' '}
                Topics Count
              </label>
              <input
                type='number'
                className='course-info__input'
                placeholder='1'
                min='1'
                max='50'
                value={formData.topicsCount}
                onChange={(e) =>
                  handleChange('topicsCount', parseInt(e.target.value) || 1)
                }
              />
            </div>
          </div>

          {/* Link & Free/Premium */}
          <div className='course-info__row'>
            <div className='course-info__field'>
              <label className='course-info__label'>
                <FaLink size={16} color='var(--color-primary-500)' /> Lab Link
              </label>
              <input
                type='text'
                className='course-info__input'
                placeholder='/path/to/lab'
                value={formData.link}
                onChange={(e) => handleChange('link', e.target.value)}
              />
            </div>

            <div className='course-info__field'>
              <label className='course-info__label'>
                {formData.isFree ? (
                  <FaUnlock size={16} color='var(--color-success)' />
                ) : (
                  <FaCrown size={16} color='var(--color-warning)' />
                )}{' '}
                Access Type
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                }}>
                <input
                  type='checkbox'
                  id='isFree'
                  checked={formData.isFree}
                  onChange={(e) => handleChange('isFree', e.target.checked)}
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
                <label
                  htmlFor='isFree'
                  style={{
                    fontWeight: 600,
                    cursor: 'pointer',
                    userSelect: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                  {formData.isFree ? (
                    <>
                      <FaUnlock size={14} color='var(--color-success)' /> Free
                    </>
                  ) : (
                    <>
                      <FaCrown size={14} color='var(--color-warning)' /> Premium
                    </>
                  )}
                </label>
              </div>
            </div>
          </div>

          {/* Image Upload/URL Mode Toggle */}
          <div className='course-info__row'>
            <div className='course-info__field course-info__field--full'>
              <label className='course-info__label'>
                <FaImage size={16} color='var(--color-primary-500)' /> Image
              </label>

              <div className='course-info__image-mode-toggle'>
                <button
                  type='button'
                  className={`course-info__mode-btn ${
                    imageMode === 'upload' ? 'active' : ''
                  }`}
                  onClick={() => handleImageModeSwitch('upload')}>
                  <FaUpload size={16} /> Upload & Set Variable
                </button>
                <button
                  type='button'
                  className={`course-info__mode-btn ${
                    imageMode === 'url' ? 'active' : ''
                  }`}
                  onClick={() => handleImageModeSwitch('url')}>
                  <FaLink size={16} /> Image URL
                </button>
              </div>

              {/* Upload Mode */}
              {imageMode === 'upload' && (
                <div>
                  {!uploadedImagePreview ? (
                    <div className='course-info__image-upload'>
                      <label className='course-info__upload-label'>
                        <input
                          type='file'
                          accept='image/jpeg,image/png,image/jpg,image/webp'
                          onChange={handleImageUpload}
                          style={{ display: 'none' }}
                        />
                        <div className='course-info__upload-box'>
                          <FaUpload className='course-info__upload-icon' />
                          <span>Click to upload or drag and drop</span>
                          <small>PNG, JPG, WEBP (max 5MB)</small>
                        </div>
                      </label>
                    </div>
                  ) : (
                    <>
                      {/* Image Preview */}
                      <div className='course-info__image-preview'>
                        <button
                          type='button'
                          className='course-info__image-remove'
                          onClick={clearImage}
                          title='Remove image'>
                          <FaTimes />
                        </button>
                        <img
                          src={
                            uploadedImagePreview === 'placeholder'
                              ? 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%234f46e5" width="200" height="200"/%3E%3Ctext fill="%23fff" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E' +
                                (formData.imageVariableName ||
                                  'Image Variable') +
                                '%3C/text%3E%3C/svg%3E'
                              : uploadedImagePreview
                          }
                          alt='Lab preview'
                        />
                      </div>

                      {/* Variable Name Input */}
                      <div style={{ marginTop: '16px' }}>
                        <label className='course-info__label'>
                          <FaCode size={16} color='var(--color-primary-500)' />{' '}
                          Image Variable Name
                        </label>
                        <input
                          type='text'
                          className='course-info__input'
                          placeholder='e.g., labImg, Auth_Photo'
                          value={formData.imageVariableName}
                          onChange={(e) =>
                            handleChange('imageVariableName', e.target.value)
                          }
                        />
                        <small className='course-info__input-hint'>
                          <FaImage size={12} /> This variable name will be saved
                          in JSON for your imports
                        </small>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* URL Mode */}
              {imageMode === 'url' && (
                <div>
                  <input
                    type='text'
                    className='course-info__input'
                    placeholder='https://example.com/image.jpg'
                    value={formData.image}
                    onChange={(e) => handleChange('image', e.target.value)}
                    style={{ marginBottom: '12px' }}
                  />
                  <small className='course-info__input-hint'>
                    <FaLink size={12} /> Enter full image URL (this will be
                    saved directly in JSON)
                  </small>

                  {/* URL Preview */}
                  {formData.image && (
                    <div
                      className='course-info__image-preview'
                      style={{ marginTop: '16px' }}>
                      <button
                        type='button'
                        className='course-info__image-remove'
                        onClick={clearImage}
                        title='Remove image'>
                        <FaTimes />
                      </button>
                      <img
                        src={formData.image}
                        alt='Lab preview'
                        onError={(e) => {
                          e.target.src =
                            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not found%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className='course-info__actions'>
            <button
              type='button'
              className='course-info__btn course-info__btn--primary'
              onClick={onAddLab}>
              <FaSave /> Save Lab
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabInfoEditor;

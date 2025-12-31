import React, { useEffect, useRef } from 'react';
import {
  FaPlus,
  FaChevronUp,
  FaChevronDown,
  FaTrash,
  FaSave,
  FaCode,
  FaGraduationCap,
  FaFolderOpen,
  FaFileImport,
  FaFlask,
} from 'react-icons/fa';

const LabSidebar = ({
  collapsed,
  labs,
  currentLabIndex,
  onToggle,
  onAddLab,
  onLabSelect,
  onDeleteLab,
  onMoveLab,
  onSave,
  onCopyJSON,
  onClear,
  onImportJSON,
}) => {
  const fileInputRef = useRef(null);

  // Prevent body scroll on mobile when sidebar is open
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && !collapsed) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }

    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, [collapsed]);

  const handleOverlayClick = () => {
    if (window.innerWidth <= 768) {
      onToggle();
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && onImportJSON) {
      onImportJSON(file);
    }
    e.target.value = '';
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type='file'
        accept='.json'
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <div
        className={`sidebar__overlay ${
          !collapsed ? 'sidebar__overlay--visible' : ''
        }`}
        onClick={handleOverlayClick}
      />

      <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`}>
        {/* Header */}
        <div className='sidebar__header'>
          <div className='sidebar__brand'>
            <div className='sidebar__brand-icon'>
              <FaGraduationCap />
            </div>
            <a href='/' className='sidebar__brand-text'>
              <h2 className='header__logo-title sidebar__brand-title'>
                Cyber <span>Labs</span>
              </h2>
              <span className='sidebar__brand-subtitle'>Lab Creator</span>
            </a>
          </div>
        </div>

        {/* Labs List */}
        <nav className='sidebar__nav'>
          <div className='sidebar__topics'>
            <div className='sidebar__topics-header'>
              <div className='d-flex align-items-center gap-2'>
                <span className='sidebar__topics-title'>
                  <FaFlask size={14} style={{ marginRight: '6px' }} />
                  Labs
                </span>
                <span className='sidebar__topics-count'>{labs.length}</span>
              </div>
              <button
                className='sidebar__add-topic'
                onClick={onAddLab}
                aria-label='Add Lab'>
                <FaPlus size={12} />
              </button>
            </div>

            <ul className='sidebar__topics-list'>
              {labs.length === 0 ? (
                <li className='sidebar__topics-empty'>
                  <div className='sidebar__topics-empty-icon'>
                    <FaFolderOpen />
                  </div>
                  <p>
                    No labs yet.
                    <br />
                    Click <FaPlus size={10} style={{ margin: '0 4px' }} /> to
                    add one.
                  </p>
                </li>
              ) : (
                labs.map((lab, index) => (
                  <li key={lab.id}>
                    <div
                      className={`sidebar__topic ${
                        currentLabIndex === index
                          ? 'sidebar__topic--active'
                          : ''
                      }`}
                      onClick={() => onLabSelect(index)}>
                      <div className='sidebar__topic-content'>
                        <div className='sidebar__topic-title'>
                          {lab.en_title || `Lab ${index + 1}`}
                        </div>
                      </div>

                      <div className='sidebar__topic-actions'>
                        <button
                          className='sidebar__topic-btn'
                          onClick={(e) => {
                            e.stopPropagation();
                            onMoveLab(index, 'up');
                          }}
                          disabled={index === 0}
                          aria-label='Move Up'>
                          <FaChevronUp />
                        </button>
                        <button
                          className='sidebar__topic-btn'
                          onClick={(e) => {
                            e.stopPropagation();
                            onMoveLab(index, 'down');
                          }}
                          disabled={index === labs.length - 1}
                          aria-label='Move Down'>
                          <FaChevronDown />
                        </button>
                        <button
                          className='sidebar__topic-btn'
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeleteLab(index);
                          }}
                          aria-label='Delete'>
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </nav>

        {/* Actions */}
        <div className='sidebar__actions'>
          <button
            className='sidebar__action-btn sidebar__action-btn--secondary'
            onClick={handleImportClick}
            title='Import JSON File'>
            <FaFileImport /> Import JSON
          </button>

          <button
            className='sidebar__action-btn sidebar__action-btn--primary'
            onClick={onSave}>
            <FaSave /> Save All
          </button>

          <button
            className='sidebar__action-btn sidebar__action-btn--secondary'
            onClick={onCopyJSON}>
            <FaCode /> Copy JSON
          </button>

          <button
            className='sidebar__action-btn sidebar__action-btn--danger'
            onClick={onClear}>
            <FaTrash /> Clear All
          </button>
        </div>
      </aside>
    </>
  );
};

export default LabSidebar;

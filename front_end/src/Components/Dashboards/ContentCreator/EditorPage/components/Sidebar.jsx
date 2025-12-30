import React, { useEffect, useRef } from 'react';
import {
  FaBook,
  FaPlus,
  FaChevronUp,
  FaChevronDown,
  FaTrash,
  FaSave,
  FaCode,
  FaGraduationCap,
  FaFolderOpen,
  FaFileImport,
} from 'react-icons/fa';

const Sidebar = ({
  collapsed,
  activeView,
  topics,
  currentTopicIndex,
  onToggle,
  onViewChange,
  onTopicSelect,
  onAddTopic,
  onDeleteTopic,
  onMoveTopic,
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
    // Only close on mobile
    if (window.innerWidth <= 768) {
      onToggle();
    }
  };

  const handleItemClick = (callback) => {
    callback();
    // Auto-close sidebar on mobile after selection
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
    // Reset input to allow same file selection
    e.target.value = '';
  };

  return (
    <>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type='file'
        accept='.json'
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {/* Overlay for mobile only */}
      <div
        className={`sidebar__overlay ${
          !collapsed ? 'sidebar__overlay--visible' : ''
        }`}
        onClick={handleOverlayClick}
      />

      {/* Sidebar */}
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
              <span className='sidebar__brand-subtitle'>Content Creator</span>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className='sidebar__nav'>
          <ul className='sidebar__nav-list'>
            <li className='sidebar__nav-item'>
              <button
                className={`sidebar__nav-link w-100 ${
                  activeView === 'course-info'
                    ? 'sidebar__nav-link--active'
                    : ''
                }`}
                onClick={() =>
                  handleItemClick(() => onViewChange('course-info'))
                }>
                <span className='sidebar__nav-icon'>
                  <FaBook />
                </span>
                <span>Course Information</span>
              </button>
            </li>
          </ul>

          {/* Topics Section */}
          <div className='sidebar__topics'>
            <div className='sidebar__topics-header'>
              <div className='d-flex align-items-center gap-2'>
                <span className='sidebar__topics-title'>Topics</span>
                <span className='sidebar__topics-count'>{topics.length}</span>
              </div>
              <button
                className='sidebar__add-topic'
                onClick={onAddTopic}
                aria-label='Add Topic'>
                <FaPlus size={12} />
              </button>
            </div>

            <ul className='sidebar__topics-list'>
              {topics.length === 0 ? (
                <li className='sidebar__topics-empty'>
                  <div className='sidebar__topics-empty-icon'>
                    <FaFolderOpen />
                  </div>
                  <p>
                    No topics yet.
                    <br />
                    Click + to add one.
                  </p>
                </li>
              ) : (
                topics.map((topic, index) => (
                  <li key={topic.id}>
                    <div
                      className={`sidebar__topic ${
                        currentTopicIndex === index
                          ? 'sidebar__topic--active'
                          : ''
                      }`}
                      onClick={() =>
                        handleItemClick(() => onTopicSelect(index))
                      }>
                      <div className='sidebar__topic-content'>
                        <div className='sidebar__topic-title'>
                          {topic.title.en || `Topic ${index + 1}`}
                        </div>
                      </div>

                      <div className='sidebar__topic-actions'>
                        <button
                          className='sidebar__topic-btn'
                          onClick={(e) => {
                            e.stopPropagation();
                            onMoveTopic(index, 'up');
                          }}
                          disabled={index === 0}
                          aria-label='Move Up'>
                          <FaChevronUp />
                        </button>
                        <button
                          className='sidebar__topic-btn'
                          onClick={(e) => {
                            e.stopPropagation();
                            onMoveTopic(index, 'down');
                          }}
                          disabled={index === topics.length - 1}
                          aria-label='Move Down'>
                          <FaChevronDown />
                        </button>
                        <button
                          className='sidebar__topic-btn'
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeleteTopic(index);
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

export default Sidebar;

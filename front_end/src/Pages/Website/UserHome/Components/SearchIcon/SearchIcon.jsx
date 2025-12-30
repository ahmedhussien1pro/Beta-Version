import React, { useContext, useState, useEffect } from 'react';
import { GlobalSearchContext } from '../../../../../Context/GlobalSearchContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import './SearchIcon.css';

const SearchIcon = ({ mode = 'desktop' }) => {
  const { globalItems } = useContext(GlobalSearchContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResults = !searchTerm.trim()
    ? []
    : globalItems.filter((item) => {
        const lowerQuery = searchTerm.toLowerCase();
        return (
          item.en_data.title.toLowerCase().includes(lowerQuery) ||
          item.en_data.description.toLowerCase().includes(lowerQuery) ||
          item.en_data.category.toLowerCase().includes(lowerQuery) ||
          item.en_data.difficulty.toLowerCase().includes(lowerQuery) ||
          item.en_data.state.toLowerCase().includes(lowerQuery)
        );
      });

  const handleReset = () => {
    setSearchTerm('');
    setIsOpen(false);
  };

  useEffect(() => {
    if (mode === 'desktop') {
      const handleKeyDown = (e) => {
        if (e.ctrlKey && e.key === 'k') {
          e.preventDefault();
          setIsOpen(true);
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [mode]);

  const modalContent = (
    <Modal
      show={isOpen}
      onHide={handleReset}
      fullscreen='lg-down'
      size='lg'
      centered
      dialogClassName='modal-initial-height primary-bg d-flex align-items-start'>
      <Modal.Header closeButton className='primary-bg main-color'>
        <Modal.Title>Search</Modal.Title>
      </Modal.Header>

      <Modal.Body className='primary-bg main-color'>
        <div className='input-group search-group position-relative mb-0'>
          <span className='input-group-text bg-transparent border-0 position-absolute top-50 start-0 translate-middle-y ps-3'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='main-color' />
          </span>
          <input
            type='text'
            className='form-control search-input ps-5 pe-5 rounded-pill '
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          {searchTerm && (
            <span
              className='position-absolute top-50 end-0 translate-middle-y pe-3 cursor-pointer'
              onClick={handleReset}>
              <FontAwesomeIcon icon={faXmark} />
            </span>
          )}
        </div>
        {filteredResults.length > 0 && (
          <ul className='search-icon__results list-unstyled mt-3'>
            {filteredResults.map((item) => (
              <li key={item.id} className='search-icon__result-item'>
                <a
                  href={item.link}
                  className='search-icon__result-link d-flex align-items-center'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='search-icon__result-image'
                  />
                  <div className='search-icon__result-info'>
                    <h6 className='search-icon__result-title'>{item.title}</h6>
                    <p className='search-icon__result-description mb-0'>
                      {item.description}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </Modal.Body>
    </Modal>
  );

  if (mode === 'desktop') {
    return (
      <div className='mx-auto d-none d-lg-flex flex-grow-1 justify-content-center position-relative z-1 search-icon__wrapper'>
        <div className='input-group search-group position-relative cursor-pointer'>
          <span className='input-group-text border-0 position-absolute top-50 start-0 translate-middle-y ps-3 bg-transparent'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='main-color' />
          </span>
          <input
            type='text'
            className='form-control search-input ps-5 pe-5 rounded-pill border border-secondary'
            placeholder='Search'
            readOnly
            onClick={() => setIsOpen(true)}
          />
          <span className='position-absolute top-50 end-0 translate-middle-y pe-3'>
            <kbd className='small px-2 py-1 rounded'>Ctrl K</kbd>
          </span>
        </div>
        {modalContent}
      </div>
    );
  } else {
    // mobile
    return (
      <div className='search-icon__wrapper d-lg-none ms-3'>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className='search-icon__icon cursor-pointer'
          onClick={() => setIsOpen(true)}
        />
        {modalContent}
      </div>
    );
  }
};

export default SearchIcon;

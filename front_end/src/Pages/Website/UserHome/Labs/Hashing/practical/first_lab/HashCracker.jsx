import React, { useState } from 'react';
import { MD5, SHA1, SHA256 } from 'crypto-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faSyncAlt,
  faCheck,
  faChevronDown,
  faChevronUp,
  faTrash,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
// import "./First_Lab.css";
import GoBackBtn from '../../../../Components/GoBack_Btn/GoBack_Btn';
import ShowHintBtn from '../../../../Components/ShowHint_Btn/ShowHint_Btn';
import Go2TopBtn from '../../../../Components/Go2Top_Btn/Go2Top_Btn';
import ThemeSwitcher from '../../../../Components/ThemeSwitcher/ThemeSwitcher';
const HashCracker = () => {
  const [hash, setHash] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExamplesOpen, setIsExamplesOpen] = useState(false);
  const [isDictionaryOpen, setIsDictionaryOpen] = useState(false);
  const [dictionary, setDictionary] = useState([
    'password',
    '123456',
    'admin',
    'letmein',
    'qwerty',
  ]);
  const [newEntry, setNewEntry] = useState('');

  const crackHash = () => {
    setIsLoading(true);
    setTimeout(() => {
      for (const word of dictionary) {
        if (MD5(word).toString() === hash) {
          setResult(`Cracked! The original string is: ${word} (MD5)`);
          setIsLoading(false);
          return;
        }
        if (SHA1(word).toString() === hash) {
          setResult(`Cracked! The original string is: ${word} (SHA-1)`);
          setIsLoading(false);
          return;
        }
        if (SHA256(word).toString() === hash) {
          setResult(`Cracked! The original string is: ${word} (SHA-256)`);
          setIsLoading(false);
          return;
        }
      }
      setResult('Hash not found in dictionary.');
      setIsLoading(false);
    }, 1000); // Simulate loading for 1 second
  };

  const handleAddEntry = () => {
    if (newEntry.trim() !== '') {
      setDictionary([...dictionary, newEntry.trim()]);
      setNewEntry('');
    }
  };

  const handleDeleteEntry = (index) => {
    const updatedDictionary = dictionary.filter((_, i) => i !== index);
    setDictionary(updatedDictionary);
  };
  const hintMessage = `
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1.
        
      </li>
    </ul>
  `;
  return (
    <>
      <ThemeSwitcher />
      <div className='Custom__body--bg py-5'>
        {' '}
        <GoBackBtn />
        <ShowHintBtn hintText={hintMessage} />
        <div className=' w-100 mt-5'>
          <div className='container p-0 my-5'>
            <h1 className='title-gradient text-center my-4'>🔓 Hash Cracker</h1>
            {/* Title */}

            {/* Explanation Section */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                What is a Hash Cracker?
                <FontAwesomeIcon icon={faInfoCircle} className='ms-2' />
              </h3>
              <p>
                A <strong>Hash Cracker</strong> attempts to reverse a hash value
                by comparing it against a predefined dictionary of common
                strings. Useful for:
              </p>
              <ul className='list-group list-group-flush mb-4'>
                <li className='list-group-item secondary-bg primary-text bb-1'>
                  ✔️ Recovering lost passwords
                </li>
                <li className='list-group-item secondary-bg primary-text bb-1'>
                  ✔️ Testing the strength of hashed data
                </li>
                <li className='list-group-item secondary-bg primary-text bb-1'>
                  ✔️ Understanding hash vulnerabilities
                </li>
              </ul>
            </div>

            {/* Example Section with Creative Accordion */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                Examples
                <button
                  className='btn btn-link'
                  onClick={() => setIsExamplesOpen(!isExamplesOpen)}>
                  <FontAwesomeIcon
                    icon={isExamplesOpen ? faChevronUp : faChevronDown}
                  />
                </button>
              </h3>
              <div className='accordion custom-accordion' id='exampleAccordion'>
                <div className='accordion-item secondary-bg primary-text'>
                  <h2 className='accordion-header' id='exampleHeading'>
                    <button
                      className='accordion-button collapsed custom-accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#exampleCollapse'
                      aria-expanded='false'
                      aria-controls='exampleCollapse'
                      onClick={() => setIsExamplesOpen(!isExamplesOpen)}>
                      <span className='ms-2'>
                        {isExamplesOpen ? 'Hide Examples' : 'Show Examples'}
                      </span>
                    </button>
                  </h2>
                  <div
                    id='exampleCollapse'
                    className='accordion-collapse collapse'
                    aria-labelledby='exampleHeading'
                    data-bs-parent='#exampleAccordion'>
                    <div className='accordion-body text-left'>
                      <h5>Example 1: MD5 Hash</h5>
                      <p className='secondary-text'>
                        Try cracking the MD5 hash of the word{' '}
                        <code>password</code>:
                      </p>
                      <ul className='list-group mb-3'>
                        <li className='list-group-item secondary-bg primary-text'>
                          <strong>Hash:</strong>{' '}
                          <code>5f4dcc3b5aa765d61d8327deb882cf99</code>
                        </li>
                      </ul>
                      <p className='secondary-text'>
                        When you enter this hash, the result will be{' '}
                        <strong className='text-success'>
                          "Cracked! The original string is: password (MD5)"
                        </strong>{' '}
                        because it matches the dictionary entry.
                      </p>

                      <h5 className='mt-4'>Example 2: SHA-1 Hash</h5>
                      <p className='secondary-text'>
                        Try cracking the SHA-1 hash of the word{' '}
                        <code>admin</code>:
                      </p>
                      <ul className='list-group mb-3'>
                        <li className='list-group-item secondary-bg primary-text'>
                          <strong>Hash:</strong>{' '}
                          <code>d033e22ae348aeb5660fc2140aec35850c4da997</code>
                        </li>
                      </ul>
                      <p className='secondary-text'>
                        When you enter this hash, the result will be{' '}
                        <strong className='text-success'>
                          "Cracked! The original string is: admin (SHA-1)"
                        </strong>{' '}
                        because it matches the dictionary entry.
                      </p>

                      <h5 className='mt-4'>Example 3: SHA-256 Hash</h5>
                      <p className='secondary-text'>
                        Try cracking the SHA-256 hash of the word{' '}
                        <code>letmein</code>:
                      </p>
                      <ul className='list-group mb-3'>
                        <li className='list-group-item secondary-bg primary-text'>
                          <strong>Hash:</strong>{' '}
                          <code>0acf4539a14b3aa27deeb4cbdf6e4f2a7b5a2b2e</code>
                        </li>
                      </ul>
                      <p className='secondary-text'>
                        When you enter this hash, the result will be{' '}
                        <strong className='text-success'>
                          "Cracked! The original string is: letmein (SHA-256)"
                        </strong>{' '}
                        because it matches the dictionary entry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Field */}
            <div className='mb-5 text-left w-50 my-auto'>
              <h3 className='mb-3'>
                Crack Hash
                <FontAwesomeIcon icon={faSyncAlt} className='ms-2' />
              </h3>
              <div className='form-floating mb-3'>
                <input
                  type='text'
                  className='form-control focus-bg-transparent'
                  id='floatingHash'
                  placeholder=''
                  value={hash}
                  onChange={(e) => setHash(e.target.value)}
                />
                <label htmlFor='floatingHash'>Enter hash to crack</label>
              </div>
              <button
                className='btn  w-100 py-2'
                style={{ backgroundColor: 'var(--main-color)' }}
                onClick={crackHash}
                disabled={isLoading}>
                {isLoading ? (
                  <div
                    className='spinner-border spinner-border-sm'
                    role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </div>
                ) : (
                  'Crack'
                )}
              </button>
            </div>

            {/* Result Section */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                Result
                <FontAwesomeIcon icon={faCheck} className='ms-2' />
              </h3>
              <div
                className={`alert ${
                  result.includes('Cracked') ? 'alert-success' : 'alert-danger'
                }`}>
                <strong>{result}</strong>
              </div>
            </div>

            {/* Dictionary Section with Creative Accordion */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                Dictionary
                <button
                  className='btn btn-link'
                  onClick={() => setIsDictionaryOpen(!isDictionaryOpen)}>
                  <FontAwesomeIcon
                    icon={isDictionaryOpen ? faChevronUp : faChevronDown}
                  />
                </button>
              </h3>
              <div
                className='accordion custom-accordion'
                id='dictionaryAccordion'>
                <div className='accordion-item secondary-bg primary-text'>
                  <h2 className='accordion-header' id='dictionaryHeading'>
                    <button
                      className='accordion-button collapsed custom-accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#dictionaryCollapse'
                      aria-expanded='false'
                      aria-controls='dictionaryCollapse'
                      onClick={() => setIsDictionaryOpen(!isDictionaryOpen)}>
                      <span className='ms-2'>
                        {isDictionaryOpen
                          ? 'Hide Dictionary'
                          : 'Show Dictionary'}
                      </span>
                    </button>
                  </h2>
                  <div
                    id='dictionaryCollapse'
                    className='accordion-collapse collapse'
                    aria-labelledby='dictionaryHeading'
                    data-bs-parent='#dictionaryAccordion'>
                    <div className='accordion-body text-left'>
                      <p className='secondary-text'>
                        You can modify our dictionary from here:
                      </p>
                      <ul className='list-group mb-3'>
                        {dictionary.map((word, index) => (
                          <li
                            key={index}
                            className='list-group-item secondary-bg primary-text bb-1 d-flex justify-content-between align-items-center'>
                            {word}
                            <button
                              className='btn btn-sm btn-danger primary-text'
                              onClick={() => handleDeleteEntry(index)}>
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div className='form-floating mb-3 input-group'>
                        <input
                          type='text'
                          className='form-control focus-bg-transparent w-75'
                          placeholder=''
                          value={newEntry}
                          onChange={(e) => setNewEntry(e.target.value)}
                          id='floatingInput'
                        />
                        <label htmlFor='floatingInput'>Add new entry</label>
                        <button
                          className='btn btn-primary'
                          onClick={handleAddEntry}>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                Learn More
                <FontAwesomeIcon icon={faInfoCircle} className='ms-2' />
              </h3>
              <div className='row'>
                <div className='col-md-6'>
                  <p className='secondary-text'>
                    Watch this video to understand how hash cracking works:
                  </p>
                </div>
                <div className='col-md-6'>
                  <div className='ratio ratio-16x9'>
                    <iframe
                      src='https://www.youtube.com/embed/W6SIU-ggTDI'
                      title='Hash Cracking Explained'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Resources Section */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                Additional Resources
                <FontAwesomeIcon icon={faInfoCircle} className='ms-2' />
              </h3>
              <p>
                To learn more about hash cracking and cryptography, check out
                the following resources:
              </p>
              <ul className='list-group list-group-flush mb-4'>
                <li className='list-group-item secondary-bg primary-text bb-1'>
                  <a
                    href='https://en.wikipedia.org/wiki/Password_cracking'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ref-link main-color'>
                    Wikipedia: Password Cracking
                    <FontAwesomeIcon icon={faInfoCircle} className='ms-2' />
                  </a>
                </li>
                <li className='list-group-item secondary-bg primary-text bb-1'>
                  <a
                    href='https://www.geeksforgeeks.org/hash-cracking/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ref-link main-color'>
                    GeeksForGeeks: Hash Cracking
                    <FontAwesomeIcon icon={faInfoCircle} className='ms-2' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Go2TopBtn />
      </div>
    </>
  );
};

export default HashCracker;

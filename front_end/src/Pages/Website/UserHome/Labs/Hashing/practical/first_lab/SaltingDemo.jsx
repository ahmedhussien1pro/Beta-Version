import React, { useState } from 'react';
import { SHA256 } from 'crypto-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSyncAlt,
  faInfoCircle,
  faLink,
  faChevronDown,
  faCopy,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import GoBackBtn from '../../../../Components/GoBack_Btn/GoBack_Btn';
import ShowHintBtn from '../../../../Components/ShowHint_Btn/ShowHint_Btn';
import Go2TopBtn from '../../../../Components/Go2Top_Btn/Go2Top_Btn';
// import "./First_Lab.css";
import ThemeSwitcher from '../../../../Components/ThemeSwitcher/ThemeSwitcher';
const SaltingDemo = () => {
  const [input, setInput] = useState('');
  const [salt, setSalt] = useState('');
  const [hashes, setHashes] = useState({
    unsalted: '',
    salted: '',
  });
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setHashes({
      unsalted: SHA256(value).toString(),
      salted: SHA256(value + salt).toString(),
    });
  };

  const handleSaltChange = (e) => {
    const value = e.target.value;
    setSalt(value);
    setHashes({
      unsalted: SHA256(input).toString(),
      salted: SHA256(input + value).toString(),
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
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
            <h1 className='title-gradient text-center my-4'>🧂 Salting Demo</h1>

            {/* What is Salting? */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                What is Salting?
                <FontAwesomeIcon icon={faInfoCircle} className='ms-2' />
              </h3>
              <p>
                Salting is a technique used to enhance the security of password
                hashing. It involves adding a unique random string (the "salt")
                to each password before it is hashed. This makes it more
                difficult for attackers to crack password hashes, even if they
                have access to a database of hashes.
              </p>
            </div>

            {/* Examples Section */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                Examples
                <FontAwesomeIcon icon={faChevronDown} className='ms-2' />
              </h3>
              <div
                className='accordion custom-accordion secondary-bg border-0 primary-text'
                id='exampleAccordion'
                style={{ backgroundColor: 'var(--secondary-bg)' }}>
                <div className='accordion-item secondary-bg primary-text'>
                  <h2 className='accordion-header' id='exampleHeading'>
                    <button
                      className='accordion-button collapsed custom-accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#exampleCollapse'
                      aria-expanded='false'
                      aria-controls='exampleCollapse'
                      onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
                      <span className='ms-2'>
                        {isAccordionOpen ? 'Hide Examples' : 'Show Examples'}
                      </span>
                    </button>
                  </h2>
                  <div
                    id='exampleCollapse'
                    className='accordion-collapse collapse'
                    aria-labelledby='exampleHeading'
                    data-bs-parent='#exampleAccordion'>
                    <div className='accordion-body text-left'>
                      <h5>Example 1: Simple Salt</h5>
                      <p className='secondary-text'>
                        Input: <code>password123</code> <br />
                        Salt: <code>mysecret</code>
                      </p>
                      <ul className='list-group mb-3'>
                        <li className='list-group-item secondary-bg primary-text'>
                          <strong>Unsalted Hash:</strong>{' '}
                          <code>{SHA256('password123').toString()}</code>
                          <button
                            className='btn btn-sm btn-outline-secondary ms-4'
                            onClick={() =>
                              copyToClipboard(SHA256('password123').toString())
                            }>
                            <FontAwesomeIcon
                              icon={isCopied ? faCheck : faCopy}
                            />
                          </button>
                        </li>
                        <li className='list-group-item secondary-bg primary-text'>
                          <strong>Salted Hash:</strong>{' '}
                          <code>
                            {SHA256('password123' + 'mysecret').toString()}
                          </code>
                          <button
                            className='btn btn-sm btn-outline-secondary ms-4'
                            onClick={() =>
                              copyToClipboard(
                                SHA256('password123' + 'mysecret').toString()
                              )
                            }>
                            <FontAwesomeIcon
                              icon={isCopied ? faCheck : faCopy}
                            />
                          </button>
                        </li>
                      </ul>
                      <p className='list-group-item secondary-bg primary-text'>
                        Notice how the salted hash is different from the
                        unsalted hash.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Section */}
            <div className='form-floating mb-3'>
              <h3 className='mb-3'>
                Input
                <FontAwesomeIcon icon={faSyncAlt} className='ms-2' />
              </h3>
              <div className='form-floating mb-3'>
                <input
                  type='text'
                  className='form-control focus-bg-transparent'
                  placeholder=''
                  value={input}
                  onChange={handleInputChange}
                  id='floatingInput'
                />
                <label htmlFor='floatingInput'>Enter Text</label>
              </div>
              <div className='form-floating mb-3'>
                <input
                  type='text'
                  className='form-control focus-bg-transparent'
                  placeholder=''
                  value={salt}
                  onChange={handleSaltChange}
                  id='floatingSalt'
                />
                <label htmlFor='floatingSalt'>Enter Salt</label>
              </div>
            </div>

            {/* Results Section */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                Results
                <FontAwesomeIcon icon={faLink} className='ms-2' />
              </h3>
              <div>
                <p className='secondary-text'>
                  Unsalted Hash: <code>{hashes.unsalted}</code>
                  <button
                    className='btn btn-sm btn-outline-secondary ms-4'
                    onClick={() => copyToClipboard(hashes.unsalted)}>
                    <FontAwesomeIcon icon={isCopied ? faCheck : faCopy} />
                  </button>
                </p>
                <p className='secondary-text'>
                  Salted Hash: <code>{hashes.salted}</code>
                  <button
                    className='btn btn-sm btn-outline-secondary ms-4'
                    onClick={() => copyToClipboard(hashes.salted)}>
                    <FontAwesomeIcon icon={isCopied ? faCheck : faCopy} />
                  </button>
                </p>
              </div>
            </div>

            {/* Additional Resources */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                Additional Resources
                <FontAwesomeIcon icon={faLink} className='ms-2' />
              </h3>
              <ul className='list-group list-group-flush mb-4'>
                <li className='list-group-item primary-bg border-0'>
                  <a
                    href='https://owasp.org/www-project-top-ten/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ref-link'>
                    OWASP Top Ten
                    <FontAwesomeIcon icon={faLink} className='ms-2' />
                  </a>
                </li>
                <li className='list-group-item primary-bg border-0'>
                  <a
                    href='https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ref-link'>
                    Password Storage Cheat Sheet
                    <FontAwesomeIcon icon={faLink} className='ms-2' />
                  </a>
                </li>
                {/* Add more resources here */}
                <li className='list-group-item primary-bg border-0'>
                  <a
                    href='https://en.wikipedia.org/wiki/Salt_(cryptography)'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ref-link'>
                    Wikipedia: Salt (cryptography)
                    <FontAwesomeIcon icon={faLink} className='ms-2' />
                  </a>
                </li>
                <li className='list-group-item primary-bg border-0'>
                  <a
                    href='https://www.youtube.com/watch?v=xXm9v9ixn7s' // Example YouTube video
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ref-link'>
                    Hashing and Salting Explained
                    <FontAwesomeIcon icon={faLink} className='ms-2' />
                  </a>
                </li>
              </ul>
            </div>

            {/* Learn More (YouTube Video) */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                Learn More
                <FontAwesomeIcon icon={faInfoCircle} className='ms-2' />
              </h3>
              <div className='row'>
                <div className='col-md-6'>
                  <p className='secondary-text'>
                    Watch this video to learn more about salting and hashing:
                  </p>
                </div>
                <div className='col-md-6'>
                  <div className='ratio ratio-16x9'>
                    <iframe
                      src='https://www.youtube.com/embed/xXm9v9ixn7s' // Use embed link
                      title='Hashing and Salting Explained'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Go2TopBtn />
      </div>
    </>
  );
};

export default SaltingDemo;

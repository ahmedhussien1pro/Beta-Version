import React, { useState } from 'react';
import { MD5, SHA1, SHA256 } from 'crypto-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSyncAlt,
  faInfoCircle,
  faLink,
  faChevronDown,
  faCopy,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import ThemeSwitcher from '../../../../Components/ThemeSwitcher/ThemeSwitcher';
// import "./First_Lab.css";
import GoBackBtn from '../../../../Components/GoBack_Btn/GoBack_Btn';
import ShowHintBtn from '../../../../Components/ShowHint_Btn/ShowHint_Btn';
import Go2TopBtn from '../../../../Components/Go2Top_Btn/Go2Top_Btn';
const HashGenerator = () => {
  const [input, setInput] = useState('');
  const [hashes, setHashes] = useState({
    md5: '',
    sha1: '',
    sha256: '',
  });
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setHashes({
      md5: MD5(value).toString(),
      sha1: SHA1(value).toString(),
      sha256: SHA256(value).toString(),
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
        <div className=' w-100  mt-5'>
          <div className='container p-0 my-5'>
            <h1 className='title-gradient text-center my-4'>Hash Generator</h1>

            {/* What is Hashing? */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                What is Hashing?
                <FontAwesomeIcon icon={faInfoCircle} className='ms-2' />
              </h3>
              <p>
                Hashing is the process of transforming any given input of
                arbitrary length into a fixed-size output, called a hash value
                or simply a hash. This is done using a hash function, which is a
                deterministic algorithm.
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
                      className='accordion-button collapsed custom-accordion-button '
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
                      <h5>Example: "hello"</h5>
                      <p className='secondary-text'>
                        Input: <code>hello</code>
                      </p>
                      <ul className='list-group mb-3'>
                        <li className='list-group-item secondary-bg primary-text bb-1'>
                          <strong>MD5:</strong>{' '}
                          <code>{MD5('hello').toString()}</code>
                          <button
                            className='btn btn-sm btn-outline-secondary ms-4'
                            onClick={() =>
                              copyToClipboard(MD5('hello').toString())
                            }>
                            <FontAwesomeIcon
                              icon={isCopied ? faCheck : faCopy}
                            />
                          </button>
                        </li>
                        <li className='list-group-item secondary-bg primary-text bb-1'>
                          <strong>SHA-1:</strong>{' '}
                          <code>{SHA1('hello').toString()}</code>
                          <button
                            className='btn btn-sm btn-outline-secondary ms-4'
                            onClick={() =>
                              copyToClipboard(SHA1('hello').toString())
                            }>
                            <FontAwesomeIcon
                              icon={isCopied ? faCheck : faCopy}
                            />
                          </button>
                        </li>
                        <li className='list-group-item secondary-bg primary-text bb-1 '>
                          <strong>SHA-256:</strong>{' '}
                          <code>{SHA256('hello').toString()}</code>
                          <button
                            className='btn btn-sm btn-outline-secondary ms-4'
                            onClick={() =>
                              copyToClipboard(SHA256('hello').toString())
                            }>
                            <FontAwesomeIcon
                              icon={isCopied ? faCheck : faCopy}
                            />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Section */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                Input
                <FontAwesomeIcon icon={faSyncAlt} className='ms-2' />
              </h3>
              <div className='form-floating mb-3 '>
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
            </div>

            {/* Results Section */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                Results
                <FontAwesomeIcon icon={faLink} className='ms-2' />
              </h3>
              <div>
                <p className='secondary-text'>
                  MD5: <code>{hashes.md5}</code>
                  <button
                    className='btn btn-sm btn-outline-secondary ms-4'
                    onClick={() => copyToClipboard(hashes.md5)}>
                    <FontAwesomeIcon icon={isCopied ? faCheck : faCopy} />
                  </button>
                </p>
                <p className='secondary-text'>
                  SHA-1: <code>{hashes.sha1}</code>
                  <button
                    className='btn btn-sm btn-outline-secondary ms-4'
                    onClick={() => copyToClipboard(hashes.sha1)}>
                    <FontAwesomeIcon icon={isCopied ? faCheck : faCopy} />
                  </button>
                </p>
                <p className='secondary-text'>
                  SHA-256: <code>{hashes.sha256}</code>
                  <button
                    className='btn btn-sm btn-outline-secondary ms-4'
                    onClick={() => copyToClipboard(hashes.sha256)}>
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
              <ul className='list-group list-group-flush mb-4 '>
                <li className='list-group-item primary-bg border-0'>
                  <a
                    href='https://en.wikipedia.org/wiki/Cryptographic_hash_function'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ref-link'>
                    Wikipedia: Cryptographic Hash Function
                    <FontAwesomeIcon icon={faLink} className='ms-2' />
                  </a>
                </li>
                <li className='list-group-item primary-bg border-0'>
                  <a
                    href='https://www.geeksforgeeks.org/cryptographic-hash-functions/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ref-link'>
                    GeeksForGeeks: Cryptographic Hash Functions
                    <FontAwesomeIcon icon={faLink} className='ms-2' />
                  </a>
                </li>
                {/* Add more resources here */}
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
                    Watch this video to learn more about hashing:
                  </p>
                </div>
                <div className='col-md-6'>
                  <div className='ratio ratio-16x9'>
                    <iframe
                      src='https://www.youtube.com/embed/videoseries?list=PL9o3zS2xilKQOY02m-Wj5cKd2j78xouew' // Example YouTube playlist embed link
                      title='Hashing Algorithms Explained'
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
export default HashGenerator;

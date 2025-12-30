import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faCopy,
  faCheck,
  faLink,
  faSyncAlt,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import GoBackBtn from '../../../../Components/GoBack_Btn/GoBack_Btn';
import ShowHintBtn from '../../../../Components/ShowHint_Btn/ShowHint_Btn';
import Go2TopBtn from '../../../../Components/Go2Top_Btn/Go2Top_Btn';
// import "./First_Lab.css";
import ThemeSwitcher from '../../../../Components/ThemeSwitcher/ThemeSwitcher';
const HashComparator = () => {
  const [hash1, setHash1] = useState('');
  const [hash2, setHash2] = useState('');
  const [result, setResult] = useState('');
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const compareHashes = () => {
    setIsLoading(true);
    setTimeout(() => {
      setResult(
        hash1 === hash2 ? 'Hashes match!✅ ' : 'Hashes do not match.❌'
      );
      setIsLoading(false);
    }, 1000);
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
          <div className='container p-0 my-5 '>
            {/* Title */}
            <h1 className='title-gradient text-center my-4'>
              🔓 Hash Comparator
            </h1>

            {/* Explanation Section */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                What is a Hash Comparator?
                <FontAwesomeIcon icon={faInfoCircle} className='ms-2' />
              </h3>
              <p>
                A <strong>Hash Comparator</strong> helps verify if two hash
                values are identical. Useful for:
              </p>
              <ul className='list-group list-group-flush mb-4'>
                <li className='list-group-item secondary-bg primary-text bb-1'>
                  ✔️ Checking data integrity
                </li>
                <li className='list-group-item secondary-bg primary-text bb-1'>
                  ✔️ Verifying file authenticity
                </li>
                <li className='list-group-item secondary-bg primary-text bb-1'>
                  ✔️ Secure password comparisons
                </li>
              </ul>
            </div>

            {/* Example Section with Creative Accordion */}
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
                      <h5>Example 1: MD5 Hash</h5>
                      <p className='secondary-text'>
                        Compare the MD5 hash of the word <code>hello</code>:
                      </p>
                      <ul className='list-group mb-3'>
                        <li className='list-group-item secondary-bg primary-text'>
                          <strong>Hash 1:</strong>{' '}
                          <code>5d41402abc4b2a76b9719d911017c592</code>
                          <button
                            className='btn btn-sm btn-outline-secondary ms-4'
                            onClick={() =>
                              copyToClipboard(
                                '5d41402abc4b2a76b9719d911017c592'
                              )
                            }>
                            <FontAwesomeIcon
                              icon={isCopied ? faCheck : faCopy}
                            />
                          </button>
                        </li>
                        <li className='list-group-item secondary-bg primary-text'>
                          <strong>Hash 2:</strong>{' '}
                          <code>5d41402abc4b2a76b9719d911017c592</code>
                          <button
                            className='btn btn-sm btn-outline-secondary ms-4'
                            onClick={() =>
                              copyToClipboard(
                                '5d41402abc4b2a76b9719d911017c592'
                              )
                            }>
                            <FontAwesomeIcon
                              icon={isCopied ? faCheck : faCopy}
                            />
                          </button>
                        </li>
                      </ul>
                      <p className='list-group-item secondary-bg primary-text bb-1'>
                        When you compare these two hashes, the result will be{' '}
                        <strong className='text-success'>
                          "Hashes match!"
                        </strong>{' '}
                        because they are identical.
                      </p>

                      <h5 className='mt-4'>Example 2: SHA-1 Hash</h5>
                      <p className='list-group-item secondary-bg primary-text bb-1'>
                        Compare the SHA-1 hash of the word <code>world</code>:
                      </p>
                      <ul className='list-group mb-3'>
                        <li className='list-group-item secondary-bg primary-text'>
                          <strong>Hash 1:</strong>{' '}
                          <code>7c211433f02071597741e6ff5a8ea34789abbf43</code>
                          <button
                            className='btn btn-sm btn-outline-secondary ms-4'
                            onClick={() =>
                              copyToClipboard(
                                '7c211433f02071597741e6ff5a8ea34789abbf43'
                              )
                            }>
                            <FontAwesomeIcon
                              icon={isCopied ? faCheck : faCopy}
                            />
                          </button>
                        </li>
                        <li className='list-group-item secondary-bg primary-text'>
                          <strong>Hash 2:</strong>{' '}
                          <code>7c211433f02071597741e6ff5a8ea34789abbf43</code>
                          <button
                            className='btn btn-sm btn-outline-secondary ms-4'
                            onClick={() =>
                              copyToClipboard(
                                '7c211433f02071597741e6ff5a8ea34789abbf43'
                              )
                            }>
                            <FontAwesomeIcon
                              icon={isCopied ? faCheck : faCopy}
                            />
                          </button>
                        </li>
                      </ul>
                      <p className='list-group-item secondary-bg primary-text bb-1'>
                        When you compare these two hashes, the result will be{' '}
                        <strong className='text-success'>
                          "Hashes match!"
                        </strong>{' '}
                        because they are identical.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Fields */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                Compare Hashes
                <FontAwesomeIcon icon={faSyncAlt} className='ms-2' />
              </h3>
              <div className='form-floating mb-3'>
                <div className='col-md-6'>
                  <div className='form-floating mb-3'>
                    <input
                      id='floatingHash1'
                      type='text'
                      className='form-control focus-bg-transparent'
                      placeholder=''
                      value={hash1}
                      onChange={(e) => setHash1(e.target.value)}
                    />
                    <label htmlFor='floatingHash1'>Enter first hash</label>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-floating mb-3'>
                    <input
                      id='floatingHash2'
                      type='text'
                      className='form-control focus-bg-transparent'
                      placeholder=''
                      value={hash2}
                      onChange={(e) => setHash2(e.target.value)}
                    />
                    <label htmlFor='floatingHash2'>Enter second hash</label>
                  </div>
                </div>
              </div>
              <button
                className='btn w-100 py-2'
                style={{ backgroundColor: 'var(--main-color)' }}
                onClick={compareHashes}
                disabled={isLoading}>
                {isLoading ? (
                  <div
                    className='spinner-border spinner-border-sm'
                    role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </div>
                ) : (
                  'Compare'
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
                  result === '✅ Hashes match!'
                    ? 'alert-success'
                    : 'alert-danger'
                }`}>
                <strong>{result}</strong>
              </div>
            </div>

            {/* Additional Resources Section */}
            <div className='mb-5 text-left'>
              <h3 className='mb-3'>
                Additional Resources
                <FontAwesomeIcon icon={faLink} className='ms-2' />
              </h3>
              <p>
                To learn more about hashing and cryptography, check out the
                following resources:
              </p>
              <ul className='list-group-item secondary-bg primary-text bb-1'>
                <li className='list-group-item secondary-bg primary-text bb-1'>
                  <a
                    href='https://en.wikipedia.org/wiki/Cryptographic_hash_function'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ref-link'>
                    Wikipedia: Cryptographic Hash Function
                    <FontAwesomeIcon icon={faLink} className='ms-2' />
                  </a>
                </li>
                <li className='list-group-item'>
                  <a
                    href='https://www.geeksforgeeks.org/cryptographic-hash-functions/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ref-link'>
                    GeeksForGeeks: Cryptographic Hash Functions
                    <FontAwesomeIcon icon={faLink} className='ms-2' />
                  </a>
                </li>
              </ul>
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
                    Watch this video to understand how hash functions work:
                  </p>
                  <p className='col-md-6'>
                    <a
                      href='http://www.audible.com/computerphile'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='ref-link'>
                      Audible free book
                      <FontAwesomeIcon icon={faLink} className='ms-2' />
                    </a>
                  </p>
                </div>
                <div className='col-md-6'>
                  <div className='ratio ratio-16x9'>
                    <iframe
                      src='https://www.youtube.com/embed/b4b8ktEV4Bg'
                      title='What is a Hash Function?'
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

export default HashComparator;

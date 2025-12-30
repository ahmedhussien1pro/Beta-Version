import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import Banner from '../../Components/Banner/Banner';
import courseImage from '../../assets/img/Hashing/courseImage.png';
import HashingVsEncryption from '../../assets/img/Hashing/hashing-vs-encryption.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn.jsx';
export default function Hashing() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Hashing',
      ar: 'خوارزميات التجزئة (Hashing)',
    },
    description: {
      en: 'Learn the fundamentals of one-way cryptographic functions. Understand the difference between hashing and encryption, and how to securely store passwords using salts and peppers.',
      ar: 'تعلم أساسيات الدوال التشفيرية أحادية الاتجاه. افهم الفرق بين التجزئة والتشفير، وكيفية تخزين كلمات المرور بشكل آمن باستخدام تقنيات Salt و Pepper.',
    },
    difficulty: {
      en: 'Beginner',
      ar: 'مبتدئ',
    },
    duration: {
      en: '20 min',
      ar: '20 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.8',
    students: '3450',
  };

  return (
    <>
      <Banner />
      <Header />
      {/* Start Landing */}
      <CourseLanding {...data} />
      {/* End Landing */}
      {/* Start Course */}
      <div className='Content'>
        <div className='secure-container' ref={faqSectionRef}>
          <div className='content-row'>
            <div className='content-section'>
              <dl className='topics-text'>
                {/* Topic 1 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 1</span>What is hashing in cybersecurity?
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <p>
                      <span className='content__subtitle me-2'>Hashing</span> is
                      a one-way function that takes a string of any length and
                      returns a fixed-length string. The output of the function
                      is called a hash. Hashing is used to verify the integrity
                      of data. It is also used to store passwords in a database.
                      The hash of a password is stored in the database instead
                      of the password itself. This way, if the database is
                      compromised, the attacker will have a hard time getting
                      the passwords.
                    </p>
                    <p></p>
                    <p>
                      <h3 className='content__title'>Another Definitions:</h3>
                      <span className='content__subtitle me-2'>Hashing</span> is
                      a one-way mathematical function that turns data into a
                      string of nondescript text that cannot be reversed or
                      decoded. In the context of cybersecurity,
                      <span className='content__subtitle me-2'>hashing</span> is
                      a way to keep sensitive information and data — including
                      passwords, messages, and documents — secure. Once this
                      content is converted via a hashing algorithm, the
                      resulting value (or hash code) is unreadable to humans and
                      extremely difficult to decrypt, even with the help of
                      advanced technology. Hashing has become an important
                      cybersecurity tool for organizations, especially given the
                      rise in remote work and use of personal devices. Both of
                      these trends require organizations to leverage
                      <span className='content__subtitle me-2'>
                        {' '}
                        single sign-on (SSO){' '}
                      </span>
                      technology to enable a remote workforce and reduce
                      friction within the user experience. Though this is a
                      necessary part of modern business, attackers have come to
                      recognize the inherent vulnerability of stored passwords
                      and user credentials, which means that companies must take
                      additional steps to keep that information secure.
                    </p>
                    <p>
                      <b className='content__title'>Components of hashing</b>
                      <p></p>
                      <span className='content__subtitle me-2'>
                        {' '}
                        Hashing has three main components:
                      </span>
                      <ol>
                        <li>The input key</li>
                        <li>The hash function</li>
                        <li>The hash table</li>
                      </ol>
                    </p>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span>
                          <span className='content__subtitle me-2'>
                            {' '}
                            Input Key:
                          </span>
                        </span>
                        The input data or message that is processed by the hash
                        function and converted into the hash code.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span>
                          <span className='content__subtitle me-2'>
                            {' '}
                            Hash Function
                          </span>
                        </span>
                        A mathematical function that converts the input data, or
                        key, into a unique hash value.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span>
                          <span className='content__subtitle me-2'>
                            {' '}
                            Hash Table:
                          </span>
                        </span>
                        A data structure that stores data and maps keys to
                        values.
                      </li>
                    </ul>
                  </div>
                </dd>

                {/* Topic 2*/}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span>Types of hashing
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <p>
                      Hashing is not singular in nature. In fact, there are a
                      variety of hashing algorithms that are suitable for
                      various use cases.
                    </p>
                    <h5 className='main-color'>
                      Here, we explore The following common hashing algorithms:
                    </h5>
                    <ol>
                      <li>
                        <span className='content__subtitle me-2'>LANMAN:</span>{' '}
                        The Microsoft LAN Manager hashing algorithm, or LANMAN,
                        is a network operating system and authentication
                        protocol developed by Microsoft primarily for storing
                        passwords. Introduced in the 1980s, LANMAN is now
                        considered largely obsolete, though it is perhaps the
                        best-known example of a hashing algorithm.
                      </li>
                      <li>
                        <span className='content__subtitle me-2'>
                          NTLM (New Technology LAN Manager):
                        </span>
                        Windows New Technology LAN Manager (NTLM) is a suite of
                        security protocols offered by Microsoft to authenticate
                        users’ identities and protect the integrity and
                        confidentiality of their activity. At its core, NTLM is
                        an SSO tool that relies on a challenge-response protocol
                        to confirm the user without requiring them to submit a
                        password, a process known as NTLM authentication.
                      </li>
                      <li>
                        <span className='content__subtitle me-2'>Script:</span>{' '}
                        This hashing algorithm is is a key derivation function
                        (KDF) and password-based key derivation function (PBKDF)
                        that can convert data or passwords into cryptographic
                        keys. The primary purpose of Scrypt is to provide a more
                        robust defense against cryptographic attacks, such as
                        brute-force attacks.
                      </li>
                      <li>
                        <span className='content__subtitle me-2'>Ehtash:</span>{' '}
                        Ethash is a “proof of work” hashing algorithm developed
                        by the Ethereum network. The algorithm is custom built
                        to secure the Ethereum cryptocurrency network and its
                        blockchain and validate platform transactions.
                      </li>
                      <li>
                        <span className='content__subtitle me-2'>
                          MD5(Message Digest Algorithm 5):
                        </span>
                        MD5 is a widely used hashing algorithm that produces a
                        128-bit hash value. It is commonly used to verify data
                        integrity and ensure that data is not tampered with
                        during transmission.
                      </li>
                      <li>
                        <span className='content__subtitle me-2'>SHA-1:</span>{' '}
                        SHA-1 is a widely used hashing algorithm that produces a
                        160-bit hash value. It is commonly used to verify data
                        integrity and ensure that data is not tampered with
                        during transmission.
                      </li>
                      <li>
                        <span className='content__subtitle me-2'>SHA-256:</span>{' '}
                        SHA-256 is a widely used hashing algorithm that produces
                        a 256-bit hash value. It is commonly used to verify data
                        integrity and ensure that data is not tampered with
                        during transmission.
                      </li>
                      <li>
                        <span className='content__subtitle me-2'>SHA-512:</span>{' '}
                        SHA-512 is a widely used hashing algorithm that produces
                        a 512-bit hash value. It is commonly used to verify data
                        integrity and ensure that data is not tampered with
                        during transmission.
                      </li>
                    </ol>
                  </div>
                </dd>

                {/* Topic 3 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span>Hashing use cases in cybersecurity
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <p>
                      <span className='content__subtitle me-2'>Hashing</span>{' '}
                      plays an important role in many cybersecurity algorithms
                      and protocols. At the most basic level, hashing is a way
                      to encode sensitive data or text into an indecipherable
                      value that is incredibly difficult to decode.
                    </p>
                    <p>
                      <h5 className='main-color'>
                        Below, we discuss three of the most common hashing use
                        cases in cybersecurity:
                      </h5>
                      <ol>
                        <li>Password storage</li>
                        <li>Digital signatures</li>
                        <li>File and document management</li>
                      </ol>
                    </p>
                    <ul className='ps-2'>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span className='content__subtitle me-2'>
                          Password storage: <br />
                        </span>
                        Storing passwords as plain text within a system,
                        application, or device is extremely risky. A password
                        storage solution can use hashing to encode and save
                        login credentials as a hashed value. When users attempt
                        to access the system in the future, the solution will
                        authenticate the user by validating the password that
                        was entered with the hashed value in the database.
                      </li>

                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span className='content__subtitle me-2'>
                          Digital signatures: <br />
                        </span>
                        A digital signature is a cryptographic technique used to
                        verify the origin, authenticity, and integrity of a
                        message, document, or transaction.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span className='content__subtitle me-2'>
                          To create a digital signature using hashing:
                        </span>
                      </li>
                    </ul>
                    <ol>
                      <li>
                        A hash function is applied to the original message to
                        create a secure hash value
                      </li>
                      <li>
                        The hash value is then encrypted using a private key
                        that belongs to the sender; this process creates the
                        digital signature
                      </li>
                      <li>
                        The recipient uses a public key to decrypt the digital
                        signature
                      </li>
                      <li>
                        The recipient then takes the resulting hash value and
                        applies the same hash function; if the hash values
                        match, it proves that the message has not been altered
                        and that it originated with the designated sender
                      </li>
                    </ol>

                    <p>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <span className='content__subtitle me-2'>
                        File and document management
                      </span>
                    </p>
                    <p>
                      Though digital signatures are often used to secure email
                      and other digital communications, they can also
                      authenticate and verify any kind of electronic transaction
                      or document. Two main use cases are:
                    </p>
                    <ol>
                      <li>
                        <span className='content__subtitle me-2'>
                          Document comparisons:
                        </span>
                        During hashing, the hash function will produce a
                        fixed-value character string that serves as a unique
                        identifier for any type of document or file. If the
                        document is altered in any way, even minutely, the hash
                        value will also change. As a result, hashing provides a
                        fast and effective way to compare files and confirm they
                        have not been altered or compromised. Data integrity
                        verification: To verify the integrity of the data within
                        a file or document, a hashing algorithm can be used to
                        produce a checksum, which is a hash value that reflects
                        the sum of the dataset. This checksum accompanies the
                        data as it is shared or transmitted. Upon receipt, the
                        user can create a new checksum and compare it to the
                        original. If the two values match, then the data is
                        considered secure.
                      </li>
                      <li>
                        <span className='content__subtitle me-2'>
                          Data integrity verification:
                        </span>
                        To verify the integrity of the data within a file or
                        document, a hashing algorithm can be used to produce a
                        checksum, which is a hash value that reflects the sum of
                        the dataset. This checksum accompanies the data as it is
                        shared or transmitted. Upon receipt, the user can create
                        a new checksum and compare it to the original. If the
                        two values match, then the data is considered secure.
                      </li>
                    </ol>
                  </div>
                </dd>

                {/* Topic 4*/}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span>Hashing benefits in cybersecurity
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <p>
                      <span className='content__subtitle me-2'>Hashing</span> is
                      an essential component within many cybersecurity practices
                      and protocols. Benefits include:
                    </p>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span className='content__subtitle me-2'>
                          Strong password security:
                        </span>
                        Hashing is a critical part of identity and access
                        management (IAM) tools. By using a hashing tool,
                        organizations can ensure the identity of their users and
                        maintain proper access controls. This helps prevent
                        password-based attacks, such as password spraying or
                        credential theft.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span className='content__subtitle me-2'>
                          File and data integrity:
                        </span>
                        Once a file, document, or dataset is hashed, any change
                        will result in a new, completely different hash value.
                        This helps organizations track and identify if and when
                        assets have been altered and immediately stop using any
                        asset that may be compromised.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span className='content__subtitle me-2'>
                          Data security:
                        </span>
                        A hashed value is virtually useless to cybercriminals
                        and bad actors because it is extremely challenging to
                        decode a one-way hash function. This means that a data
                        breach may not necessarily result in the loss of
                        sensitive data if it has been properly hashed.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span className='content__subtitle me-2'>
                          Secure communications:
                        </span>
                        Hashing is a critical part of digital signatures, which
                        is the primary way to authenticate both the contents of
                        a message and the identity of the sender.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span className='content__subtitle me-2'>
                          Secure downloads:
                        </span>
                        When downloading software or any large file, systems can
                        verify the hash value of the download to ensure it has
                        not been infected with malware.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span className='content__subtitle me-2'>
                          Improved threat detection:
                        </span>
                        Hash codes are a fast and effective way to scan and
                        discover known threats on a system or within the
                        network.
                      </li>
                    </ul>
                  </div>
                </dd>

                {/* Topic 5 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 5</span>Limitations of hashing
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <p>
                      <span className='content__subtitle me-2'>
                        Though hashing
                      </span>{' '}
                      is a useful tool, it has its limitations. In this section,
                      we explore a few challenges and drawbacks of using hashing
                      in cybersecurity:
                    </p>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span className='content__subtitle me-2'>
                          Collision:
                        </span>
                        A collision is when two or more inputs result in the
                        same hash value. Large enterprises or companies that
                        store significant amounts of data will face this
                        challenge and must implement a solution to prevent such
                        collisions. For example, a company might implement a
                        chaining strategy, which is when a duplicative value is
                        added to a linked list on the hash table.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span className='content__subtitle me-2'>
                          Performance:
                        </span>
                        Hashing can be a bit of a balancing act. Algorithms are
                        designed to optimize both speed and memory use; they
                        must also be able to support the level of data input
                        needed by the company. This creates significant
                        complexity in terms of algorithm design and evolution.
                        With respect to cybersecurity, a slow algorithm or one
                        facing significant backlogs can translate into higher
                        risk.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <span className='content__subtitle me-2'>
                          Security risks:
                        </span>
                        By definition, hashing is a one-way conversion of data
                        into an indecipherable string of text. Generally, it is
                        impossible to reconvert the hash value back to data.
                        However, some sophisticated adversaries can either
                        discover or guess the hash function, which would allow
                        them to reverse engineer the hash values or tamper with
                        the dataset by creating fake inputs.
                      </li>
                    </ul>
                  </div>
                </dd>
                {/* Topic 6 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 6</span>Hashing vs. encryption
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <p>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 mb-0 text-warning'
                      />
                      Though hashing and encryption may seem to result in the
                      same outcome, they are actually two different functions.
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 mb-0 text-warning'
                      />
                      The main difference is that{' '}
                      <span className='content__subtitle me-2'>Hashing</span> is
                      always intended to be a one-way conversion of data. The
                      hash value is a unique string of text that can only be
                      decoded if the adversary is able to steal or guess the
                      hash function and then reverse engineer the data input.
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 mb-0 text-warning'
                      />
                      <span className='content__subtitle'>
                        Data encryption,
                      </span>{' '}
                      on the other hand, is a two-way process. Though encryption
                      also uses cryptographic algorithms to convert plain text
                      into an encoded format, it has a corresponding decoding
                      key that allows users to decrypt the data.
                    </p>
                    <img
                      src={HashingVsEncryption}
                      alt='Hashing Vs Encryption'
                      className='w-50 mx-auto bg-light d-block img-fluid'
                    />
                    <p className='text-center'>
                      <i className='main-color'>Hashing Vs Encryption.</i>
                    </p>
                    <hr />
                    <p>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 mb-0 text-warning'
                      />
                      Another key difference is that{' '}
                      <span className='content__subtitle me-2'>Hashing</span>
                      provides you with the ability to authenticate data,
                      messages, files, or other assets. Users can confirm that
                      data sent from one user to another has not been
                      intercepted and altered by comparing the original hash
                      value with the one produced by the recipient. With
                      encrypted data, on the other hand, there is no way to
                      validate the data or tell if it has been changed, which is
                      why hashing is preferred for authentication purposes.
                    </p>
                    <span className='content__title'>
                      Compare & Contrast: Encryption vs. Hashing
                    </span>
                    <p>
                      Both hashing and encryption scramble data to protect it
                      from hackers. But the way the data is scrambled, and what
                      happens with it after encoding, is different.
                    </p>
                    <table className='table table-bordered table-striped text-center mx-auto'>
                      <thead className='table-dark'>
                        <tr>
                          <th className='bg-dark text-light'></th>
                          <th className='bg-dark text-light'>Encryption</th>
                          <th className='bg-dark text-light'>Hashing </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className='bg-dark text-light'>Goal </th>
                          <td>Protect while in storage </td>
                          <td>No</td>
                        </tr>
                        <tr>
                          <th className='bg-dark text-light'>
                            Decoding available?{' '}
                          </th>
                          <td>Yes</td>
                          <td>No</td>
                        </tr>
                        <tr>
                          <th className='bg-dark text-light'>
                            Data anonymized?
                          </th>
                          <td>No</td>
                          <td>No</td>
                        </tr>
                        <tr>
                          <th className='bg-dark text-light'>Type of key</th>
                          <td>Public and Private</td>
                          <td>Private</td>
                        </tr>
                        <tr>
                          <th className='bg-dark text-light'>
                            Used for passwords?
                          </th>
                          <td>Yes, while in transit</td>
                          <td>Yes, while in storage </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/Hashing/Hashing_labs')}
                className='go-to'>
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      <Go2TopBtn />
      <Footer />
    </>
  );
}

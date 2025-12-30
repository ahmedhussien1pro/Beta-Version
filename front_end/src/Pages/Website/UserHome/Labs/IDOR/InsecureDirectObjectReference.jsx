import React from 'react';
import './InsecureDirectObjectReference.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './InsecureDirectObjectReference.css';
import '../../Components/Topics CSS/topics.css';
import courseImage from '../../assets/img/IDOR/idorIcon.jpg';
import IDOR_Vulerability from '../../assets/img/IDOR/InsecureDirectObjectReference(IDOR)Vulnerability.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import GoTop from '../../Components/Go2Top_Btn/Go2Top_Btn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function InsecureDirectObjectReference() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Insecure Direct Object Reference (IDOR)',
      ar: 'المرجع المباشر غير الآمن للكائنات (IDOR)',
    },
    description: {
      en: 'Discover how attackers access unauthorized data by manipulating object identifiers in requests. Master access control implementation to prevent sensitive information disclosure.',
      ar: 'اكتشف كيف يصل المهاجمون إلى بيانات غير مصرح بها من خلال التلاعب بمعرفات الكائنات في الطلبات. أتقن تطبيق ضوابط الوصول لمنع تسريب المعلومات الحساسة.',
    },
    difficulty: {
      en: 'Intermediate',
      ar: 'متوسط',
    },
    duration: {
      en: '30 min',
      ar: '30 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.9',
    students: '2600',
  };

  return (
    <>
      <Header />
      {/* Start Landing */}
      <CourseLanding {...data} />
      {/* End Landing */}
      {/* Start Content */}
      <div className='Content'>
        <div className='secure-container' ref={faqSectionRef}>
          <div className='content-row'>
            <div className='content-section'>
              <dl className='topics-text'>
                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 1</span> What does insecure direct object
                  reference mean?
                </dt>
                <dd className='fadeInUp faq-body'>
                  <ul className='secure-list'>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The term{' '}
                      <span className='secure-highlight'>
                        insecure direct object reference
                      </span>{' '}
                      means that a web application is directly referring to a
                      certain internal object, such as a transaction number or
                      user ID, but this reference is publicly visible, open to
                      direct access, and not secured using any form of
                      validation, authorization, or access control.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The term was introduced by the Open Web Application
                      Security Project (OWASP) in the
                      <span className='secure-highlight'>
                        {' '}
                        OWASP Top 10 for 2007
                      </span>{' '}
                      as a separate category A4 Insecure Direct Object
                      Reference.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      In 2017, it was merged into A5 Broken Access Control along
                      with other access control issues, and later carried over
                      to the 2021 list under A1 Broken Access Control.
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span> How do IDOR vulnerabilities happen?
                </dt>
                <dd className='fadeInUp faq-body'>
                  <img
                    src={IDOR_Vulerability}
                    alt='IDOR Vulnerability'
                    className='secure-image'
                  />
                  <ul className='secure-list'>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Most web applications use simple unique identifiers to
                      reference server-side objects. For example, a user in a
                      database will usually be referred to via a unique user ID.
                      The same user ID is the primary key to the database column
                      containing user information, and it is generated
                      automatically. The database key generation algorithm is
                      based on simple incrementing – it usually uses the next
                      available integer. The same database ID generation
                      mechanisms are used for all other types of database
                      records.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Such IDs often see client-side use by web applications and
                      APIs. When sent in URLs via regular HTTP requests using
                      the GET method, the IDs are clearly visible both in the
                      web browser and in request headers, which makes them
                      easily accessible to attackers. Referring directly to
                      internal IDs in this way is not recommended for security
                      reasons because it could enable attackers to perform
                      extensive enumeration (for example, find all user IDs). If
                      there is no other way of referring to an internal object,
                      the developer must at least ensure access control so
                      resource access requires more than just a reference and
                      generic page authentication.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      For example, let’s say that a web application displays
                      transaction details using the following URL:
                      <span className='secure-link'>
                        https://www.example.com/transaction.php?id=74656
                      </span>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      A malicious hacker could try tampering with the id
                      parameter value and substituting other, similar values for
                      74656, for example:
                      <span className='secure-link'>
                        https://www.example.com/transaction.php?id=74657
                      </span>
                      Depending on the application, transaction 74657 could be a
                      valid transaction associated with another user account,
                      and the malicious hacker should not be authorized to see
                      it. However, if the developer failed to implement
                      authorization checks before granting access to the
                      transaction, the attacker may be able to see it. In that
                      case, we would have an
                      <span className='secure-highlight'>
                        insecure direct object reference (IDOR)
                      </span>{' '}
                      vulnerability.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Examples of common{' '}
                      <span className='secure-highlight'>IDOR</span>{' '}
                      vulnerabilities: IDOR vulnerabilities often appear in
                      password change forms. A badly designed password change
                      form URL might be:
                      <span className='secure-link'>
                        https://www.example.com/change_password.php?userid=1
                      </span>
                      You might get this URL in a confirmation email after first
                      providing an email address using a different form. If
                      there are no additional checks, a malicious hacker could
                      try the above URL with userid=1, thus potentially gaining
                      access to the administrator account (the ID of the
                      administrator is often 1).
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <span className='secure-highlight'>IDOR</span>{' '}
                      vulnerabilities might also involve filenames, not object
                      IDs. For example, directory traversal (path traversal) is
                      often considered to be a type of{' '}
                      <span className='secure-highlight'>IDOR</span>
                      vulnerability. In this special case of{' '}
                      <span className='secure-highlight'>IDOR</span>, the user
                      is able to display files without authorization. For
                      example:
                      <span className='secure-link'>
                        https://www.example.com/display_file.php?file.txt
                      </span>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      If there is an{' '}
                      <span className='secure-highlight'>IDOR</span>{' '}
                      vulnerability associated with the display_file.php script,
                      a malicious hacker could gain access to sensitive file
                      system resources such as the /etc/passwd file by
                      manipulating user input (in this case, simply changing the
                      URL) to navigate to that resource instead of file.txt:
                      <span className='secure-link'>
                        https://www.example.com/display_file.php?../../../etc/passwd
                      </span>
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span> How to detect IDOR vulnerabilities?
                </dt>
                <dd className='fadeInUp faq-body'>
                  <ul className='secure-list'>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Insecure direct object references are a type of access
                      control vulnerability that cannot be directly detected
                      using automated security testing tools (except in the
                      special case of path traversal vulnerabilities). Because
                      you can’t use vulnerability scanning to find them,
                      identifying IDORs requires manual penetration testing and
                      security-focused code reviews.
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span> How to prevent IDOR attacks?
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='secure-faq-content'>
                    <p>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The only way to protect against IDORs is to implement
                      strict access control checks for all sensitive objects.
                      Luckily, modern back-end development frameworks such as
                      Ruby on Rails or Django don’t have problems with IDOR
                      (unless the software developer decides to use their own
                      access mechanisms rather than the built-in ones). With
                      such frameworks, access control is implemented securely by
                      design, so it is best practice to use reputable frameworks
                      to develop your web applications and follow their
                      documented methods of object access control. If that is
                      not possible, you should use secure cryptographic hashes
                      of your identifiers instead of using the identifiers
                      directly.
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      You may see some sources saying that to prevent IDOR
                      vulnerabilities, you should use long, hard-to-guess object
                      identifiers, such as the ones used for session management
                      or UUIDs. A related solution is to use indirect object
                      reference maps with external IDs that are hard to guess.
                      However, we strongly advise against using any such
                      approaches because they give you a false sense of security
                      while only making attacks harder but not impossible.
                    </p>
                  </div>
                  <div className='secure-faq-actions'>
                    <p>
                      <strong>Key Takeaways:</strong>
                    </p>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <b className='content__subtitle'>
                          Implement strict access control checks for sensitive
                          objects.
                        </b>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <b className='content__subtitle'>
                          Use reputable frameworks like Ruby on Rails or Django
                          for secure object access control.
                        </b>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <b className='content__subtitle'>
                          Avoid using long, hard-to-guess identifiers or UUIDs
                          alone for security.
                        </b>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <b className='content__subtitle'>
                          Secure cryptographic hashes should be used instead of
                          direct identifiers.
                        </b>
                      </li>
                    </ul>
                  </div>
                </dd>
              </dl>
            </div>

            <div className='go-to-section'>
              <button
                onClick={() =>
                  handleGoToLab(
                    '/Insecure_Direct_Object_Reference(IDOR)/Insecure_Direct_Object_Reference(IDOR)Labs'
                  )
                }
                className='go-to'>
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      <GoTop />
      {/* End Content */}
      <Footer />
    </>
  );
}

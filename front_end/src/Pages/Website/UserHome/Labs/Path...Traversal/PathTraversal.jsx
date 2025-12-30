import React from 'react';
import Header from '../../Header/Header';
import background from '../../assets/img/Path__Traversal/what-is-path-traversal-attack.png';
import courseImage from '../../assets/img/Path__Traversal/Directory_Traversal.png';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import GoTop from '../../Components/Go2Top_Btn/Go2Top_Btn';
import './PathTraversal.css';
export default function PathTraversal() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Path Traversal Attacks',
      ar: 'هجمات تخطي المسارات (Path Traversal)',
    },
    description: {
      en: 'Understand how attackers trick applications into reading sensitive files outside the web root directory. Learn to exploit "dot-dot-slash" sequences and implement secure file handling practices.',
      ar: 'افهم كيف يخدع المهاجمون التطبيقات لقراءة ملفات حساسة خارج دليل الويب الرئيسي. تعلم كيفية استغلال تسلسلات "نقطة-نقطة-شرطة" وتطبيق ممارسات آمنة للتعامل مع الملفات.',
    },
    difficulty: {
      en: 'Intermediate',
      ar: 'متوسط',
    },
    duration: {
      en: '35 min',
      ar: '35 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.7',
    students: '2150',
  };

  return (
    <>
      <Header />
      {/* Start Landing */}
      <CourseLanding {...data} />
      {/* End Landing */}
      <div className='Content'>
        <div className='secure-container' ref={faqSectionRef}>
          <div className='content-row'>
            <div className='content-section'>
              <dl className='topics-text'>
                {/* Single FAQ Area - Decoder */}
                <dt className='fadeInUp faq-header'>
                  <span className='topic-number'> Topic 1</span> Testing for
                  directory traversal
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='Path-Traversal-Content'>
                    <p className='Path-Traversal-Text'>
                      Directory traversal vulnerabilities (also known as file
                      path vulnerabilities) allow an attacker to read arbitrary
                      files on the server that is running an application. This
                      might include application code and data, credentials for
                      back-end systems, and sensitive operating system files.
                    </p>
                    <p className='Path-Traversal-Text'>
                      You can use Burp to test for these vulnerabilities:
                    </p>
                    <ul className='Path-Traversal-List'>
                      <li className='Path-Traversal-ListItem'>
                        <label className='Path-Traversal-Label is-professional'>
                          Professional
                        </label>{' '}
                        Use Burp Scanner to automatically flag potential
                        directory traversal vulnerabilities.
                      </li>
                      <li className='Path-Traversal-ListItem'>
                        Use Burp Intruder to insert a list of directory
                        traversal fuzz strings into a request. The strings may
                        enable you to read arbitrary files on the server.
                      </li>
                    </ul>

                    <h2 id='steps' className='Path-Traversal-Heading2'>
                      Steps
                    </h2>
                    <p className='Path-Traversal-Text'>
                      You can follow this process using the{' '}
                      <a
                        href='http://localhost:3000/Path__Traversal/Path_Traversal_Labs/lab1'
                        className='Path-Traversal-Link'>
                        File path traversal, traversal sequences stripped with
                        superfluous URL-decode
                      </a>{' '}
                      lab from our Web Security Academy.
                    </p>

                    <h3
                      id='scanning-for-directory-traversal-vulnerabilities'
                      className='Path-Traversal-Heading3'>
                      Scanning for directory traversal vulnerabilities
                    </h3>
                    <p className='Path-Traversal-Text'>
                      If you're using Burp Suite Professional, you can use Burp
                      Scanner to test for directory traversal vulnerabilities:
                    </p>
                    <ol className='Path-Traversal-OrderedList'>
                      <li className='Path-Traversal-OrderedListItem'>
                        In{' '}
                        <strong className='Path-Traversal-Strong'>
                          Proxy &gt; HTTP history
                        </strong>
                        , identify a request that you want to investigate.
                      </li>
                      <li className='Path-Traversal-OrderedListItem'>
                        Right-click the request and select{' '}
                        <strong className='Path-Traversal-Strong'>
                          Do active scan
                        </strong>
                        . Burp Scanner audits the request.
                      </li>
                      <li className='Path-Traversal-OrderedListItem'>
                        Review the{' '}
                        <strong className='Path-Traversal-Strong'>
                          Issues
                        </strong>{' '}
                        list on the{' '}
                        <strong className='Path-Traversal-Strong'>
                          Dashboard
                        </strong>{' '}
                        to identify any directory traversal issues that Burp
                        Scanner flags.
                      </li>
                    </ol>

                    <h3
                      id='fuzzing-for-directory-traversal-vulnerabilities'
                      className='Path-Traversal-Heading3'>
                      Fuzzing for directory traversal vulnerabilities
                    </h3>
                    <p className='Path-Traversal-Text'>
                      You can alternatively use Burp Intruder to test for
                      directory traversal vulnerabilities. This process also
                      enables you to closely investigate any issues that Burp
                      Scanner has identified:
                    </p>
                    <ol className='Path-Traversal-OrderedList'>
                      <li className='Path-Traversal-OrderedListItem'>
                        In{' '}
                        <strong className='Path-Traversal-Strong'>
                          Proxy &gt; HTTP history
                        </strong>
                        , identify a request you want to investigate.
                      </li>
                      <li className='Path-Traversal-OrderedListItem'>
                        Right-click the request and select{' '}
                        <strong className='Path-Traversal-Strong'>
                          Send to Intruder
                        </strong>
                        .
                      </li>
                      <li className='Path-Traversal-OrderedListItem'>
                        Go to{' '}
                        <strong className='Path-Traversal-Strong'>
                          Intruder
                        </strong>
                        .
                      </li>
                      <li className='Path-Traversal-OrderedListItem'>
                        Highlight the parameter that you want to test and click{' '}
                        <strong className='Path-Traversal-Strong'>Add §</strong>{' '}
                        to mark it as a payload position.
                      </li>
                      <li className='Path-Traversal-OrderedListItem'>
                        <p className='Path-Traversal-Text'>
                          In the{' '}
                          <strong className='Path-Traversal-Strong'>
                            Payloads
                          </strong>{' '}
                          side panel, under{' '}
                          <strong className='Path-Traversal-Strong'>
                            Payload configuration
                          </strong>
                          , add a list of directory traversal fuzz strings:
                        </p>
                        <ol className='Path-Traversal-OrderedList'>
                          <li className='Path-Traversal-OrderedListItem'>
                            If you're using Burp Suite Professional, select the
                            built-in{' '}
                            <strong className='Path-Traversal-Strong'>
                              Fuzzing - path traversal
                            </strong>{' '}
                            wordlist.
                          </li>
                          <li className='Path-Traversal-OrderedListItem'>
                            If you're using Burp Suite Community Edition,
                            manually add a list.
                          </li>
                        </ol>
                      </li>
                      <li className='Path-Traversal-OrderedListItem'>
                        Click{' '}
                        <strong className='Path-Traversal-Strong'>
                          <span className='Path-Traversal-Icon'></span> Start
                          attack
                        </strong>
                        . The attack starts running in a new dialog. Intruder
                        sends a request for each fuzz string on the list.
                      </li>
                      <li className='Path-Traversal-OrderedListItem'>
                        When the attack is finished, study the responses to look
                        for any noteworthy behavior. For example, look for
                        responses with a longer length. These may contain data
                        that has been returned from the requested file.
                      </li>
                    </ol>
                  </div>
                </dd>

                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span>Prevention
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='Path-Traversal-Prevention'>
                    <h2 className='Path-Traversal-Prevention-Heading'>
                      Preventing Path Traversal Vulnerabilities
                    </h2>
                    <ul className='Path-Traversal-Prevention-List'>
                      <li className='Path-Traversal-Prevention-ListItem'>
                        <span className='Path-Traversal-Prevention-Highlight'>
                          Validate and sanitize all user inputs:
                        </span>
                        Ensure inputs do not contain unexpected characters or
                        patterns.
                        <span className='Path-Traversal-Prevention-Highlight'>
                          Regular expressions
                        </span>{' '}
                        or built-in validation libraries can help.
                      </li>
                      <li className='Path-Traversal-Prevention-ListItem'>
                        <span className='Path-Traversal-Prevention-Highlight'>
                          Use secure functions for file path management:
                        </span>
                        Many programming languages offer functions to safely
                        handle and normalize file paths. These functions can
                        resolve{' '}
                        <span className='Path-Traversal-Prevention-Highlight'>
                          relative paths
                        </span>{' '}
                        and prevent traversal beyond allowed directories.
                      </li>
                      <li className='Path-Traversal-Prevention-ListItem'>
                        <span className='Path-Traversal-Prevention-Highlight'>
                          Implement access controls:
                        </span>
                        Even if a path is manipulated, proper access control
                        mechanisms prevent{' '}
                        <span className='Path-Traversal-Prevention-Highlight'>
                          unauthorized file access
                        </span>
                        .
                      </li>
                      <li className='Path-Traversal-Prevention-ListItem'>
                        <span className='Path-Traversal-Prevention-Highlight'>
                          Maintain a whitelist:
                        </span>
                        Instead of allowing any file path provided by the user,
                        use a predefined{' '}
                        <span className='Path-Traversal-Prevention-Highlight'>
                          list of allowable file names
                        </span>{' '}
                        or directories.
                      </li>
                    </ul>
                  </div>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() =>
                  handleGoToLab('/Path__Traversal/Path_Traversal_Labs')
                }
                className='go-to'>
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      <GoTop />
      {/* End Footer */}
      <Footer />
    </>
  );
}

import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import courseImage from '../../assets/img/Api_Hacking/courseImage.png';
import Banner from '../../Components/Banner/Banner.jsx';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn.jsx';
import image1 from '../../assets/img/Api_Hacking/image1.png';
import image4 from '../../assets/img/Api_Hacking/image4.jpg';
import image3 from '../../assets/img/Api_Hacking/image3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Api_Hacking() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'API Hacking & Testing',
      ar: 'اختبار اختراق الواجهات البرمجية (API)',
    },
    description: {
      en: 'Master the art of securing modern applications by attacking their back-end APIs. Learn to identify vulnerabilities like BOLA, Broken Authentication, and Mass Assignment using tools like Postman and Burp Suite.',
      ar: 'أتقن فن تأمين التطبيقات الحديثة عبر مهاجمة واجهاتها البرمجية الخلفية. تعلم كيفية اكتشاف ثغرات مثل BOLA، وكسر المصادقة، والتعيين الجماعي (Mass Assignment) باستخدام أدوات مثل Postman وBurp Suite.',
    },
    difficulty: {
      en: 'Intermediate',
      ar: 'متوسط',
    },
    duration: {
      en: '50 min',
      ar: '50 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.9',
    students: '3100',
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
                {/*Intro*/}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Intro</span> Intro to API Testing
                </dt>
                <dd className='fadeInUp faq-body'>
                  <p>
                    <h3 className='content__title'>API testing</h3>APIs
                    (Application Programming Interfaces) enable software systems
                    and applications to communicate and share data. API testing
                    is important as vulnerabilities in APIs may undermine core
                    aspects of a website's confidentiality, integrity, and
                    availability.
                  </p>
                  <p>
                    All dynamic websites are composed of APIs, so classic web
                    vulnerabilities like SQL injection could be classed as API
                    testing. In this topic, we'll teach you how to test APIs
                    that aren't fully used by the website front-end, with a
                    focus on RESTful and JSON APIs. We'll also teach you how to
                    test for server-side parameter pollution vulnerabilities
                    that may impact internal APIs.
                  </p>
                  <p>
                    To illustrate the overlap between API testing and general
                    web testing, we've created a mapping between our existing
                    topics and the OWASP API Security Top 10 2023.
                  </p>
                  <img
                    src={image1}
                    alt=''
                    className='img-fluid w-50 mx-auto d-block'
                  />
                  <hr />
                  <div>
                    <p>
                      In this section, we'll introduce the concept of API
                      testing, focusing on how APIs enable communication between
                      different software systems and why testing them is crucial
                      for identifying vulnerabilities. We'll dive into API
                      recon, the importance of understanding API documentation,
                      and how to identify potential weaknesses in APIs,
                      especially RESTful and JSON APIs. Lastly, we’ll give you
                      the opportunity to practice with our interactive labs,
                      simulating real-world API testing scenarios.
                    </p>
                  </div>
                  <div className='note'>
                    <span className='text-danger'>Note:</span>
                    If you already understand the basics of API testing and want
                    to apply your knowledge to vulnerable targets, you can
                    access all the labs in this topic through the following link
                    :{' '}
                    <a
                      href='/Api_Hacking/Api_Hacking_labs'
                      className='main-color underline'>
                      API Hacking Labs
                    </a>
                  </div>
                </dd>
                {/* Topic 1 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 1</span> What is API Testing?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    <b className='content__subtitle'>API testing</b> is a
                    critical aspect of ensuring the security and functionality
                    of modern web applications. APIs (Application Programming
                    Interfaces) allow systems to communicate and share data, but
                    flawed APIs can lead to vulnerabilities that compromise a
                    website's security. APIs are often used in dynamic websites,
                    and testing them ensures that common vulnerabilities like
                    SQL injection or parameter pollution are prevented. This
                    section will help you understand the role of API testing in
                    maintaining the confidentiality, integrity, and availability
                    of web applications.
                  </p>
                  <b className='content__subtitle mt-2'>Key Areas Covered:</b>
                  <ol>
                    <li>RESTful API testing</li>
                    <li>JSON API testing</li>
                    <li>Server-side parameter pollution vulnerabilities</li>
                  </ol>
                </dd>
                {/* Topic 2 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 2</span> How Do APIs Work?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <img
                    src={image4}
                    alt=''
                    className='img-fluid w-50 mx-auto d-block'
                  />
                  <hr />
                  <p>
                    To begin testing an API, you need to understand how it
                    functions and how to interact with it. This includes:
                  </p>
                  <ol>
                    <li>
                      <span className='content__subtitle'>
                        Identifying Endpoints:
                      </span>{' '}
                      These are the locations where an API receives requests,
                      such as <code className='content__code'>/api/books</code>{' '}
                      for retrieving books from a library.
                    </li>
                    <li>
                      <span className='content__subtitle'>
                        Understanding Input Data:
                      </span>{' '}
                      Knowing both mandatory and optional parameters helps in
                      constructing valid requests.
                    </li>
                    <li>
                      <span className='content__subtitle'>HTTP Methods:</span>{' '}
                      APIs accept specific methods like
                      <code className='content__code'>GET</code>,{' '}
                      <code className='content__code'>POST</code>,{' '}
                      <code className='content__code'>PUT</code>, and
                      <code className='content__code'>DELETE</code> to perform
                      different operations.
                    </li>
                    <li>
                      <span className='content__subtitle'>
                        Rate Limits and Authentication:{' '}
                      </span>{' '}
                      APIs may restrict access to certain actions based on
                      factors like the number of requests or the type of user
                      authentication.
                    </li>
                  </ol>
                  <p>
                    <i>
                      In this section, you'll learn how to identify these
                      elements and understand how they impact API behavior
                      during testing.
                    </i>
                  </p>
                </dd>
                {/* Topic 3 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 3</span>Discovering API Documentation
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    <h3 className='content__title'>API documentation</h3>APIs
                    are usually documented so that developers know how to use
                    and integrate with them.
                  </p>
                  <img
                    src={image3}
                    alt=''
                    className='img-fluid w-50 mx-auto d-block'
                  />
                  <hr />
                  <p>
                    Documentation can be in both human-readable and
                    machine-readable forms. Human-readable documentation is
                    designed for developers to understand how to use the API. It
                    may include detailed explanations, examples, and usage
                    scenarios. Machine-readable documentation is designed to be
                    processed by software for automating tasks like API
                    integration and validation. It's written in structured
                    formats like JSON or XML.
                  </p>
                  <p>
                    API documentation is often publicly available, particularly
                    if the API is intended for use by external developers. If
                    this is the case, always start your recon by reviewing the
                    documentation.
                  </p>
                  <p>
                    API documentation provides developers with the information
                    needed to interact with the API. This documentation can be
                    human-readable (for developers) or machine-readable (for
                    automated tasks). Even if API documentation is not publicly
                    available, you can use tools to uncover hidden documentation
                    by crawling through the application.
                  </p>
                  <h3 className='content__title'>
                    Discovering API documentation
                  </h3>
                  <p>
                    Even if API documentation isn't openly available, you may
                    still be able to access it by browsing applications that use
                    the API.
                  </p>
                  <p>
                    To do this, you can use Burp Scanner to crawl the API. You
                    can also browse applications manually using Burp's browser.
                    Look for endpoints that may refer to API documentation, for
                    example:
                  </p>
                  <ol>
                    <li code className='content__code'>
                      /api
                    </li>
                    <li code className='content__code'>
                      /swagger/index.html
                    </li>
                    <li code className='content__code'>
                      /openapi.json
                    </li>
                  </ol>
                  <b className='content__title'>Where to Look:</b>
                  <ol>
                    <li>
                      Endpoints like <code className='content__code'>/api</code>
                      ,{' '}
                      <code className='content__code'>/swagger/index.html</code>
                      , or <code className='content__code'>/openapi.json</code>
                      often provide documentation.
                    </li>
                    <li>
                      Burp Suite and other tools can help in identifying hidden
                      endpoints.
                    </li>
                  </ol>
                  <b>
                    <i>
                      By discovering the documentation, you can start
                      constructing test cases and simulate realistic API
                      requests.
                    </i>
                  </b>
                </dd>
                {/* Topic 4 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 4</span> Common API Vulnerabilities
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    APIs can be vulnerable to a variety of attacks if not
                    properly tested. These include:
                  </p>
                  <ol>
                    <li>
                      <span className='content__subtitle'>SQL Injection: </span>{' '}
                      Attacks that exploit input validation flaws to manipulate
                      database queries.
                    </li>
                    <li>
                      <span className='content__subtitle'>
                        Parameter Pollution:{' '}
                      </span>{' '}
                      When attackers introduce additional parameters that the
                      server doesn't expect, leading to unintended behaviors.
                    </li>
                    <li>
                      <span className='content__subtitle'>
                        Authentication Flaws:
                      </span>{' '}
                      If authentication mechanisms (like API keys or tokens) are
                      improperly configured, they can be bypassed by attackers.
                    </li>
                  </ol>
                  <b>
                    <i>
                      In this section, we'll walk you through common API
                      vulnerabilities and how to test for them.
                    </i>
                  </b>
                </dd>
                {/* Topic 5 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 5</span> Identifying API
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <b className='content__title'>Identifying API endpoints </b>
                  <p>
                    You can also gather a lot of information by browsing
                    applications that use the API. This is often worth doing
                    even if you have access to API documentation, as sometimes
                    documentation may be inaccurate or out of date.You can use
                    Burp Scanner to crawl the application, then manually
                    investigate interesting attack surface using Burp's browser.
                  </p>
                  <p>
                    While browsing the application, look for patterns that
                    suggest API endpoints in the URL structure, such as /api/.
                    Also look out for JavaScript files. These can contain
                    references to API endpoints that you haven't triggered
                    directly via the web browser. Burp Scanner automatically
                    extracts some endpoints during crawls, but for a more
                    heavyweight extraction, use the JS Link Finder BApp. You can
                    also manually review JavaScript files in Burp.
                  </p>
                  <b className='content__title'>
                    Interacting with API endpoints
                  </b>
                  <p>
                    Once you've identified API endpoints, interact with them
                    using Burp Repeater and Burp Intruder. This enables you to
                    observe the API's behavior and discover additional attack
                    surface. For example, you could investigate how the API
                    responds to changing the HTTP method and media type.
                  </p>
                  <p>
                    As you interact with the API endpoints, review error
                    messages and other responses closely. Sometimes these
                    include information that you can use to construct a valid
                    HTTP request.
                  </p>
                  <b className='content__title'>
                    Identifying supported HTTP methods{' '}
                  </b>
                  <p>
                    The HTTP method specifies the action to be performed on a
                    resource. For example:
                  </p>
                  <ol>
                    <li>
                      <b className='content__subtitle me-2'>GET </b>Retrieves
                      data from a resource.
                    </li>
                    <li>
                      <b className='content__subtitle me-2'>PATCH </b>Applies
                      partial changes to a resource.
                    </li>
                    <li>
                      <b className='content__subtitle me-2'>OPTIONS </b>
                      Retrieves information on the types of request methods that
                      can be used on a resource.
                    </li>
                  </ol>
                  <p>
                    An API endpoint may support different HTTP methods. It's
                    therefore important to test all potential methods when
                    you're investigating API endpoints. This may enable you to
                    identify additional endpoint functionality, opening up more
                    attack surface
                  </p>
                  <p>
                    For example, the endpoint{' '}
                    <code className='content__code'>/api/tasks</code> may
                    support the following methods:
                  </p>
                  <ol>
                    <li>
                      <b className='content__subtitle me-2'>GET /api/tasks</b>
                      Retrieves a list of tasks.
                    </li>
                    <li>
                      <b className='content__subtitle me-2'>POST /api/tasks</b>{' '}
                      Creates a new task.
                    </li>
                    <li>
                      <b className='content__subtitle me-2'>
                        DELETE /api/tasks/1
                      </b>
                      Deletes a task.
                    </li>
                  </ol>
                  <b className='content__title '>
                    Identifying supported content types{' '}
                  </b>
                  <p>
                    API endpoints often expect data in a specific format. They
                    may therefore behave differently depending on the content
                    type of the data provided in a request. Changing the content
                    type may enable you to:
                  </p>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />{' '}
                      Trigger errors that disclose useful information.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />{' '}
                      Bypass flawed defenses.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />{' '}
                      Take advantage of differences in processing logic. For
                      example, an API may be secure when handling JSON data but
                      susceptible to injection attacks when dealing with XML.
                    </li>
                  </ul>
                  <p>
                    To change the content type, modify the Content-Type header,
                    then reformat the request body accordingly. You can use the
                    Content type converter BApp to automatically convert data
                    submitted within requests between XML and JSON.
                  </p>
                </dd>
                {/* Topic 6 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 6:</span> Best Practices for API Testing
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    To prevent vulnerabilities, adhere to these best practices:
                  </p>
                  <ol>
                    <li>
                      <span className='content__subtitle me-2'>
                        Validate Input:{' '}
                      </span>{' '}
                      Always ensure that input data is sanitized to avoid
                      security flaws like SQL injection.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        Enforce Authentication and Authorization:
                      </span>{' '}
                      Properly configure authentication and enforce access
                      controls.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        Use Secure Development Practices:{' '}
                      </span>{' '}
                      Follow secure coding guidelines to minimize the risk of
                      API vulnerabilities.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        Test Thoroughly:
                      </span>{' '}
                      Conduct both automated and manual tests to detect any
                      weaknesses in the API.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        Monitor APIs:
                      </span>{' '}
                      Continuously monitor API traffic for abnormal patterns
                      that could signal exploitation attempts.
                    </li>
                  </ol>
                </dd>
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 7: </span>Preventing vulnerabilities in APIs
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    When designing APIs, make sure that security is a
                    consideration from the beginning. In particular, make sure
                    that you:
                  </p>
                  <ul>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />{' '}
                      Secure your documentation if you don't intend your API to
                      be publicly accessible.
                    </li>
                    <li>
                      Ensure your documentation is kept up to date so that
                      legitimate testers have full visibility of the API's
                      attack surface.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />{' '}
                      Apply an allowlist of permitted HTTP methods.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />{' '}
                      Validate that the content type is expected for each
                      request or response.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />{' '}
                      Use generic error messages to avoid giving away
                      information that may be useful for an attacker.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />{' '}
                      protective measures on all versions of your API, not just
                      the current production version.
                    </li>
                  </ul>
                  <p>
                    To prevent mass assignment vulnerabilities, allowlist the
                    properties that can be updated by the user, and blocklist
                    sensitive properties that shouldn't be updated by the user.
                  </p>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/Api_Hacking/Api_Hacking_labs')}
                className='go-to'>
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Course */}
      <Go2TopBtn />
      <Footer />
    </>
  );
}

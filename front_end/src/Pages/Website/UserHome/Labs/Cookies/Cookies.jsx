import React from 'react';
import Header from '../../Header/Header';
import '../../Components/Topics CSS/topics.css';
import courseImage from '../../assets/img/cookies/course_image.png';
import background from '../../assets/img/cookies/baner_lap.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/CourseLanding/CourseLanding.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import inLab3 from '../../assets/img/inLab3.png';
import Footer from '../../Footer/Footer';

export default function Cookies() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <CourseLanding
        background={background}
        courseImage={courseImage}
        courseTitle='Cookies'
        courseDescription=' Understand the role of cookies in web security, how they are
                used, and the potential privacy concerns they introduce.'
        difficulty='Intermediate'
        duration='30 min'
        onSaveRoom={() => console.log('Room Saved!')}
        onLike={() => console.log('Liked!')}
        onDislike={() => console.log('Disliked!')}
      />
      {/* End Landing  */}
      {/* Start Course Content  */}
      <div className='Content'>
        <div className='secure-container' ref={faqSectionRef}>
          <div className='content-row'>
            <div className='content-section'>
              <dl className='topics-text'>
                {/* Single FAQ Area  */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 1</span> What Are Cookies?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h3 className='content__title'>What Are Cookies?</h3>
                  <p>
                    Cookies are data that browsers store in small text files on
                    your computer.
                  </p>
                  <p>
                    Cookies were invented to solve the problem of "how to
                    remember information about the user?".
                  </p>
                  <p>
                    When you sign in to a web application like Cyberlabs, you
                    won’t need to type your email and password again next time
                    because it stores your credentials in the cookies.
                  </p>
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>
                        Cookies are saved in name-value pairs like:
                      </div>
                      <pre className='terminal-code language-bash' tabIndex='0'>
                        <code className='language-bash'>usersname = user</code>
                      </pre>
                    </div>
                  </div>
                  <p>
                    When a browser requests a web page from a server, cookies
                    belonging to the page are added to the request. This way the
                    server gets the necessary data to "remember" information
                    about users.
                  </p>
                </dd>
                {/* Single FAQ Area  */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span>What are Cookies Used For?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h2 className='content__title'>Session Management:</h2>
                  <p>
                    Cookies store things like items in your shopping cart or
                    your language preference, so you don’t have to re enter this
                    information each time you visit. Cookies let websites allow
                    users and recollect their individual login information and
                    preferences.
                  </p>
                  <h2 className='content__title'>Tracking:</h2>
                  <p>
                    Advertisers use cookies to track your browsing habits and
                    show you ads that are relevant to you based on the sites you
                    visit. E Commerce sites also use cookies to track items
                    users had previously viewed allowing the sites to suggest
                    other goods in which you are interested.
                  </p>
                  <h2 className='content__title'>Personalization:</h2>
                  <p>
                    They allow websites to show you content that matches your
                    interests, like suggesting videos or products similar to
                    what you’ve viewed before. It is customized advertising
                    which is the main way cookies are used to personalize your
                    sessions.
                  </p>
                  <h2 className='content__title'>Keeping You Logged In:</h2>
                  <p>
                    Cookies remember your login details, so you don’t need to
                    enter your username and password every time you visit a
                    website.
                  </p>
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={inLab3} alt='Example' />
                    </div>
                  </div>
                </dd>
                {/* Single FAQ Area  */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span>Where are Cookies Stored?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p className='content__title'>
                    Cookies are stored on your device in special folders or
                    files within your web browser. Here’s where they can
                    typically be found:
                  </p>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <span>On Your Computer or Device: </span>Cookies are
                      stored as small text files on your hard drive or in your
                      device’s storage.
                    </li>
                    <br />
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <span>In Your Web Browser: </span>Each browser (like
                      Chrome, Firefox, or Safari) has its own way of storing
                      cookies. They keep cookies in a specific location within
                      the browser’s data storage.
                    </li>
                    <br />
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <span>In the Browser’s Data Folder: </span>For instance,
                      in Chrome, cookies are kept in the “ file located in the
                      browser’s profile directory, while Firefox uses a database
                      file called cookies.sqlite.
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area  */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span>Cookies Manipulation
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h2 className='content__title'>
                    Create a Cookie With JavaScript:
                  </h2>
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>
                        JavaScript can create, read, and delete cookies with the
                        document.cookie property With JavaScript, a cookie can
                        be created like this
                      </div>
                      <pre className='terminal-code language-bash' tabIndex='0'>
                        <code className='language-bash'>
                          document.cookie="username= user";
                        </code>
                      </pre>
                    </div>
                  </div>
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>
                        You can also add an expiry date (in UTC time). By
                        default, the cookie is deleted when the browser is
                        closed
                      </div>
                      <pre className='terminal-code language-bash' tabIndex='0'>
                        <code className='language-bash'>
                          document.cookie = "username=user; expires=Thu, 18 Dec
                          2013 12:00:00 UTC";
                        </code>
                      </pre>
                    </div>
                  </div>
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>
                        With a path parameter, you can tell the browser what
                        path the cookie belongs to. By default, the cookie
                        belongs to the current page
                      </div>
                      <pre className='terminal-code language-bash' tabIndex='0'>
                        <code className='language-bash'>
                          document.cookie = "username=user; expires=Thu, 18 Dec
                          2013 12:00:00 UTC; path=/";
                        </code>
                      </pre>
                    </div>
                  </div>
                  <h2 className='content__title'>
                    Read a Cookie With JavaScript:
                  </h2>
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>
                        With JavaScript, cookies can be read like this
                      </div>
                      <pre className='terminal-code language-bash' tabIndex='0'>
                        <code className='language-bash'>
                          var x = document.cookie;
                        </code>
                      </pre>
                    </div>
                  </div>
                  <h2 className='content__title'>
                    Change a Cookie With JavaScript:
                  </h2>
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>
                        With JavaScript, you can change a cookie the same way as
                        you create it
                      </div>
                      <pre className='terminal-code language-bash' tabIndex='0'>
                        <code className='language-bash'>
                          document.cookie = "username= test ; expires=Thu, 18
                          Aug 2020 12:00:00 UTC; path=/";
                        </code>
                      </pre>
                    </div>
                  </div>
                  <h2 className='content__title'>
                    Delete a Cookie With JavaScript:
                  </h2>
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top' style={{ fontSize: 12 }}>
                        Deleting a cookie is very simple. You don't have to
                        specify a cookie value when you delete a cookie. Just
                        set the expires parameter to a passed date:
                      </div>
                      <pre className='terminal-code language-bash' tabIndex='0'>
                        <code className='language-bash'>
                          document.cookie = "username=test; expires=Thu, 01 Jan
                          1970 00:00:00 UTC; path=/;";
                        </code>
                      </pre>
                    </div>
                  </div>
                  <h2 className='content__title'>
                    A Function to Set a Cookie:
                  </h2>
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>
                        First, we create a function that stores the name of the
                        visitor in a cookie variable:
                      </div>
                      <pre className='terminal-code language-bash' tabIndex='0'>
                        <code className='language-bash'>
                          function setCookie(cname, cvalue, exdays) {'{'}
                          <br />
                          {'        '}var d = new Date();
                          <br />
                          {'        '}d.setTime(d.getTime() +
                          (exdays*24*60*60*1000));
                          <br />
                          {'        '}var expires = "expires="+ d.toUTCString();
                          <br />
                          {'        '}document.cookie = cname + "=" + cvalue +
                          ";" + expires + ";path=/";
                          <br />
                          {'}'}
                        </code>
                      </pre>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/cookies/cookies_lab')}
                className='go-to'>
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}

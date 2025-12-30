import React from 'react';
import Header from '../../Header/Header';
import courseImage from '../../assets/img/Burp_Suit/Icon_Burp_Suit.png';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import './BurpSuit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import GoTop from '../../Components/Go2Top_Btn/Go2Top_Btn';
import exampleImage1 from '../../assets/img/Burp_Suit/1.png';
import exampleImage2 from '../../assets/img/Burp_Suit/2.png';
import exampleImage3 from '../../assets/img/Burp_Suit/3.png';
import exampleImage4 from '../../assets/img/Burp_Suit/4.png';
import exampleImage5 from '../../assets/img/Burp_Suit/5.png';
import exampleImage6 from '../../assets/img/Burp_Suit/6.png';
import exampleImage7 from '../../assets/img/Burp_Suit/7.png';
import exampleImage8 from '../../assets/img/Burp_Suit/8.png';
import exampleImage9 from '../../assets/img/Burp_Suit/9.png';
import exampleImage10 from '../../assets/img/Burp_Suit/10.png';
import exampleImage11 from '../../assets/img/Burp_Suit/11.png';
import exampleImage12 from '../../assets/img/Burp_Suit/12.png';
import exampleImage13 from '../../assets/img/Burp_Suit/13.png';
import exampleImage14 from '../../assets/img/Burp_Suit/14.png';
import exampleImage15 from '../../assets/img/Burp_Suit/15.png';
import exampleImage16 from '../../assets/img/Burp_Suit/16.png';
import exampleImage17 from '../../assets/img/Burp_Suit/17.png';
import exampleImage18 from '../../assets/img/Burp_Suit/18.png';
import exampleImage19 from '../../assets/img/Burp_Suit/19.png';

export default function BurpSuit() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Burp Suite Mastery',
      ar: 'احتراف برنامج بيرب سويت (Burp Suite)',
    },
    description: {
      en: 'Learn the industry-standard tool for web application security. Master the Proxy, Repeater, and Intruder modules to intercept traffic, perform manual testing, and automate attacks.',
      ar: 'تعلم الأداة القياسية في عالم أمن تطبيقات الويب. أتقن وحدات البروكسي (Proxy)، والمكرر (Repeater)، والمقتحم (Intruder) لاعتراض حركة المرور، وإجراء الاختبارات اليدوية، وأتمتة الهجمات.',
    },
    difficulty: {
      en: 'Intermediate',
      ar: 'متوسط',
    },
    duration: {
      en: '60 min',
      ar: '60 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.9',
    students: '5200',
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
                {/* Single FAQ Area - Proxy */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 1</span> Proxy
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h2 className='faq-burp-title'>Intercepting a Request</h2>
                  <p className='faq-burp-description'>
                    Burp Proxy lets you intercept HTTP requests and responses
                    sent between Burp's browser and the target server. This
                    enables you to study how the website behaves when you
                    perform different actions.
                  </p>

                  <h2 className='faq-burp-step'>
                    Step 1: Launch Burp's Browser
                  </h2>
                  <p className='faq-burp-text'>
                    Go to the <strong>Proxy &gt; Intercept</strong> tab.
                  </p>
                  <p className='faq-burp-text'>
                    Set the intercept toggle to <strong>Intercept on</strong>.
                  </p>
                  <img
                    src={exampleImage1}
                    alt='Example'
                    className='faq-burp-image'
                  />
                  <p className='faq-burp-text'>
                    Click <strong>Open Browser</strong>. This launches Burp's
                    browser, preconfigured to work with Burp.
                  </p>

                  <h2 className='faq-burp-step'>Step 2: Intercept a Request</h2>
                  <p className='faq-burp-text'>
                    Using Burp's browser, try to visit{' '}
                    <a href='https://portswigger.net' className='faq-burp-link'>
                      portswigger.net
                    </a>{' '}
                    and observe that the site doesn't load. Burp Proxy has
                    intercepted the HTTP request before it reaches the server.
                    You can see this intercepted request on the Proxy &gt;
                    Intercept tab.
                  </p>
                  <img
                    src={exampleImage2}
                    alt='Example'
                    className='faq-burp-image'
                  />
                  <p className='faq-burp-text'>
                    The request is held here so you can study and modify it
                    before forwarding it to the target server..
                  </p>

                  <h2 className='faq-burp-step'>Step 3: Forward the Request</h2>
                  <p className='faq-burp-text'>
                    Click the <strong>Forward</strong> button to send the
                    intercepted request.
                  </p>
                  <p className='faq-burp-text'>
                    Click <strong>Forward</strong> again to send subsequent
                    requests until the page loads intercepted, until the page
                    loads in Burp's browser. The Forward button sends all the
                    selected requests.
                  </p>

                  <h2 className='faq-burp-step'>
                    Step 4: Switch Off Interception
                  </h2>
                  <p className='faq-burp-text'>
                    Since browsers send many requests, you might not want to
                    intercept every one. Set the intercept toggle to{' '}
                    <strong>Intercept off</strong>.
                  </p>
                  <img
                    src={exampleImage3}
                    alt='Example'
                    className='faq-burp-image'
                  />
                  <p className='faq-burp-text'>
                    Go back to the browser and confirm you can interact with the
                    site normally.
                  </p>

                  <h2 className='faq-burp-step'>
                    Step 5: View the HTTP History
                  </h2>
                  <p className='faq-burp-text'>
                    In Burp, go to the <strong>Proxy &gt; HTTP history</strong>{' '}
                    tab. Here, you can see all HTTP traffic that has passed
                    through Burp Proxy even while intercept was switched off.
                  </p>
                  <p className='faq-burp-text'>
                    Click on any entry in the history to view the raw HTTP
                    request, along with the corresponding response from the
                    server.
                  </p>
                  <img
                    src={exampleImage4}
                    alt='Example'
                    className='faq-burp-image'
                  />
                  <p className='faq-burp-text'>
                    This lets you explore the website as normal and study the
                    interactions between Burp's browser and the server
                    afterward, which is more convenient in many cases.
                  </p>
                </dd>

                {/* Single FAQ Area - Intruder */}
                <dt className='fadeInUp faq-header'>
                  <span className='topic-number'>Topic 2</span> Intruder
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <h2 className='faq-burp-title'>What is Burp Intruder?</h2>
                    <p className='faq-burp-text'>
                      Burp Intruder is a powerful tool for performing highly
                      customizable, automated attacks against websites. It
                      enables you to configure attacks that send the same
                      request over and over again, inserting different payloads
                      into predefined positions each time. Among other things,
                      you can use Intruder to:
                    </p>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <b className='content__subtitle'>
                          Fuzz for input-based vulnerabilities.
                        </b>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <b className='content__subtitle'>
                          Perform brute-force attacks.
                        </b>
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <b className='content__subtitle'>
                          Enumerate valid identifiers and other inputs.
                        </b>
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <b className='content__subtitle'>
                          Harvest useful data.
                        </b>
                      </li>
                    </ul>
                    <p className='faq-burp-text'>
                      The best way to understand how Burp Intruder works is to
                      see it in action. You can follow the tutorial below to
                      launch your first Intruder attack.
                    </p>
                    <p className='faq-burp-text'>
                      For more detailed information about the features and
                      attack types of Burp Intruder, please see{' '}
                      <a
                        className='faq-burp-link'
                        href='https://portswigger.net/burp/documentation/desktop/tools/intruder/uses'>
                        Typical uses for Burp Intruder
                      </a>
                      .
                    </p>
                    <h2 className='faq-burp-step'>Access the lab</h2>
                    <p className='faq-burp-text'>
                      Open Burp's browser, and use it to access the following
                      URL:
                      <a
                        className='faq-burp-link'
                        href='http://localhost:3000/Burp_Suit/Burp_Suit_Labs/lab2'>
                        http://localhost:3000/Burp_Suit/Burp_Suit_Labs/lab2
                      </a>
                      Click Access the lab and log in to your PortSwigger
                      account if prompted. This opens your own instance of a
                      deliberately vulnerable blog website.
                    </p>
                    <h2 className='faq-burp-step'>Try to log in</h2>
                    <p className='faq-burp-text'>
                      {' '}
                      try to log in using an invalid username and password.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage5}
                      alt='Example'
                    />
                    <p className='faq-burp-text'>
                      In Burp Suite, go to the<strong> Proxy &gt; HTTP </strong>{' '}
                      history tab. This shows the requests you have made in
                      Burp's browser since opening it. Find the
                      <strong> POST /login</strong> request. Highlight the value
                      of the username parameter, then right-click the request
                      and select Send to Intruder.
                    </p>
                    <h2 className='faq-burp-step'>Set the payload position</h2>
                    <p className='faq-burp-text'>
                      Go to Intruder. Observe that there is now a tab displaying
                      the POST /login request. We'll use this as the base
                      request for our attack. Notice that the value of the
                      username parameter that you previously highlighted is now
                      marked as a payload position. This is indicated by the §
                      characters at the beginning and end of the value. Burp
                      Intruder will insert payloads at this position during the
                      attack.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage6}
                      alt='Example'
                    />
                    <h2 className='faq-burp-step'>Select an attack type</h2>
                    <p className='faq-burp-text'>
                      At the top of the screen, you can select different attack
                      types. For now, just make sure this is set to{' '}
                      <strong>Sniper attack</strong> .
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage7}
                      alt='Example'
                    />
                    <h2 className='faq-burp-step'>Add the payloads</h2>
                    <p className='faq-burp-text'>
                      You now just need to configure the list of payloads that
                      you want to use. For this demonstration, we'll try sending
                      the request with different usernames to test how the login
                      mechanism behaves.
                    </p>
                    <p className='faq-burp-text'>
                      In the Payloads side panel, leave the Payload type set to
                      Simple list. In the Payload configuration field, click
                      Paste to add the copied usernames to the list. Notice that
                      the Payload count and Request count update to 101. These
                      values reflect the number of payloads added and the
                      requests the attack will send.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage8}
                      alt='Example'
                    />
                    <h2 className='faq-burp-step'>Start the attack</h2>

                    <p className='faq-burp-text'>
                      Click<strong> Start attack</strong>. This opens a new
                      attack window in which you can see each of the requests
                      that Burp Intruder is making. If you select one of the
                      entries in the table, you can view the request and
                      response in the message editor. Notice that the username
                      parameter contains a different value from our payload list
                      in each request.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage9}
                      alt='Example'
                    />
                    <br></br>
                    <h2 className='faq-burp-step'>
                      Look for any irregular responses
                    </h2>
                    <br></br>
                    <p className='faq-burp-text'>
                      The attack window contains several columns displaying key
                      information about each response.Wait for the attack to
                      finish, then click the heading of the Length column to
                      sort the results. As you can see, one of the responses is
                      a different length.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage10}
                      alt='Example'
                    />
                    <br></br>
                    <h2 className='faq-burp-step'>What next?</h2>
                    <p className='faq-burp-text'>
                      Now that you have a potentially correct username, the next
                      logical step is to try to brute-force the password.Try
                      repeating this attack, using the username you have
                      identified and this list of candidate passwords.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage11}
                      alt='Example'
                    />
                  </div>
                </dd>

                {/* Single FAQ Area - Repeater */}
                <dt className='fadeInUp faq-header'>
                  <span className='topic-number'>Topic 3</span> Repeater
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <h2 className='faq-burp-title'>
                      Reissue requests with Burp Repeater
                    </h2>
                    <p className='faq-burp-desciption'>
                      In this tutorial, you'll use Burp Repeater to send an
                      interesting request over and over again. This lets you
                      study the target website's response to different input
                      without having to intercept the request each time. This
                      makes it much simpler to probe for vulnerabilities, or
                      confirm ones that were identified by Burp Scanner, for
                      example.
                    </p>
                    <h2 className='faq-burp-title'>
                      Sending a request to Burp Repeater
                    </h2>
                    <p className='faq-burp-text'>
                      The most common way of using Burp Repeater is to send it a
                      request from another of Burp's tools. In this example,
                      we'll send a request from the HTTP history in Burp Proxy.
                    </p>
                    <h3 className='faq-burp-step'>
                      Step 1: Identify an interesting request
                    </h3>
                    <p className='faq-burp-text'>
                      In the previous tutorial, you browsed a fake shopping
                      website. Notice that each time you accessed a product
                      page, the browser sent a GET /product request with a
                      productId query parameter.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage12}
                      alt='Example'
                    />
                    <h3 className='faq-burp-step'>
                      Step 2: Send the request to Burp Repeater
                    </h3>
                    <p className='faq-burp-text'>
                      Right-click on any of the GET /product?productId=[...]
                      requests and select Send to Repeater.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage13}
                      alt='Example'
                    />
                    <p className='faq-burp-text'>
                      Go to the Repeater tab to see that your request is waiting
                      for you in its own numbered tab.
                    </p>
                    <h3 className='faq-burp-step'>
                      Step 3: Send the request and view the response
                    </h3>
                    <p>
                      Click Send and view the response from the server. You can
                      resend this request as many times as you like and the
                      response will be updated each time.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage14}
                      alt='Example'
                    />
                    <br></br>
                    <h3 className='faq-burp-title'>
                      Testing different input with Burp Repeater
                    </h3>
                    <p className='faq-burp-text'>
                      By resending the same request with different input each
                      time, you can identify and confirm a variety of
                      input-based vulnerabilities. This is one of the most
                      common Topics you will perform during manual testing with
                      Burp Suite.
                    </p>
                    <h4 className='faq-burp-step'>
                      Step 1: Resend the request with different input
                    </h4>
                    <p className='faq-burp-text'>
                      Change the number in the <strong>productId</strong>{' '}
                      parameter and resend the request. Try this with a few
                      arbitrary numbers, including a couple of larger ones.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage15}
                      alt='Example'
                    />
                    <h4 className='faq-burp-step'>
                      Step 2: View the request history
                    </h4>
                    <p className='faq-burp-text'>
                      Use the arrows to step back and forth through the history
                      of requests that you've sent, along with their matching
                      responses. The drop-down menu next to each arrow also lets
                      you jump to a specific request in the history.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage16}
                      alt='Example'
                    />
                    <h4 className='faq-burp-step'>
                      Step 3: Try sending unexpected input
                    </h4>
                    <p className='faq-burp-text'>
                      The server seemingly expects to receive an integer value
                      via this <strong>productId</strong> parameter. Let's see
                      what happens if we send a different data type.
                    </p>
                    <p className='faq-burp-text'>
                      Send another request where the productId is a string of
                      characters.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage17}
                      alt='Example'
                    />
                    <h4 className='faq-burp-step'>
                      Step 4: Study the response
                    </h4>
                    <p className='faq-burp-text'>
                      Observe that sending a non-integer productId has caused an
                      exception. The server has sent a verbose error response
                      containing a stack trace.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage18}
                      alt='Example'
                    />
                    <p className='faq-burp-text'>
                      Notice that the response tells you that the website is
                      using the Apache Struts framework - it even reveals which
                      version.
                    </p>
                    <img
                      className='faq-burp-image'
                      src={exampleImage19}
                      alt='Example'
                    />
                    <p className='faq-burp-text'>
                      In a real scenario, this kind of information could be
                      useful to an attacker, especially if the named version is
                      known to contain additional vulnerabilities.
                    </p>
                  </div>
                </dd>

                {/* Single FAQ Area - Decoder */}
                <dt className='fadeInUp faq-header'>
                  <span className='topic-number'>Topic 4</span> Decoder
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <p className='faq-burp-text'>
                      Burp Decoder enables you to transform data using common
                      encoding and decoding formats. You can use Decoder to:
                    </p>
                    <ul>
                      {[
                        'Manually decode data.',
                        'Automatically identify and decode recognizable encoding formats, such as URL-encoding.',
                        'Transform raw data into various encoded and hashed formats.',
                      ].map((text, index) => (
                        <li key={index}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <b className='content__subtitle'>{text}</b>
                        </li>
                      ))}
                    </ul>

                    <p className='faq-burp-text'>
                      Decoder enables you to apply layers of transformations to
                      the same data. This enables you to unpack or apply complex
                      encoding schemes. For example, to generate modified data
                      in the correct format for an attack, you could:
                    </p>
                    <ul>
                      {[
                        'Apply URL-decoding, then HTML-decoding.',
                        'Edit the decoded data.',
                        'Reapply the HTML-encoding, then the URL-encoding.',
                      ].map((text, index) => (
                        <li key={index}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <b className='content__subtitle'>{text}</b>
                        </li>
                      ))}
                    </ul>

                    <h3>Carrying out transformations</h3>
                    <p className='faq-burp-text'>
                      You can send data to Burp Decoder from the message editor
                      in various Burp tools, such as HTTP history. To carry out
                      a data transformation using Burp Decoder:
                    </p>
                    <ul className='custom-transformation-list'>
                      {[
                        '1. Locate the data that you want to analyze.',
                        '2. Right-click the data in the message editor and select Send to Decoder.',
                        '3. Go to the Decoder tab. The data is in the top panel.',
                        '4. Apply the transformation you want to use. Select the operation you want to perform on the data from the controls beside the data panel. For example, Encode as or Smart decode.',
                      ].map((text, index) => (
                        <li key={index}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <b>{text}</b>
                        </li>
                      ))}
                    </ul>

                    <p className='faq-burp-text'>
                      When you carry out a transformation, a new editor panel
                      opens with the transformed data. You can then apply
                      further transformations as required. For each
                      transformation, the following applies:
                    </p>
                    <ul className='custom-transformation-list'>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        The transformation applies to the whole data set. To
                        apply the transformation to only a portion of the data,
                        select the relevant section before you choose an
                        operation.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        The data is color-coded to indicate the type of encoding
                        or decoding that is applied.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Any parts of the data that aren't transformed are copied
                        into the new panel in their raw form.
                      </li>
                    </ul>
                    <p className='faq-burp-text'>
                      The following decode and encode functions are available:
                    </p>
                    <ul>
                      {[
                        'URL',
                        'HTML',
                        'Base64',
                        'ASCII hex',
                        'Hex',
                        'Octal',
                        'Binary',
                        'GZIP',
                      ].map((text, index) => (
                        <li key={index}>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <b className='content__subtitle'>{text}</b>
                        </li>
                      ))}
                    </ul>
                  </div>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/Burp_Suit/Burp_Suit_Labs')}
                className='go-to'>
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      <GoTop />
      <Footer />
    </>
  );
}

// ............

// card

// <dt className="fadeInUp faq-header">
// <span>Module 3</span> Bypassing Simple Captchas using Python
// </dt>
// <dd className="fadeInUp faq-body" id="border-left">
// </dd>

// ..............

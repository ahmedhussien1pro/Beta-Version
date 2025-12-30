import React from 'react';
import Header from '../../Header/Header';
import courseImage from '../../assets/img/Condition_Race/race condition icon.jpg';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import GoTop from '../../Components/Go2Top_Btn/Go2Top_Btn';
import exampleImage1 from '../../assets/img/Condition_Race/1.png';
import exampleImage2 from '../../assets/img/Condition_Race/2.png';
import exampleImage3 from '../../assets/img/Condition_Race/3.png';
import exampleImage4 from '../../assets/img/Condition_Race/4.png';
import exampleImage5 from '../../assets/img/Condition_Race/5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function RaceCondition() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Race Condition',
      ar: 'حالة السباق (Race Condition)',
    },
    description: {
      en: 'Explore vulnerabilities that occur when multiple threads or processes access shared resources simultaneously. Learn to exploit timing issues and implement proper synchronization.',
      ar: 'استكشف الثغرات التي تحدث عندما تحاول عمليات متعددة الوصول إلى الموارد المشتركة في وقت واحد. تعلم كيفية استغلال مشاكل التوقيت وتطبيق المزامنة الصحيحة.',
    },
    difficulty: {
      en: 'Advanced',
      ar: 'متقدم',
    },
    duration: {
      en: '50 min',
      ar: '50 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.9',
    students: '1240',
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
                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 1</span>Definition and Causes
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    <strong className='content__subtitle'>
                      Race conditions
                    </strong>
                    are a common type of vulnerability closely related to
                    business logic flaws. They occur when websites process
                    requests concurrently without adequate safeguards. This can
                    lead to multiple distinct threads interacting with the same
                    data at the same time, resulting in a "collision" that
                    causes unintended behavior in the application. A race
                    condition attack uses carefully timed requests to cause
                    intentional collisions and exploit this unintended behavior
                    for malicious purposes.
                  </p>
                  <img
                    className='img-fluid w-50 mx-auto d-block'
                    src={exampleImage1}
                    alt='Example'
                  />
                  <br></br>
                  <br></br>
                  <p>
                    The period of time during which a collision is possible is
                    known as the "race window". This could be the fraction of a
                    second between two interactions with the database, for
                    example.
                  </p>
                  <p>
                    Like other logic flaws, the impact of a race condition is
                    heavily dependent on the application and the specific
                    functionality in which it occurs.
                  </p>
                  <p>
                    In this section, you'll learn how to identify and exploit
                    different types of race condition. We'll teach you how Burp
                    Suite's built-in tooling can help you to overcome the
                    challenges of performing classic attacks, plus a tried and
                    tested methodology that enables you to detect novel classes
                    of race condition in hidden multi-step processes. These go
                    far beyond the limit overruns that you may be familiar with
                    already.
                  </p>
                </dd>

                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span>Limit overrun race conditions
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    The most well-known type of race condition enables you to
                    exceed some kind of limit imposed by the business logic of
                    the application.
                  </p>
                  <p>
                    For example, consider an online store that lets you enter a
                    promotional code during checkout to get a one-time discount
                    on your order. To apply this discount, the application may
                    perform the following high-level steps:
                  </p>
                  <ul>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <b className='content__subtitle'>
                        {' '}
                        Check that you haven't already used this code.
                      </b>
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <b className='content__subtitle'>
                        Apply the discount to the order total.
                      </b>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <b className='content__subtitle'>
                        Update the record in the database to reflect the fact
                        that you've now used this code.
                      </b>
                    </li>
                  </ul>
                  <p>
                    If you later attempt to reuse this code, the initial checks
                    performed at the start of the process should prevent you
                    from doing this:
                  </p>
                  <img
                    className='img-fluid w-50 mx-auto d-block'
                    src={exampleImage2}
                    alt='Example'
                  />
                  <br></br>
                  <br></br>
                  <p>
                    Now consider what would happen if a user who has never
                    applied this discount code before tried to apply it twice at
                    almost exactly the same time:
                  </p>
                  <img
                    className='img-fluid w-50 mx-auto d-block'
                    src={exampleImage3}
                    alt='Example'
                  />
                  <br></br>
                  <br></br>
                  <p>
                    As you can see, the application transitions through a
                    temporary sub-state; that is, a state that it enters and
                    then exits again before request processing is complete. In
                    this case, the sub-state begins when the server starts
                    processing the first request, and ends when it updates the
                    database to indicate that you've already used this code.
                    This introduces a small race window during which you can
                    repeatedly claim the discount as many times as you like.
                  </p>
                  <p>
                    There are many variations of this kind of attack, including:
                  </p>
                  <ul>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Redeeming a gift card multiple times
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Rating a product multiple times
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Withdrawing or transferring cash in excess of your account
                      balance
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Reusing a single CAPTCHA solution
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Bypassing an anti-brute-force rate limit
                    </li>
                  </ul>
                  <p>
                    Limit overruns are a subtype of so-called "time-of-check to
                    time-of-use" (TOCTOU) flaws. Later in this topic, we'll look
                    at some examples of race condition vulnerabilities that
                    don't fall into either of these categories.
                  </p>
                </dd>

                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span>Detecting and exploiting limit overrun
                  race conditions with Burp Repeater
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    The process of detecting and exploiting limit overrun race
                    conditions is relatively simple. In high-level terms, all
                    you need to do is:
                  </p>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Identify a single-use or rate-limited endpoint that has
                      some kind of security impact or other useful purpose.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Issue multiple requests to this endpoint in quick
                      succession to see if you can overrun this limit.
                    </li>
                  </ul>
                  <p>
                    The primary challenge is timing the requests so that at
                    least two race windows line up, causing a collision. This
                    window is often just milliseconds and can be even shorter.
                  </p>
                  <p>
                    Even if you send all of the requests at exactly the same
                    time, in practice there are various uncontrollable and
                    unpredictable external factors that affect when the server
                    processes each request and in which order.
                  </p>
                  <img
                    className='img-fluid w-50 mx-auto d-block'
                    src={exampleImage4}
                    alt='Example'
                  />
                  <br></br>
                  <br></br>
                  <p>
                    <strong className='content__subtitle'>
                      Burp Suite 2023.9
                    </strong>{' '}
                    adds powerful new capabilities to Burp Repeater that enable
                    you to easily send a group of parallel requests in a way
                    that greatly reduces the impact of one of these factors,
                    namely network jitter. Burp automatically adjusts the
                    technique it uses to suit the HTTP version supported by the
                    server:
                  </p>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      For HTTP/1.x servers, Burp sends all requests in parallel
                      over a single connection, which reduces the impact of
                      network jitter.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      For HTTP/2 servers, Burp sends all requests in parallel
                      over multiple connections, which is more efficient and
                      also reduces the impact of network jitter.
                    </li>
                  </ul>
                  <p>
                    The single-packet attack enables you to completely
                    neutralize interference from network jitter by using a
                    single TCP packet to complete 20-30 requests simultaneously.
                  </p>
                  <img
                    className='img-fluid w-50 mx-auto d-block'
                    src={exampleImage5}
                    alt='Example'
                  />
                  <br></br>
                  <br></br>
                  <p>
                    Although you can often use just two requests to trigger an
                    exploit, sending a large number of requests like this helps
                    to mitigate internal latency, also known as server-side
                    jitter. This is especially useful during the initial
                    discovery phase. We'll cover this methodology in more
                    detail.
                  </p>
                </dd>

                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span>Hidden multi-step sequences
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    In practice, a single request may initiate an entire
                    multi-step sequence behind the scenes, transitioning the
                    application through multiple hidden states that it enters
                    and then exits again before request processing is complete.
                    We'll refer to these as "sub-states".
                  </p>
                  <p>
                    If you can identify one or more HTTP requests that cause an
                    interaction with the same data, you can potentially abuse
                    these sub-states to expose time-sensitive variations of the
                    kinds of logic flaws that are common in multi-step
                    workflows. This enables race condition exploits that go far
                    beyond limit overruns.
                  </p>
                  <p>
                    For example, you may be familiar with flawed{' '}
                    <strong className='content__subtitle'>
                      {' '}
                      multi-factor authentication (MFA)
                    </strong>{' '}
                    workflows that let you perform the first part of the login
                    using known credentials, then navigate straight to the
                    application via forced browsing, effectively bypassing MFA
                    entirely.
                  </p>
                  <p>
                    The following pseudo-code demonstrates how a website could
                    be vulnerable to a race variation of this attack:
                  </p>
                  <code className='content__code'>
                    session['userid'] = user.userid
                  </code>
                  <br></br>
                  <code className='content__code'>if user.mfa_enabled:</code>
                  <br></br>

                  <code className='content__code'>
                    session['enforce_mfa'] = True
                  </code>
                  <br></br>

                  <code className='content__code'>
                    # generate and send MFA code to user
                  </code>
                  <br></br>

                  <code className='content__code'>
                    # redirect browser to MFA code entry form
                  </code>
                  <br></br>

                  <p>
                    As you can see, this is in fact a multi-step sequence within
                    the span of a single request. Most importantly, it
                    transitions through a sub-state in which the user
                    temporarily has a valid logged-in session, but MFA isn't yet
                    being enforced. An attacker could potentially exploit this
                    by sending a login request along with a request to a
                    sensitive, authenticated endpoint.
                  </p>
                  <p>
                    We'll look at some more examples of hidden multi-step
                    sequences later, and you'll be able to practice exploiting
                    them in our interactive labs. However, as these
                    vulnerabilities are quite application-specific, it's
                    important to first understand the broader methodology you'll
                    need to apply in order to identify them efficiently, both in
                    the labs and in the wild.
                  </p>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() =>
                  handleGoToLab('/Race_Condition/Race_Condition_Labs')
                }
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

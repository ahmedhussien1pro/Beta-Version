import React from 'react';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import courseImage from '../../../assets/img/CareersInCyber/IR/courseImage.png';
import UseFaqSection from '../../../Components/UseFaqSection/UseFaqSection.jsx';
import Banner from '../../../Components/Banner/Banner.jsx';
import CourseLanding from '../../../Components/Landing/CourseLanding.jsx';
import Go2TopBtn from '../../../Components/Go2Top_Btn/Go2Top_Btn.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function AC_Vuln() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Incident Responder',
      ar: 'مستجيب الحوادث الأمنية (Incident Responder)',
    },
    description: {
      en: 'Learn to manage and mitigate active security breaches. Master the incident response lifecycle, from detection and containment to eradication and recovery, based on NIST and SANS frameworks.',
      ar: 'تعلم كيفية إدارة وتخفيف حدة الاختراقات الأمنية النشطة. أتقن دورة حياة الاستجابة للحوادث، من الكشف والاحتواء إلى القضاء على التهديد والاسترداد، بناءً على أطر عمل NIST وSANS.',
    },
    difficulty: {
      en: 'Advanced',
      ar: 'متقدم',
    },
    duration: {
      en: '80 min',
      ar: '80 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.9',
    students: '3200',
  };

  return (
    <>
      <Banner />
      <Header />
      {/* Start Landing */}
      <CourseLanding {...data} />
      {/* End Landing */}
      {/* Start Course */}

      <div className='Content '>
        <div className='secure-container' ref={faqSectionRef}>
          <div className='content-row'>
            <div className='content-section'>
              <dl className='topics-text'>
                {/* Intro */}
                <dt className='fadeInUp faq-header'>
                  <span>Intro </span> Introduction to Incident Responder Career
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <h3 className='content__title'>
                    What is an Incident Responder?
                  </h3>
                  <p>
                    An Incident Responder is a cybersecurity professional
                    responsible for detecting, analyzing, and mitigating
                    security incidents. They work quickly to contain breaches,
                    minimize damage, and restore normal operations.
                  </p>

                  <p>
                    This role requires expertise in threat detection, digital
                    forensics, and effective communication to coordinate with
                    technical teams and stakeholders during high-pressure
                    situations.
                  </p>
                  <h3 className='content__title'>
                    Key Areas in an Incident Responder Career
                  </h3>
                  <ol>
                    <li>
                      <b className='content__subtitle'>
                        Incident Detection & Monitoring:
                      </b>{' '}
                      &nbsp; Continuous surveillance to quickly identify
                      anomalies and potential threats.
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 my-0 text-warning'
                          />{' '}
                          Example: Utilizing SIEM tools and IDS/IPS systems.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className='content__subtitle'>Triage & Containment:</b>{' '}
                      &nbsp; Assessing incident severity and isolating affected
                      systems to prevent further spread.
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 my-0 text-warning'
                          />{' '}
                          Example: Rapidly disconnecting compromised nodes.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className='content__subtitle'>
                        Investigation & Root Cause Analysis:
                      </b>{' '}
                      &nbsp; Determining how an incident occurred and
                      identifying vulnerabilities for remediation.
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 my-0 text-warning'
                          />{' '}
                          Example: Conducting digital forensics and log
                          analysis.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className='content__subtitle'>
                        Communication & Documentation:
                      </b>{' '}
                      &nbsp; Recording incident details and clearly reporting
                      findings to both technical teams and executives.
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 my-0 text-warning'
                          />{' '}
                          Example: Preparing detailed incident reports and
                          executive summaries.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </dd>
                {/* Topic 1 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 1</span> Incident Detection & Monitoring
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <h3 className='content__title'>Detection & Monitoring:</h3>
                  <p>
                    Incident Responders leverage various tools to monitor
                    networks and systems. Continuous monitoring is key to
                    identifying unusual behavior, malicious activities, or
                    breaches early on.
                  </p>
                </dd>
                {/* Topic 2 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span> Triage & Containment
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <h3 className='content__title'>Triage & Containment:</h3>
                  <p>
                    Once an incident is detected, rapid triage is critical.
                    Incident Responders assess the severity and scope of the
                    breach to prioritize response actions. Immediate containment
                    helps prevent lateral movement and additional damage.
                  </p>
                  <ol>
                    <li>
                      <b className='content__subtitle'>Initial Assessment:</b>{' '}
                      Evaluate the impact and urgency of the incident.
                    </li>
                    <li>
                      <b className='content__subtitle'>Isolation:</b> Disconnect
                      affected systems or networks to contain the threat.
                    </li>
                  </ol>
                </dd>
                {/* Topic 3 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span> Investigation & Root Cause Analysis
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <h3 className='content__title'>Investigation & Analysis:</h3>
                  <p>
                    After containment, a thorough investigation helps identify
                    the attack vector, scope of impact, and vulnerabilities
                    exploited. Root cause analysis enables the development of
                    effective remediation strategies.
                  </p>
                  <ol>
                    <li>
                      <b className='content__subtitle'>Forensic Analysis:</b>{' '}
                      Use digital forensics to trace the incident and gather
                      evidence.
                    </li>
                    <li>
                      <b className='content__subtitle'>Remediation Planning:</b>{' '}
                      Develop a plan to close vulnerabilities and strengthen
                      defenses.
                    </li>
                  </ol>
                </dd>
                {/* Topic 4 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span> Communication & Documentation
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <h3 className='content__title'>Communication & Reporting:</h3>
                  <p>
                    Clear communication during and after an incident is
                    essential. Incident Responders document every step of the
                    process, ensuring that both technical teams and management
                    are informed and prepared for future incidents.
                  </p>
                  <ol>
                    <li>
                      <b className='content__subtitle'>Incident Reports:</b>{' '}
                      Detailed records of actions taken, findings, and lessons
                      learned.
                    </li>
                    <li>
                      <b className='content__subtitle'>Executive Summaries:</b>{' '}
                      Concise overviews highlighting business impact and key
                      recommendations.
                    </li>
                  </ol>
                </dd>
                {/* Topic 5 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 5</span> Career Path & Certifications
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <h3 className='content__title'>
                    Career Path and Professional Development:
                  </h3>
                  <p>
                    A successful career in incident response demands continuous
                    learning, practical experience, and professional
                    certification. Key steps include:
                  </p>
                  <ol>
                    <li>
                      <b className='content__subtitle'>Certifications:</b> Earn
                      credentials like GCFA, GCIH, or CISSP.
                    </li>
                    <li>
                      <b className='content__subtitle'>Hands-On Labs:</b> Engage
                      in simulated incident response exercises to hone your
                      skills.
                    </li>
                    <li>
                      <b className='content__subtitle'>
                        Real-World Experience:
                      </b>{' '}
                      Participate in live incident management and post-incident
                      reviews.
                    </li>
                    <li>
                      <b className='content__subtitle'>
                        Professional Networking:
                      </b>{' '}
                      Join cybersecurity communities and attend industry
                      conferences.
                    </li>
                  </ol>
                  <div className='note'>
                    Read more from this link 👉🏻
                    <a
                      href='https://www.example.com/incident-responder-career'
                      className='border-0 bg-transparent link-primary text-decoration-underline'>
                      Incident Responder Career Resources
                    </a>
                  </div>
                </dd>
                {/* Topic 6 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 6</span> Hands-On Labs & Continuous Learning
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <h3 className='content__title'>Practical Experience:</h3>
                  <p>
                    Continuous hands-on practice is key to mastering incident
                    response techniques. Engage in labs, simulations, and
                    real-world exercises to refine your ability to detect,
                    analyze, and remediate incidents.
                  </p>
                  <ol>
                    <li>
                      <b className='content__subtitle'>
                        Simulated Environments:
                      </b>{' '}
                      Practice with realistic incident scenarios.
                    </li>
                    <li>
                      <b className='content__subtitle'>CTF Competitions:</b>{' '}
                      Participate in challenges designed to test your incident
                      handling skills.
                    </li>
                    <li>
                      <b className='content__subtitle'>Workshops & Training:</b>{' '}
                      Attend specialized courses to stay current with emerging
                      threats.
                    </li>
                  </ol>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() =>
                  handleGoToLab(
                    '/CareersInCyber/CareersInCyber_MCQ/Incident_Responder/MCQ'
                  )
                }
                className='go-to'>
                Go To MCQ
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

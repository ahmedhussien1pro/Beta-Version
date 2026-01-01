import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import '../../Components/Topics CSS/topics.css';
import courseImage from '../../assets/img/CareersInCyber/courseImage.png';
import CareerImag from '../../assets/img/CareersInCyber/courseImage.png';
import RedTeamerImg from '../../assets/img/CareersInCyber/Red Teamer.png';
import PenetrationTesterImg from '../../assets/img/CareersInCyber/Penetration Tester.png';
import MalwareAnalystImg from '../../assets/img/CareersInCyber/Malware Analyst.png';
import DigitalForensicsExaminerImg from '../../assets/img/CareersInCyber/Digital Forensics Examiner.png';
import IncidentResponderImg from '../../assets/img/CareersInCyber/Incident Responder.png';
import SecurityEngineerImg from '../../assets/img/CareersInCyber/Security Engineer.png';
import SecurityAnalystImg from '../../assets/img/CareersInCyber/Security Analyst.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn.jsx';
export default function CareersInCyber() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Careers in Cyber',
      ar: 'الوظائف في الأمن السيبراني',
    },
    description: {
      en: 'Learn about the different careers in cyber security.',
      ar: 'تعرف على المسارات الوظيفية المختلفة في مجال الأمن السيبراني.',
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
    rating: '4.8',
    students: '2543',
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
                {/* Topic 1 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 1</span> Introduction
                </dt>
                <dd className='fadeInUp faq-body open-sans'>
                  <div className='faq-content'>
                    <h3 className='content__title'> Career In CyberSecurity</h3>
                    <div className='Content__img--box'>
                      <img
                        className='img-fluid w-25 mx-auto d-block'
                        src={CareerImag}
                        alt='Career In CyberSecurity'
                      />
                    </div>
                    <hr />
                    <p>
                      Cyber security careers are becoming more in demand and
                      offer high salaries. There are many different jobs within
                      the security industry, from offensive PenTesting (hacking
                      machines and reporting on vulnerabilities) to defensive
                      security (defending against and investigating
                      cyberAttacks).
                    </p>
                    <div>
                      <h3 className='content__title'>
                        Why get a career in cyber:
                      </h3>
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <b className='content__subtitle'> High Pay</b> - jobs
                          in security have high starting salaries
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <b className='content__subtitle'> Exciting </b>- work
                          can include legally hacking systems or defending
                          against cyber attacks
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <b className='content__subtitle'> Be in demand </b>-
                          there are over 3.5 million unfilled cyber positions
                        </li>
                      </ul>
                    </div>

                    <p className='note'>
                      This Content helps you break into cyber security by
                      providing information about various cyber security roles;
                      it also links to different learning paths that you can use
                      to start building your cyber skills.
                    </p>
                  </div>
                </dd>

                {/* Topic 2*/}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span>Security Analyst
                </dt>
                <dd className='fadeInUp faq-body open-sans'>
                  <div className='faq-content'>
                    <h3 className='content__title'>
                      {' '}
                      who is Security Analyst?
                    </h3>
                    <div className='Content__img--box'>
                      <img
                        className='img-fluid w-25 mx-auto d-block'
                        src={SecurityAnalystImg}
                        alt="Responsible for maintaining the security of an
                        organization's data"
                      />
                      <p className='image-caption'>
                        Responsible for maintaining the security of an
                        organization's data
                      </p>
                    </div>
                    <hr />
                    <p>
                      Security analysts are integral to constructing security
                      measures across organizations to protect the company from
                      attacks. Analysts explore and evaluate company networks to
                      uncover actionable data and recommendations for engineers
                      to develop preventative measures. This job role requires
                      working with various stakeholders to gain an understanding
                      of security requirements and the security landscape.
                    </p>
                    <h3 className='content__title'>Responsibilities</h3>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Working with various stakeholders to analyse the cyber
                        security throughout the company
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Compile ongoing reports about the safety of networks,
                        documenting security issues and measures taken in
                        response
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Develop security plans, incorporating research on new
                        attack tools and trends, and measures needed across
                        teams to maintain data security.
                      </li>
                    </ul>
                    <div className='note'>
                      <b className='text-danger'>Note! :</b> The Following Links
                      From TryHackMe Website
                    </div>
                    <b className='content__title'>Learning Paths</b>
                    <p>
                      TryHackMe's learning paths will give you both the
                      fundamental technical knowledge and hands-on experience,
                      which is crucial to becoming a successful Security
                      Analyst.
                    </p>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/path/outline/introtocyber'>
                          Introduction to Cyber Security
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/path/outline/presecurity/'>
                          Pre Security
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/path/outline/soclevel1'>
                          SOC Level 1
                        </a>
                      </li>
                    </ul>
                    <b className='content__title'>Relevant Career Guides</b>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/r/careers/cyber-security-analyst'>
                          Becoming a Cyber Security Analyst
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/r/resources/blog/become-level-1-soc-analyst'>
                          How to Become a Level 1 SOC Analyst
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/r/resources/blog/interview-with-soc-analyst'>
                          A Day in the Life of a SOC Analyst
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/r/resources/blog/soc-analyst-interview-guide'>
                          The Ultimate SOC L1 Analyst Interview Guide
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/r/resources/blog/haydens-success-story'>
                          From Student to SOC Analyst: Hayden’s Success Story
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='note fit-content'>
                    For More Info Follow This link 👉🏻{' '}
                    <button
                      onClick={() =>
                        handleGoToLab(
                          '/CareersInCyber/CareersInCyber_labs/ShowMore1'
                        )
                      }
                      className='go-to my-2'>
                      Security Analyst
                    </button>
                  </div>
                </dd>
                {/* Topic 3 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span>Security Engineer
                </dt>
                <dd className='fadeInUp faq-body open-sans'>
                  <div className='faq-content'>
                    <h3 className='content__title'>
                      Who is Security Engineer?{' '}
                    </h3>
                    <div className='Content__img--box'>
                      <img
                        className='img-fluid w-25 mx-auto d-block'
                        src={SecurityEngineerImg}
                        alt='Design, monitor and maintain security controls, networks, and systems to help prevent cyberattacks'
                      />
                      <p className='image-caption'>
                        Design, monitor and maintain security controls,
                        networks, and systems to help prevent cyberattacks
                      </p>
                    </div>
                    <hr />
                    <p>
                      Security engineers develop and implement security
                      solutions using threats and vulnerability data - often
                      sourced from members of the security workforce. Security
                      engineers work across circumventing a breadth of attacks,
                      including web application attacks, network threats, and
                      evolving trends and tactics. The ultimate goal is to
                      retain and adopt security measures to mitigate the risk of
                      attack and data loss.
                    </p>
                    <h3 className='content__title'>Responsibilities</h3>

                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Testing and screening security measures across software
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Monitor networks and reports to update systems and
                        mitigate vulnerabilities
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Identify and implement systems needed for optimal
                        security
                      </li>
                    </ul>
                    <div className='note'>
                      <b className='text-danger'>Note! :</b> The Following Links
                      From TryHackMe Website
                    </div>
                    <b className='content__title'>Learning Paths</b>
                    <p>
                      TryHackMe's learning paths will give you both the
                      fundamental technical knowledge and hands-on experience,
                      which is crucial to becoming a successful Security
                      Engineer.
                    </p>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/SecurityAnalyst'>
                          SOC Level 1
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/SecurityAnalyst'>
                          JR Penetration Tester
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/SecurityAnalyst'>
                          Offensive Pentesting
                        </a>
                      </li>
                    </ul>
                    <b className='content__title'>Relevant Career Guides</b>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/SecurityAnalyst'>
                          Becoming a Security Engineer
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/SecurityAnalyst'>
                          How to Become a Security Engineer
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/SecurityAnalyst'>
                          A Day in the Life of a Security Engineer
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/SecurityAnalyst'>
                          Preparing for a Security Engineering Interview
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/SecurityAnalyst'>
                          Becoming a Security Engineer: Richárd’s Success Story
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='note fit-content'>
                    For More Info Follow This link 👉🏻{' '}
                    <button
                      onClick={() =>
                        handleGoToLab(
                          '/CareersInCyber/CareersInCyber_labs/ShowMore7'
                        )
                      }
                      className='go-to my-2'>
                      Security Engineer
                    </button>
                  </div>
                </dd>
                {/* Topic 4*/}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span>Incident Responder
                </dt>
                <dd className='fadeInUp faq-body open-sans'>
                  <div className='faq-content'>
                    <h3 className='content__title'>
                      {' '}
                      who is Incident Responder?
                    </h3>
                    <div className='Content__img--box'>
                      <img
                        className='img-fluid w-25 mx-auto d-block'
                        src={IncidentResponderImg}
                        alt='Identifies and mitigates attacks whilst an attackers operations are still unfolding'
                      />
                      <p className='image-caption'>
                        Identifies and mitigates attacks whilst an attackers
                        operations are still unfolding
                      </p>
                    </div>
                    <p>
                      Incident responders respond productively and efficiently
                      to security breaches. Responsibilities include creating
                      plans, policies, and protocols for organisations to enact
                      during and following incidents. This is often a highly
                      pressurised position with assessments and responses
                      required in real-time, as attacks are unfolding. Incident
                      response metrics include MTTD, MTTA, and MTTR - the
                      meantime to detect, acknowledge, and recover (from
                      attacks.) The aim is to achieve a swift and effective
                      response, retain financial standing and avoid negative
                      breach implications. Ultimately, incident responders
                      protect the company's data, reputation, and financial
                      standing from cyber attacks.
                    </p>
                    <b className='content__title'>Responsibilities</b>
                    <div>
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Developing and adopting a thorough, actionable
                          incident response plan
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Maintaining strong security best practices and
                          supporting incident response measures
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Post-incident reporting and preparation for future
                          attacks, considering learnings and adaptations to take
                          from incidents
                        </li>
                      </ul>
                    </div>
                    <b className='content__title'>Learning Paths</b>
                    <p>
                      TryHackMe's learning paths will give you both the
                      fundamental technical knowledge and hands-on experience,
                      which is crucial to becoming a successful Incident
                      Responder.
                    </p>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/SecurityAnalyst'>
                          SOC Level 1
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='note fit-content'>
                    For More Info Follow This link 👉🏻{' '}
                    <button
                      onClick={() =>
                        handleGoToLab(
                          '/CareersInCyber/CareersInCyber_labs/ShowMore3'
                        )
                      }
                      className='go-to my-2'>
                      Incident Responder
                    </button>
                  </div>
                </dd>
                {/* Topic 5 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 5</span>Digital Forensics Examiner
                </dt>
                <dd className='fadeInUp faq-body open-sans'>
                  <div className='faq-content'>
                    <h3 className='content__title'>
                      {' '}
                      who is Digital Forensics Examiner?
                    </h3>
                    <div className='Content__img--box'>
                      <img
                        className='img-fluid w-25 mx-auto d-block'
                        src={DigitalForensicsExaminerImg}
                        alt='Responsible for using digital forensics to investigate incidents and crimes'
                      />
                      <p className='image-caption'>
                        Responsible for using digital forensics to investigate
                        incidents and crimes
                      </p>
                    </div>
                    <p>
                      If you like to play detective, this might be the perfect
                      job. If you are working as part of a law-enforcement
                      department, you would be focused on collecting and
                      analysing evidence to help solve crimes: charging the
                      guilty and exonerating the innocent. On the other hand, if
                      your work falls under defending a company's network, you
                      will be using your forensic skills to analyse incidents,
                      such as policy violations.
                    </p>
                    <b className='content__title'>Responsibilities</b>
                    <div>
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Collect digital evidence while observing legal
                          procedures
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Analyse digital evidence to find answers related to
                          the case
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Document your findings and report on the case
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='note fit-content'>
                    For More Info Follow This link 👉🏻{' '}
                    <button
                      onClick={() =>
                        handleGoToLab(
                          '/CareersInCyber/CareersInCyber_labs/ShowMore2'
                        )
                      }
                      className='go-to my-2'>
                      Digital Forensics Examiner
                    </button>{' '}
                    , And You can Explore Our Digital Forensics Room 👉🏻{' '}
                    <button
                      onClick={() => handleGoToLab('/Digital_Forensics')}
                      className='go-to my-2'>
                      Digital Forensics
                    </button>
                  </div>
                </dd>
                {/* Topic 6 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 6</span>Malware Analyst
                </dt>
                <dd className='fadeInUp faq-body open-sans'>
                  <div className='faq-content'>
                    <h3 className='content__title'> who is Malware Analyst?</h3>
                    <div className='Content__img--box'>
                      <img
                        className='img-fluid w-25 mx-auto d-block'
                        src={MalwareAnalystImg}
                        alt='Responsible for testing technology products for security loopholes'
                      />
                      <p className='image-caption'>
                        Analyses all types of malware to learn more about how
                        they work and what they do
                      </p>
                    </div>
                    <p>
                      A malware analyst's work involves analysing suspicious
                      programs, discovering what they do and writing reports
                      about their findings. A malware analyst is sometimes
                      called a reverse-engineer as their core task revolves
                      around converting compiled programs from machine language
                      to readable code, usually in a low-level language. This
                      work requires the malware analyst to have a strong
                      programming background, especially in low-level languages
                      such as assembly language and C language. The ultimate
                      goal is to learn about all the activities that a malicious
                      program carries out, find out how to detect it and report
                      it.
                    </p>
                    <b className='content__title'>Responsibilities</b>
                    <div>
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Carry out static analysis of malicious programs, which
                          entails reverse-engineering
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Conduct dynamic analysis of malware samples by
                          observing their activities in a controlled environment
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Document and report all the findings
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='note fit-content'>
                    For More Info Follow This link 👉🏻{' '}
                    <button
                      onClick={() =>
                        handleGoToLab(
                          '/CareersInCyber/CareersInCyber_labs/ShowMore4'
                        )
                      }
                      className='go-to my-2'>
                      Malware Analyst
                    </button>
                  </div>
                </dd>
                {/* Topic 7 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 7</span>Penetration Tester
                </dt>
                <dd className='fadeInUp faq-body open-sans'>
                  <div className='faq-content'>
                    <h3 className='content__title'>
                      {' '}
                      who is Penetration Tester?
                    </h3>
                    <div className='Content__img--box'>
                      <img
                        className='img-fluid w-25 mx-auto d-block'
                        src={PenetrationTesterImg}
                        alt='Responsible for testing technology products for security loopholes'
                      />
                      <p className='image-caption'>
                        Responsible for testing technology products for security
                        loopholes
                      </p>
                    </div>
                    <p>
                      You may see penetration testing referred to as pentesting
                      and ethical hacking. A penetration tester's job role is to
                      test the security of the systems and software within a
                      company - this is achieved through attempts to uncover
                      flaws and vulnerabilities through systemised hacking.
                      Penetration testers exploit these vulnerabilities to
                      evaluate the risk in each instance. The company can then
                      take these insights to rectify issues to prevent a
                      real-world cyberattack.
                    </p>
                    <b className='content__title'>Responsibilities</b>
                    <div>
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Conduct tests on computer systems, networks, and
                          web-based applications
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Perform security assessments, audits, and analyse
                          policies
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Evaluate and report on insights, recommending actions
                          for attack prevention
                        </li>
                      </ul>
                      <div className='note'>
                        <b className='text-danger'>Note! :</b> The Following
                        Links From TryHackMe Website
                      </div>
                    </div>
                    <b className='content__title'>Learning Paths</b>
                    <p>
                      TryHackMe's learning paths will give you both the
                      fundamental technical knowledge and hands-on experience,
                      which is crucial to becoming a successful Penetration
                      Tester.
                    </p>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/PenetrationTester'>
                          JR Penetration Tester
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/PenetrationTester'>
                          Offensive Pentesting
                        </a>
                      </li>
                    </ul>
                    <b className='content__title'>Relevant Career Guides</b>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/r/resources/blog/interview-with-soc-analyst'>
                          Becoming a Penetration Tester
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/r/resources/blog/interview-with-soc-analyst'>
                          How to Become a Penetration Tester
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/r/resources/blog/interview-with-soc-analyst'>
                          A Day in the Life of a Penetration Tester
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/r/resources/blog/interview-with-soc-analyst'>
                          Preparing for a Penetration Testing Interview
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/r/resources/blog/interview-with-soc-analyst'>
                          {' '}
                          Becoming a Penetration Tester: Alex’s Success Story
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='note fit-content'>
                    For More Info Follow This link 👉🏻{' '}
                    <button
                      onClick={() =>
                        handleGoToLab(
                          '/CareersInCyber/CareersInCyber_labs/ShowMore5'
                        )
                      }
                      className='go-to my-2'>
                      Penetration Tester
                    </button>
                  </div>
                </dd>
                {/* Topic 8 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 8</span>Red Teamer
                </dt>
                <dd className='fadeInUp faq-body open-sans'>
                  <div className='faq-content'>
                    <h3 className='content__title'> who is Red Teamer?</h3>
                    <div className='Content__img--box'>
                      <img
                        className='img-fluid w-25 mx-auto d-block'
                        src={RedTeamerImg}
                        alt='Plays the role of an adversary, attacking an organisation and providing feedback from an enemies perspective'
                      />
                      <p className='image-caption'>
                        Plays the role of an adversary, attacking an
                        organisation and providing feedback from an enemies
                        perspective
                      </p>
                    </div>
                    <p>
                      Red teamers share similarities to penetration testers,
                      with a more targeted job role. Penetration testers look to
                      uncover many vulnerabilities across systems to keep
                      cyber-defence in good standing, whilst red teamers are
                      enacted to test the company's detection and response
                      capabilities. This job role requires imitating cyber
                      criminals' actions, emulating malicious attacks, retaining
                      access, and avoiding detection. Red team assessments can
                      run for up to a month, typically by a team external to the
                      company. They are often best suited to organisations with
                      mature security programs in place.
                    </p>
                    <b className='content__title'>Responsibilities</b>
                    <div>
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Emulate the role of a threat actor to uncover
                          exploitable vulnerabilities, maintain access and avoid
                          detection
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Assess organisations' security controls, threat
                          intelligence, and incident response procedures
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Evaluate and report on insights, with actionable data
                          for companies to avoid real-world instances
                        </li>
                      </ul>
                      <div className='note'>
                        <b className='text-danger'>Note! :</b> The Following
                        Links From TryHackMe Website
                      </div>
                    </div>
                    <b className='content__title'>Learning Paths</b>
                    <p>
                      TryHackMe's learning paths will give you both the
                      fundamental technical knowledge and hands-on experience,
                      which is crucial to becoming a successful Red Teamer.
                    </p>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/RedTeamer'>
                          JR Penetration Tester
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/RedTeamer'>
                          Offensive Pentestin
                        </a>
                        g
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='/LearningPaths/RedTeamer'>
                          Red Teamer
                        </a>
                      </li>
                    </ul>
                    <b className='content__title'>Relevant Career Guides</b>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <a
                          className='content__subtitle underline'
                          href='https://tryhackme.com/r/resources/blog/interview-with-soc-analyst'>
                          Red Teaming: Job Roles, Salaries & Opportunities
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='note fit-content'>
                    For More Info Follow This link 👉🏻{' '}
                    <button
                      onClick={() =>
                        handleGoToLab(
                          '/CareersInCyber/CareersInCyber_labs/ShowMore6'
                        )
                      }
                      className='go-to my-2'>
                      Red Teamer
                    </button>
                  </div>
                </dd>
                {/* Topic 9 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 9</span>Quiz
                </dt>
                <dd className='fadeInUp faq-body open-sans'>
                  <div className='faq-content'>
                    <p>
                      This room has provided you with a general overview of the
                      different careers in cyber security. Don't forget that you{' '}
                      <b className='content__subtitle underline'>
                        can leverage online training to land your dream job
                      </b>{' '}
                      in cyber security. To find out which cyber security role
                      suits you best, try our fun quiz, which you can access by
                      clicking the "View Site" button on the right.
                    </p>
                  </div>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() =>
                  handleGoToLab('/CareersInCyber/CareersInCyber_MCQ')
                }
                className='go-to'>
                Go To MCQs
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

import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import '../../Components/Topics CSS/topics.css';
import courseImage from '../../assets/img/DigitalForensics/courseImage.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import digital1 from '../../assets/img/DigitalForensics/DigitalForensics.png';
import digital2 from '../../assets/img/DigitalForensics/DigitalForensics2.png';
import digital3 from '../../assets/img/DigitalForensics/DigitalForensics3.png';
export default function Digital_Forensics() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Digital Forensics',
      ar: 'التحقيق الجنائي الرقمي (Digital Forensics)',
    },
    description: {
      en: 'Learn how to investigate cyber crimes by identifying, preserving, and analyzing digital evidence. Master the techniques used to recover deleted data and track attacker activities.',
      ar: 'تعلم كيفية التحقيق في الجرائم السيبرانية من خلال تحديد الأدلة الرقمية وحفظها وتحليلها. أتقن التقنيات المستخدمة لاستعادة البيانات المحذوفة وتتبع أنشطة المهاجمين.',
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
    students: '1680',
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
                  <span>Intro</span>Introduction To Digital Forensics
                </dt>
                <dd className='fadeInUp faq-body'>
                  <img
                    src={digital1}
                    alt=''
                    className='img-fluid w-50 mx-auto d-block'
                  />
                  <hr />
                  <p>
                    Forensics is the application of science to investigate
                    crimes and establish facts. With the use and spread of
                    digital systems, such as computers and smartphones, a new
                    branch of forensics was born to investigate related crimes:
                    computer forensics, which later evolved into, digital
                    forensics.
                  </p>
                  <p>
                    Think about the following scenario. The law enforcement
                    agents arrive at a crime scene; however, part of this crime
                    scene includes digital devices and media. Digital devices
                    include desktop computers, laptops, digital cameras, music
                    players, and smartphones, to name a few. Digital media
                    includes CDs, DVDs, USB flash memory drives, and external
                    storage. A few questions arise:
                  </p>
                  <ul>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      How should the police collect digital evidence, such as
                      smartphones and laptops? What are the procedures to follow
                      if the computer and smartphone are running?
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      How to transfer the digital evidence? Are there certain
                      best practices to follow when moving computers, for
                      instance?
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      How to analyze the collected digital evidence? Personal
                      device storage ranges between tens of gigabytes to several
                      terabytes; how can this be analyzed?
                    </li>
                  </ul>
                  <img
                    src={digital2}
                    alt=''
                    className='img-fluid w-50 mx-auto d-block'
                  />
                  <hr />
                  <p>
                    Assuming this employee is suspected in the figure above, we
                    can quickly see the digital devices that might be of
                    interest to an investigation. We notice a tablet, a
                    smartphone, a digital camera, and a USB flash memory in
                    addition to a desktop computer. Any of these devices might
                    contain a trove of information that can help with an
                    investigation. Processing these as evidence would require
                    digital forensics.
                  </p>
                  <p>
                    More formally, digital forensics is the application of
                    computer science to investigate digital evidence for a legal
                    purpose. Digital forensics is used in two types of
                    investigations:
                  </p>
                  <ol>
                    <li>
                      <span className='content__subtitle me-2'>
                        {' '}
                        Public-sector investigations
                      </span>
                      refer to the investigations carried out by government and
                      law enforcement agencies. They would be part of a crime or
                      civil investigation.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        {' '}
                        Private-sector investigations
                      </span>
                      refer to the investigations carried out by corporate
                      bodies by assigning a private investigator, whether
                      in-house or outsourced. They are triggered by corporate
                      policy violations.
                    </li>
                  </ol>
                  <p>
                    Whether investigating a crime or a corporate policy
                    violation, part of the evidence is related to digital
                    devices and digital media. This is where digital forensics
                    comes into play and tries to establish what has happened.
                    Without trained digital forensics investigators, it won’t be
                    possible to process any digital evidence properly.
                  </p>
                  <img
                    src={digital3}
                    alt=''
                    className='img-fluid w-50 mx-auto d-block'
                  />
                  <hr />
                </dd>
                {/* Topic 1 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 1:</span> What is Digital Forensics?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h3 className='content__title '>
                    {' '}
                    What is Digital Forensics?
                  </h3>
                  <p>
                    {' '}
                    Digital forensics is the process of identifying, preserving,
                    analyzing, and presenting digital evidence in
                    investigations. This section will cover:
                  </p>
                  <ul>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />{' '}
                      The importance of digital forensics in modern
                      investigations.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />{' '}
                      Core concepts like evidence preservation, chain of
                      custody, and legal compliance.
                    </li>
                  </ul>
                  <h3 className='content__title '>Key Areas Covered:</h3>
                  <ol>
                    <li>Forensic methodologies.</li>
                    <li>Importance of ethical and legal considerations.</li>
                  </ol>
                </dd>
                {/* Topic 2 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 2:</span>Types of Digital Forensics
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  {/* <img src={ExplainImg} alt="logic flaw img" id="explain-img" /> */}
                  <p>
                    Digital forensics is a diverse discipline with many branches
                    specializing in different aspects of investigation. This
                    section explores both traditional and emerging types of
                    digital forensics:
                  </p>
                  <ol>
                    <li>
                      <h5 className='main-color'>Computer Forensics:</h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>
                          Analyzing computers, hard drives, and other storage
                          devices for evidence.
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>{' '}
                          Recovering deleted files, analyzing file systems, and
                          investigating user activity.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5 className='main-color'>Mobile Forensics:</h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>
                          Monitoring and analyzing network traffic to detect
                          anomalies or breaches.
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>{' '}
                          Investigating unauthorized access, denial-of-service
                          attacks, and data exfiltration.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5 className='main-color'>Memory Forensics:</h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>
                          Extracting and analyzing volatile data from a system's
                          memory (RAM).
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>{' '}
                          Detecting malware, analyzing running processes, and
                          retrieving sensitive data.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5 className='main-color'>Cloud Forensics:</h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>
                          Investigating cloud-based platforms, virtual
                          environments, and data stored in cloud systems.
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>{' '}
                          Analyzing logs, tracking data movement, and
                          investigating breaches in cloud environments.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5 className='main-color'>Database Forensics:</h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>{' '}
                          Analyzing database systems for evidence of tampering
                          or unauthorized access.
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>{' '}
                          Investigating SQL injection attacks, recovering
                          deleted records, and tracking database activity.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5 className='main-color'>IoT Forensics:</h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>
                          Investigating Internet of Things (IoT) devices like
                          smart home systems, wearable tech, and industrial IoT.
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>{' '}
                          Analyzing sensor logs, device communication, and
                          potential exploitation of IoT vulnerabilities.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5 className='main-color'>Email Forensics:</h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>{' '}
                          Examining emails for evidence of phishing, fraud, or
                          other malicious activity.
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>
                          Identifying spoofed email addresses, analyzing email
                          headers, and retrieving deleted emails.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5 className='main-color'>Social Media Forensics:</h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>{' '}
                          Analyzing activity and content on social media
                          platforms for evidence.
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>{' '}
                          Investigating online harassment, social engineering
                          attacks, and posts related to criminal activities.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5 className='main-color'>Multimedia Forensics:</h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>
                          Analyzing digital media files such as images, videos,
                          and audio for evidence of manipulation or hidden data.
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>{' '}
                          Detecting deepfakes, identifying steganographic
                          content, and verifying authenticity.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5 className='main-color'>Vehicle Forensics:</h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>
                          Retrieving data from modern vehicles equipped with
                          digital systems.
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>{' '}
                          Analyzing GPS data, crash logs, and onboard
                          diagnostics for investigation purposes.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5 className='main-color'>Drone Forensics:</h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>
                          Investigating drones for evidence of misuse or
                          criminal activity.
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>{' '}
                          Analyzing flight logs, onboard cameras, and
                          communication systems.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5 className='main-color'>Malware Forensics:</h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>
                          Analyzing malicious software to understand its
                          behavior and origin.
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>{' '}
                          Identifying malware capabilities, tracing its source,
                          and mitigating future attacks.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5 className='main-color'>Gaming Forensics:</h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>
                          Investigating gaming consoles and platforms for
                          digital evidence.
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>{' '}
                          Analyzing communication, transactions, and other
                          gaming activities.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5 className='main-color'>
                        Blockchain and Cryptocurrency Forensics:
                      </h5>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>Focus:</span>
                          Tracing and analyzing blockchain transactions and
                          cryptocurrency wallets.
                        </li>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          <span className='content__subtitle me-2'>
                            Applications:
                          </span>{' '}
                          Investigating financial fraud, money laundering, and
                          illegal transactions.
                        </li>
                      </ul>
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
                  <span>Topic 3</span>Metadata Analysis
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h5 className='main-color'>What You’ll Learn:</h5>
                  <ol>
                    <li>
                      Extracting metadata to uncover file history (creation,
                      modifications).
                    </li>
                    <li>Identifying tampered files or hidden information.</li>
                    <li>Tools: ExifTool for metadata analysis.</li>
                  </ol>
                </dd>
                {/* Topic 4 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 4</span> Network Traffic Analysis
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h5 className='main-color'>Focus:</h5>

                  <ol>
                    <li>
                      Analyzing network packets to detect suspicious activity or
                      attacks.
                    </li>
                    <li>
                      Use tools like Scapy and Tshark for network data
                      inspection.
                    </li>
                  </ol>

                  <h5 className='main-color'>Practical Focus:</h5>
                  <ol>
                    <li>
                      Identifying network threats, unauthorized access, and data
                      breaches.
                    </li>
                  </ol>

                  <b className='main-color'>
                    <i>
                      In this section, we'll walk you through common API
                      vulnerabilities and how to test for them.
                    </i>
                  </b>
                </dd>
                {/* Topic 5 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 5</span> Common Digital Forensic Tools
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <b className='content__title me-2'>Key Tools:</b>

                  <ol>
                    <li>
                      <span className='content__subtitle me-2'>
                        FTK (Forensic Toolkit):
                      </span>
                      Comprehensive investigation software.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        Volatility Framework:
                      </span>{' '}
                      Memory analysis and malware detection.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>Autopsy:</span>
                      Open-source forensic tool.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>Wireshark:</span>
                      Network packet analysis.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>Focus:</span>
                      Selecting and using the right tools based on the forensic
                      scenario.
                    </li>
                  </ol>
                </dd>
                {/* Topic 6 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 6:</span> Detecting Hidden Data (Steganography)
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <ul className='ps-1'>
                    <li>
                      <span className='content__subtitle'>Concept:</span>
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Hiding data within other media (images, videos,
                          audio).
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className='content__subtitle'>Hands-On:</span>{' '}
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Detecting steganographic traces in files.
                        </li>

                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Using tools to extract or embed hidden messages.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </dd>
                {/* Topic 7 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 7:</span> Best Practices in Digital Forensics
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <ul className='ps-2'>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <span className='content__subtitle me-2'>
                        Chain of Custody:
                      </span>
                      Preserve evidence integrity.
                    </li>

                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <span className='content__subtitle me-2'>
                        Tool Validation:
                      </span>
                      Use reliable and validated forensic tools.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <span className='content__subtitle me-2'>
                        Documentation:
                      </span>
                      Record every step for credibility.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <span className='content__subtitle me-2'>
                        Legal Compliance:
                      </span>
                      Ensure evidence is admissible in court.
                    </li>
                  </ul>
                </dd>
                {/* Topic 8 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 8:</span> Conclusion
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    <span className='content__subtitle me-2 '>Summary:</span>
                    Mastering digital forensics methodologies, tools, and best
                    practices allows for effective cybercrime investigation.
                    Engage with practical labs to hone your skills in real-world
                    scenarios.
                  </p>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() =>
                  handleGoToLab('/Digital_Forensics/Digital_Forensics_labs')
                }
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

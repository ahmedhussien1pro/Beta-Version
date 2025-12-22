import React from "react";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import background from "../../../assets/img/CareersInCyber/CA/background.png";
import courseImage from "../../../assets/img/CareersInCyber/CA/courseImage.png";
import UseFaqSection from "../../../Components/UseFaqSection/UseFaqSection.jsx";
import Banner from "../../../Components/Banner/Banner.jsx";
import CourseLanding from "../../../Components/CourseLanding/CourseLanding.jsx";
import Go2TopBtn from "../../../Components/Go2Top_Btn/Go2Top_Btn.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function AC_Vuln() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Banner />
      <Header />
      {/* Start Landing */}
      <CourseLanding
        background={background}
        backgroundStyle={{ objectFit: "cover", height: "100%", width: "100%" }}
        courseImage={courseImage}
        courseTitle="Cyber Analyst"
        courseDescription="Learn how to identify and fix security problems to prevent cyberattacks."
        difficulty="Intermediate"
        duration="20 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing */}
      {/* Start Course */}

      <div className="Content ">
        <div className="secure-container" ref={faqSectionRef}>
          <div className="content-row">
            <div className="content-section">
              <dl className="topics-text">
                {/* Intro */}
                <dt className="fadeInUp faq-header">
                  <span>Intro </span> Introduction to Cyber Analyst Career
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <h3 className="content__title">What is a Cyber Analyst?</h3>
                  <p>
                    A Cyber Analyst is a cybersecurity professional who monitors, analyzes, and responds to cyber threats. They work with advanced security tools and threat intelligence to protect networks, systems, and data from potential attacks.
                  </p>

                  <p>
                    This role demands strong analytical skills, proficiency in cybersecurity tools, and the ability to quickly interpret security alerts to support proactive defense measures.
                  </p>
                  <h3 className="content__title">Key Areas in a Cyber Analyst Career</h3>
                  <ol>
                    <li>
                      <b className="content__subtitle">Threat Intelligence & Analysis:</b> &nbsp;
                      Collecting, analyzing, and sharing information on emerging cyber threats.
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> Example: Utilizing threat feeds and IoCs to identify potential attacks.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__subtitle">Security Monitoring & Incident Response:</b> &nbsp;
                      Continuously monitoring systems and responding to alerts in real time.
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> Example: Leveraging SIEM tools to detect anomalies.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__subtitle">Vulnerability Assessment & Risk Analysis:</b> &nbsp;
                      Identifying system vulnerabilities and assessing risks to prioritize defenses.
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> Example: Running regular scans and risk evaluations.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className="content__subtitle">Reporting & Communication:</b> &nbsp;
                      Documenting findings and presenting actionable insights to stakeholders.
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faArrowRight} className="me-2 my-0 text-warning" /> Example: Crafting detailed incident reports and executive summaries.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </dd>
                {/* Topic 1 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 1</span> Cyber Threat Intelligence & Analysis
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <h3 className="content__title">Threat Intelligence:</h3>
                  <p>
                    Cyber Analysts gather and analyze data from various threat intelligence sources. This helps in identifying attacker tactics, techniques, and procedures (TTPs) to predict and mitigate future risks.
                  </p>
                  <ol>
                    <li>
                      <b className="content__subtitle" >Data Sources:</b> OSINT, commercial feeds, and industry reports.
                    </li>
                    <li>
                      <b className="content__subtitle" >Analysis Tools:</b> Platforms that correlate and visualize threat data.
                    </li>
                  </ol>

                </dd>
                {/* Topic 2 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 2</span> Security Monitoring & Incident Response
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <h3 className="content__title">Security Monitoring:</h3>
                  <p>
                    Continuous monitoring is key to detecting abnormal behavior. Cyber Analysts use SIEM and other monitoring tools to capture and analyze logs, ensuring timely detection of potential breaches.
                  </p>

                </dd>
                {/* Topic 3 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 3</span> Vulnerability Assessment & Risk Analysis
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <h3 className="content__title">Risk Analysis:</h3>
                  <p>
                    Assessing vulnerabilities and potential risks is vital. This involves running automated scans, manual testing, and evaluating the impact of discovered security gaps.
                  </p>
                  <ol>
                    <li>
                      <b className="content__subtitle" >Vulnerability Scanning:</b> Regular assessments to identify weaknesses.
                    </li>
                    <li>
                      <b className="content__subtitle" >Risk Prioritization:</b> Analyzing the likelihood and impact of threats.
                    </li>
                  </ol>

                </dd>
                {/* Topic 4 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 4</span> Reporting & Communication
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <h3 className="content__title">Reporting:</h3>
                  <p>
                    Effective communication is essential. Cyber Analysts document security events and create reports that translate technical details into clear, actionable insights for both technical teams and management.
                  </p>
                  <ol>
                    <li>
                      <b className="content__subtitle" >Incident Reports:</b> Detailed documentation of security incidents.
                    </li>
                    <li>
                      <b className="content__subtitle" >Executive Summaries:</b> High-level overviews focusing on business impact.
                    </li>
                  </ol>

                </dd>
                {/* Topic 5 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 5</span> Career Path & Certifications
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <h3 className="content__title">Career Path and Professional Growth:</h3>
                  <p>
                    Building a career as a Cyber Analyst involves continuous learning, hands-on experience, and professional certifications. Consider the following steps:
                  </p>
                  <ol>
                    <li>
                      <b className="content__subtitle" >Certifications:</b> Credentials such as CompTIA CySA+, CEH, or GIAC Cyber Threat Intelligence can enhance your expertise.
                    </li>
                    <li>
                      <b className="content__subtitle" >Hands-On Labs:</b> Engage in lab simulations and practical exercises.
                    </li>
                    <li>
                      <b className="content__subtitle" >Industry Engagement:</b> Participate in cybersecurity forums and conferences.
                    </li>
                  </ol>
                  <div className="note">
                    Read more from this link 👉🏻
                    <a href="https://www.example.com/cyber-analyst-career" className="border-0 bg-transparent link-primary text-decoration-underline">
                      Cyber Analyst Career Resources
                    </a>
                  </div>
                </dd>
                {/* Topic 6 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 6</span> Hands-On Labs & Continuous Learning
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <h3 className="content__title">Practical Experience:</h3>
                  <p>
                    Regular hands-on practice is essential for mastering cyber analysis techniques. Participate in labs, simulations, and training exercises to continually hone your skills.
                  </p>
                  <ol>
                    <li>
                      <b className="content__subtitle" >Lab Simulations:</b> Work on realistic cyber attack scenarios.
                    </li>
                    <li>
                      <b className="content__subtitle" >Workshops & Webinars:</b> Attend sessions that focus on current cyber threats.
                    </li>
                    <li>
                      <b className="content__subtitle" >CTF Challenges:</b> Test your skills in Capture The Flag competitions.
                    </li>
                  </ol>

                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button onClick={() => handleGoToLab("/CareersInCyber/CareersInCyber_MCQ/Security_Analyst/MCQ")} className="go-to">
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

import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../Page_Styles/MainStyle.css';
import background from '../../assets/img/ACV/background.png';
import courseImage from '../../assets/img/ACV/courseImage.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import Banner from '../../Components/Banner/Banner.jsx';
import CourseLanding from '../../Components/CourseLanding/CourseLanding.jsx';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn.jsx';
import IntroImage from '../../assets/img/ACV/topic2.png';
import DacImage from '../../assets/img/ACV/DAC.png';
import MacImage from '../../assets/img/ACV/MAC.png';
import RbacImage from '../../assets/img/ACV/RBAC.png';
import AbacImage from '../../assets/img/ACV/ABAC.png';
import ACVImage from '../../assets/img/ACV/access-control.svg';
import BrokenAccImage from '../../assets/img/ACV/BrokeAcc.png';
import IdorImage from '../../assets/img/ACV/IDOR.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function AC_Vuln() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Banner />
      <Header />
      {/* <Landing /> */}
      {/* Start Landing */}
      <CourseLanding
        background={background}
        backgroundStyle={{ objectFit: 'cover', height: '100%', width: '100%' }}
        courseImage={courseImage}
        courseTitle='Access control vulnerability'
        courseDescription='Learn how attackers exploit access control vulnerabilities in
                web applications, gaining unauthorized access to sensitive areas
                or data, and the techniques used to detect and prevent these
                attacks.'
        difficulty='Intermediate'
        duration='20 min'
        onSaveRoom={() => console.log('Room Saved!')}
        onLike={() => console.log('Liked!')}
        onDislike={() => console.log('Disliked!')}
      />
      {/* End Landing */}
      {/* Start Course */}

      <div className='Content '>
        <div className='secure-container' ref={faqSectionRef}>
          <div className='content-row'>
            <div className='content-section'>
              <dl className='topics-text '>
                {/* Topic 1 */}
                <dt className='fadeInUp faq-header'>
                  <span>Intro </span> introduction to Access Control
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <h3 className='content__title'>What is Access Control?</h3>
                  <p>
                    Access control is a security mechanism used to control which
                    users or systems are allowed to access a particular resource
                    or system. Access control is implemented in computer systems
                    to ensure that only authorized users have access to
                    resources, such as files, directories, databases, and web
                    pages. The primary goal of access control is to protect
                    sensitive data and ensure that it is only accessible to
                    those who are authorized to access it.
                  </p>

                  <img
                    src={IntroImage}
                    alt=''
                    className='img-fluid w-50 mx-auto d-block'
                  />
                  <hr />
                  <p>
                    Access control can be implemented in different ways,
                    depending on the type of resource being protected and the
                    security requirements of the system. Some common access
                    control mechanisms include:
                  </p>
                  <h3 className='content__title'>Types of Access Control</h3>
                  <ol>
                    <li>
                      <b className='content__subtitle'>
                        {' '}
                        Discretionary Access Control (DAC):{' '}
                      </b>{' '}
                      &nbsp; DAC allows resource owners to define who can access
                      their data. It provides flexibility but can lead to
                      security risks if permissions are misconfigured.
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 my-0 text-warning'
                          />
                          Example: A system where a user (owner) grants file
                          access to others, similar to a homeowner giving keys
                          to specific guests.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className='content__subtitle'>
                        Mandatory Access Control (MAC):{' '}
                      </b>{' '}
                      &nbsp; MAC enforces strict security policies predefined by
                      the system, restricting access based on security
                      classifications.
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 my-0 text-warning'
                          />
                          Example: A government network where access to
                          classified documents is determined by security
                          clearance levels.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b className='content__subtitle'>
                        Role-Based Access Control (RBAC):{' '}
                      </b>{' '}
                      &nbsp; RBAC assigns permissions based on a user’s role
                      within an organization, ensuring least privilege access.
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 my-0 text-warning'
                          />
                          Example: In a corporate system, managers can approve
                          expenses while employees can only submit them.
                        </li>
                      </ul>
                    </li>
                    <li>
                      {' '}
                      <b className='content__subtitle'>
                        Attribute-Based Access Control (ABAC):{' '}
                      </b>{' '}
                      &nbsp;ABAC evaluates attributes such as user roles, device
                      type, time of access, and location to determine access
                      permissions.
                      <ul>
                        <li>
                          {' '}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 my-0 text-warning'
                          />
                          Example: A cloud service restricting admin logins to
                          office hours and corporate devices only.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </dd>
                {/* Topic 1 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 1</span> Discretionary Access Control (DAC)
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <p>
                    <h3 className='content__subtitle'>
                      Discretionary Access Control (DAC):
                    </h3>{' '}
                    In this type of access control, the resource owner or
                    administrator determines who is allowed to access a resource
                    and what actions they are allowed to perform. DAC is
                    commonly used in operating systems and file systems. In
                    layman’s terms, imagine a castle where the king can give
                    keys to his advisors, allowing them to open any doors they
                    like, whenever they want. That’s DAC for you. It’s the
                    liberty to control access to your own resources. The one in
                    charge, like the king of the castle, can hand out
                    permissions to whomever they please, dictating who can come
                    in and out.
                  </p>
                  <img
                    src={DacImage}
                    alt=''
                    className='img-fluid w-50 mx-auto d-block '
                  />
                  <hr />
                </dd>
                {/* Topic 2 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span> Mandatory Access Control (MAC)
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <p>
                    <h3 className='content__subtitle'>
                      Mandatory Access Control (MAC):
                    </h3>
                    In this type of access control, access to resources is
                    determined by a set of predefined rules or policies that are
                    enforced by the system. MAC is commonly used in highly
                    secure environments, such as government and military
                    systems. In layman’s terms, picture a fort with an iron-clad
                    security protocol. Only specific individuals with particular
                    security clearances can access certain areas, and this is
                    non-negotiable. The high commander sets the rules, and they
                    are rigorously followed. That’s how MAC works. It’s like the
                    stern security officer who allows no exceptions to the rule.
                  </p>
                  <img
                    src={MacImage}
                    alt=''
                    className='img-fluid w-50 mx-auto d-block'
                  />
                  <hr />
                </dd>
                {/* Topic 3 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span> Role-Based Access Control (RBAC)
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <p>
                    <h3 className='content__subtitle'>
                      Role-Based Access Control (RBAC):
                    </h3>
                    In this type of access control, users are assigned roles
                    that define their level of access to resources. RBAC is
                    commonly used in enterprise systems, where users have
                    different levels of authority based on their job
                    responsibilities. In layman’s terms, imagine a modern
                    corporation. You have your managers, your executives, your
                    sales staff, etc. They each have different access to the
                    building. Some can enter the boardroom, others can access
                    the sales floor, and so on. That’s the essence of RBAC -
                    assigning access based on a person’s role within an
                    organization.
                  </p>
                  <img
                    src={RbacImage}
                    alt=''
                    className='img-fluid w-75 mx-auto d-block'
                  />
                  <hr />
                </dd>
                {/* Topic 4 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span> Attribute-Based Access Control (ABAC)
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <p>
                    <h3 className='content__subtitle'>
                      {' '}
                      Attribute-Based Access Control (ABAC):
                    </h3>
                    In this type of access control, access to resources is
                    determined by a set of attributes, such as user role, time
                    of day, location, and device. ABAC is commonly used in cloud
                    environments and web applications. In layman’s terms, think
                    of a highly advanced sci-fi security system that scans
                    individuals for certain attributes. Maybe it checks whether
                    they’re from a particular planet, whether they’re carrying a
                    specific device, or if they’re trying to access a resource
                    at a specific time. That’s ABAC. It’s like the smart,
                    flexible security of the future.
                  </p>

                  <img
                    src={AbacImage}
                    alt=''
                    className='img-fluid w-75 mx-auto d-block '
                  />
                  <hr />
                  <p>
                    Implementing access control can help prevent security
                    breaches and unauthorized access to sensitive data. However,
                    access control is not foolproof and can be vulnerable to
                    various types of attacks, such as privilege escalation and
                    broken access control vulnerabilities. Therefore, it is
                    important to regularly review and test access control
                    mechanisms to ensure that they are working as intended.
                  </p>
                </dd>
                {/* Topic 5 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 5</span> Access control vulnerabilities and
                  privilege escalation
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <h3 className='content__title'>
                    In this section, we describe:
                  </h3>
                  <ul>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 my-0 text-warning'
                      />{' '}
                      Privilege escalation.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 my-0 text-warning'
                      />
                      The types of vulnerabilities that can arise with access
                      control.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 my-0 text-warning'
                      />
                      How to prevent access control vulnerabilities.
                    </li>
                  </ul>

                  <div className='note'>
                    Labs If you're familiar with the basic concepts behind
                    access control vulnerabilities and want to practice
                    exploiting them on some realistic, deliberately vulnerable
                    targets, you can access labs in this topic from this link 👉🏻{' '}
                    <button
                      onClick={() => handleGoToLab('/AC-Vuln/AC_Vuln_labs')}
                      className='border-0 bg-transparent link-primary text-decoration-underline'>
                      Go To Labs
                    </button>
                  </div>
                  <h3 className='content__title'>What is access control?</h3>
                  <p className='desc'>
                    Access control is the application of constraints on who or
                    what is authorized to perform actions or access resources.
                    In the context of web applications, access control is
                    dependent on authentication and session management:
                  </p>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 my-0 text-warning'
                      />
                      <b className='content__subtitle'>Authentication </b>{' '}
                      &nbsp;confirms that the user is who they say they are.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 my-0 text-warning'
                      />
                      <b className='content__subtitle'>Session management</b>{' '}
                      &nbsp; identifies which subsequent HTTP requests are being
                      made by that same user.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 my-0 text-warning'
                      />
                      <b className='content__subtitle'>Access control</b> &nbsp;
                      determines whether the user is allowed to carry out the
                      action that they are attempting to perform.
                    </li>
                  </ul>
                  <p>
                    Broken access controls are common and often present a
                    critical security vulnerability. Design and management of
                    access controls is a complex and dynamic problem that
                    applies business, organizational, and legal constraints to a
                    technical implementation. Access control design decisions
                    have to be made by humans so the potential for errors is
                    high.
                  </p>
                  <div className='note'>
                    You can Read more from this link 👉🏻
                    <a
                      href='https://portswigger.net/web-security/access-control/security-models'
                      className='border-0 bg-transparent link-primary text-decoration-underline'>
                      Access control security models
                    </a>
                  </div>
                  <img
                    src={ACVImage}
                    alt=''
                    className='img-fluid w-75 mx-auto d-block '
                  />
                  <hr />
                </dd>
                {/* Topic 6 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 6</span> Broken Access Control
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <h3 className='content__title'>Broken Access Control:</h3>
                  <p>
                    Broken access control vulnerabilities refer to situations
                    where access control mechanisms fail to enforce proper
                    restrictions on user access to resources or data. Here are
                    some common exploits for broken access control and examples:
                  </p>
                  <ol>
                    <li>
                      <b className='content__subtitle'>
                        Horizontal privilege escalation:{' '}
                      </b>{' '}
                      &nbsp; occurs when an attacker can access resources or
                      data belonging to other users with the same level of
                      access. For example, a user might be able to access
                      another user’s account by changing the user ID in the URL.
                    </li>
                    <li>
                      <b className='content__subtitle'>
                        Vertical privilege escalation:{' '}
                      </b>{' '}
                      &nbsp; occurs when an attacker can access resources or
                      data belonging to users with higher access levels. For
                      example, a regular user can access administrative
                      functions by manipulating a hidden form field or URL
                      parameter.
                      <img
                        src={BrokenAccImage}
                        alt=''
                        className='img-fluid w-50 mx-auto d-block '
                      />
                    </li>
                    <li>
                      <b className='content__subtitle'>
                        Insufficient access control checks
                      </b>{' '}
                      &nbsp; occur when access control checks are not performed
                      correctly or consistently, allowing an attacker to bypass
                      them. For example, an application might allow users to
                      view sensitive data without verifying their proper
                      permissions.
                    </li>
                    <li>
                      <b className='content__subtitle'>
                        Insecure direct object references
                      </b>{' '}
                      &nbsp; occur when an attacker can access a resource or
                      data by exploiting a weakness in the application’s access
                      control mechanisms. For example, an application might use
                      predictable or easily guessable identifiers for sensitive
                      data, making it easier for an attacker to access. You may
                      refer to this room in Topic #4 to learn more about this.
                      <img
                        src={IdorImage}
                        alt=''
                        className='img-fluid w-75 mx-auto d-block '
                      />
                      <hr />
                    </li>
                  </ol>
                  These exploits can be prevented by implementing strong access
                  control mechanisms and regularly reviewing and testing them to
                  ensure they are functioning as intended.
                </dd>
                {/* Topic 7 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 6</span> Examples of broken access controls
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <p>
                    Broken access control vulnerabilities exist when a user can
                    access resources or perform actions that they are not
                    supposed to be able to.
                  </p>
                  <h3 className='content__title'>
                    Vertical privilege escalation
                  </h3>
                  <p>
                    If a user can gain access to functionality that they are not
                    permitted to access then this is vertical privilege
                    escalation. For example, if a non-administrative user can
                    gain access to an admin page where they can delete user
                    accounts, then this is vertical privilege escalation.
                  </p>
                  <h3 className='content__title'>Unprotected functionality</h3>
                  <p>
                    At its most basic, vertical privilege escalation arises
                    where an application does not enforce any protection for
                    sensitive functionality. For example, administrative
                    functions might be linked from an administrator's welcome
                    page but not from a user's welcome page. However, a user
                    might be able to access the administrative functions by
                    browsing to the relevant admin URL.
                  </p>
                  <p>
                    For example, a website might host sensitive functionality at
                    the following URL:
                    <br />
                    <code className='content__code'>
                      https://insecure-website.com/admin
                    </code>
                  </p>
                  <p>
                    This might be accessible by any user, not only
                    administrative users who have a link to the functionality in
                    their user interface. In some cases, the administrative URL
                    might be disclosed in other locations, such as the{' '}
                    <code className='content__code'>robots.txt</code> file:
                    <br />
                    <code className='content__code'>
                      https://insecure-website.com/robots.txt
                    </code>
                  </p>
                  <p>
                    Even if the URL isn't disclosed anywhere, an attacker may be
                    able to use a wordlist to brute-force the location of the
                    sensitive functionality.
                  </p>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/AC-Vuln/AC_Vuln_labs')}
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

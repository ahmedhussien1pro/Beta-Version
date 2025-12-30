import React from 'react';
import Header from '../../Header/Header';
import courseImage from '../../assets/img/Command Injection/Icon_Command_Injection.png';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import './CommandInjection.css';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import GoTop from '../../Components/Go2Top_Btn/Go2Top_Btn';
import exampleImage1 from '../../assets/img/Command Injection/1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function CommandInjection() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Command Injection',
      ar: 'حقن الأوامر (Command Injection)',
    },
    description: {
      en: 'Discover how attackers execute arbitrary operating system commands through vulnerable applications. Learn to identify execution points and implement secure input validation.',
      ar: 'اكتشف كيف يقوم المهاجمون بتنفيذ أوامر عشوائية على نظام التشغيل من خلال التطبيقات المصابة. تعلم كيفية تحديد نقاط التنفيذ وتنفيذ التحقق الآمن من المدخلات.',
    },
    difficulty: {
      en: 'Advanced',
      ar: 'متقدم',
    },
    duration: {
      en: '40 min',
      ar: '40 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.7',
    students: '1850',
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
                  <span>Topic 1</span>What is OS command injection ?
                </dt>
                <dd className='fadeInUp faq-body'>
                  <p class='Command-Injection-paragraph'>
                    OS command injection is also known as shell injection. It
                    allows an attacker to execute operating system (OS) commands
                    on the server that is running an application, and typically
                    fully compromise the application and its data. Often, an
                    attacker can leverage an OS command injection vulnerability
                    to compromise other parts of the hosting infrastructure, and
                    exploit trust relationships to pivot the attack to other
                    systems within the organization.
                  </p>
                  <img
                    className='Command-Injection-image'
                    src={exampleImage1}
                    alt='Example'
                  />
                  <br></br>
                </dd>
                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span>Injecting OS commands
                </dt>
                <dd className='fadeInUp faq-body'>
                  <p class='Command-Injection-paragraph'>
                    In this example, a shopping application lets the user view
                    whether an item is in stock in a particular store. This
                    information is accessed via a URL:
                  </p>
                  <code class='code-command-injectionss'>
                    https://insecure-website.com/stockStatus?productID=381&amp;storeID=29
                  </code>
                  <p class='Command-Injection-paragraph'>
                    To provide the stock information, the application must query
                    various legacy systems. For historical reasons, the
                    functionality is implemented by calling out to a shell
                    command with the product and store IDs as arguments:
                  </p>
                  <code class='code-command-injectionss'>
                    stockreport.pl 381 29
                  </code>
                  <p class='Command-Injection-paragraph'>
                    This command outputs the stock status for the specified
                    item, which is returned to the user.
                  </p>
                  <p class='Command-Injection-paragraph'>
                    The application implements no defenses against OS command
                    injection, so an attacker can submit the following input to
                    execute an arbitrary command:
                  </p>
                  <code class='code-command-injectionss'>
                    &amp; echo aiwefwlguh &amp;
                  </code>
                  <p class='Command-Injection-paragraph'>
                    If this input is submitted in the{' '}
                    <code className='content__code'>productID</code> parameter,
                    the command executed by the application is:
                  </p>
                  <code class='code-command-injectionss'>
                    stockreport.pl &amp; echo aiwefwlguh &amp; 29
                  </code>
                  <p class='Command-Injection-paragraph'>
                    The <code className='content__code'>echo</code> command
                    causes the supplied string to be echoed in the output. This
                    is a useful way to test for some types of OS command
                    injection. The <code className='content__code'>&amp;</code>{' '}
                    character is a shell command separator. In this example, it
                    causes three separate commands to execute, one after
                    another. The output returned to the user is:
                  </p>
                  <code class='code-command-injectionss'>
                    Error - productID was not provided aiwefwlguh 29: command
                    not found
                  </code>
                  <p class='Command-Injection-paragraph'>
                    The three lines of output demonstrate that:
                  </p>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The original{' '}
                      <code className='content__code'>stockreport.pl</code>{' '}
                      command was executed without its expected arguments, and
                      so returned an error message.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The injected <code className='content__code'>echo</code>{' '}
                      command was executed, and the supplied string was echoed
                      in the output.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The original argument{' '}
                      <code className='content__code'>29</code> was executed as
                      a command, which caused an error.
                    </li>
                  </ul>
                  <p>
                    Placing the additional command separator{' '}
                    <code className='content__code'>&amp;</code> after the
                    injected command is useful because it separates the injected
                    command from whatever follows the injection point. This
                    reduces the chance that what follows will prevent the
                    injected command from executing.
                  </p>
                </dd>
                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span>Useful commands
                </dt>
                <dd className='fadeInUp faq-body'>
                  <p class='Command-Injection-paragraph'>
                    fter you identify an OS command injection vulnerability,
                    it's useful to execute some initial commands to obtain
                    information about the system. Below is a summary of some
                    commands that are useful on Linux and Windows platforms:
                  </p>

                  <table class='Command-modern-table'>
                    <thead>
                      <tr>
                        <th>Purpose of command</th>
                        <th>Linux</th>
                        <th>Windows</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Name of current user</td>
                        <td>
                          <code className='content__code'>whoami</code>
                        </td>
                        <td>
                          <code className='content__code'>whoami</code>
                        </td>
                      </tr>
                      <tr>
                        <td>Operating system</td>
                        <td>
                          <code className='content__code'>uname -a</code>
                        </td>
                        <td>
                          <code className='content__code'>ver</code>
                        </td>
                      </tr>
                      <tr>
                        <td>Network configuration</td>
                        <td>
                          <code className='content__code'>ifconfig</code>
                        </td>
                        <td>
                          <code className='content__code'>ipconfig /all</code>
                        </td>
                      </tr>
                      <tr>
                        <td>Network connections</td>
                        <td>
                          <code className='content__code'>netstat -an</code>
                        </td>
                        <td>
                          <code className='content__code'>netstat -an</code>
                        </td>
                      </tr>
                      <tr>
                        <td>Running processes</td>
                        <td>
                          <code className='content__code'>ps -ef</code>
                        </td>
                        <td>
                          <code className='content__code'>tasklist</code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span>Blind OS command injection vulnerabilities
                </dt>
                <dd className='fadeInUp faq-body'>
                  <p class='Command-Injection-paragraph'>
                    Many instances of OS command injection are blind
                    vulnerabilities. This means that the application does not
                    return the output from the command within its HTTP response.
                    Blind vulnerabilities can still be exploited, but different
                    techniques are required.
                  </p>
                  <p class='Command-Injection-paragraph'>
                    As an example, imagine a website that lets users submit
                    feedback about the site. The user enters their email address
                    and feedback message. The server-side application then
                    generates an email to a site administrator containing the
                    feedback. To do this, it calls out to the mail program with
                    the submitted details:
                  </p>
                  <code class='code-command-injectionss'>
                    mail -s "This site is great" -aFrom:peter@normal-user.net
                    feedback@vulnerable-website.com"
                  </code>
                  <p class='Command-Injection-paragraph'>
                    The output from the mail command (if any) is not returned in
                    the application's responses, so using the echo payload won't
                    work. In this situation, you can use a variety of other
                    techniques to detect and exploit a vulnerability.
                  </p>
                  <br></br>
                  <h2 className='content__title'>
                    Detecting blind OS command injection using time delays
                  </h2>
                  <p class='Command-Injection-paragraph'>
                    You can use an injected command to trigger a time delay,
                    enabling you to confirm that the command was executed based
                    on the time that the application takes to respond. The ping
                    command is a good way to do this, because lets you specify
                    the number of ICMP packets to send. This enables you to
                    control the time taken for the command to run:
                  </p>
                  <code class='code-command-injectionss'>
                    & ping -c 10 127.0.0.1 &{' '}
                  </code>
                </dd>
              </dl>
            </div>

            <div className='go-to-section'>
              <button
                onClick={() =>
                  handleGoToLab('/Command_Injection/Command_Injection_labs')
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

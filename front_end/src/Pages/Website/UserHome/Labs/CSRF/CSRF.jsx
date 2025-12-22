import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import Banner from '../../Components/Banner/Banner';
import background from '../../assets/img/CSRF/background.svg';
import courseImage from '../../assets/img/CSRF/CourseImage.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CourseLanding from '../../Components/CourseLanding/CourseLanding.jsx';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn.jsx';
import IntroImage from '../../assets/img/CSRF/intro.png';
import Topic2 from '../../assets/img/CSRF/topic2.svg';
import Topic3 from '../../assets/img/CSRF/Topic3.svg';
import Topic31 from '../../assets/img/CSRF/topic3.1.svg';
import Topic4 from '../../assets/img/CSRF/topic4.png';
import Topic41 from '../../assets/img/CSRF/topic41.png';
import Topic42 from '../../assets/img/CSRF/topic42.png';
import Topic43 from '../../assets/img/CSRF/topic43.png';
export default function CSRF() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();

  return (
    <>
      <Banner />
      <Header />
      {/* Start Landing */}
      <CourseLanding
        background={background}
        backgroundStyle={{ objectFit: 'cover', height: '100%', width: '100%' }}
        courseImage={courseImage}
        courseTitle='Cross-Site Request Forgery (CSRF)'
        courseDescription='Discover how attackers exploit CSRF vulnerabilities to perform
                unauthorized actions on behalf of authenticated users without
                their consent. Learn the strategies to detect, mitigate, and
                safeguard web applications against such attacks, ensuring robust
                protection for your users.'
        difficulty='Intermediate'
        duration='30 min'
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
                  <span>Intro </span> introduction
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <p>
                    Welcome to a world where launching web attacks is so easy
                    that even beginners (like script kiddies) can write simple
                    scripts to hack into big businesses. These attacks are like
                    sneaky tricks that can cause much trouble online. In this
                    room, we will focus on one such web attack called Cross-Site
                    Request Forgery (CSRF or XSRF). We will understand various
                    exploitation techniques of CSRF and protection measures for
                    its prevention.
                  </p>
                  <b className='content__title'>Learning Objectives</b>

                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Understanding the working of CSRF
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Type of CSRF attacks
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Advance payloads for exploitation
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Defensive mechanisms
                    </li>
                  </ul>
                  <div className='note'>
                    <b className='text-danger'>Note! :</b> The Following Links
                    From TryHackMe Website
                  </div>
                  <b className='content__title'>Learning Pre-requisites</b>
                  <p>
                    An understanding of the following topics is recommended
                    before starting the room:
                  </p>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <a
                        className='content__subtitle underline'
                        href='https://tryhackme.com/room/howwebsiteswork'>
                        How websites work
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      <a
                        className='content__subtitle underline'
                        href='https://tryhackme.com/room/owasptop102021'>
                        OWASP top 10 web vulnerabilities
                      </a>
                    </li>
                  </ul>

                  <img
                    src={IntroImage}
                    alt=''
                    className='img-fluid w-50 mx-auto d-block'
                  />
                  <hr />
                  <h3 className='content__title'>Connecting to the Machine</h3>
                  <p>
                    ou can start the virtual machine by clicking Start Machine.
                    The machine will start in a split-screen view. In case the
                    VM is not visible, use the blue Show Split View button at
                    the top of the page. We use a vulnerable online banking
                    application throughout the room to perform the exercise
                    practically and become familiar with various CSRF attacks.
                    Please wait 1-2 minutes after the system boots completely to
                    let the auto scripts run successfully. The following
                    hostnames have already been added to the attached VM:
                  </p>
                  <table class='table table-bordered table-striped text-center mx-auto'>
                    <thead class='table-dark'>
                      <tr>
                        <th>App Name</th>
                        <th>IP Address</th>
                        <th>Host Address</th>
                        <th>URL to Access</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Online banking application</td>
                        <td>MACHINE_IP</td>
                        <td>
                          <code className='content__code'>mybank.thm</code>
                        </td>
                        <td>
                          <code className='content__code'>
                            http://mybank.thm:8080
                          </code>
                        </td>
                      </tr>
                      <tr>
                        <td>Mailbox application</td>
                        <td>MACHINE_IP</td>
                        <td>
                          <code className='content__code'>mailbox.thm</code>
                        </td>
                        <td>
                          <code className='content__code'>
                            http://mailbox.thm:8081
                          </code>
                        </td>
                      </tr>
                      <tr>
                        <td>Attacker panel (subdomain of bank app)</td>
                        <td>MACHINE_IP</td>
                        <td>
                          <code className='content__code'>
                            attacker.mybank.thm
                          </code>
                        </td>
                        <td>
                          <code className='content__code'>
                            http://attacker.mybank.thm:8080
                          </code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </dd>

                {/* Topic 1 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 1</span> Overview of CSRF Attack
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <h3 className='content__subtitle'>What is CSRF?</h3>
                  <p>
                    CSRF is a type of security vulnerability where an attacker
                    tricks a user's web browser into performing an unwanted
                    action on a trusted site where the user is authenticated.
                    This is achieved by exploiting the fact that the browser
                    includes any relevant cookies (credentials) automatically,
                    allowing the attacker to forge and submit unauthorised
                    requests on behalf of the user (through the browser). The
                    attacker's website may contain HTML forms or JavaScript code
                    that is intended to send queries to the targeted web
                    application.
                  </p>
                  <h3 className='content__subtitle'>Cycle of CSRF</h3>
                  <p>A CSRF attack has three essential phases:</p>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The attacker already knows the format of the web
                      application's requests to carry out a particular task and
                      sends a malicious link to the user.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The victim's identity on the website is verified,
                      typically by cookies transmitted automatically with each
                      domain request and clicks on the link shared by the
                      attacker. This interaction could be a click, mouse over,
                      or any other action.
                      <img
                        src={Topic2}
                        alt=''
                        className='img-fluid w-50 mx-auto d-block '
                      />
                      <hr />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Insufficient security measures prevent the web application
                      from distinguishing between authentic user requests and
                      those that have been falsified.
                    </li>
                  </ul>
                  <h3 className='content__subtitle'>Effects of CSRF</h3>
                  <p>
                    Understanding CSRF's impact is crucial for keeping online
                    activities secure. Although CSRF attacks don't directly
                    expose user data, they can still cause harm by changing
                    passwords and email addresses or making financial
                    transactions. The risks associated with CSRF include:
                  </p>
                  <ul>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Unauthorised Access: <b className='content__subtitle'></b>{' '}
                      Attackers can access and control a user's actions, putting
                      them at risk of losing money, damaging their reputation,
                      and facing legal consequences.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Exploiting Trust:<b className='content__subtitle'></b>{' '}
                      CSRF exploits the trust websites put in their users,
                      undermining the sense of security in online browsing.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Stealthy Exploitation:{' '}
                      <b className='content__subtitle'></b> CSRF works quietly,
                      using standard browser behaviour without needing advanced
                      malware. Users might be unaware of the attack, making them
                      susceptible to repeated exploitation.
                    </li>
                  </ul>
                  <p>
                    Understanding these risks is essential for implementing
                    effective measures to protect web applications from CSRF
                    vulnerabilities.
                  </p>
                </dd>
                {/* Topic 2 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span> Types of CSRF Attack
                </dt>
                <dd className='fadeInUp faq-body open-sans' id='border-left'>
                  <h3 className='content__subtitle'>Traditional CSRF</h3>
                  <p>
                    Conventional CSRF attacks frequently concentrate on
                    state-changing actions carried out by submitting forms. The
                    victim is tricked into submitting a form without realising
                    the associated data like cookies, URL parameters, etc. The
                    victim's web browser sends an HTTP request to a web
                    application form where the victim has already been
                    authenticated. These forms are made to transfer money,
                    modify account information, or alter an email address.
                  </p>
                  <img
                    src={Topic3}
                    alt='Topic3'
                    className='img-fluid w-75 mx-auto d-block'
                  />
                  <hr />
                  <p>
                    The above diagram shows traditional CSRF examples in the
                    following steps:
                  </p>
                  <ul>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The victim is already logged on to his bank website. The
                      attackers create a crafted malicious link and email it to
                      the victim.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The victim opens the email in the same browser.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Once clicked, the malicious link enables the auto-transfer
                      of the amount from the victim's browser to the attacker's
                      bank account.
                    </li>
                  </ul>
                  <h3 className='content__subtitle'>XMLHttpRequest CSRF</h3>
                  <p>
                    An asynchronous CSRF exploitation occurs when operations are
                    initiated without a complete page request-response cycle.
                    This is typical of contemporary online apps that leverage
                    asynchronous server communication (via XMLHttpRequest or the
                    Fetch API) and JavaScript to produce more dynamic user
                    interfaces. These attacks use asynchronous calls instead of
                    the more conventional form submissions. Still, they exploit
                    the same trust relationship between the user and the online
                    service.
                  </p>
                  <p>
                    Consider an online email client, for instance, where users
                    may change their email preferences without reloading the
                    page. If this online application is CSRF-vulnerable, a
                    hacker might create a fake asynchronous HTTP request,
                    usually a POST request, and alter the victim's email
                    preferences, forwarding all their correspondence to a
                    malicious address.
                  </p>
                  <p>
                    The following is a simplified overview of the steps that an
                    asynchronous CSRF attack could take:{' '}
                  </p>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The victim opens a session saved in their browser's
                      cookies and logs into the{' '}
                      <code className='content__code'>mailbox.thm.</code>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The attacker entices the victim to open a malicious
                      webpage with a script that can send queries to the
                      <code className='content__code'>mailbox.thm.</code>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      To modify the user's email forwarding preferences, the
                      malicious script on the attacker's page makes an AJAX call
                      to{' '}
                      <code className='content__code'>
                        mailbox.thm/api/updateEmail
                      </code>
                      (using XMLHttpRequest or Fetch).
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The <code className='content__code'>mailbox.thm.</code>{' '}
                      session cookie is included with the AJAX request in the
                      victim's browser.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      After receiving the AJAX request, mailbox.thm evaluates it
                      and modifies the victim's settings if no CSRF defences
                      exist.
                    </li>
                  </ul>
                  <h3 className='content__subtitle'>Flash-based CSRF</h3>
                  <p>
                    The term "Flash-based CSRF" describes the technique of
                    conducting a CSRF attack by taking advantage of flaws in
                    Adobe Flash Player components. Internet applications with
                    features like interactive content, video streaming, and
                    intricate animationsflash based csrf have been made possible
                    with Flash. But over time, security flaws in Flash,
                    particularly those that can be used to launch CSRF attacks,
                    have become a major source of worry. As HTML5 technology
                    advanced and security flaws multiplied, official support for
                    Adobe Flash Player ceased on December 31, 2020.
                  </p>
                  <p>
                    Even though Flash is no longer supported, a talk about
                    Flash-based cross-site request forgery threats is
                    instructive, particularly for legacy systems that still rely
                    on antiquated technologies. A malicious Flash file (.swf)
                    posted on the attacker's website would typically send
                    unauthorised requests to other websites to carry out
                    Flash-based CSRF attacks.
                    <img
                      src={Topic31}
                      alt='Topic3'
                      className='img-fluid w-25 '
                    />
                  </p>
                </dd>
                {/* Topic 3 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span> Attribute-Based Access Control (ABAC)
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
                    src={Topic2}
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
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>
                        Cookies are saved in name-value pairs like:
                      </div>
                      <pre className='terminal-code language-bash' tabIndex='0'>
                        <code className='language-bash'>
                          &lt;!-- Website --&gt; <br />
                          &lt;a href="https://mybank.thm/transfer.php"
                          target="_blank"&gt;Click Here&lt;/a&gt; <br />
                          &lt;!-- User visits attacker&#39;s website while
                          authenticated --&gt;
                        </code>
                      </pre>
                    </div>
                  </div>
                  <p>
                    This technique preys on authenticated sessions and utilises
                    a social engineering approach when a user may inadvertently
                    perform operations on a different website while still logged
                    in.
                  </p>
                  <h3 className='content__subtitle'>How it Works</h3>
                  <p>
                    Now, you are already connected to the VM. Let's see how the
                    attack works.
                  </p>
                  <ul>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The attached VM represents Josh's machine, who uses Chrome
                      to check his mailbox (http://mailbox.thm:8081) and log
                      into his bank account (http://mybank.thm:8080). Since he
                      is a financial broker by profession, he deals with many
                      financial transactions daily and keeps his accounts logged
                      into the browser.{' '}
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The attacker somehow learns that Josh uses mybank.thm:8080
                      for transactions, and his account is always logged in.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The attacker also had an account in the same bank, so he
                      tried to log in and check for any vulnerabilities that he
                      could use to get additional cash in his account.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      You can also log in to Firefox in the attached VM or any
                      other browser using the username GB82MYBANK5698 and
                      password GB82MYBANK5698 to understand the attacker's
                      perspective and check the source code and how the
                      client-side scripts work.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      While scanning, he found that no additional parameter was
                      being sent from the bank app while transferring payment.
                      Here is the code that handles the transfer of funds:
                      <div class='terminal-container'>
                        <div class='terminal-content'>
                          <div class='terminal-top'>PHP Form Example</div>
                          <pre class='terminal-code language-bash' tabindex='0'>
                            <code class='language-bash'>
                              &lt;?php
                              <br />
                              &lt;form action="transfer.php" method="post"&gt;{' '}
                              <br />
                              <br />
                              &lt;label for="to_account"&gt;To
                              Account&lt;/label&gt;
                              <br />
                              &lt;input type="text" id="to_account"
                              name="to_account" required&gt;
                              <br />
                              <br />
                              &lt;label for="amount"&gt;Amount&lt;/label&gt;
                              <br />
                              &lt;input type="number" id="amount" name="amount"
                              required&gt;
                              <br />
                              &lt;button
                              type="submit"&gt;Transfer&lt;/button&gt;
                              <br />
                              &lt;/form&gt;
                            </code>
                          </pre>
                        </div>
                      </div>
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Here, the attacker can employ the hidden image technique
                      by simply crafting an email and luring the victim to click
                      on a link. The attacker only knows Josh's email address,
                      so he launches a social engineering attack by sending the
                      following email to him.
                      <img
                        src={Topic4}
                        alt=''
                        className='img-fluid w-75 mx-auto d-block '
                      />
                      <hr />
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The most important thing is the image src attribute set to
                      the bank transfer page link. The attacker can hide it or
                      put a valid image with an anchor tag redirecting to the
                      bank transfer page.
                      <div class='terminal-container'>
                        <div class='terminal-content'>
                          <div class='terminal-top'>Email Content</div>
                          <pre class='terminal-code language-bash' tabindex='0'>
                            <code class='language-bash'>
                              &lt;a
                              href="http://mybank.thm:8080/dashboard.php?to_account=GB82MYBANK5698&amount=1000"
                              target="_blank"/&gt; Click Here to Redeem
                              &lt;/a&gt;
                            </code>
                          </pre>
                        </div>
                      </div>
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      To understand the victim's perspective, navigate to Josh's
                      mailbox at the mailbox.thm:8081 to see a new email stating
                      that he has won a trip to Dubai and to claim it, he has to
                      click on a link directed to the MyBank vulnerable page
                      without having CSRF protection.
                    </li>
                    <li>
                      {' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Once you (in reality, the victim) click on the link, he
                      will be redirected to the bank page, and the funds will be
                      transferred automatically.
                      <img
                        src={Topic41}
                        alt=''
                        className='img-fluid w-75 mx-auto d-block '
                      />
                      <hr />
                    </li>
                  </ul>
                  <h3 className='content__subtitle'>
                    What was the missing link?
                  </h3>
                  <p>
                    All the validations are correct and accurate; however, the
                    server is not validating if the request comes from a
                    legitimate user.
                  </p>
                  <h3 className='content__subtitle'>Securing the Breach</h3>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      From a pentester/red teamer perspective, it is vital to
                      pentest each request and response parameter of the form.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      From a secure coder perspective, it is important to ensure
                      that each request submitted to the web server carries a
                      unique token so that the server can identify if it is
                      clicked through a valid source.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      The bank IT team quickly identified the issue and added a
                      CSRF token with each request submitted to the server. The
                      following code contains the updated client-side code. We
                      can see that there is an additional hidden parameter,
                      csrf_token, which will be sent to the server with each
                      request.
                      <div class='terminal-container'>
                        <div class='terminal-content'>
                          <div class='terminal-top'>Email Content</div>
                          <pre class='terminal-code language-bash' tabindex='0'>
                            <code class='language-bash'>
                              &lt;form method="post" action=""&gt; <br />
                              &lt;label
                              for="password"&gt;Password:&lt;/label&gt; <br />
                              &lt;input type="password" id="password"
                              name="current_password" required /&gt; <br />{' '}
                              <br />
                              &lt;label
                              for="confirm_password"&gt;ConfirmPassword:&lt;/label&gt;{' '}
                              <br />
                              &lt;input type="password" id="confirm_password"
                              name="confirm_password" required /&gt; <br />
                              &lt;input type="hidden" id="csrf_token"
                              name="csrf_token" value="&lt;?php echo
                              $_COOKIE['csrf-token']; ?&gt;" /&gt;
                              <br />
                              <br />
                              &lt;button type="submit"
                              name="password_submit"&gt;Update
                              Password&lt;/button&gt;
                              <br />
                              &lt;/form&gt;
                              <br />
                            </code>
                          </pre>
                        </div>
                      </div>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      On the server side, the server will verify if each
                      incoming request contains the unique token; otherwise, it
                      will reject the request.
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Open Josh's mailbox and navigate to the attacker's email
                      with a green badge.
                      <img
                        src={Topic42}
                        alt=''
                        className='img-fluid w-75 mx-auto d-block '
                      />
                      <hr />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      When the user clicks on the link, it won't transfer the
                      funds as the request is missing a unique CSRF token
                      required to validate the request.
                      <img
                        src={Topic43}
                        alt=''
                        className='img-fluid w-75 mx-auto d-block '
                      />
                      <hr />
                    </li>
                  </ul>
                </dd>
                {/* Topic 4 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span> Basic CSRF - Hidden Link/Image
                  Exploitation
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
                    src={Topic4}
                    alt=''
                    className='img-fluid w-75 mx-auto d-block '
                  />
                  <hr />
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/CSRF/CSRF_labs')}
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

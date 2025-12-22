import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import background from '../../assets/img/BLV/background.png';
import courseImage from '../../assets/img/BLV/course_image.png';
import logicFlow from '../../assets/img/BLV/logic-flaws.jpg';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/CourseLanding/CourseLanding.jsx';
import Banner from '../../Components/Banner/Banner.jsx';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn.jsx';
export default function BL_Vuln() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();

  return (
    <>
      <Banner />
      <Header />
      <CourseLanding
        background={background}
        backgroundStyle={{ objectFit: 'cover', height: '100%', width: '100%' }}
        courseImage={courseImage}
        courseTitle='Business logic vulnerabilities'
        courseDescription='Learn how attackers exploit business logic vulnerabilities in
                web applications, where legitimate processes are manipulated to
                achieve unintended outcomes. These vulnerabilities occur when an
                application’s functionality or workflows are misused, bypassing
                intended logic or restrictions to perform unauthorized actions.
                Understanding these vulnerabilities involves identifying flaws
                in business rules, data flows, or decision-making processes, and
                implementing secure validation and authorization mechanisms to
                prevent exploitation.'
        difficulty='Intermediate'
        duration='30 min'
        onSaveRoom={() => console.log('Room Saved!')}
        onLike={() => console.log('Liked!')}
        onDislike={() => console.log('Disliked!')}
      />

      <div className='Content'>
        <div className='secure-container'>
          <div className='content-row'>
            <div className='content-section' ref={faqSectionRef}>
              <dl className='topics-text'>
                {/* Intro */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Intro to </span> Business logic vulnerabilities
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h3 className='content__title'>
                    Business logic vulnerabilities
                  </h3>
                  <p>
                    In this section, we'll introduce the concept of business
                    logic vulnerabilities and explain how they can arise due to
                    flawed assumptions about user behavior. We'll discuss the
                    potential impact of logic flaws and teach you how they can
                    be exploited. You can also practice what you've learned
                    using our interactive labs, which are based on real bugs
                    that we've encountered in the wild. Finally, we'll provide
                    some general best practices to help you prevent these kinds
                    of logic flaws arising in your own applications.
                  </p>

                  <img
                    src={logicFlow}
                    alt='logic flaw img'
                    className='img-fluid w-50 mx-auto d-block'
                  />
                  <hr />

                  <h3 className='content__title mt-2'>Labs</h3>
                  <p>
                    If you're already familiar with the basic concepts behind
                    business logic vulnerabilities and just want to practice
                    exploiting them on some realistic, deliberately vulnerable
                    targets, you can access all of the labs in this topic from
                    the link below.{' '}
                  </p>
                  <div className='note'>
                    You can access all of the labs in this topic from the link
                    below.{' '}
                    <a
                      className='content__subtitle underline'
                      href='BL-Vuln/BL_Vuln_labs'>
                      business logic vulnerabilities labs.
                    </a>
                  </div>
                </dd>
                {/* Topic 1 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 1 </span> What are business logic vulnerabilities?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    Business logic vulnerabilities are flaws in the design and
                    implementation of an application that allow an attacker to
                    elicit unintended behavior. This potentially enables
                    attackers to manipulate legitimate functionality to achieve
                    a malicious goal. These flaws are generally the result of
                    failing to anticipate unusual application states that may
                    occur and, consequently, failing to handle them safely.
                  </p>
                  <div className='note'>
                    <span className='text-danger'>Note: </span>
                    In this context, the term "business logic" simply refers to
                    the set of rules that define how the application operates.
                    As these rules aren't always directly related to a business,
                    the associated vulnerabilities are also known as
                    "application logic vulnerabilities" or simply "logic flaws".
                  </div>
                  <p>
                    Logic flaws are often invisible to people who aren't
                    explicitly looking for them as they typically won't be
                    exposed by normal use of the application. However, an
                    attacker may be able to exploit behavioral quirks by
                    interacting with the application in ways that developers
                    never intended. One of the main purposes of business logic
                    is to enforce the rules and constraints that were defined
                    when designing the application or functionality. Broadly
                    speaking, the business rules dictate how the application
                    should react when a given scenario occurs. This includes
                    preventing users from doing things that will have a negative
                    impact on the business or that simply don't make sense.
                    Flaws in the logic can allow attackers to circumvent these
                    rules.
                  </p>
                  <p>
                    For example, they might be able to complete a transaction
                    without going through the intended purchase workflow. In
                    other cases, broken or non-existent validation of
                    user-supplied data might allow users to make arbitrary
                    changes to transaction-critical values or submit nonsensical
                    input.
                  </p>
                  <p>
                    By passing unexpected values into server-side logic, an
                    attacker can potentially induce the application to do
                    something that it isn't supposed to. Logic-based
                    vulnerabilities can be extremely diverse and are often
                    unique to the application and its specific functionality.
                    Identifying them often requires a certain amount of human
                    knowledge, such as an understanding of the business domain
                    or what goals an attacker might have in a given context.
                    This makes them difficult to detect using automated
                    vulnerability scanners. As a result, logic flaws are a great
                    target for bug bounty hunters and manual testers in general.
                  </p>
                </dd>
                {/* Topic 2 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 2 </span> How do business logic vulnerabilities
                  arise?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h3 className='content__title'>
                    How do business logic vulnerabilities arise{' '}
                  </h3>
                  <p>
                    Business logic vulnerabilities can arise in a number of
                    ways. Some common causes include:
                  </p>
                  <ol>
                    <li>
                      <span className='content__subtitle me-2'>
                        Incorrect assumptions about user behavior:
                      </span>
                      Developers may make assumptions about how users will
                      interact with an application that turn out to be
                      incorrect. For example, a developer might assume that a
                      user will always follow a certain sequence of steps when
                      using a feature, but in reality, users might not behave as
                      expected. This can lead to logic flaws if the application
                      doesn't handle these unexpected behaviors correctly.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        Insufficient validation of user input:
                      </span>
                      If an application doesn't validate user input properly,
                      attackers may be able to submit unexpected values that
                      cause the application to behave in unexpected ways. For
                      example, an attacker might be able to manipulate a hidden
                      field in a form to change the price of an item in an
                      online store.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        Failure to enforce business rules:
                      </span>
                      If an application fails to enforce the business rules that
                      were defined when designing the application, logic flaws
                      can occur. For example, an application might allow a user
                      to perform an action that should be restricted, such as
                      deleting another user's account.
                    </li>
                  </ol>
                  <p>
                    These are just a few examples of how business logic
                    vulnerabilities can arise. In general, any time an
                    application's behavior is based on assumptions that turn out
                    to be incorrect, there is the potential for logic flaws to
                    occur.
                  </p>
                </dd>
                {/* Topic 3 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 3 </span> How can business logic vulnerabilities
                  be exploited?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h3 className='content__title'>
                    How can business logic vulnerabilities be exploited{' '}
                  </h3>
                  <p>
                    Business logic vulnerabilities can be exploited in a variety
                    of ways, depending on the specific flaw and the application
                    in question. Some common exploitation techniques include:
                  </p>
                  <ol>
                    <li>
                      <span className='content__subtitle me-2'>
                        Abusing functionality:
                      </span>
                      Attackers may be able to abuse legitimate functionality in
                      an application to achieve unintended outcomes. For
                      example, an attacker might be able to exploit a logic flaw
                      in an e-commerce application to purchase items at a
                      reduced price.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        Manipulating data flows:
                      </span>
                      Attackers may be able to manipulate the flow of data
                      within an application to achieve their goals. For example,
                      an attacker might be able to change the recipient of a
                      payment in a banking application by exploiting a logic
                      flaw.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        Bypassing restrictions:
                      </span>
                      Attackers may be able to bypass restrictions that are
                      intended to prevent certain actions. For example, an
                      attacker might be able to delete another user's account in
                      a social media application by exploiting a logic flaw.
                    </li>
                  </ol>
                  <p>
                    These are just a few examples of how business logic
                    vulnerabilities can be exploited. In general, any time an
                    attacker can manipulate an application's behavior to achieve
                    a malicious goal, there is the potential for a logic flaw to
                    be exploited.
                  </p>
                </dd>
                {/* Topic 4 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 4 </span> How can business logic vulnerabilities
                  be prevented?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h3 className='content__title'>
                    How can business logic vulnerabilities be prevented{' '}
                  </h3>
                  <p>
                    Preventing business logic vulnerabilities requires a
                    combination of secure coding practices, thorough testing,
                    and ongoing monitoring. Some best practices for preventing
                    logic flaws include:
                  </p>
                  <ol>
                    <li>
                      <span className='content__subtitle me-2'>
                        Validate user input:
                      </span>
                      Always validate user input to ensure that it conforms to
                      expected values. This can help prevent attackers from
                      submitting unexpected values that could lead to logic
                      flaws.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        Enforce business rules:
                      </span>
                      Make sure that your application enforces the business
                      rules that were defined when designing the application.
                      This can help prevent logic flaws that occur when these
                      rules are not enforced correctly.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        Use secure coding practices:
                      </span>
                      Follow secure coding practices when developing your
                      application to reduce the likelihood of logic flaws. This
                      includes practices such as input validation, output
                      encoding, and secure session management.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        Thoroughly test your application:
                      </span>
                      Test your application thoroughly to identify and fix logic
                      flaws before they can be exploited by attackers. This
                      includes both manual testing and automated testing.
                    </li>
                    <li>
                      <span className='content__subtitle me-2'>
                        Monitor your application:
                      </span>
                      Monitor your application for signs of unusual behavior
                      that may indicate a logic flaw. This can help you identify
                      and fix logic flaws before they can be exploited by
                      attackers.
                    </li>
                  </ol>
                  <p>
                    By following these best practices, you can help prevent
                    business logic vulnerabilities in your application and
                    reduce the risk of exploitation by attackers.
                  </p>
                </dd>
                {/* Topic 5 */}
                <dt className='fadeInUp faq-header' id='border-left'>
                  <span>Topic 5 </span> Conclusion
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    Business logic vulnerabilities are a common type of security
                    flaw that can have serious consequences if exploited by
                    attackers. By understanding how these vulnerabilities arise,
                    how they can be exploited, and how they can be prevented,
                    you can help protect your application from these types of
                    attacks. Remember to always validate user input, enforce
                    business rules, use secure coding practices, thoroughly test
                    your application, and monitor for signs of unusual behavior.
                    By following these best practices, you can help prevent
                    business logic vulnerabilities and keep your application
                    secure.
                  </p>
                  <div className='note'>
                    <span className='text-danger'> Note</span> If you're ready
                    to put your knowledge to the test, you can access all of the
                    labs in this topic from the link below. View all business
                    logic vulnerabilities labs.
                  </div>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/BL-Vuln/BL_Vuln_labs')}
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

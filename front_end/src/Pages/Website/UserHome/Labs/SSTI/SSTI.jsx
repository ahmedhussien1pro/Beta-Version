import React from 'react';
import Header from '../../Header/Header';
import courseImage from '../../assets/img/Server Side Template Injection/course_image.png';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import exampleImage1 from '../../assets/img/Server Side Template Injection/1.png';
import exampleImage2 from '../../assets/img/Server Side Template Injection/2.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';

export default function SSTI() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Server Side Template Injection (SSTI)',
      ar: 'حقن القوالب من جانب الخادم (SSTI)',
    },
    description: {
      en: 'Explore how attackers inject malicious code into server-side templates. Learn to identify vulnerable engines like Jinja2, Twig, or Mako and how to prevent remote code execution.',
      ar: 'استكشف كيف يقوم المهاجمون بحقن أكواد خبيثة في القوالب البرمجية من جانب الخادم. تعلم كيفية تحديد المحركات المصابة مثل Jinja2 و Twig و Mako وكيفية منع تنفيذ الأكواد عن بعد.',
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
    rating: '4.8',
    students: '1560',
  };

  return (
    <>
      <Header />
      {/* Start Landing  */}
      <CourseLanding {...data} />
      {/* End Landing  */}
      {/* Start Course Content  */}
      <div className='Content'>
        <div className='secure-container' ref={faqSectionRef}>
          <div className='content-row'>
            <div className='content-section'>
              <dl className='topics-text'>
                {/* Single FAQ Area  */}

                <dt className='fadeInUp faq-header'>
                  <span>Step 1</span> Introduction
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h1 className='content__title'>
                    Welcome to Server Side Template Injection (SSTI)
                  </h1>

                  <h2 className='content__title'>
                    What is server-side template injection?
                  </h2>
                  <br />
                  <p>
                    Server-side template injection is when an attacker is able
                    to use native template syntax to inject a malicious payload
                    into a template, which is then executed server-side.
                  </p>
                  <p>
                    Template engines are designed to generate web pages by
                    combining fixed templates with volatile data. Server-side
                    template injection attacks can occur when user input is
                    concatenated directly into a template, rather than passed in
                    as data. This allows attackers to inject arbitrary template
                    directives in order to manipulate the template engine, often
                    enabling them to take complete control of the server. As the
                    name suggests, server-side template injection payloads are
                    delivered and evaluated server-side, potentially making them
                    much more dangerous than a typical client-side template
                    injection.
                  </p>
                  <br />
                  <h2 className='content__title'>
                    What is the impact of server-side template injection?
                  </h2>
                  <br />
                  <p>
                    Server-side template injection vulnerabilities can expose
                    websites to a variety of attacks depending on the template
                    engine in question and how exactly the application uses it.
                    In certain rare circumstances, these vulnerabilities pose no
                    real security risk. However, most of the time, the impact of
                    server-side template injection can be catastrophic.
                  </p>
                  <p>
                    At the severe end of the scale, an attacker can potentially
                    achieve remote code execution, taking full control of the
                    back-end server and using it to perform other attacks on
                    internal infrastructure.
                  </p>
                  <p>
                    Even in cases where full remote code execution is not
                    possible, an attacker can often still use server-side
                    template injection as the basis for numerous other attacks,
                    potentially gaining read access to sensitive data and
                    arbitrary files on the server.
                  </p>
                  <br />
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span>Step 2</span> SSTI vulnerabilities
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <br />
                  <h1 className='content__title'>
                    server-side template injection vulnerabilities
                  </h1>
                  <h2 className='content__title'>
                    How do server-side template injection vulnerabilities arise?
                  </h2>
                  <br />
                  <p>
                    Server-side template injection vulnerabilities arise when
                    user input is concatenated into templates rather than being
                    passed in as data.
                  </p>
                  <p>
                    Static templates that simply provide placeholders into which
                    dynamic content is rendered are generally not vulnerable to
                    server-side template injection. The classic example is an
                    email that greets each user by their name, such as the
                    following extract from a Twig template:
                  </p>
                  <br />
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>output</div>
                      <pre className='terminal-codelanguage-bash' tabIndex='0'>
                        <code className='language-bash'>
                          $output = $twig-{'>'}render("Dear (first_name),",
                          array("first_name" ={'>'} $user.first_name) );
                        </code>
                      </pre>
                    </div>
                  </div>
                  <br />
                  <p>
                    This is not vulnerable to server-side template injection
                    because the user's first name is merely passed into the
                    template as data.
                  </p>
                  <p>
                    However, as templates are simply strings, web developers
                    sometimes directly concatenate user input into templates
                    prior to rendering. Let's take a similar example to the one
                    above, but this time, users are able to customize parts of
                    the email before it is sent. For example, they might be able
                    to choose the name that is used:
                  </p>
                  <br />
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>output</div>
                      <pre className='terminal-codelanguage-bash' tabIndex='0'>
                        <code className='language-bash'>
                          $output = $twig-{'>'}render("Dear " . $_GET['name']);
                        </code>
                      </pre>
                    </div>
                  </div>
                  <br />
                  <p>
                    In this example, instead of a static value being passed into
                    the template, part of the template itself is being
                    dynamically generated using the <span>GET</span> parameter{' '}
                    <span>name</span>. As template syntax is evaluated
                    server-side, this potentially allows an attacker to place a
                    server-side template injection payload inside the{' '}
                    <span>name</span> parameter as follows:
                  </p>
                  <br />
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>URL</div>
                      <pre className='terminal-codelanguage-bash' tabIndex='0'>
                        <code className='language-bash'>
                          http://vulnerable-website.com/?name=&#123;&#123;bad-stuff-here&#125;&#125;
                        </code>
                      </pre>
                    </div>
                  </div>
                  <p>
                    Vulnerabilities like this are sometimes caused by accident
                    due to poor template design by people unfamiliar with the
                    security implications. Like in the example above, you may
                    see different components, some of which contain user input,
                    concatenated and embedded into a template. In some ways,
                    this is similar to SQL injection vulnerabilities occurring
                    in poorly written prepared statements.
                  </p>
                  <p>
                    However, sometimes this behavior is actually implemented
                    intentionally. For example, some websites deliberately allow
                    certain privileged users, such as content editors, to edit
                    or submit custom templates by design. This clearly poses a
                    huge security risk if an attacker is able to compromise an
                    account with such privileges.
                  </p>
                  <br />
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span>Step 2</span> Constructing a SSTI attack
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <br />
                  <h1 className='content__title'>
                    Constructing a server-side template injection attack
                  </h1>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage1} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <h4>Detect</h4>
                  <p>
                    Server-side template injection vulnerabilities often go
                    unnoticed not because they are complex but because they are
                    only really apparent to auditors who are explicitly looking
                    for them. If you are able to detect that a vulnerability is
                    present, it can be surprisingly easy to exploit it. This is
                    especially true in unsandboxed environments.
                  </p>
                  <p>
                    As with any vulnerability, the first step towards
                    exploitation is being able to find it. Perhaps the simplest
                    initial approach is to try fuzzing the template by injecting
                    a sequence of special characters commonly used in template
                    expressions, such as
                    <span>
                      $&#123;&#123;&lt;%[%&quot;&#39;&#125;&#125;%\
                    </span>{' '}
                    If an exception is raised, this indicates that the injected
                    template syntax is potentially being interpreted by the
                    server in some way. This is one sign that a vulnerability to
                    server-side template injection may exist.
                  </p>
                  <br />
                  <p>
                    Server-side template injection vulnerabilities occur in two
                    distinct contexts, each of which requires its own detection
                    method. Regardless of the results of your fuzzing attempts,
                    it is important to also try the following context-specific
                    approaches. If fuzzing was inconclusive, a vulnerability may
                    still reveal itself using one of these approaches. Even if
                    fuzzing did suggest a template injection vulnerability, you
                    still need to identify its context in order to exploit it.
                  </p>
                  <br />
                  <h4>Plaintext context</h4>
                  <br />
                  <p>
                    Most template languages allow you to freely input content
                    either by using HTML tags directly or by using the
                    template's native syntax, which will be rendered to HTML on
                    the back-end before the HTTP response is sent. For example,
                    in Freemarker, the line
                    <span> render('Hello ' + username)</span> would render to
                    something like <span>Hello Carlos</span>.
                  </p>
                  <p>
                    This can sometimes be exploited for XSS and is in fact often
                    mistaken for a simple XSS vulnerability. However, by setting
                    mathematical operations as the value of the parameter, we
                    can test whether this is also a potential entry point for a
                    server-side template injection attack.For example, consider
                    a template that contains the following vulnerable code:
                  </p>
                  <br />
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>vulnerable code:</div>
                      <pre className='terminal-codelanguage-bash' tabIndex='0'>
                        <code className='language-bash'>
                          render('Hello ' + username)
                        </code>
                      </pre>
                    </div>
                  </div>
                  <br />
                  <p>
                    During auditing, we might test for server-side template
                    injection by requesting a URL such as:
                  </p>
                  <br />
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>URL</div>
                      <pre className='terminal-codelanguage-bash' tabIndex='0'>
                        <code className='language-bash'>
                          http://vulnerable-website.com/?username=${7 * 7}
                        </code>
                      </pre>
                    </div>
                  </div>
                  <br />
                  <p>
                    If the resulting output contains <span>Hello 49</span>, this
                    shows that the mathematical operation is being evaluated
                    server-side. This is a good proof of concept for a
                    server-side template injection vulnerability.
                  </p>
                  <p>
                    note__new--note that the specific syntax required to
                    successfully evaluate the mathematical operation will vary
                    depending on which template engine is being used. We'll
                    discuss this in more detail in the Identify step.
                  </p>
                  <br />
                  <h4>Code context</h4>
                  <br />
                  <p>
                    In other cases, the vulnerability is exposed by user input
                    being placed within a template expression, as we saw earlier
                    with our email example. This may take the form of a
                    user-controllable variable name being placed inside a
                    parameter, such as:
                  </p>
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>Code</div>
                      <pre className='terminal-codelanguage-bash' tabIndex='0'>
                        <code className='language-bash'>
                          greeting = getQueryParameter('greeting')
                          engine.render("Hello
                          &#123;&#123;"+greeting+"&#125;&#125;", data)
                        </code>
                      </pre>
                    </div>
                  </div>
                  <br />
                  <p>
                    On the website, the resulting URL would be something like:
                  </p>
                  <br />
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>URL</div>
                      <pre className='terminal-codelanguage-bash' tabIndex='0'>
                        <code className='language-bash'>
                          http://vulnerable-website.com/?greeting=data.username
                        </code>
                      </pre>
                    </div>
                  </div>
                  <br />
                  <p>
                    This would be rendered in the output to{' '}
                    <span>Hello Carlos</span>, for example.
                  </p>
                  <p>
                    This context is easily missed during assessment because it
                    doesn't result in obvious XSS and is almost
                    indistinguishable from a simple hashmap lookup. One method
                    of testing for server-side template injection in this
                    context is to first establish that the parameter doesn't
                    contain a direct XSS vulnerability by injecting arbitrary
                    HTML into the value:
                  </p>
                  <br />
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>URL</div>
                      <pre className='terminal-codelanguage-bash' tabIndex='0'>
                        <code className='language-bash'>
                          http://vulnerable-website.com/?greeting=data.username&lt;tag&gt;{' '}
                        </code>
                      </pre>
                    </div>
                  </div>
                  <br />
                  <p>
                    In the absence of XSS, this will usually either result in a
                    blank entry in the output (just Hello with no username),
                    encoded tags, or an error message. The next step is to try
                    and break out of the statement using common templating
                    syntax and attempt to inject arbitrary HTML after it:
                  </p>
                  <br />
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>URL</div>
                      <pre className='terminal-codelanguage-bash' tabIndex='0'>
                        <code className='language-bash'>
                          http://vulnerable-website.com/?greeting=data.username&#125;&#125;&lt;tag&gt;{' '}
                        </code>
                      </pre>
                    </div>
                  </div>
                  <br />
                  <p>
                    If this again results in an error or blank output, you have
                    either used syntax from the wrong templating language or, if
                    no template-style syntax appears to be valid, server-side
                    template injection is not possible. Alternatively, if the
                    output is rendered correctly, along with the arbitrary HTML,
                    this is a key indication that a server-side template
                    injection vulnerability is present:
                  </p>
                  <br />
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div className='terminal-top'>URL</div>
                      <pre className='terminal-codelanguage-bash' tabIndex='0'>
                        <code className='language-bash'>
                          Hello Carlos&lt;tag&gt;
                        </code>
                      </pre>
                    </div>
                  </div>
                  <br />
                  <h4>Identify</h4>
                  <br />
                  <p>
                    Once you have detected the template injection potential, the
                    next step is to identify the template engine.
                  </p>
                  <p>
                    Although there are a huge number of templating languages,
                    many of them use very similar syntax that is specifically
                    chosen not to clash with HTML characters. As a result, it
                    can be relatively simple to create probing payloads to test
                    which template engine is being used.Simply submitting
                    invalid syntax is often enough because the resulting error
                    message will tell you exactly what the template engine is,
                    and sometimes even which version. For example, the invalid
                    expression{' '}
                    <code>&lt;span&gt;&lt;%=foobar%&gt;&lt;/span&gt;</code>
                    triggers the following response from the Ruby-based ERB
                  </p>
                  <p>engine:</p>
                  <span>
                    (erb):1:in &lt;main&gt;: undefined local variable or method
                    `foobar' for main:Object (NameError)
                  </span>
                  <br />
                  <span>from /usr/lib/ruby/2.5.0/erb.rb:876:in `eval'</span>
                  <br />
                  <span>from /usr/lib/ruby/2.5.0/erb.rb:876:in `result'</span>
                  <br />
                  <span>from -e:4:in &lt;main&gt; </span>
                  <br />
                  <br />
                  <p>
                    Otherwise, you'll need to manually test different
                    language-specific payloads and study how they are
                    interpreted by the template engine. Using a process of
                    elimination based on which syntax appears to be valid or
                    invalid, you can narrow down the options quicker than you
                    might think. A common way of doing this is to inject
                    arbitrary mathematical operations using syntax from
                    different template engines. You can then observe whether
                    they are successfully evaluated. To help with this process,
                    you can use a decision tree similar to the following:
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage2} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    You should be aware that the same payload can sometimes
                    return a successful response in more than one template
                    language. For example, the payload{' '}
                    <span>&#123;&#123;7*'7'&#125;&#125;</span> returns{' '}
                    <span>49</span> in Twig and <span>7777777</span> in Jinja2.
                    Therefore, it is important not to jump to conclusions based
                    on a single successful response.
                  </p>
                  <br />
                  <h4>Exploit</h4>
                  <br />
                  <p>
                    After detecting that a potential vulnerability exists and
                    successfully identifying the template engine, you can begin
                    trying to find ways of exploiting it.
                  </p>
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span>Step 4</span> How to prevent SSTI vulnerabilities
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <br />
                  <h1 className='content__title'>
                    How to prevent server-side template injection
                    vulnerabilities
                  </h1>
                  <br />
                  <p>
                    The best way to prevent server-side template injection is to
                    not allow any users to modify or submit new templates.
                    However, this is sometimes unavoidable due to business
                    requirements.
                  </p>

                  <p>
                    {' '}
                    One of the simplest ways to avoid introducing server-side
                    template injection vulnerabilities is to always use a
                    "logic-less" template engine, such as Mustache, unless
                    absolutely necessary. Separating the logic from presentation
                    as much as possible can greatly reduce your exposure to the
                    most dangerous template-based attacks.
                  </p>
                  <p>
                    Another measure is to only execute users' code in a
                    sandboxed environment where potentially dangerous modules
                    and functions have been removed altogether. Unfortunately,
                    sandboxing untrusted code is inherently difficult and prone
                    to bypasses.
                  </p>
                  <p>
                    Finally, another complementary approach is to accept that
                    arbitrary code execution is all but inevitable and apply
                    your own sandboxing by deploying your template environment
                    in a locked-down Docker container, for example.
                  </p>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/ssti/ssti_lab')}
                className='go-to'>
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}

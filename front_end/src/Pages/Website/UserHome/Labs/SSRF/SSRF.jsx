import React from 'react';
import Header from '../../Header/Header';
import courseImage from '../../assets/img/Server Side Template Injection/course_image.png';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import exampleImage10 from '../../assets/img/Server Side Template Injection/10.jpg';
import exampleImage11 from '../../assets/img/Server Side Template Injection/11.jpg';

export default function SSRF() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Server Side Request Forgery (SSRF)',
      ar: 'تزوير الطلبات من جانب الخادم (SSRF)',
    },
    description: {
      en: 'Learn how attackers trick servers into making unauthorized requests to internal or external systems. Master the techniques to identify SSRF vulnerabilities and protect sensitive internal resources.',
      ar: 'تعلم كيف يخدع المهاجمون الخوادم لإرسال طلبات غير مصرح بها لأنظمة داخلية أو خارجية. أتقن تقنيات اكتشاف ثغرات SSRF وحماية الموارد الداخلية الحساسة.',
    },
    difficulty: {
      en: 'Advanced',
      ar: 'متقدم',
    },
    duration: {
      en: '45 min',
      ar: '45 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.9',
    students: '2150',
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
                  <span>Topic 1</span> What is SSRF ?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    Server-side request forgery is a web security vulnerability
                    that allows an attacker to cause the server-side application
                    to make requests to an unintended location.
                  </p>
                  <p>
                    In a typical SSRF attack, the attacker might cause the
                    server to make a connection to internal-only services within
                    the organization's infrastructure. In other cases, they may
                    be able to force the server to connect to arbitrary external
                    systems. This could leak sensitive data, such as
                    authorization credentials.
                  </p>
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage10} alt='Example' />
                    </div>
                  </div>
                </dd>
                {/* Single FAQ Area  */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span> What is the impact of SSRF attacks ?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    A successful SSRF attack can often result in unauthorized
                    actions or access to data within the organization. This can
                    be in the vulnerable application, or on other back-end
                    systems that the application can communicate with. In some
                    situations, the SSRF vulnerability might allow an attacker
                    to perform arbitrary command execution.
                  </p>
                  <p>
                    An SSRF exploit that causes connections to external
                    third-party systems might result in malicious onward
                    attacks. These can appear to originate from the organization
                    hosting the vulnerable application.
                  </p>
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage11} alt='Example' />
                    </div>
                  </div>
                </dd>
                {/* Single FAQ Area  */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span> Common SSRF attacks
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    SSRF attacks often exploit trust relationships to escalate
                    an attack from the vulnerable application and perform
                    unauthorized actions. These trust relationships might exist
                    in relation to the server, or in relation to other back-end
                    systems within the same organization.
                  </p>
                  <h2 className='content__title'>
                    SSRF attacks against the server
                  </h2>
                  <p>
                    In an SSRF attack against the server, the attacker causes
                    the application to make an HTTP request back to the server
                    that is hosting the application, via its loopback network
                    interface. This typically involves supplying a URL with a
                    hostname like <mark>127.0.0.1</mark> (a reserved IP address
                    that points to the loopback adapter) or{' '}
                    <mark>localhost</mark> (a commonly used name for the same
                    adapter).
                  </p>
                  <p>
                    For example, imagine a shopping application that lets the
                    user view whether an item is in stock in a particular store.
                    To provide the stock information, the application must query
                    various back-end REST APIs. It does this by passing the URL
                    to the relevant back-end API endpoint via a front-end HTTP
                    request. When a user views the stock status for an item,
                    their browser makes the following request:
                  </p>
                  <code>POST /product/stock HTTP/1.0</code>
                  <p></p>
                  <code>Content-Type: application/x-www-form-urlencoded</code>
                  <p></p>
                  <code>Content-Length: 118</code>
                  <p></p>
                  <code>
                    stockApi=http://stock.weliketoshop.net:8080/product/stock/check%3FproductId%3D6%26storeId%3D1
                  </code>
                  <p>
                    This causes the server to make a request to the specified
                    URL, retrieve the stock status, and return this to the user.
                  </p>
                  <p>
                    The server fetches the contents of the <mark>/admin</mark>{' '}
                    URL and returns it to the user.
                  </p>
                  <p>
                    An attacker can visit the <mark>/admin</mark> URL, but the
                    administrative functionality is normally only accessible to
                    authenticated users. This means an attacker won't see
                    anything of interest. However, if the request to the{' '}
                    <mark>/admin</mark> URL comes from the local machine, the
                    normal access controls are bypassed. The application grants
                    full access to the administrative functionality, because the
                    request appears to originate from a trusted location. LAB
                    APPRENTICE
                  </p>
                  <p>
                    Why do applications behave in this way, and implicitly trust
                    requests that come from the local machine? This can arise
                    for various reasons:
                  </p>
                  <ul>
                    <li>
                      The access control check might be implemented in a
                      different component that sits in front of the application
                      server. When a connection is made back to the server, the
                      check is bypassed.
                    </li>
                    <li>
                      For disaster recovery purposes, the application might
                      allow administrative access without logging in, to any
                      user coming from the local machine. This provides a way
                      for an administrator to recover the system if they lose
                      their credentials. This assumes that only a fully trusted
                      user would come directly from the server.
                    </li>
                    <li>
                      The administrative interface might listen on a different
                      port number to the main application, and might not be
                      reachable directly by users.
                    </li>
                  </ul>
                  <p>
                    These kind of trust relationships, where requests
                    originating from the local machine are handled differently
                    than ordinary requests, often make SSRF into a critical
                    vulnerability.
                  </p>
                  <h2 className='content__title'>
                    SSRF attacks against other back-end systems
                  </h2>
                  <p>
                    In some cases, the application server is able to interact
                    with back-end systems that are not directly reachable by
                    users. These systems often have non-routable private IP
                    addresses. The back-end systems are normally protected by
                    the network topology, so they often have a weaker security
                    posture. In many cases, internal back-end systems contain
                    sensitive functionality that can be accessed without
                    authentication by anyone who is able to interact with the
                    systems.
                  </p>
                  <p>
                    In the previous example, imagine there is an administrative
                    interface at the back-end URL{' '}
                    <mark>https://192.168.0.68/admin</mark>. An attacker can
                    submit the following request to exploit the SSRF
                    vulnerability, and access the administrative interface:
                  </p>
                  <code>POST /product/stock HTTP/1.0</code>
                  <p></p>
                  <code>Content-Type: application/x-www-form-urlencoded</code>
                  <p></p>
                  <code>Content-Length: 118</code>
                  <p></p>
                  <code>stockApi=http://192.168.0.68/admin</code>
                  <p></p>
                </dd>
                {/* Single FAQ Area  */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span> Circumventing common SSRF defenses
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    It is common to see applications containing SSRF behavior
                    together with defenses aimed at preventing malicious
                    exploitation. Often, these defenses can be circumvented.
                  </p>
                  <h2 className='content__title'>
                    SSRF with blacklist-based input filters
                  </h2>
                  <p>
                    Some applications block input containing hostnames like{' '}
                    <mark>127.0.0.1</mark> and <mark>localhost</mark>, or
                    sensitive URLs like <mark>/admin</mark>. In this situation,
                    you can often circumvent the filter using the following
                    techniques:
                  </p>
                  <ul>
                    <li>
                      Use an alternative IP representation of 127.0.0.1, such as
                      2130706433, 017700000001, or 127.1.
                    </li>
                    <li>
                      Register your own domain name that resolves to 127.0.0.1.
                      You can use spoofed.burpcollaborator.net for this purpose.
                    </li>
                    <li>
                      Obfuscate blocked strings using URL encoding or case
                      variation.
                    </li>
                    <li>
                      Provide a URL that you control, which redirects to the
                      target URL. Try using different redirect codes, as well as
                      different protocols for the target URL. For example,
                      switching from an http: to https: URL during the redirect
                      has been shown to bypass some anti-SSRF filters.
                    </li>
                  </ul>
                  <h2 className='content__title'>
                    SSRF with whitelist-based input filters
                  </h2>
                  <p>
                    Some applications only allow inputs that match, a whitelist
                    of permitted values. The filter may look for a match at the
                    beginning of the input, or contained within in it. You may
                    be able to bypass this filter by exploiting inconsistencies
                    in URL parsing.
                  </p>
                  <p>
                    The URL specification contains a number of features that are
                    likely to be overlooked when URLs implement ad-hoc parsing
                    and validation using this method:
                  </p>
                  <ul>
                    <li>
                      URLs can contain whitespace characters, which are ignored
                      by most browsers.
                    </li>
                    <li>
                      URLs can contain control characters, which are ignored by
                      most browsers.
                    </li>
                    <li>
                      URLs can contain multiple slashes, which are treated as a
                      single slash by most browsers.
                    </li>
                    <li>
                      URLs can contain URL encoding, which is decoded by most
                      browsers.
                    </li>
                    <li>
                      URLs can contain IP addresses in decimal, octal, or
                      hexadecimal format.
                    </li>
                  </ul>
                  <h2 className='content__title'>
                    Bypassing SSRF filters via open redirection
                  </h2>
                  <p>
                    It is sometimes possible to bypass filter-based defenses by
                    exploiting an open redirection vulnerability.
                  </p>
                  <p>
                    In the previous example, imagine the user-submitted URL is
                    strictly validated to prevent malicious exploitation of the
                    SSRF behavior. However, the application whose URLs are
                    allowed contains an open redirection vulnerability. Provided
                    the API used to make the back-end HTTP request supports
                    redirections, you can construct a URL that satisfies the
                    filter and results in a redirected request to the desired
                    back-end target.
                  </p>
                  <p>
                    For example, the application contains an open redirection
                    vulnerability in which the following URL:
                  </p>
                  <code>
                    /product/nextProduct?currentProductId=6&path=http://evil-user.net
                  </code>
                  <br />
                  <br />
                  <p>returns a redirection to:</p>
                  <code>http://evil-user.net</code>
                  <br />
                  <br />
                  <p>
                    This SSRF exploit works because the application first
                    validates that the supplied stockAPI URL is on an allowed
                    domain, which it is. The application then requests the
                    supplied URL, which triggers the open redirection. It
                    follows the redirection, and makes a request to the internal
                    URL of the attacker's choosing.
                  </p>
                </dd>

                {/* Single FAQ Area  */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 5</span> Finding hidden attack surface for SSRF
                  vulnerabilities
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    Many server-side request forgery vulnerabilities are easy to
                    find, because the application's normal traffic involves
                    request parameters containing full URLs. Other examples of
                    SSRF are harder to locate.
                  </p>
                  <h2 className='content__title'>Partial URLs in requests</h2>
                  <p>
                    Sometimes, an application places only a hostname or part of
                    a URL path into request parameters. The value submitted is
                    then incorporated server-side into a full URL that is
                    requested. If the value is readily recognized as a hostname
                    or URL path, the potential attack surface might be obvious.
                    However, exploitability as full SSRF might be limited
                    because you do not control the entire URL that gets
                    requested.
                  </p>
                  <p>URLs within data formats</p>
                  <p>
                    Some applications transmit data in formats with a
                    specification that allows the inclusion of URLs that might
                    get requested by the data parser for the format. An obvious
                    example of this is the XML data format, which has been
                    widely used in web applications to transmit structured data
                    from the client to the server. When an application accepts
                    data in XML format and parses it, it might be vulnerable to
                    XXE injection. It might also be vulnerable to SSRF via XXE.
                    We'll cover this in more detail when we look at XXE
                    injection vulnerabilities.
                  </p>
                  <h2 className='content__title'>
                    SSRF via the Referer header
                  </h2>
                  <p>
                    Some applications use server-side analytics software to
                    tracks visitors. This software often logs the Referer header
                    in requests, so it can track incoming links. Often the
                    analytics software visits any third-party URLs that appear
                    in the Referer header. This is typically done to analyze the
                    contents of referring sites, including the anchor text that
                    is used in the incoming links. As a result, the Referer
                    header is often a useful attack surface for SSRF
                    vulnerabilities.
                  </p>
                  <p id='ssrf-via-the-referer-header-V2L8'>
                    See{' '}
                    <a href='https://portswigger.net/web-security/ssrf/blind'>
                      Blind SSRF vulnerabilities
                    </a>{' '}
                    for examples of vulnerabilities involving the Referer
                    header.
                  </p>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/ssrf/ssrf_lab')}
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

import React from 'react';
import Header from '../../Header/Header';
import courseImage from '../../assets/img/Insecure_Deserialization/Icon_Insecure.png';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import GoTop from '../../Components/Go2Top_Btn/Go2Top_Btn';
import exampleImage1 from '../../assets/img/Insecure_Deserialization/1.jpg';
import exampleImage2 from '../../assets/img/Insecure_Deserialization/2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function InsecureDeserialization() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Insecure Deserialization',
      ar: 'إعادة تسلسل البيانات غير الآمنة',
    },
    description: {
      en: 'Learn how untrusted data can be used to abuse logic, execute code, or bypass authentication through flawed deserialization. Master the techniques to identify and patch these critical vulnerabilities.',
      ar: 'تعلم كيف يمكن استخدام البيانات غير الموثوقة للتلاعب بالمنطق، تنفيذ الأكواد، أو تجاوز المصادقة من خلال عمليات إعادة التسلسل المعيبة. أتقن تقنيات اكتشاف ومعالجة هذه الثغرات الحرجة.',
    },
    difficulty: {
      en: 'Advanced',
      ar: 'متقدم',
    },
    duration: {
      en: '55 min',
      ar: '55 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.9',
    students: '1150',
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
                  <span>Topic 1</span>What is serialization ?
                </dt>
                <dd className='fadeInUp faq-body'>
                  <p>
                    {' '}
                    <strong className='content__subtitle'>
                      Serialization
                    </strong>{' '}
                    is the process of converting complex data structures, such
                    as objects and their fields, into a "flatter" format that
                    can be sent and received as a sequential stream of bytes.
                    Serializing data makes it much simpler to:
                  </p>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Write complex data to inter-process memory, a file, or a
                      database
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='me-2 text-warning'
                      />
                      Send complex data, for example, over a network, between
                      different components of an application, or in an API call
                    </li>
                  </ul>
                  <p>
                    Crucially, when serializing an object, its state is also
                    persisted. In other words, the object's attributes are
                    preserved, along with their assigned values.
                  </p>
                  <h2 className='content__title'>
                    Serialization vs deserialization
                  </h2>
                  <p>
                    {' '}
                    <strong className='content__subtitle'>
                      Deserialization
                    </strong>{' '}
                    is the process of restoring this byte stream to a fully
                    functional replica of the original object, in the exact
                    state as when it was serialized. The website's logic can
                    then interact with this deserialized object, just like it
                    would with any other object.
                  </p>
                  <img
                    class='img-fluid w-50 mx-auto d-block'
                    src={exampleImage1}
                    alt='Example'
                  />
                  <br></br>
                  <br></br>
                  <p>
                    Many programming languages offer native support for
                    serialization. Exactly how objects are serialized depends on
                    the language. Some languages serialize objects into binary
                    formats, whereas others use different string formats, with
                    varying degrees of human readability. Note that all of the
                    original object's attributes are stored in the serialized
                    data stream, including any private fields. To prevent a
                    field from being serialized, it must be explicitly marked as
                    "transient" in the class declaration. Be aware that when
                    working with different programming languages, serialization
                    may be referred to as marshalling{' '}
                    <strong className='content__code'> (Ruby)</strong> or
                    pickling
                    <strong className='content__code'>(Python)</strong>. These
                    terms are synonymous with "serialization" in this context.
                  </p>
                </dd>
                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span>What is insecure deserialization ?
                </dt>
                <dd className='fadeInUp faq-body'>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    <strong className='content__subtitle'>
                      Insecure deserialization
                    </strong>
                    is when user-controllable data is deserialized by a website.
                    This potentially enables an attacker to manipulate
                    serialized objects in order to pass harmful data into the
                    application code.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    It is even possible to replace a serialized object with an
                    object of an entirely different class. Alarmingly, objects
                    of any class that is available to the website will be
                    deserialized and instantiated, regardless of which class was
                    expected. For this reason, insecure deserialization is
                    sometimes known as an{' '}
                    <strong className='content__subtitle'>
                      "object injection"
                    </strong>{' '}
                    vulnerability.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    An object of an unexpected class might cause an exception.
                    By this time, however, the damage may already be done. Many
                    deserialization-based attacks are completed before
                    deserialization is finished. This means that the
                    deserialization process itself can initiate an attack, even
                    if the website's own functionality does not directly
                    interact with the malicious object. For this reason,
                    websites whose logic is based on strongly typed languages
                    can also be vulnerable to these techniques.
                  </p>
                </dd>
                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span>How do insecure deserialization
                  vulnerabilities arise ?
                </dt>
                <dd className='fadeInUp faq-body'>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    <strong className='content__subtitle'>
                      Insecure deserialization
                    </strong>
                    typically arises because there is a general lack of
                    understanding of how dangerous deserializing
                    user-controllable data can be. Ideally, user input should
                    never be deserialized at all.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    However, sometimes website owners think they are safe
                    because they implement some form of additional check on the
                    deserialized data. This approach is often ineffective
                    because it is virtually impossible to implement validation
                    or sanitization to account for every eventuality. These
                    checks are also fundamentally flawed as they rely on
                    checking the data after it has been deserialized, which in
                    many cases will be too late to prevent the attack.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    Vulnerabilities may also arise because deserialized objects
                    are often assumed to be trustworthy. Especially when using
                    languages with a binary serialization format, developers
                    might think that users cannot read or manipulate the data
                    effectively. However, while it may require more effort, it
                    is just as possible for an attacker to exploit binary
                    serialized objects as it is to exploit string-based formats.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    Deserialization-based attacks are also made possible due to
                    the number of dependencies that exist in modern websites. A
                    typical site might implement many different libraries, which
                    each have their own dependencies as well. This creates a
                    massive pool of classes and methods that is difficult to
                    manage securely. As an attacker can create instances of any
                    of these classes, it is hard to predict which methods can be
                    invoked on the malicious data. This is especially true if an
                    attacker is able to chain together a long series of
                    unexpected method invocations, passing data into a sink that
                    is completely unrelated to the initial source. It is,
                    therefore, almost impossible to anticipate the flow of
                    malicious data and plug every potential hole.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    In short, it can be argued that it is not possible to
                    securely deserialize untrusted input.
                  </p>
                </dd>
                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span>What is the impact of insecure
                  deserialization ?
                </dt>
                <dd className='fadeInUp faq-body'>
                  <img
                    class='img-fluid w-50 mx-auto d-block'
                    src={exampleImage2}
                    alt='Example'
                  />
                  <br></br>
                  <br></br>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    The impact of insecure deserialization can be very severe
                    because it provides an entry point to a massively increased
                    attack surface. It allows an attacker to reuse existing
                    application code in harmful ways, resulting in numerous
                    other vulnerabilities, often remote code execution.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    Even in cases where remote code execution is not possible,
                    insecure deserialization can lead to privilege escalation,
                    arbitrary file access, and denial-of-service attacks.
                  </p>
                </dd>
                {/* Single FAQ Area */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 5</span>How to prevent insecure deserialization
                  vulnerabilities ?
                </dt>
                <dd className='fadeInUp faq-body'>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    Generally speaking, deserialization of user input should be
                    avoided unless absolutely necessary. The high severity of
                    exploits that it potentially enables, and the difficulty in
                    protecting against them, outweigh the benefits in many
                    cases.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    If you do need to deserialize data from untrusted sources,
                    incorporate robust measures to make sure that the data has
                    not been tampered with. For example, you could implement a
                    digital signature to check the integrity of the data.
                    However, remember that any checks must take place before
                    beginning the deserialization process. Otherwise, they are
                    of little use.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    If possible, you should avoid using generic deserialization
                    features altogether. Serialized data from these methods
                    contains all attributes of the original object, including
                    private fields that potentially contain sensitive
                    information. Instead, you could create your own
                    class-specific serialization methods so that you can at
                    least control which fields are exposed.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className='me-2 text-warning'
                    />
                    Finally, remember that the vulnerability is the
                    deserialization of user input, not the presence of gadget
                    chains that subsequently handle the data. Don't rely on
                    trying to eliminate gadget chains that you identify during
                    testing. It is impractical to try and plug them all due to
                    the web of cross-library dependencies that almost certainly
                    exist on your website. At any given time, publicly
                    documented memory corruption exploits are also a factor,
                    meaning that your application may be vulnerable regardless.
                  </p>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() =>
                  handleGoToLab(
                    '/Insecure_Deserialization/Insecure_Deserialization_Labs'
                  )
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

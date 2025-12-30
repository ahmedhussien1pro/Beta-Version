import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import courseImage from '../../assets/img/Obfuscation/course_image.png';
import exampleImage1 from '../../assets/img/Obfuscation/1.png';
import exampleImage2 from '../../assets/img/Obfuscation/2.png';
import exampleImage3 from '../../assets/img/Obfuscation/3.png';
import exampleImage4 from '../../assets/img/Obfuscation/4.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';

export default function Obfuscation() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Obfuscation',
      ar: 'تمويه الأكواد (Obfuscation)',
    },
    description: {
      en: 'Learn the techniques used to make code difficult to understand and analyze. Explore how attackers hide malicious scripts and how to de-obfuscate them for security analysis.',
      ar: 'تعلم التقنيات المستخدمة لجعل الأكواد البرمجية صعبة الفهم والتحليل. استكشف كيف يخفي المهاجمون البرمجيات الخبيثة وكيفية فك التمويه لغرض التحليل الأمني.',
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
    rating: '4.8',
    students: '1420',
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
                  <h1 className='content__title'>Welcome to Obfuscation</h1>

                  <h2 className='content__title'>What will you learn?</h2>
                  <ol>
                    <li>What are Obfuscation & Deobfuscation?</li>
                    <li>Why do we use Obfuscation?</li>
                    <li>Javascript Obfuscation </li>
                    <li>JS Deobfuscation Tools</li>
                  </ol>
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span> What are Obfuscation & Deobfuscation ?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    <br />
                  </p>
                  <h1 className='content__title'>
                    What are Obfuscation & Deobfuscation?
                  </h1>
                  <h4>Obfuscation </h4>
                  <p>
                    The process of modifying the script to convert it to a
                    difficult, harder-to-understand format, but will return the
                    same result. There are several obfuscation methods hence
                    that there are many tools for it.
                  </p>
                  <br />
                  <h4>Deobfuscation </h4>
                  <p>
                    It is the reverse process of obfuscation, as it rewrites the
                    script again from a very difficult to read to an
                    understandable one. This can be done with many tools.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage1} alt='Example' />
                    </div>
                  </div>
                  <h2 className='content__title'>Why do we use Obfuscation?</h2>
                  <br />
                  <p>
                    There are many reasons why you may use obfuscation, here are
                    some of them:
                  </p>
                  <ol>
                    <li>Prevent others from stealing their code </li>
                    <li>
                      Avoid attackers understanding the script functionalities
                      and abusing it.
                    </li>
                    <li>
                      Bypassing WAFs and security detection systems from
                      filtering or detecting your payloads.{' '}
                    </li>
                  </ol>
                  <br />
                  <h2 className='content__title'>
                    Common Techniques of Obfuscation
                  </h2>
                  <br />
                  <h5>1 . Renaming Variables and Functions:</h5>
                  <p>
                    Changing the names of variables, functions, and classes to
                    meaningless or random strings. For example, a variable name
                    like totalAmount could be obfuscated to something like
                    a1b2c3.
                  </p>
                  <h5>2 . Control Flow Obfuscation:</h5>
                  <p>
                    Modifying the flow of the program, such as adding redundant
                    code paths, loops, or operations that don’t affect the final
                    outcome, but make it harder to follow the logical flow of
                    the code.
                  </p>
                  <h5>3 . String Encryption:</h5>
                  <p>
                    Encrypting or encoding strings within the code (e.g., URLs,
                    keys, or messages) to prevent attackers from easily
                    extracting meaningful data by reading the source code.
                  </p>
                  <h5>4 . Code Insertion (Dead Code):</h5>
                  <p>
                    Adding unnecessary or irrelevant code that doesn’t affect
                    the program's functionality but serves to confuse anyone
                    trying to analyze the code. This might include extra
                    variables or operations that don't change the result.
                  </p>
                  <h5>5 . Flattening:</h5>
                  <p>
                    Transforming the code structure to remove loops or functions
                    and make the program’s behavior appear as one large block of
                    code, making it more difficult to follow.
                  </p>
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span> Topic 3</span>Javascript Obfuscation{' '}
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <br />
                  <h1 className='content__title'>Javascript Obfuscation </h1>
                  <p>
                    There are several methods in JS obfuscation, one of them is
                    to remove spaces, this method is called code minify, usually
                    developers use this method as it reduces script file size.
                  </p>
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage2} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <h3>JS Obfuscation Tools </h3>
                  <br />
                  <h4>JSF</h4>
                  <p>
                    By this method, you can rewrite any JS script with just six
                    characters []()!+
                  </p>
                  <p>
                    You can try it online from this link:
                    <a href='http://www.jsfuck.com'>JSFuck</a>
                  </p>
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage3} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <h4>Packer Obfuscation</h4>
                  <p>
                    In this one, all script text and symbols will be stored in a
                    list or dictionary and will be restored and rebuilt again
                    during the execution process.
                  </p>
                  <p>
                    You can try it online from this link:
                    <a href='https://www.cleancss.com/javascript-obfuscate/index.php'>
                      Packer Obfuscation
                    </a>
                  </p>
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage4} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <h4>JS deobfuscation Tools</h4>
                  <p>
                    Instead of downloading and using deobfuscation tools on your
                    machine, you can use them online.
                  </p>
                  <br />
                  <h3>Here are some examples:</h3>
                  <ol>
                    <li>
                      <a href='https://mindedsecurity.github.io/jstillery/'>
                        JStillery :
                      </a>
                      This tool performs advanced JS deobfuscation via partial
                      evaluation.
                    </li>
                    <li>
                      <a href='http://deobfuscatejavascript.com/'>
                        deobfuscate javascript{' '}
                      </a>
                    </li>
                    <li>
                      <a href='https://beautifier.io/'>Beautifier.io</a>
                    </li>
                  </ol>
                </dd>
              </dl>
            </div>

            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/obfuscation/obfuscation_lab')}
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

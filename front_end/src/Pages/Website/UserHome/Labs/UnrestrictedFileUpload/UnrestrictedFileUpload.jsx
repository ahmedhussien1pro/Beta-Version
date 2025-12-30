import React from 'react';
import './UnrestrictedFileUpload.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import photo2 from '../../assets/img/Unrestricted File Upload/Post&GetImage.png';
import code1 from '../../assets/img/Unrestricted File Upload/code1FileUpload.png';
import code2 from '../../assets/img/Unrestricted File Upload/code2FileUpload.png';
import code3 from '../../assets/img/Unrestricted File Upload/code3FileUpload.png';
import courseImage from '../../assets/img/Unrestricted File Upload/FileUploadIcon.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function UnrestrictedFileUpload() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Unrestricted File Upload',
      ar: 'رفع الملفات غير المقيد (File Upload)',
    },
    description: {
      en: 'Understand the risks of allowing users to upload files without proper validation. Learn how attackers gain remote code execution through web shells and how to implement robust security checks.',
      ar: 'افهم مخاطر السماح للمستخدمين برفع الملفات دون التحقق المناسب. تعلم كيف يحصل المهاجمون على صلاحية تنفيذ الأكواد عن بعد عبر "Web Shells" وكيفية تطبيق ضوابط أمنية قوية.',
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
    rating: '4.8',
    students: '2300',
  };

  return (
    <>
      <Header />
      {/* Start Landing */}
      <CourseLanding {...data} />
      {/* End Landing */}
      {/* Start Content */}
      <div className='Content'>
        <div className='secure-container' ref={faqSectionRef}>
          <div className='content-row'>
            <div className='content-section'>
              <dl className='topics-text'>
                {/* Single FAQ Area  */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 1</span> Description
                </dt>
                <dd className='fadeInUp faq-body'>
                  <img
                    className='faq-File-image'
                    src={photo2}
                    alt='unrestricted'
                  />
                  <ul>
                    <li className='style'>
                      <p>
                        <div class='content__subtitle'>
                          Unrestricted File Upload{' '}
                        </div>
                        <div className='Files-first'>
                          vulnerability occurs due to insufficient or improper
                          file-type validation controls being implemented prior
                          to files being uploaded to the web application.
                          Without these methods of validation in place, a
                          malicious actor may be able to craft the upload
                          request to bypass the application-layer defenses and
                          potentially completely compromise the system.
                        </div>
                      </p>
                    </li>
                    <li>
                      <p className='parag-un'>
                        The OWASP Top 10 refers to{' '}
                        <p>
                          <span class='highlight-UnRestrict'>
                            Unrestricted File Uploads
                          </span>{' '}
                          as a significant risk
                        </p>
                        <div className='Files-first'>
                          , and for good reason. Unrestricted File Uploads are
                          an excellent primary entry point for an attacker,
                          offering a foothold into the system for further
                          escalation.
                        </div>
                      </p>
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area  */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span>Impact
                </dt>
                <dd className='fadeInUp faq-body'>
                  <ul>
                    <li className='style-modern-fileUpload'>
                      The impact of an Unrestricted File Upload vulnerability is
                      usually high given that it facilitates code execution on
                      target systems and web applications. Malicious actors
                      might be able to escalate this to complete access by
                      uploading and executing a web shell that can run commands,
                      attack other servers, and be used as a staging point to
                      pivot to other clients in the network.
                    </li>
                    <li className='style-modern-fileUpload'>
                      In 2017, a security researcher participating in a bug
                      bounty run by PayPal was able to{' '}
                      <span class='highlight-UnRestrict'>
                        leverage an Unrestricted File Upload
                      </span>{' '}
                      vulnerability to execute remote code on the application.
                      Companies of this size regularly run bug bounties to
                      continually test their defenses for weaknesses,
                      financially enticing security researchers to identify and
                      report bugs before malicious actors exploit the same bugs.
                      However, this is still an after-the-fact solution to a
                      systemic problem that arises far earlier in the
                      development cycle at the implementation stage.
                    </li>
                    <li className='style-modern-fileUpload'>
                      Elaborating on the impacts, Unrestricted File Uploads can
                      lead to Command Injection, XSS attacks, Denial of Service
                      attacks, the creation of phishing pages, and other kinds
                      of risks depending on the application technology and the
                      uploaded file type.
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area  */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span>Scenarios
                </dt>
                <dd className='fadeInUp faq-body'>
                  <ul>
                    <li className='scnarios-fileUplode'>
                      Unrestricted File Upload vulnerabilities can be exploited
                      in a variety of ways depending on the language used and
                      the specific flaw exposed. Countermeasures and validation
                      mechanisms do exist; however, sometimes they aren’t
                      implemented at all, or if they are, the implementation is
                      inadequate. The following are examples of preventative
                      measures that can be bypassed:
                    </li>
                    <ol>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <b className='content__subtitle'>
                          • MIME-type validation
                        </b>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <b className='content__subtitle'>
                          • Checking the file extension against a deny list{' '}
                        </b>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        <b className='content__subtitle'>
                          • Image header checks{' '}
                        </b>
                      </li>
                    </ol>
                    <li className='scnarios-fileUplode'>
                      The following elaborates on Unrestricted File Upload
                      manipulation as a result of non-existent validations in a
                      PHP script.
                    </li>
                    <li className='scnarios-fileUplode'>
                      A user is authorized by the following code to upload a
                      picture of a flag{' '}
                      <span class='highlight-UnRestrict'>
                        {' '}
                        (a SecureFlag picture even!)
                      </span>
                      to the web server. The HTML code that facilitates the user
                      end form has a file type input field.
                    </li>
                    <img src={code1} alt='code1' className='code1' />
                    <li>
                      <p className='parag-un'>
                        Upon submission, the form then sends the file to
                        <div className='upload-location'>
                          upload_flagpics.php
                        </div>{' '}
                        on the web server. The file is stored in a temporary
                        location by PHP until it is either retrieved or
                        discarded on the server side. The file is then sent to a
                        more permanent directory called
                        <div className='upload-location'>flagpics/.</div>
                      </p>
                    </li>
                    <img src={code2} alt='code2' className='code1' />
                    <li className='scnarios-fileUplode'>
                      Unfortunately, the above code does not validate the file
                      type being uploaded, and if the{' '}
                      <div className='upload-location'>flagpics/</div> directory
                      is accessible in the web document root, a malicious actor
                      would be able to upload a file with the name
                      <div className='upload-location'>malicious.php.</div>
                      This filename, ending in .php,can then be executed by the
                      web server. Thus, a malicious actor could additionally
                      send:
                    </li>
                    <img src={code3} alt='code3' className='code1' />
                    <li className='scnarios-fileUplode'>
                      If this file is successfully installed by the attacker,
                      they will be able to run arbitrary commands using a URL to
                      execute, such as:
                      <div className='command-url'>
                        http://www.vulnerableapp.com/upload_dir/malicious.php?cmd=ls%20-l
                      </div>
                      Thus, running the <div className='command'>ls -al</div>{' '}
                      command
                    </li>
                  </ul>
                </dd>
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span> Prevention
                </dt>
                <dd className='fadeInUp faq-body'>
                  <ul>
                    <li className='preventing-fileUplode'>
                      Developers must review upload functionality to determine
                      if uploaded content is ever returned to other application
                      users and whether that is due to normal application usage
                      or attack manipulation. As a part of this revision,
                      developers should consider:
                    </li>
                    <ul className='styled-list'>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        If the application filters file extensions and the MIME
                        type of the uploaded file.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        If placing executable JavaScript or HTML into the file
                        is possible.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        If the header information is returned after the contents
                        of a file are downloaded.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        If the storage location for uploaded content is
                        escapable with a crafted filename.
                      </li>
                    </ul>
                    <li className='preventing-fileUplode'>
                      There are numerous steps toward a more robust upload code
                      architecture that developers must consider in their
                      design:
                    </li>
                    <ul className='security-measures-list'>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Developers must use an allow list, enforcing acceptance
                        of only listed, non-executable file extensions.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Developers should ensure file names do not contain
                        directory traversal characters such as ../ that are used
                        to place files outside of designated directory
                        locations.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Developers should alter permissions on the upload folder
                        to ensure the files can’t be executed.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Uploads must not be placed in directories that are
                        accessible from the web.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Developers should ensure that if uploaded files are
                        downloaded by users, they contain
                        X-Content-Type-options: nosniff header and a
                        Content-Disposition header that commands browsers to
                        handle files as an attachment.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Uploaded files should be subject to immediate virus
                        scanning.
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className='me-2 text-warning'
                        />
                        Developers must enforce size limits on uploaded files
                        and reject archive formats (like ZIP) from being
                        uploaded at all.
                      </li>
                    </ul>
                  </ul>
                </dd>
                {/* Single FAQ Area  */}
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() =>
                  handleGoToLab(
                    '/Unrestricted File Upload/lab_Unrestricted_File_Uplode'
                  )
                }
                className='go-to'>
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Content */}
      <Footer />
    </>
  );
}

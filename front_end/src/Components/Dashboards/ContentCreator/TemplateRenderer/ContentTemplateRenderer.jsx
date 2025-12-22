// src/components/TemplateRenderer/TemplateRenderer.jsx
import React from 'react';
import CourseLanding from '../../../../Pages/Website/UserHome/Components/CourseLanding/CourseLanding.jsx';
import Go2TopBtn from '../../../../Pages/Website/UserHome/Components/Go2Top_Btn/Go2Top_Btn.jsx';
import Footer from '../../../../Pages/Website/UserHome/Footer/Footer.jsx';
import Header from '../../../../Pages/Website/UserHome/Header/Header.jsx';
import Banner from '../../../../Pages/Website/UserHome/Components/Banner/Banner.jsx';
import UseFaqSection from '../../../../Pages/Website/UserHome/Components/UseFaqSection/UseFaqSection.jsx';
import GoBackDashboard from '../GoBackDashboard';
export default function TemplateRenderer({ data, handleGoToLab = () => {} }) {
  if (!data) return <div>No data provided</div>;
  const { faqSectionRef } = UseFaqSection();
  return (
    <>
      <Banner />
      <Header />
      <CourseLanding
        background={data.meta.background}
        backgroundStyle={{ objectFit: 'cover', height: '100%', width: '100%' }}
        courseImage={data.meta.courseImage}
        courseTitle={data.meta.courseTitle}
        courseDescription={data.meta.courseDescription}
        difficulty={data.meta.difficulty}
        duration={data.meta.duration}
        onSaveRoom={() => console.log('Room Saved!')}
        onLike={() => console.log('Liked!')}
        onDislike={() => console.log('Disliked!')}
      />

      <div className='Content'>
        <div className='secure-container' ref={faqSectionRef}>
          <div className='content-row'>
            <div className='content-section'>
              <dl className='topics-text'>
                {data.sections.map((sec, idx) => (
                  <React.Fragment key={sec.id || idx}>
                    <dt className='fadeInUp faq-header'>
                      <span>{sec.header}</span> {sec.subtitle}
                    </dt>
                    <dd
                      className='fadeInUp faq-body open-sans'
                      id='border-left'>
                      {sec.paragraphs?.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}

                      {sec.images?.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt=''
                          className={`img-fluid ${
                            sec.imgClass || 'w-75 mx-auto d-block'
                          }`}
                        />
                      ))}

                      {sec.list?.length ? (
                        <ul>
                          {sec.list.map((li, i) => (
                            <li
                              key={i}
                              dangerouslySetInnerHTML={{ __html: li }}
                            />
                          ))}
                        </ul>
                      ) : null}
                      <hr />
                    </dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>

            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab(data.labsLink)}
                className='go-to'>
                Go To Labs
              </button>
              <button
                className='go-to'
                style={{ marginTop: 0 }}
                onClick={() => {
                  window.location.href = '/editor';
                }}>
                <i className='fa-solid fa-arrow-left me-2'></i> Go Back to
                Editor
              </button>
              <GoBackDashboard />
            </div>
          </div>
        </div>
      </div>

      <Go2TopBtn />
      <Footer />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import './FQASEC.css';
import FaqSection0 from '../assets/img/core-img/Faq-Section0.jpg';
import FaqSection1 from '../assets/img/core-img/Faq-Section1.jpg';
import FaqSection2 from '../assets/img/core-img/Faq-Section2.jpg';
import FaqSection3 from '../assets/img/core-img/Faq-Section3.jpg';
import FaqSection4 from '../assets/img/core-img/Faq-Section4.jpg';
import Aos from 'aos';
export default function FQASEC() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const faqData = [
    {
      en_data: {
        question: 'What are the objectives of this Platform?',
        answer:
          'Our platform is designed to provide users with comprehensive knowledge in cybersecurity, offering practical exercises and tutorials for real-world skills development.',
      },
      ar_data: {
        question: 'ما هي أهداف هذه المنصة؟',
        answer:
          'تم تصميم هذه المنصة لتزويد المستخدمين بمعرفة شاملة في الأمن السيبراني، مع توفير تمارين عملية ودروس لتطوير مهارات واقعية.',
      },
    },
    {
      en_data: {
        question: 'What are the best features and services we deliver?',
        answer:
          'We deliver hands-on cybersecurity training, LAPS implementation guidance, interactive exercises, and tailored content for users of all levels.',
      },
      ar_data: {
        question: 'ما هي أفضل الميزات والخدمات التي نقدمها؟',
        answer:
          'نقدم تدريباً عملياً في الأمن السيبراني، وإرشادات لتطبيق LAPS، وتمارين تفاعلية، ومحتوى مخصص للمستخدمين من جميع المستويات.',
      },
    },
    {
      en_data: {
        question: 'Why is this Platform important to me?',
        answer:
          'This platform is crucial for anyone looking to build a career in cybersecurity or strengthen their knowledge in protecting systems and networks from modern threats.',
      },
      ar_data: {
        question: 'لماذا هذه المنصة مهمة بالنسبة لي؟',
        answer:
          'تعد هذه المنصة مهمة لأي شخص يسعى لبناء مسار مهني في الأمن السيبراني أو لتعزيز معرفته في حماية الأنظمة والشبكات من التهديدات الحديثة.',
      },
    },
    {
      en_data: {
        question: 'What are the most common cyber threats?',
        answer:
          'Common threats include phishing, ransomware, malware, social engineering, and denial-of-service attacks.',
      },
      ar_data: {
        question: 'ما هي أكثر التهديدات السيبرانية شيوعاً؟',
        answer:
          'تشمل التهديدات الشائعة الاحتيال الإلكتروني (Phishing)، وبرمجيات الفدية (Ransomware)، والبرمجيات الخبيثة (Malware)، والهندسة الاجتماعية، وهجمات رفض الخدمة (DoS).',
      },
    },
  ];

  const faqImages = [
    FaqSection0,
    FaqSection1,
    FaqSection2,
    FaqSection3,
    FaqSection4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % faqImages.length);
    }, 4000);

    return () => clearInterval(interval);
  });

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className='our-faqs home-our-faqs'>
      <div className='container'>
        <div className='courses__header container' data-aos='fade-up'>
          <h2
            className='courses__title'
            ar-data='الأسئلة الشائعة للمنصة'
            en-data='Platform FAQ'>
            Platform FAQ
          </h2>
          <p
            className='courses__subtitle'
            ar-data='تمت الإجابة على الأسئلة بوضوح'
            en-data='questions answered clearly'>
            questions answered clearly
          </p>
        </div>

        <div className='row'>
          {/* Left Image Section */}
          <div className='col-lg-6' data-aos='fade-right' data-aos-delay='100'>
            <div className='faq-image-container text-center'>
              <img
                src={faqImages[imageIndex]}
                alt='FAQ Section'
                className='faq-image img-fluid'
              />
            </div>
          </div>

          {/* Right FAQ Section */}
          <div className='col-lg-6' data-aos='fade-left'>
            <div className='faq-section'>
              <div className='faq-accordion'>
                {faqData.map((faq, index) => (
                  <div key={index} className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className={`accordion-button ${
                          activeIndex === index ? '' : 'collapsed'
                        }`}
                        type='button'
                        onClick={() => toggleFAQ(index)}
                        ar-data={faq.ar_data.question}
                        en-data={faq.en_data.question}>
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        activeIndex === index ? 'show' : ''
                      }`}>
                      <div className='accordion-body'>
                        <p
                          ar-data={faq.ar_data.answer}
                          en-data={faq.en_data.answer}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

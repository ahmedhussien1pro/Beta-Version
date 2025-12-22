import React, { useEffect } from 'react';
import './services.css';
import Aos from 'aos';

const ServiceCard = ({ iconClass, ar_data, en_data, color }) => {
  // Aos
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4'>
      <div
        className='services__card'
        style={{ '--clr': color }}
        data-aos='zoom-in'>
        <div className='services__card__content'>
          <div className='services__card__icon'>
            <i className={iconClass}></i>
          </div>
          <div className='services__card__text'>
            <h3
              className='services__card__title'
              ar-data={ar_data.title}
              en-data={en_data.title}>
              {en_data.title}
            </h3>
            <p
              className='services__card__description'
              ar-data={ar_data.description}
              en-data={en_data.description}>
              {en_data.description}
            </p>
            <a
              href='/home'
              className='services__card__link'
              ar-data='اقرأ المزيد'
              en-data='Read More'>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const servicesData = [
    {
      iconClass: 'fa fa-book-open',
      color: '#007BFF',
      en_data: {
        title: 'Cybersecurity Learning Paths',
        description:
          'Structured beginner-to-advanced learning paths to build your cyber career.',
      },
      ar_data: {
        title: 'مسارات تعلم الأمن السيبراني',
        description:
          'مسارات تعلم منظمة من المبتدئ للاحترافي لبناء مسارك المهني.',
      },
    },
    {
      iconClass: 'fa fa-graduation-cap',
      color: '#28a745',
      en_data: {
        title: 'Practical Cyber Labs',
        description:
          'Hands-on labs that simulate real-world cyber attack and defense scenarios.',
      },
      ar_data: {
        title: 'معامل تطبيقية عملية',
        description:
          'معامل عملية تحاكي هجمات ودفاعات واقعية في الأمن السيبراني.',
      },
    },
    {
      iconClass: 'fa fa-shield-virus',
      color: '#dc3545',
      en_data: {
        title: 'Threat Detection Skills',
        description:
          'Practice SIEM, malware analysis, logs investigation, and threat hunting.',
      },
      ar_data: {
        title: 'مهارات كشف التهديدات',
        description:
          'تدريب عملي على SIEM وتحليل البرمجيات الخبيثة والتحقيق في السجلات والصيد التهديدي.',
      },
    },
    {
      iconClass: 'fa fa-user-secret',
      color: '#ffc107',
      en_data: {
        title: 'Ethical Hacking Training',
        description:
          'Learn recon, exploitation, privilege escalation, and post-exploitation techniques.',
      },
      ar_data: {
        title: 'تدريب الاختراق الأخلاقي',
        description:
          'تعلم جمع المعلومات والاستغلال ورفع الصلاحيات وما بعد الاستغلال.',
      },
    },
    {
      iconClass: 'fa fa-certificate',
      color: '#17a2b8',
      en_data: {
        title: 'Certification Preparation',
        description:
          'Prepare for top cybersecurity certifications like: CEH, Security+, CySA+.',
      },
      ar_data: {
        title: 'التحضير للشهادات',
        description:
          'استعد لأشهر شهادات الأمن السيبراني مثل CEH وSecurity+ وCySA+.',
      },
    },
    {
      iconClass: 'fa fa-laptop-code',
      color: '#6f42c1',
      en_data: {
        title: 'Hands-On Projects & Challenges',
        description:
          'Realistic cyber challenges to strengthen your technical and analytical skills.',
      },
      ar_data: {
        title: 'مشاريع وتحديات عملية',
        description: 'تحديات عملية واقعية لتعزيز مهاراتك التقنية والتحليلية.',
      },
    },
  ];

  return (
    <section id='services' className='services section'>
      <div className='container'>
        <div className='courses__header container' data-aos='fade-up'>
          <h2
            className='courses__title'
            ar-data='مسارات التعلم'
            en-data='Learning Pathways'>
            Learning Pathways{' '}
          </h2>
          <p
            className='courses__subtitle'
            ar-data='مسارات التعلم'
            en-data='Learning Pathways'>
            Our Learning Pathways
          </p>
        </div>
        <div className='row justify-content-center'>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

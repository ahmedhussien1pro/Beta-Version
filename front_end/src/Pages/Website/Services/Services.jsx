import React, { useEffect } from "react";
import "./services.css";
import Aos from "aos";

const ServiceCard = ({
  iconClass,
  ar_title,
  en_title,
  ar_description,
  en_description,
  path,
  color,
}) => {
  // Aos
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
      <div
        className="services__card"
        style={{ "--clr": color }}
        data-aos="zoom-in"
      >
        <div className="services__card__content">
          <div className="services__card__icon">
            <i className={iconClass}></i>
          </div>
          <div className="services__card__text">
            <h3
              className="services__card__title"
              ar_title={ar_title}
              en_title={en_title}
            >
              {en_title}
            </h3>
            <p className="services__card__description"
            ar_title={ar_description}
            en_title={en_description}
            >{en_description}</p>
            <a href="/home" className="services__card__link"
            ar_title="اقرأ المزيد"
            en_title="Read More"
            >
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
      iconClass: "fa fa-shield-alt",
      ar_title: "أساسيات الأمن السيبراني",
      en_title: "Cybersecurity Fundamentals",
      ar_description: "تعلم المفاهيم والممارسات الأساسية للأمن السيبراني.",
      en_description:
        "Learn key concepts and best practices for cybersecurity.",
      path: "/cybersecurity-fundamentals",
      color: "#007BFF",
    },
    {
      iconClass: "fa fa-network-wired",
      ar_title: "أمن الشبكات",
      en_title: "Network Security",
      ar_description: "إتقان تقنيات حماية ومراقبة الشبكات.",
      en_description: "Master techniques to protect and monitor networks.",
      path: "/network-security",
      color: "#28a745",
    },
    {
      iconClass: "fa fa-exclamation-triangle",
      ar_title: "كشف التهديدات والاستجابة لها",
      en_title: "Threat Detection & Response",
      ar_description:
        "تعرف على كيفية تحديد التهديدات الأمنية والتصدي لها بفعالية.",
      en_description: "Identify and counter security threats effectively.",
      path: "/threat-detection-response",
      color: "#dc3545",
    },
    {
      iconClass: "fa fa-user-secret", // Ethical Hacking & Pen Testing
      ar_title: "اختراق الأخلاقي واختبار الاختراق",
      en_title: "Ethical Hacking & Pen Testing",
      ar_description: "تعلم كيفية اكتشاف الثغرات الأمنية.",
      en_description: "Learn how to identify security vulnerabilities.",
      path: "/ethical-hacking-penetration-testing",
      color: "#ffc107", // Yellow
    },
    {
      iconClass: "fa fa-cogs", // Incident Response & Management
      ar_title: "الاستجابة وإدارة الحوادث",
      en_title: "Incident Response & Management",
      ar_description: "إدارة حوادث الأمن السيبراني باستراتيجيات مثبتة.",
      en_description: "Manage cybersecurity incidents with proven strategies.",
      path: "/incident-response-management",
      color: "#17a2b8", // Teal
    },
    {
      iconClass: "fa fa-cloud", // Cloud Security
      ar_title: "أمن السحابة",
      en_title: "Cloud Security",
      ar_description: "تأمين بيئات السحابة بأفضل الممارسات.",
      en_description: "Secure cloud environments with best practices.",
      path: "/cloud-security",
      color: "#6f42c1", // Purple
    },
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="courses__header container" data-aos="fade-up">
          <h2
            className="courses__title"
            ar_title="مسارات التعلم"
            en_title="Learning Pathways"
          >
            Learning Pathways
          </h2>
          <p
            className="courses__subtitle"
            ar_title="مسارات التعلم لدينا"
            en_title="Our Learning Pathways"
          >
            Our Learning Pathways
          </p>
        </div>
        <div className="row justify-content-center">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

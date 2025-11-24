import React, { useState, useEffect } from "react";
import "./platform.css";
import FaqSection0 from "../assets/img/core-img/Faq-Section0.jpg";
import FaqSection1 from "../assets/img/core-img/Faq-Section1.jpg";
import FaqSection2 from "../assets/img/core-img/Faq-Section2.jpg";
import FaqSection3 from "../assets/img/core-img/Faq-Section3.jpg";
import FaqSection4 from "../assets/img/core-img/Faq-Section4.jpg";
import Aos from "aos";
export default function Platform() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const faqData = [
    {
      ar_question: "ما هي أهداف هذه المنصة؟",
      en_question: "What are the objectives of this Platform?",
      ar_answer:" تهدف منصتنا إلى تزويد المستخدمين بمعرفة شاملة في مجال الأمن السيبراني، مع تقديم تمارين عملية ودروس لتطوير المهارات الواقعية.",
      en_answer:
        "Our platform is designed to provide users with comprehensive knowledge in cybersecurity, offering practical exercises and tutorials for real-world skills development.",
    },
    {
      ar_question: "ما هي أفضل الميزات والخدمات التي نقدمها؟",
      en_question: "What are the best features and services we deliver?",
      ar_answer:
        "نحن نقدم تدريبًا عمليًا في مجال الأمن السيبراني، وإرشادات لتنفيذ LAPS، وتمارين تفاعلية، ومحتوى مخصص للمستخدمين من جميع المستويات.",
      en_answer:
        "We deliver hands-on cybersecurity training, LAPS implementation guidance, interactive exercises, and tailored content for users of all levels.",
    },
    {
      ar_question: "لماذا تعتبر هذه المنصة مهمة بالنسبة لي؟",
      en_question: "Why is this Platform important to me?",
      ar_answer:
        "تعتبر هذه المنصة ضرورية لأي شخص يتطلع إلى بناء مسيرة مهنية في مجال الأمن السيبراني أو تعزيز معرفته في حماية الأنظمة والشبكات من التهديدات الحديثة.",
      en_answer:
        "This platform is crucial for anyone looking to build a career in cybersecurity or strengthen their knowledge in protecting systems and networks from modern threats.",
    },
    {
      ar_question: "ما هي أكثر التهديدات السيبرانية شيوعًا؟",
      en_question: "What are the most common cyber threats?",
      ar_answer:
        "تشمل التهديدات الشائعة التصيد الاحتيالي، وبرامج الفدية، والبرامج الضارة، والهندسة الاجتماعية، وهجمات الحرمان من الخدمة.",
      en_answer:
        "Common threats include phishing, ransomware, malware, social engineering, and denial-of-service attacks.",
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
    <div className="our-faqs home-our-faqs">
      <div className="container">
        <div className="courses__header container" data-aos="fade-up">
          <h2
            className="courses__title"
            ar_title="أسئلة شائعة حول المنصة"
            en_title="Platform FAQ"
          >
            Platform FAQ
          </h2>
          <p
            className="courses__subtitle"
            ar_title="أسئلة تم الإجابة عليها بوضوح"
            en_title="Questions answered clearly"
          >
            Questions answered clearly
          </p>
        </div>

        <div className="row">
          {/* Left Image Section */}
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div className="faq-image-container text-center">
              <img
                src={faqImages[imageIndex]}
                alt="FAQ Section"
                className="faq-image img-fluid"
              />
            </div>
          </div>

          {/* Right FAQ Section */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="faq-section">
              <div className="faq-accordion">
                {faqData.map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          activeIndex === index ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        ar_title={faq.ar_question}
                        en_title={faq.en_question}
                      >
                        {faq.en_question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        activeIndex === index ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">
                        <p
                          ar_title={faq.ar_answer}
                          en_title={faq.en_answer}
                      >{faq.en_answer}</p>
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

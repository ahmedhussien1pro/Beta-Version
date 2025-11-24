import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "./CountUp";
import "./CountsSection.css";

const CountsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section id="counts" className="counts section  ">
      <div
        className="container counts-container"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row gy-lg-0 gy-sm-4 py-lg-3 pb-sm-4 align-items-center justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100 ">
              <CountUp
                start={0}
                end={1232}
                duration={1}
                className="custom-counter"
              />
              <p ar_title="الطلاب" en_title="Students">
                Students
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <CountUp
                start={0}
                end={30}
                duration={1}
                className="custom-counter"
              />
              <p ar_title="الدورات" en_title="Courses">
                Courses
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <CountUp
                start={0}
                end={42}
                duration={1}
                className="custom-counter"
              />
              <p ar_title="الفعاليات" en_title="Events">
                Events
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <CountUp
                start={0}
                end={24}
                duration={1}
                className="custom-counter"
              />
              <p ar_title="المدربون" en_title="Trainers">
                Trainers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountsSection;

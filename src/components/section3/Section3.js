import React from "react";
import "./Section3.css";

import wrapper1 from "../../assets/section3-img1.webp";
import Shape1 from "../../assets/shape1.png";

const Section3 = () => {
  return (
    <>
      <div className="section3 ">
        <div className="section3-content container">
          <div className="section3-left">
            <div className='shape3'>
                  <img src={Shape1} alt="shape" loading="lazy" />
            </div>
            <img src={wrapper1} alt="nurse" loading="lazy" />
          </div>

          <div className="section3-right">
            <h1>Treatment</h1> <br />

            <h2>
              <i>"Transforming Lives: Comprehensive Mental Health and Addiction Treatment for Lasting Recovery"</i>
            </h2>
            <p>
              All treatment clients will have a recovery/treatment plan
              developed within 30 days of admission. Measurement and
              reassessment of treatment plan progress happen on a weekly basis
              through the weekly summary. <br />
              <br /> In the weekly summary, the drug and alcohol counselor will
              ensure that action steps to be taken by client or counselor are on
              target and that the action step achievements will enable
              resolution of the objective. All treatment plans are reviewed by
              and signed off on by the clinical director.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;

import React from "react";
import "./Section2.css";
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { FaBriefcaseMedical } from 'react-icons/fa';

const Section2 = () => {
  return (
    <>
      <div className="section2">
        <div className="section2-content container">

          <div className="card">
                <div className="icon">
                  <span><BsFillPeopleFill /></span>             
                </div>
                <div>
                  <h1>Support Groups</h1>
                  <p>Therapy and support groups for either addiction or mental health disorders.</p>
                </div>
          </div>

          <div className="card">
                <div className="icon">
                  <span><FaHandHoldingHeart /></span>             
                </div>
                <div>
                  <h1>Compassionate staff</h1>
                  <p>Compassionate staff that is dedicated to your success. The staff at Ocean Valley Behavioral Health Treatment Center offers compassionate and judgement free treatment.</p>
                </div>
          </div>

          <div class="card">
                <div className="icon">
                  <span><FaBriefcaseMedical /></span>             
                </div>
                <div>
                  <h1>Evidenced-based</h1>
                  <p>Providing evidence-based practices that give you the best chance of recovery.</p>
                </div>
          </div>

          



        </div>

      </div>
    </>
  );
};

export default Section2;

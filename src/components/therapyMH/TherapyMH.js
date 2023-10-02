import React from "react";
import { Link as LinkRoll } from "react-scroll";

import "./TherapyMH.css";
import { Link } from "react-router-dom";

import Anxiety from "../../assets/mh-anxiety.png";
import Depression from "../../assets/mh-depression.png";
import Bipolar from "../../assets/mh-bipolar.png";
import Stress from "../../assets/mh-stress.png";


const TherapyMH = () => {
  return (
    <>
      <div className="TherapyMH">
        <div className="content">

            <div className="TherapyMH-header">
                <h1>MENTAL HEALTH TREATMENT</h1>
                <p>Renew Hope, Restore Well-being: Our Comprehensive Mental Health Treatment Programs</p>
              </div>



          

          <div className="mh-flex container">

            <div className="card">
              <div>

                <div className="card-icon">
                  <img src={Anxiety} alt="Anxiety" loading="lazy" />
                </div>   

                <h1>ANXIETY</h1>
                <p>
                  Inability to manage one’s drinking habits. It is the most
                  acute form of alcohol abuse.
                </p>
              </div>
            </div>


            <div className="card">
              <div>
                <div className="card-icon">
                  <img src={Depression} alt="Depression" loading="lazy" />
                </div>                   <h1>DEPRESSION</h1>
                <p>
                  Abuse of prescription medications can be recreational, due to
                  addiction, or both, and the consequences can be severe or
                  fatal.
                </p>
              </div>
            </div>


            <div className="card">
              <div>

                <div className="card-icon">
                  <img src={Bipolar} alt="Bipolar" loading="lazy" />
                </div>                 
                <h1>BIPOLAR</h1>
                <p>
                  Heroin is an opioid stimulant created from morphine and the
                  seed of the poppy plant. It usually appears in either powder
                  form or as a sticky tar substance.
                </p>
              </div>
            </div>

            <div className="card">
              <div>
                <div className="card-icon">
                  <img src={Stress} alt="Stress" loading="lazy" />
                </div>                 
                <h1>STRESS DISORDER</h1>
                <p>
                  When taken in high doses, Xanax can lead to serious side
                  effects, ranging from coma, to respiratory arrest, and even
                  death.
                </p>
              </div>
            </div>
          </div>


          <div className='mh-btn'>
          <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/mental-health">
                <button>VIEW ALL</button>
              </Link>
          </LinkRoll>
          </div>


        </div>
      </div>
    </>
  );
};

export default TherapyMH;

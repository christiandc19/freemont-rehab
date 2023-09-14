import React from "react";
import Fade from "react-reveal/Fade";
import { Link as LinkRoll } from "react-scroll";

import "./TherapySA.css";
import { Link } from "react-router-dom";
import Alcohol from "../../assets/sa-alcohol.png";
import Prescriptions from "../../assets/sa-prescriptions.png";
import Heroin from "../../assets/sa-heroin.png";
import Xanax from "../../assets/sa-xanax.png";


const TherapySA = () => {
  return (
    <>
      <div className="TherapySA">
        <div className="content">
          
          <Fade left>
            <div className="TherapySA-left">
              <div className="left-content">
                <h1>Types of Substance Addiction Disorder We Treat</h1>
                <p>
                  Here at Fremont Rehab, we offer a full array
                  of affordable drug rehab programs that can take addicts from
                  detox to inpatient or outpatient care and back home again.
                </p>
                <br />


                <div className='sa-btn hide'>
                  <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/substance-abuse">
                        <button>VIEW ALL</button>
                      </Link>
                  </LinkRoll>
                </div>



              </div>
            </div>
          </Fade>


          <div className="TherapySA-right">
            <div className="box1 box">
              <div className="box-content1">
                <div className="box-icon">
                  <img src={Alcohol} alt="Alcohol" loading="lazy" />
                </div>
                <h1>ALCOHOL ADDICTION</h1>
                <p>
                  Inability to manage one’s drinking habits. It is the most
                  acute form of alcohol abuse.
                </p>
              </div>
            </div>

            <div className="box2 box">
              <div className="box-content2">
                <div className="box-icon">
                  <img src={Prescriptions} alt="Prescriptions" loading="lazy" />
                </div>                
                <h1>PRESCRIPTION ADDICTION</h1>
                <p>
                  Abuse of prescription medications can be recreational, due to
                  addiction, or both, and the consequences can be severe or
                  fatal.
                </p>
              </div>
            </div>

            <div className="box3 box">
              <div className="box-content3">

                <div className="box-icon">
                  <img src={Heroin} alt="Heroin" loading="lazy" />
                </div>                

                <h1>HEROIN ADDICTION</h1>
                <p>
                  Heroin is an opioid stimulant created from morphine and the
                  seed of the poppy plant. It usually appears in either powder
                  form or as a sticky tar substance.
                </p>
              </div>
            </div>

            <div className="box4 box">
              <div className="box-content4">
                <div className="box-icon">
                  <img src={Xanax} alt="Xanax" loading="lazy" />
                </div>                 
                <h1>XANAX ADDICTION</h1>
                <p>
                  When taken in high doses, Xanax can lead to serious side
                  effects, ranging from coma, to respiratory arrest, and even
                  death.
                </p>
              </div>
            </div>


            <div className='sa-btn hide-btn'>
                  <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/substance-abuse">
                        <button>VIEW ALL</button>
                      </Link>
                  </LinkRoll>
                </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default TherapySA;

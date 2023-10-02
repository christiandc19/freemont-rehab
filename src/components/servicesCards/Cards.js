import React from "react";
import "./Cards.css";
import Fade from 'react-reveal/Fade';

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import Card1 from "../../assets/PHP.webp";
import Card2 from "../../assets/IOP.webp";
import Card3 from "../../assets/OP.webp";

const Cards = () => {
  return (
    <>
    <div className="section-bg">
      <div id="cards">
        <div className="main-cards-header container">
          <h1>OUR PROGRAMS</h1>
          <p>Welcome to our comprehensive Fremont Rehab program, where we are dedicated to guiding you on your journey towards recovery, wellness, and a brighter future. Our integrated approach addresses both substance abuse and mental health challenges, recognizing the deep connection between them. Through evidence-based therapies, compassionate support, and personalized care, we're here to help you reclaim your life.</p>
        </div>



      <div className="cards-flex">

      <Fade top>
        <div className="services-card">
          <img src={Card1} alt="Mental Health" loading="lazy" />
            <div className="card-body">
              <h1 className="card-title">Partial Hospitalization</h1>
              <p className="card-text"> This intensive, structured program provides a comprehensive level of care for individuals seeking a dedicated and supportive environment on their path to recovery from mental health and addiction challenges.</p>
                <div className="services-card-btn">
                  <LinkRoll activeClass="active" to="top" spy={true}smooth={true} duration={500}>
                    <Link to="/php">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
            </div>
        </div>
      </Fade>

      <Fade bottom>
        <div className="services-card">
          <img src={Card2} alt="Mental Health" loading="lazy" />
            <div className="card-body">
              <h1 className="card-title">Intensive Outpatient</h1>
              <p className="card-text"> Our IOP is designed to provide a comprehensive level of care for individuals seeking structured support in their journey towards recovery from mental health and addiction challenges.</p>
                <div className="services-card-btn">
                  <LinkRoll activeClass="active" to="top" spy={true}smooth={true} duration={500}>
                    <Link to="/iop">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
            </div>
        </div>
      </Fade>

      <Fade top>
        <div className="services-card">
          <img src={Card3} alt="Mental Health" loading="lazy" />
            <div className="card-body">
              <h1 className="card-title">Outpatient</h1>
              <p className="card-text"> Our Outpatient Programs offers a flexible and supportive approach to treatment for individuals seeking to overcome mental health and addiction challenges.</p>
                <div className="services-card-btn">
                  <LinkRoll activeClass="active" to="top" spy={true}smooth={true} duration={500}>
                    <Link to="/op">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
            </div>
        </div>
      </Fade>

      </div>
    </div>
  </div>
    </>
  );
};

export default Cards;

import React from "react";
import "./Cards.css";

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import Card1 from "../../assets/PHP.jpg";
import Card2 from "../../assets/IOP.jpg";
import Card3 from "../../assets/OP.jpg";

const Cards = () => {
  return (
    <>
      <div id="cards">
        <div className="main-cards-header container">
          <h1>OUR PROGRAMS</h1>
          <p>Welcome to our comprehensive Fremont Rehab program, where we are dedicated to guiding you on your journey towards recovery, wellness, and a brighter future. Our integrated approach addresses both substance abuse and mental health challenges, recognizing the deep connection between them. Through evidence-based therapies, compassionate support, and personalized care, we're here to help you reclaim your life.</p>
        </div>



      <div className="cards-flex">


        <div className="services-card">
          <img src={Card1} alt="Mental Health" loading="lazy" />
            <div className="card-body">
              <h1 className="card-title">Partial Hospitalization</h1>
              <p className="card-text">Our treatment programs give you the path to healing/recovery. Through our PHP program, we give you the tools to manage your addiction in the most healthy way possible. To learn more, reach out to us today.</p>
                <div className="services-card-btn">
                  <LinkRoll activeClass="active" to="top" spy={true}smooth={true} duration={500}>
                    <Link to="/php">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
            </div>
        </div>


        <div className="services-card">
          <img src={Card2} alt="Mental Health" loading="lazy" />
            <div className="card-body">
              <h1 className="card-title">Intensive Outpatient</h1>
              <p className="card-text">Through our Intensive Outpatient Program, we give you the tools to manage your addiction in the most healthy way possible. To learn more, reach out to us today.</p>
                <div className="services-card-btn">
                  <LinkRoll activeClass="active" to="top" spy={true}smooth={true} duration={500}>
                    <Link to="/iop">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
            </div>
        </div>


        <div className="services-card">
          <img src={Card3} alt="Mental Health" loading="lazy" />
            <div className="card-body">
              <h1 className="card-title">Outpatient</h1>
              <p className="card-text">At Ocean Valley Behavioral Health Treatment Center, we recognize that overcoming addiction on your own may not be possible. Fortunately our treatment programs give you the path to healing/recovery. Through our outpatient program, we give you the tools to manage your addiction in the most healthy way possible.</p>
                <div className="services-card-btn">
                  <LinkRoll activeClass="active" to="top" spy={true}smooth={true} duration={500}>
                    <Link to="/op">
                      <button>Learn More</button>
                    </Link>
                  </LinkRoll>
                </div>
            </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Cards;

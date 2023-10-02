import React from "react";
import "./AboutSection.css";
import AboutUs from "../../assets/about-section-min.webp";

const AboutSection = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content container">
          <div className="about-content-left">
            <img src={AboutUs} alt="nurse" loading="lazy" />
          </div>

          <div className="about-content-right">
            <h1>About Us</h1>
            <p>
            Welcome to Fremont Rehab, where hope finds a home and healing begins. We are a dedicated team of compassionate professionals committed to supporting individuals and families in their journey towards mental well-being and recovery from addiction.
            </p>

            <h1>Our Vision:</h1>
            <p>
            We envision a world where mental health is prioritized, stigma is dismantled, and every individual has access to comprehensive, evidence-based care. Through our integrated approach, we aim to empower individuals to lead fulfilling, purpose-driven lives.
            </p>

            <h1>Our Mission:</h1>
            <p>
            At Fremont Rehab, we are dedicated to empowering individuals and families on their journey towards mental well-being and recovery from addiction. With compassion, evidence-based practices, and a commitment to holistic care, we strive to restore hope, foster resilience, and promote lasting healing. Our mission is to provide a safe, inclusive, and supportive environment where every individual can thrive, grow, and reclaim their path to a brighter, healthier future.
            </p>


          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;

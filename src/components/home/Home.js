import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import ContactForm2 from '../contact/Contact2';
import MissionHome from '../mission/MissionHome';
import TherapySA from '../therapySA/TherapySA';
import TherapyMH from '../therapyMH/TherapyMH';
import Section1 from '../section1/Section1';
import Section2 from '../section2/Section2';
import Section3 from '../section3/Section3';
import Cards from '../servicesCards/Cards';






const home = () => {
  return (
    <>
    <Cards /> 
    <Section1 />
    <Section2 />
    <Section3 />
    <TherapyMH />
    <TherapySA />
    <InsuranceSection />
    <MissionHome />
    <ContactForm2 />
    </>
  )
}

export default home

import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SCHIZOAFFECTIVE from '../components/MH-Schizoaffective/Schizoaffective'
import SchizoaffectiveSection from '../components/MH-Schizoaffective/SchizoaffectiveSection'
import ContactForm2 from '../components/contact/Contact2'
import Insurance from '../components/insurance/InsuranceSection'


const Schizoaffective  = () => {
  return (
    <>
    <Navbar /> 
    <SCHIZOAFFECTIVE />
    <SchizoaffectiveSection />
    <Insurance />
    <ContactForm2 />
    <Footer />
     </>
  )
}

export default Schizoaffective 
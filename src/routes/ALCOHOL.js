import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ALCOHOL from '../components/Addiction-Alcohol/Alcohol'
import AlcoholSection from '../components/Addiction-Alcohol/AlcoholSection'
import ContactForm2 from '../components/contact/Contact2'
import Insurance from '../components/insurance/InsuranceSection'


const Alcohol = () => {
  return (
    <>
    <Navbar /> 
    <ALCOHOL />
    <AlcoholSection />
    <Insurance />
    <ContactForm2 />
    <Footer />
     </>
  )
}

export default Alcohol
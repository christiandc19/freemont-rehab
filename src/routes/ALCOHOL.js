import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ALCOHOL from '../components/Addiction-Alcohol/Alcohol'
import AlcoholSection from '../components/Addiction-Alcohol/AlcoholSection'
import ContactForm2 from '../components/contact/Contact2'


const Alcohol = () => {
  return (
    <>
    <Navbar /> 
    <ALCOHOL />
    <AlcoholSection />
    <ContactForm2 />
    <Footer />
     </>
  )
}

export default Alcohol
import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FENTANYL from '../components/Addiction-Prescriptions/Prescriptions'
import FentanylSection from '../components/Addiction-Prescriptions/PrescriptionsSection'
import ContactForm2 from '../components/contact/Contact2'
import Insurance from '../components/insurance/InsuranceSection'


const Prescriptions = () => {
  return (
    <>
    <Navbar /> 
    <FENTANYL />
    <FentanylSection />
    <Insurance />
    <ContactForm2 />
    <Footer />
     </>
  )
}

export default Prescriptions

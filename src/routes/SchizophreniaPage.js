import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SCHIZOPHRENIA from '../components/MH-Schizophrenia/Schizophrenia'
import SchizophreniaSection from '../components/MH-Schizophrenia/SchizophreniaSection'
import Insurance from '../components/insurance/InsuranceSection'
import ContactForm2 from '../components/contact/Contact2'


const SchizophreniaPage = () => {
  return (
    <>
    <Navbar /> 
    <SCHIZOPHRENIA />
    <SchizophreniaSection />
    <Insurance />
    <ContactForm2 />
    <Footer />
     </>
  )
}

export default SchizophreniaPage
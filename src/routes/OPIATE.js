import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OPIATE from '../components/Addiction-Opiate/Opiate'
import OpiateSection from '../components/Addiction-Opiate/OpiateSection'
import Contact2 from '../components/contact/Contact2'
import Insurance from '../components/insurance/InsuranceSection'


const Fentanyl = () => {
  return (
    <>
    <Navbar /> 
    <OPIATE />
    <OpiateSection />
    <Insurance />
    <Contact2 />
    <Footer />
     </>
  )
}

export default Fentanyl
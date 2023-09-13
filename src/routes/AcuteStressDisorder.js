import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ASD from '../components/MH-ASD/ASD'
import ASDSection from '../components/MH-ASD/ASDSection'
import ContactForm2 from '../components/contact/Contact2'



const MHealth = () => {
  return (
    <>
    <Navbar /> 
    <ASD />
    <ASDSection />
    <ContactForm2 />
    <Footer />
     </>
  )
}

export default MHealth
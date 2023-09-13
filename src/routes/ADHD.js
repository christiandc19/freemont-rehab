import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ADHD from '../components/MH-Adhd/Adhd'
import AdhdSection from '../components/MH-Adhd/AdhdSection'
import ContactForm2 from '../components/contact/Contact2'


const Adhd = () => {
  return (
    <>
    <Navbar /> 
    <ADHD />
    <AdhdSection />
    <ContactForm2 />
    <Footer />
     </>
  )
}

export default Adhd
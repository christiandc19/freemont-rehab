import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import WhatWeDo from '../whatWeDo/WhatWeDo';
import ContactForm from '../contact/ContactForm';
import Cards2 from '../servicesCards/ServicesCards';



const home = () => {
  return (
    <>
    <Cards2 />
    <WhatWeDo />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home

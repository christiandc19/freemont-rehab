import React from 'react'
// import Cards from '../servicesCards/Cards'
import InsuranceSection from '../insurance/InsuranceSection';
import WhatWeDo from '../whatWeDo/WhatWeDo';
import ContactForm from '../contact/ContactForm';
import Cards2 from '../servicesCards2/ServicesCards2';



const home = () => {
  return (
    <>
    <Cards2 />
    {/* <Cards /> */}
    <WhatWeDo />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home

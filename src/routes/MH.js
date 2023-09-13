import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MH from '../components/MH/MH'
// import Menus from '../components/menus/Menus';
import Menu3 from '../components/menus/Menu3';

import InsuranceSection from '../components/insurance/InsuranceSection'
import Contact2 from '../components/contact/Contact2'

// import MHSection from '../components/MH/MHSection'



const MHealth = () => {
  return (
    <>
    <Navbar /> 
    <MH />
    <Menu3 />

    {/* <Menus /> */}
    <InsuranceSection />
    <Contact2 />
    <Footer />
     </>
  )
}

export default MHealth
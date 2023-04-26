import React from 'react'
import { Link } from 'react-router-dom';

import './HomeSection3.css'
import { FaBeer } from 'react-icons/fa';

const HomeSection3 = () => {
  return (
    <>
      <div className='homeSection3'>
        <div className='homeSection3-content container'>
            <h1>WHAT WE OFFER</h1>
            <h2>Mental Health Services</h2>
            <p>At Freemont Rehab Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment.</p>
        
        
            <div className='homeSection3-cards'>

                <div className='homeSection3-item'>
                    <h2><FaBeer /></h2>
                    <h1>ANXIETY</h1>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incidiunt ut labore</p>
                </div>

                <div className='homeSection3-item'>
                    <h2><FaBeer /></h2>
                    <h1>DEPRESSION</h1>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incidiunt ut labore</p>
                </div>

                <div className='homeSection3-item'>
                    <h2><FaBeer /></h2>
                    <h1>BIPOLAR</h1>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incidiunt ut labore</p>
                </div>

                <div className='homeSection3-item'>
                    <h2><FaBeer /></h2>
                    <h1>STRESS DISORDER</h1>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incidiunt ut labore</p>
                </div>

                <div className='homeSection3-item'>
                    <h2><FaBeer /></h2>
                    <h1>PANIC DISORDER</h1>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incidiunt ut labore</p>
                </div>

                <div className='homeSection3-item'>
                    <h2><FaBeer /></h2>
                    <h1>SCHIZOPHRENIA</h1>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incidiunt ut labore</p>
                </div>

            </div>

            <Link to="/mental-health">
                <div className='homeSection3-btn'>
                        <p class="fancy">
                        <span class="top-key"></span>
                        <span class="text">View All</span>
                        <span class="bottom-key-1"></span>
                        <span class="bottom-key-2"></span>
                        </p>
                </div>
            </Link>



        </div>
      </div>
    </>
  )
}

export default HomeSection3

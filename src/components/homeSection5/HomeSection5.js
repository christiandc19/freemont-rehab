import React from 'react'
import { Link } from 'react-router-dom';

import './HomeSection5.css'
import { FaBeer } from 'react-icons/fa';

const HomeSection5 = () => {
  return (
    <>
      <div className='homeSection5'>
        <div className='homeSection5-content container'>
            <h1>WHAT WE OFFER</h1>
            <h2>SUBSTANCE ABUSE TREATMENT OPTIONS</h2>
            <p>At Freemont Rehab Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment.</p>
        
        
            <div className='homeSection5-cards'>

                <div className='homeSection5-item'>
                    <h2><FaBeer /></h2>
                    <h1>PARTIAL HOSPITALIZATION PROGRAM</h1>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incidiunt ut labore</p>
                </div>

                <div className='homeSection5-item'>
                    <h2><FaBeer /></h2>
                    <h1>INTENSIVE OUTPATIENT PROGRAM</h1>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incidiunt ut labore</p>
                </div>

                <div className='homeSection5-item'>
                    <h2><FaBeer /></h2>
                    <h1>OUTPATIENT PROGRAM</h1>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incidiunt ut labore</p>
                </div>

                <div className='homeSection5-item'>
                    <h2><FaBeer /></h2>
                    <h1>ALCOHOLISM</h1>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incidiunt ut labore</p>
                </div>

                <div className='homeSection5-item'>
                    <h2><FaBeer /></h2>
                    <h1>COCAINE ADDICTION</h1>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incidiunt ut labore</p>
                </div>

                <div className='homeSection5-item'>
                    <h2><FaBeer /></h2>
                    <h1>HEROIN ADDICTION</h1>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incidiunt ut labore</p>
                </div>

            </div>

            <Link to="/substance-abuse">
                <div className='homeSection5-btn'>
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

export default HomeSection5

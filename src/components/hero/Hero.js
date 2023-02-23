import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'


import Wave3 from '../../assets/waves3.svg'



const Hero = () => {
    return (
<>        

        <div className='hero'>

        <div className='hero-divider'>
                <img src={Wave3} loading="lazy" repeat-x alt='wave divider'/>
            </div>


            <div className="hero-container">
                <div className="content">
                        <h1 className="animate-charcter">FREEMONT REHAB</h1>
                    <Fade left>
                        <h2 className='subtitle'>Substance Abuse Addiction and <br/>Mental Health Treatment Facility</h2>
                    </Fade>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/contact">
                        <button>Get an Appointment</button>
                    </Link>
                    </div>
                    <br />
                    <Fade bottom>
                        <p>Find your happiness and learn to put it first.</p>
                    </Fade>
                </div>
            </div>
        </div>
</>

    )
}

export default Hero
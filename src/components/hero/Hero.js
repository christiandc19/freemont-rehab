import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import HeroImage from '../../assets/hero-bg.jpg'

import './Hero.css'

const Hero = () => {
    return (
<>        
        <div className='hero'>
            <div className="hero-container">
                <div className="content">
                    <img src={HeroImage} loading="lazy" alt='psychologist'/>

                <div className='hero-caption'>
                        <h1 className="animate-charcter">FREEMONT REHAB</h1>
                    <Fade left>
                        <h2 className='subtitle'>Substance Abuse Addiction and <br/>Mental Health Treatment Facility</h2>
                    </Fade>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/contact">
                        <button>Call Us</button>
                    </Link>
                    </div>
                    <br />
                    </div>
                    </div>

            </div>
        </div>
</>

    )
}

export default Hero
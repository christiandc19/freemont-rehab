import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import BgVideo from '../../assets/Bg-Video.mp4'


import './Hero.css'

const Hero = () => {
    return (
<>        
        <div className='hero'>

            <div className="hero-container">
                <div className="content">
                    <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />


                <div className='hero-caption'>
                        <h1 className="animate-charcter">FREMONT REHAB</h1>
                    <Fade left>
                        <h2 className='subtitle'>Substance Abuse Addiction and Mental Health Treatment Facility</h2>
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
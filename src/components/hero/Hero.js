import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'


import HeroImg from '../../assets/hero.webp'



const Hero = () => {
    return (
<>        

        <div className='hero'>
            <div className="hero-content container">
                <div className="hero-left">
                            <Fade top>
                            <h1>Fremont Rehab</h1>
                            </Fade>
                                <Fade left>
                                    <h2>Substance Abuse Addiction and Mental Health Treatment Facility</h2>
                                </Fade>
                            <Fade left>
                            <div className='hero-btn'>
                                <Link to="/contact">
                                    <button>Contact Us</button>
                                </Link>
                            </div>
                            </Fade>
                            <Fade left>
                            <h3>"Caring for Your Mental Well-being, Every Step of the Way."</h3>
                            </Fade>
                </div>



                <div className="hero-right">
                        <img src={HeroImg} alt="Psychologist" loading="lazy" />
                </div>




            </div>
        </div>


</>

    )
}

export default Hero
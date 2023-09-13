import React from 'react'
import './Section1.css'
import img1 from "../../assets/section1-img1.jpg";


const Section1 = () => {
  return (
    <>

    <div className='section1'>
        <div className="section1-content container">
          <div className='section1-left'>
                <h1>What We Do</h1> <br />
                <h2>We offer professional help to those who need either simple advice or psychological support</h2>
                <hr />
                <p>
                  At Ocean Valley Behavioral Health, we offer different levels of
                  care based on each individual’s needs. Our programs consist of an
                  intensive outpatient program (IOP) and a more demanding and
                  structured partial hospitalization program (PHP). <br /> <br />
                  You can be confident that our caring and professional staff will
                  recommend the right level of care for you or your loved one.
                </p>
          </div>

          <div className='section1-right'>
            <img src={img1} alt="Calm man in front of the sea" loading="lazy" />
          </div>

        </div>
    </div>
    </>
  )
}

export default Section1

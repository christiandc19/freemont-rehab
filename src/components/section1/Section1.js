import React from 'react'
import './Section1.css'
import img1 from "../../assets/section1-img1.webp";
import img2 from "../../assets/section1-img2.webp";

import Shape1 from "../../assets/shape1.png";
import Shape2 from "../../assets/shape2.png";

const Section1 = () => {
  return (
    <>

    <div className='section1'>

          <div className='section1-header container'>
                <h1>What We Do</h1>
                <p>
                At Fremont Rehab, we are committed to providing compassionate, evidence-based care to individuals and families struggling with mental health challenges and addiction. Our dedicated team of licensed professionals, including therapists, counselors, and medical experts, work collaboratively to offer a range of comprehensive services designed to support your unique journey towards healing and recovery.
                </p>
          </div>


        <div className="section1-content container">



          <div className='section1-left'>
                <h2>1. Assessment and Diagnosis</h2>
                <p>We begin by conducting thorough assessments to understand your specific needs, challenges, and strengths. Our experienced clinicians employ a holistic approach, considering both mental health and addiction issues, to provide an accurate diagnosis. This serves as the foundation for creating a personalized treatment plan tailored to your individual circumstances.</p>

                <h2>2. Individualized Treatment Planning</h2>
                <p>Based on the assessment, we develop a customized treatment plan that addresses your unique goals and concerns. This plan may include a combination of therapy modalities, medication management, holistic interventions, and other evidence-based approaches. We believe in a client-centered approach, ensuring that you are actively involved in shaping your own path to recovery.</p>

                <h2>3. Psychotherapy and Counseling</h2>
                <p>Our highly skilled therapists offer a variety of therapeutic modalities, including cognitive-behavioral therapy (CBT), dialectical behavior therapy (DBT), mindfulness-based approaches, and more. These sessions provide a safe and confidential space to explore and process emotions, thoughts, and behaviors, empowering you to develop healthier coping mechanisms and create positive change.</p>

                <h2>4. Medication Management</h2>
                <p>For individuals who may benefit from medication, our board-certified psychiatrists work closely with you to determine the most effective treatment options. We prioritize informed decision-making, providing education about medications, monitoring for effectiveness, and adjusting treatment plans as needed to achieve optimal outcomes.</p>
          </div>

          <div className='section1-right'>
            <div className='shape'>
                  <img src={Shape1} alt="shape" loading="lazy" />
            </div>
            <img src={img2} alt="Happy Man" loading="lazy" />
          </div>

        </div>



        <div className="section1-flex2 container">

                <div className='flex2-left'>
                <div className='shape2'>
                  <img src={Shape2} alt="shape" loading="lazy" />
                </div>
                  <img src={img1} alt="Calm man in front of the sea" loading="lazy" />
                </div>
                
                <div className='flex2-right'>
                  <h2>5. Holistic Wellness Practices</h2>
                    <p>We recognize the importance of nurturing the whole person—mind, body, and spirit. Our center offers holistic interventions such as yoga, meditation, nutrition counseling, and exercise programs to complement traditional therapeutic approaches. These practices promote overall well-being and resilience in your recovery journey.</p>

                    <h2>6. Support and Education for Families</h2>
                    <p>Addiction and mental health challenges affect not only the individual, but also their loved ones. We provide resources, education, and support for families to navigate the complexities of supporting someone in their journey towards recovery. Through group sessions, workshops, and individual counseling, we empower families to heal together.</p>

                    <h2>7. Aftercare and Ongoing Support</h2>
                    <p>Recovery is an ongoing process, and we are dedicated to providing support beyond initial treatment. Our center offers aftercare programs, relapse prevention strategies, and ongoing therapy to help you maintain and strengthen your progress in the community.</p>

                    <h2>8. Community Outreach and Advocacy</h2>
                    <p>We believe in breaking down stigma and advocating for mental health and addiction awareness. Our center actively engages with the community through workshops, events, and educational initiatives, fostering a supportive environment for individuals seeking help and understanding.</p>
                </div>

      </div>
    </div>
    </>
  )
}

export default Section1

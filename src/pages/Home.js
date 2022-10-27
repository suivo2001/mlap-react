import React from 'react'

import Home1 from '../images/home-left.jpg'
import Home2 from '../images/home-right.jpg'
import Home3 from '../images/home-bottom.png'
import Background from '../images/doctor-background.png'

const Home = () => {
    return (
        <div>
            <div className='section is-medium' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                <h1 className='title has-text-centered has-text-white mx-6 mb-6 is-size-2'>Medical Literacy and Access Project</h1>
            </div>
            
            <div className='section is-flex is-justify-content-center has-text-centered mx-6'>
                <div className='columns'>
                    <div className="column">
                        <div className="title">
                            Doctor Finder
                        </div>
                        <div className="content is-flex is-justify-content-center">
                        We provide a search tool to find doctors who speak 57 languages in partnership with U.S. News & World Report. Available in 133+ languages thanks to Google Translate, with 14 physician-approved translations.
                        </div>
                        <div className="content is-flex is-justify-content-center">
                            <a href='./doctor-finder'>Learn more</a>
                        </div>
                        <figure className="image is-256x256">
                            <img src={Home1} alt="doctor-1" />
                        </figure>
                    </div>
                    <div className="column">
                        <div className="title">
                        Care Finder
                        </div>
                        <div className="content is-flex is-justify-content-center">
                        We have developed the first search tool to find federally-listed community health centers and free clinics that provide affordable care. Available in 133+ languages thanks to Google Translate.
                        </div>
                        <div className="content is-flex is-justify-content-center">
                            <a href='./care-finder'>Learn more</a>
                        </div>
                        <figure className="image is-256x256">
                            <img src={Home2} alt="doctor-1" />
                        </figure>
                    </div>
                </div>


            </div>
            <div className='section is-flex is-justify-content-center has-text-centered mx-6 pt-0'>
                <div className='container'>
                        <div className="title">
                            
                            Patient Guides
                        </div>
                    <div className="content is-flex is-justify-content-center">
                    We have written a patient guide on how to navigate the healthcare system, reviewed and approved by doctors.
                    </div>
                    <div className="content is-flex is-justify-content-center">
                            <a href='./patient-guide'>Learn more</a>
                        </div>
                    <figure className="image is-256x256">
                        <img src={Home3} alt="doctor-1" />
                    </figure>
                </div>
            </div>

        </div>
    )
}

export default Home

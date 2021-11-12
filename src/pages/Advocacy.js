import React from 'react'

import Background from '../images/doctor-background.png'

const Advocacy = () => {
    return (
        <div>
            <div className='section is-medium' style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
                <h1 className='title is-flex is-justify-content-center has-text-centered has-text-white mx-6'>Our policy & advocacy section is dedicated to covering issues and solutions in medical literacy and access. We conduct health disparities research and work with clinics, hospitals, and policymakers to provide language services.
                </h1>
            </div>
            <div className='section '>
                <div className='container is-flex is-justify-content-center'>
                    <div>
                        <h1 className='title is-4 is-flex is-justify-content-center'><b>Price transparency</b></h1>
                        <p className='content is-flex is-justify-content-center has-text-centered mx-6'>Studies show that hospitals are not adhering to United States (US) federal laws requiring price disclosures for shoppable services, including COVID-19 testing, thyroid cancer care, and oncologic surgery. MLAP is conducting a study on price transparency among academic hospitals in the US.</p>
                        <h1 className='title is-4 is-flex is-justify-content-center pt-5'><b>Health disparities</b></h1>
                        <p className='content is-flex is-justify-content-center has-text-centered mx-6'>Racial, ethnic, sexual, and gender minorities often have poorer health outcomes. MLAP is conducting research on medical access and outcomes for Native Hawaiians and Pacific Islanders in the US, a very understudied minority population.</p>
                        <h1 className='title is-4 is-flex is-justify-content-center pt-5'><b>Research disparities</b></h1>
                        <p className='content is-flex is-justify-content-center has-text-centered mx-6'>Recent research by MLAP Executive Director John Lin, published in Clinical & Experimental Ophthalmology, identified that most presenters of retina abstracts were male and from high-income countries, potentially contributing to disparities in research such as research funding and research knowledge.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advocacy

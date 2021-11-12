import React from 'react'

import Background from '../images/doctor-background.png'

const Home = () => {
    return (
        <div>
            <div className='section is-medium' style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
                <h1 className='title is-flex is-justify-content-center has-text-centered has-text-white mx-6'>We have developed a patient guide for medical access and a doctor finder tool that have been reviewed and validated by academic physicians and health researchers.</h1>
            </div>
        </div>
    )
}

export default Home

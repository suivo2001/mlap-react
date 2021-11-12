import React from 'react'

import Background from '../images/doctor-background.png'

const DoctorFinder = () => {
    return (
        <div>
            <div className='section is-medium' style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
                <h1 className='title is-flex is-justify-content-center has-text-centered has-text-white mx-6'>We provide a doctor finder tool in collaboration with U.S. News & World Report. We have translated this tool into Chinese and Spanish.</h1>
            </div>
        </div>
    )
}

export default DoctorFinder

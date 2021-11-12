import React from 'react'

import Background from '../images/doctor-background.png'

const Contact = () => {
    return (
        <div>
            <div className='section is-medium' style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
                <h1 className='title is-flex is-justify-content-center has-text-centered has-text-white mx-6'>Contact us below!</h1>
            </div>
        </div>
    )
}

export default Contact

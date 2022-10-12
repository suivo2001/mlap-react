import React from 'react'
import Background from '../images/doctor-background.png'

const Contact = () => {
    return (
        <div>
            <div className='section is-medium' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                <h1 className='title is-flex is-justify-content-center has-text-centered has-text-white mx-6'>Contact us below!</h1>
            </div>
            <div className='section is-flex is-justify-content-center'>
            <iframe title='contact-form' src="https://docs.google.com/forms/d/e/1FAIpQLSd0UqrzohP7OOnqjTmauwHvWe2cVyLlLLvIRz7ppg8Y83EX_g/viewform?embedded=true" width="800" height="1050" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    )
}

export default Contact

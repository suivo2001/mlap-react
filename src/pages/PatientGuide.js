import React from 'react'

import Background from '../images/doctor-background.png'

const PatientGuide = () => {
    return (
        <div>
            <div className='section is-medium' style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
                <h1 className='title is-flex is-justify-content-center has-text-centered has-text-white mx-6'>We seek to promote equitable health services and research through patient education and advocacy.</h1>
            </div>
            <div className='section '>
                <div className='container is-flex is-justify-content-center'>
                    <div>
                        <p className='content is-flex is-justify-content-center'>We have developed a patient guide for medical access that has been reviewed and validated by academic physicians and health researchers, available in:</p>
                        <a className='content is-flex is-justify-content-center'>- English</a>
                        <a className='content is-flex is-justify-content-center'>- Español | Spanish</a>
                        <a className='content is-flex is-justify-content-center'>- 中文 (简体) | Chinese (Simplified)</a>
                        <a className='content is-flex is-justify-content-center'>- 中文 (繁體) | Chinese (Traditional)</a>
                        <a className='content is-flex is-justify-content-center'>- Français | French</a>
                        <p className='content is-flex is-justify-content-center'>We are currently translating this guide into Hindi, Urdu, French, Vietnamese, and Farsi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientGuide

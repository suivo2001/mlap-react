import React from 'react'

import Background from '../images/doctor-background.png'

const PatientGuide = () => {
    return (
        <div>
            <div className='section is-medium' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                <h1 className='title is-flex is-justify-content-center has-text-centered has-text-white mx-6'>Review our patient guides here!</h1>
            </div>
            <div className='section'>
                <div className='container is-flex is-justify-content-center'>
                    <div>
                        <p className='content has-text-centered mx-6'>We have developed a patient guide for medical access that has been reviewed and validated by academic physicians and health researchers, available in <a href="../Patient-Guides/Patient-Guide-in-English.pdf">English</a>, <a href="../Patient-Guides/Patient-Guide-in-Spanish.pdf">Español | Spanish</a>, <a href="../Patient-Guides/Patient-Guide-in-Chinese-Simplified.pdf">中文 (简体) | Chinese (Simplified)</a>, <a href="../Patient-Guides/Patient-Guide-in-Chinese-Traditional.pdf">中文 (繁體) | Chinese (Traditional)</a>, and <a href="../Patient-Guides/Patient-Guide-in-French.pdf">Français | French</a>.</p>
                        <p className='content has-text-centered mx-6'>Our guides were written and revised in accordance with the guidelines and criteria of the International Patient Decision Aid Standards Collaboration.</p>
                        <iframe src="https://drive.google.com/file/d/1lkrrHV_4Q02O-sWj_zMXtLEXQdATGGBh/preview" width="640" height="480" allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientGuide

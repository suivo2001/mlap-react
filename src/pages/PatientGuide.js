import React from 'react'

import EnglishPdf from '../Patient-Guides/Patient-Guide-in-English.pdf'
import FrenchPdf from '../Patient-Guides/Patient-Guide-in-French.pdf'
import SpanishPdf from '../Patient-Guides/Patient-Guide-in-Spanish.pdf'
import ChineseTradPdf from '../Patient-Guides/Patient-Guide-in-Chinese-Traditional.pdf'
import ChineseSimpPdf from '../Patient-Guides/Patient-Guide-in-Chinese-Simplified.pdf'
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
                        <p className='content has-text-centered mx-6'>We have developed a patient guide for medical access that has been reviewed and validated by academic physicians and health researchers, available in:</p>
                        <p className='content mx-6 my-3'>
                            <ul>
                                <li><a href={EnglishPdf} target='_blank' rel='noopener noreferrer'>English</a></li>
                                <li><a href={SpanishPdf} target='_blank' rel='noopener noreferrer'>Español | Spanish</a></li>
                                <li><a href={ChineseSimpPdf} target='_blank' rel='noopener noreferrer'>中文 (简体) | Chinese (Simplified)</a></li>
                                <li><a href={ChineseTradPdf} target='_blank' rel='noopener noreferrer'>中文 (繁體) | Chinese (Traditional)</a></li>
                                <li><a href={FrenchPdf} target='_blank' rel='noopener noreferrer'>Français | French</a></li>
                            </ul>
                        </p>
                        <iframe src={EnglishPdf} width="250" height="300"></iframe>
                        <p className='content has-text-centered mx-6'>Our guides were written and revised in accordance with the guidelines and criteria of the International Patient Decision Aid Standards Collaboration.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientGuide

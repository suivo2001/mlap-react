import React from 'react'

import EnglishPdf from '../Patient-Guides/Patient-Guide-in-English.pdf'
import FrenchPdf from '../Patient-Guides/Patient-Guide-in-French.pdf'
import SpanishPdf from '../Patient-Guides/Patient-Guide-in-Spanish.pdf'
import ChineseTradPdf from '../Patient-Guides/Patient-Guide-in-Chinese-Traditional.pdf'
import ChineseSimpPdf from '../Patient-Guides/Patient-Guide-in-Chinese-Simplified.pdf'

const PatientGuide = () => {
    return (
        <div>
            <div className='section' id="grad">
                <h1 className='title is-flex is-justify-content-center has-text-centered has-text-white mx-6'>We seek to promote equitable health services and research through patient education and advocacy.</h1>
            </div>
            <div className='section '>
                <div className='container is-flex is-justify-content-center'>
                    <div>
                        <p className='content is-flex is-justify-content-center'>We have developed a patient guide for medical access that has been reviewed and validated by academic physicians and health researchers, available in:</p>
                        <a className='content is-flex is-justify-content-center' href={EnglishPdf} target='_blank' rel='noopener noreferrer'>- English</a>
                        <a className='content is-flex is-justify-content-center' href={SpanishPdf} target='_blank' rel='noopener noreferrer'>- Español | Spanish</a>
                        <a className='content is-flex is-justify-content-center' href={ChineseSimpPdf} target='_blank' rel='noopener noreferrer'>- 中文 (简体) | Chinese (Simplified)</a>
                        <a className='content is-flex is-justify-content-center' href={ChineseTradPdf} target='_blank' rel='noopener noreferrer'>- 中文 (繁體) | Chinese (Traditional)</a>
                        <a className='content is-flex is-justify-content-center' href={FrenchPdf} target='_blank' rel='noopener noreferrer'>- Français | French</a>
                        <p className='content is-flex is-justify-content-center'>Our guides were written and revised in accordance with the guidelines and criteria of the International Patient Decision Aid Standards Collaboration.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientGuide

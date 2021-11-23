import React from 'react'

import EnglishPdf from '../Patient-Guides/Patient-Guide-in-English.pdf'
import FrenchPdf from '../Patient-Guides/Patient-Guide-in-French.pdf'
import SpanishPdf from '../Patient-Guides/Patient-Guide-in-Spanish.pdf'
import ChineseTradPdf from '../Patient-Guides/Patient-Guide-in-Chinese-Traditional.pdf'
import ChineseSimpPdf from '../Patient-Guides/Patient-Guide-in-Chinese-Simplified.pdf'

const Home = () => {
    return (
        <div>
            <div className='section' id="grad">
                <h1 className='title has-text-centered has-text-white mx-6 mb-6 is-size-2'>Medical Literacy and Access Project</h1>
                <h1 className='title has-text-centered has-text-white mx-6'>Making health services equitable and accessible for all.</h1>
            </div>
            <div className='section has-background-light'>
                <div className='container is-flex is-justify-content-center '>
                    <p className='content has-text-centered mx-6 my-3'>We have developed a patient guide for medical access and a doctor finder tool that have been reviewed and validated by academic physicians and health researchers.</p>
                </div>
            </div>
            <div className='section is-flex is-justify-content-center has-text-centered mx-6'>
                <table className="table is-striped is-fullwidth is-hoverable ">
                    <tr>
                        <th>Patient Guide</th>
                        <th>Doctor Finder</th>
                    </tr>
                    <tr>
                        <td><a href={EnglishPdf} target='_blank' rel='noopener noreferrer'>English</a></td>
                        <td><a href='/doctor-finder/search?language=english'>English</a></td>
                    </tr>
                    <tr>
                        <td><a href={SpanishPdf} target='_blank' rel='noopener noreferrer'>Español | Spanish</a></td>
                        <td><a href='/doctor-finder/search?language=spanish'>Español | Spanish</a></td>
                    </tr>
                    <tr>
                        <td><a href={ChineseSimpPdf} target='_blank' rel='noopener noreferrer'>中文 (简体) | Chinese (Simplified)</a></td>
                        <td><a href='/doctor-finder/search?language=chinese_simp'>中文 (简体) | Chinese (Simplified)</a></td>
                    </tr>
                    <tr>
                        <td><a href={ChineseTradPdf} target='_blank' rel='noopener noreferrer'>中文 (繁體) | Chinese (Traditional)</a></td>
                        <td><a href='/doctor-finder/search?language=chinese_trad'>中文 (繁體) | Chinese (Traditional)</a></td>
                    </tr>
                    <tr>
                        <td><a href={FrenchPdf} target='_blank' rel='noopener noreferrer'>Français | French</a></td>
                        <td><a href='/doctor-finder/search?language=french'>Français | French</a></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Home

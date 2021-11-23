import React from 'react'

import PeopleCard from '../components/PeopleCard'

import JohnLinImage from '../images/John-Lin.jpeg'
import JasonLinImage from '../images/Jason-Lin.jpeg'
import MariaChiaramonteImage from '../images/Maria-Chiaramonte.jpg'
import DanielWangImage from '../images/Daniel-Wang.jpeg'
import CobyNguyenImage from '../images/Coby-Nguyen.jpeg'
import AudreyNguyenImage from '../images/Audrey-Nguyen.jpg'
import MiaWilliamsImage from '../images/Mia-Williams.JPG'
import SinaNoshadjamalImage from '../images/Sina-Noshadjamal.png'

const About = () => {
    return (
        <div>
            <div className='section' id="grad">
                <h1 className='title has-text-centered has-text-white'>About Medical Literact Access Project</h1>
            </div>
            <div className='section has-background-light'>
                <div className='container is-flex is-justify-content-center '>
                    <p className='content has-text-centered mx-6 my-3'>We are a nonprofit organization founded in May 2021 to promote health and welfare among medically underserved patients through patient guides, advocacy, and research. We are overseen by an inclusive board of directors including health providers, patients, advocates, and students. If you have any suggestions or thoughts on improving our resources and programs, please
                        <a href='/contact'> let us know!</a>
                    </p>
                </div>
            </div>
            <div className='section'>
                <div className='container is-flex is-justify-content-center mx-6'>
                    <div>
                        <p className='content is-flex is-justify-content-center'>Here is our team:</p>
                        <div className='columns'>
                            <div className='column'>
                                <PeopleCard name='John Lin' location="Brown University" content="Executive Director" image={JohnLinImage} />
                                <PeopleCard name='Jason Lin' location="UT Southwestern" content="Director for Chinese Services" image={JasonLinImage} />
                                <PeopleCard name='María Chiaramonte' location="Brown University" content="Director for Spanish Services" image={MariaChiaramonteImage} />
                            </div>

                            <div className='column'>
                                <PeopleCard name='Coby Nguyen' location="UC Berkeley" content="Policy Director" image={CobyNguyenImage} />
                                <PeopleCard name='Sina Noshadjamal' location="Brown University" content="Director for Farsi Services" image={SinaNoshadjamalImage} />
                                <PeopleCard name='Daniel Wang' location="Texas A&M University" content="Director for Digital Services" image={DanielWangImage} />
                                
                            </div>
                            <div className='column'>
                                <PeopleCard name='Mia Williams' location="Brown University" content="Director for French Services" image={MiaWilliamsImage} />
                                <PeopleCard name='Audrey Nguyen' location="University of Houston" content="Director for Vietnamese Services" image={AudreyNguyenImage} />
                                
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    )
}

export default About

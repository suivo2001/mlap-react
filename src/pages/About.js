import React from 'react'

import PeopleCard from '../components/PeopleCard'

import Background from '../images/doctor-background.png'
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
            <div className='section is-medium' style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
                <h1 className='title is-flex is-justify-content-center has-text-white'>About Medical Literact Access Project</h1>
            </div>
            <div className='section has-background-light'>
                <div className='container is-flex is-justify-content-center '>
                    <p className='content has-text-centered mx-6 my-3'>We are a nonprofit organization founded in May 2021 to promote health and welfare among medically underserved patients through patient guides, advocacy, and research. We are overseen by an inclusive board of directors including health providers, patients, advocates, and students. If you have any suggestions or thoughts on improving our resources and programs, please
                        <a> let us know!</a>
                    </p>
                </div>
            </div>
            <div className='section'>
                <div className='container is-flex is-justify-content-center mx-6'>
                    <div>
                        <p className='content is-flex is-justify-content-center'>Here is our team:</p>
                        <div className='container is-flex mx-6'>
                            <PeopleCard name='John Lin' location="Brown University" content="Executive Director" image={JohnLinImage}/>
                            <PeopleCard name='María Chiaramonte' location="Brown University" content="Director for Spanish Services" image={MariaChiaramonteImage}/>
                            <PeopleCard name='Daniel Wang' location="Texas A&M University" content="Director for Digital Services" image={DanielWangImage}/>
                        </div>
                        <div className='container is-flex mx-6'>
                            <PeopleCard name='Mia Williams' location="Brown University" content="Director for French Services" image={MiaWilliamsImage}/>
                            <PeopleCard name='Jason Lin' location="UT Southwestern" content="Director for Chinese Services" image={JasonLinImage}/>
                            <PeopleCard name='Sina Noshadjamal' location="Brown University" content="Director for Farsi Services" image={SinaNoshadjamalImage}/>
                        </div>
                        <div className='container is-flex mx-6'>
                            <PeopleCard name='Audrey Nguyen' location="University of Houston" content="Director for Vietnamese Services" image={AudreyNguyenImage}/>
                            <PeopleCard name='Coby Nguyen' location="UC Berkeley" content="Policy Director" image={CobyNguyenImage}/>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default About

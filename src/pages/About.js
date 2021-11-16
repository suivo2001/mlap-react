import React from 'react'

import PeopleCard from '../components/PeopleCard'

import Background from '../images/doctor-background.png'
import JohnLinImage from '../images/John-Lin.jpeg'

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
                            <PeopleCard name='John Lin' location="Brown University" content="Executive Director" image={JohnLinImage}/>
                            <PeopleCard name='John Lin' location="Brown University" content="Executive Director" image={JohnLinImage}/>
                        </div>
                        <div className='container is-flex mx-6'>
                            <PeopleCard name='John Lin' location="Brown University" content="Executive Director" image={JohnLinImage}/>
                            <PeopleCard name='John Lin' location="Brown University" content="Executive Director" image={JohnLinImage}/>
                            <PeopleCard name='John Lin' location="Brown University" content="Executive Director" image={JohnLinImage}/>
                        </div>
                        <div className='container is-flex mx-6'>
                            <PeopleCard name='John Lin' location="Brown University" content="Executive Director" image={JohnLinImage}/>
                            <PeopleCard name='John Lin' location="Brown University" content="Executive Director" image={JohnLinImage}/>
                            <PeopleCard name='John Lin' location="Brown University" content="Executive Director" image={JohnLinImage}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default About

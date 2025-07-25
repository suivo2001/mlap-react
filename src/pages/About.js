import React from 'react'

import PeopleCard from '../components/PeopleCard'

import JohnLinImage from '../images/John-Lin.jpeg'
import JasonLinImage from '../images/Jason-Lin.jpeg'
import MariaChiaramonteImage from '../images/Maria-Chiaramonte.jpg'
import ChilseaWangImage from '../images/Chilsea-Wang.jpg'
import CobyNguyenImage from '../images/Coby-Nguyen.jpeg'
import MiaWilliamsImage from '../images/Mia-Williams.JPG'
import SinaNoshadjamalImage from '../images/Sina-Noshadjamal.png'
import IvoSuImage from '../images/Ivo-Su.png'
import ManusreeBhatterImage from '../images/Manusree-Bhatter.jpeg'
import Background from '../images/doctor-background.png'

const About = () => {
    return (
        <div>
            <div className='section is-medium' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                <h1 className='title has-text-centered has-text-white'>About Us</h1>
            </div>
            <div className='section has-background-light'>
                <div className='container is-flex is-justify-content-center '>
                    
                    <div>
                    <p className='content has-text-centered mx-6'>We are a nonprofit project founded in May 2021 to promote health and welfare among historically underserved patients by providing multilingual resources such as our doctor finder, affordable care finder, and patient guide. Our mission is to help connect patients with the affordable, culturally competent healthcare they need.</p>
                    <p className='content has-text-centered mx-6'>For transparency and accountability, we provide additional information on our <a href='/finances'>finances</a>, <a href='/governance'>governance</a>, and <a href='/policies'>policies</a>. We are entirely funded by two unconditional grants from <a href="https://entrepreneurship.brown.edu/resources/grants-funding/">Brown University</a>. We are overseen by an inclusive advisory board including health providers, patients, advocates, and students. If you have any suggestions or thoughts on improving our resources and programs, please <a href='/contact'>let us know</a>!</p>
                    <p className='content has-text-centered mx-6'>We are grateful for the help of the <a href="https://www.npaf.org/" target='_blank' rel="noreferrer">National Patient Advocate Foundation</a>, <a href="https://www.facebook.com/studentvolunteerinterpreters/" target='_blank' rel="noreferrer">Student Volunteer Interpreters</a>, and <a href="https://www.usnews.com/" target='_blank' rel="noreferrer">U.S. News & World Report</a> in developing our primary tools, as well as our community partners throughout the United States.</p>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='container is-flex is-justify-content-center mx-6'>
                    <div>
                        <p className='content is-flex is-justify-content-center'>Here is our board of directors:</p>
                        <div className='columns'>
                            <div className='column'>
                                <PeopleCard name='John Lin' location="University of Pennsylvania" content="Executive Director" image={JohnLinImage} />
                                <PeopleCard name='María Chiaramonte' location="Princeton University" content="Director for Spanish Services" image={MariaChiaramonteImage} />
                                <PeopleCard name='Ivo Su' location="Vanderbilt University" content="Webmaster, Director for Portuguese Services" image={IvoSuImage} />
                            </div>

                            <div className='column'>
                                <PeopleCard name='Manusree Bhatter' location="Texas A&M University" content="Director for Telugu Services" image={ManusreeBhatterImage} />
                                <PeopleCard name='Chilsea Wang' location="Brown University" content="Director of Project Development" image={ChilseaWangImage} />
                                <PeopleCard name='Sina Noshadjamal' location="Brown University" content="Director for Farsi Services" image={SinaNoshadjamalImage} />
                                
                            </div>
                            <div className='column'>
                                <PeopleCard name='Jason Lin' location="UTHealth Houston" content="Board Chair, Director of Services" image={JasonLinImage} />
                                <PeopleCard name='Coby Nguyen' location="UC Berkeley" content="Director for Vietnamese Services" image={CobyNguyenImage} />
                                <PeopleCard name='Mia Williams' location="Brown University" content="Director for French Services" image={MiaWilliamsImage} />
                            </div>
                        </div>

                        <p className='content mx-6 my-3'>We are thankful for our physician and patient advisors from across the United States who review our patient resources, including:
                        <ul>
                            <li>Dr. Anne Brancaccio, MD (Internal Medicine, UT Southwestern)</li>
                            <li>Dr. Anton Camaj, MD, MS (Cardiology, Mount Sinai Hospital)</li>
                            <li>Arash Meghdadi</li>
                            <li>Dr. Aravind Kokkirala, MD (Cardiology, Brown University)</li>
                            <li>Dr. Chi-Ying (Roy) Lin, MD, MPH (Neurology, Baylor College of Medicine)</li>
                            <li>Christian Zhao</li>
                            <li>Dongyue Xie</li>
                            <li>Dr. Emil Stefan Vutescu, MD (Orthopedic Surgery, Brown University)</li>
                            <li>George Obri</li>
                            <li>Dr. Hanan Khalil, MD (Diagnostic Imaging, Brown University)</li>
                            <li>Dr. J. Austin Lee, MD, MPH (Emergency Medicine, Brown University)</li>
                            <li>Janeva Shahi</li>
                            <li>Dr. Lance Truong, DO (Pathology, Brown University)</li>
                            <li>Dr. Luca Bartolini, MD (Pediatrics & Neurology, Brown University)</li>
                            <li>Dr. Michael Vezeridis, MD (Surgery, Brown University)</li>
                            <li>Dr. Qiangjun Cai, MD (Internal Medicine, UT Medical Branch)</li>
                            <li>Dr. Puneet Garcham, MD, MBA (Pulmonary Medicine, Baylor College of Medicine)</li>
                            <li>Dr. Renata Dalla Costa, MD (Dermatology, Brown University)</li>
                            <li>Dr. Robert Rohrbaugh, MD (Global Health Education & Psychiatry, Yale University)</li>
                            <li>Sana Mhish</li>
                            <li>Shenglei Sun</li>
                            <li>Sheue-Shya Wang</li>
                            <li>Dr. Sina Noshad, MD, MPH, PhD (Epidemiology, Brown University)</li>
                            <li>Dr. Susan Clemens, MD (Family Medicine, Lifespan Physician Group Urgent Care)</li>
                            <li>Dr. Tao Zheng, MD (Pediatrics & Molecular Microbiology and Immunology, Brown University)</li>
                            <li>Dr. Tatiana Bakaeva, MD (Ophthalmology, Brown University)</li>
                            <li>Dr. Thamara Davis, MD (Psychiatry, Brown University)</li>
                            <li>Valeria Palomino</li>
                            <li>Dr. Yi-Tang Lee, PhD (University of Wisconsin)</li>
                            <li>Dr. Yul Ejnes, MD, MACP (Internal Medicine, Brown University)</li>
                        </ul>
                        </p>                    
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About

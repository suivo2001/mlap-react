import React from 'react'

import Background from '../images/doctor-background.png'

const Governance = () => {
    return (
        <div>
            <div className='section is-medium' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                <h1 className='title has-text-centered has-text-white'>Governance</h1>
            </div>
            <div className='section has-background-light'>
                <div className='container is-flex is-justify-content-center '>
                    <div>
                        <p className='content is-flex is-justify-content-center'>Our directors meet virtually each month to discuss maintenance of existing consumer health resources and ongoing efforts to translate additional resources and expand community outreach, and additionally on an ad hoc basis. We also solicit advice from our advisors on an ongoing basis for projects in their area of specialty.</p>
                        <p className='content is-flex is-justify-content-center'>We are a nonprofit project, not a nonprofit organization. Based on advice from the Swearer Center for Public Service and the Rhode Island Foundation, we decided against incorporation. As a nonprofit project, we are fully able to achieve all of our goals, and we hold ourselves to the same standard of transparency and accountability expected of any nonprofit organization.</p>
                        <p className='content has-text-centered mx-6'>Please <a href='/contact'>  contact us  </a> if you have any order of business that you would like the board to discuss.</p>
                        <p className='content mx-6 my-3'>We are thankful for our physician and patient advisors from across the United States who review our resources, including:
                        <ul>
                            <li>Dr. Anne Brancaccio, MD (Internal Medicine, UT Southwestern)</li>
                            <li>Arash Meghdadi</li>
                            <li>Dr. Aravind Kokkirala, MD (Cardiology, Brown University)</li>
                            <li>Dr. Chi-Ying (Roy) Lin, MD, MPH (Neurology, Baylor College of Medicine)</li>
                            <li>Christian Zhao</li>
                            <li>Dongyue Xie</li>
                            <li>Dr. Emil Stefan Vutescu, MD (Orthopedic Surgery, Brown University)</li>
                            <li>Dr. Hanan Khalil, MD (Diagnostic Imaging, Brown University)</li>
                            <li>Dr. J. Austin Lee, MD, MPH (Emergency Medicine, Brown University)</li>
                            <li>Dr. Lance Truong, DO (Pathology, Brown University)</li>
                            <li>Dr. Luca Bartolini, MD (Pediatrics & Neurology, Brown University)</li>
                            <li>Dr. Michael Vezeridis, MD (Surgery, Brown University)</li>
                            <li>Dr. Qiangjun Cai, MD (Internal Medicine, UT Medical Branch)</li>
                            <li>Dr. Renata Dalla Costa, MD (Dermatology, Brown University)</li>
                            <li>Dr. Robert Rohrbaugh, MD (Global Health Education & Psychiatry, Yale University)</li>
                            <li>Shenglei Sun</li>
                            <li>Sheue-Shya Wang</li>
                            <li>Dr. Sina Noshad, MD, MPH, PhD (Epidemiology, Brown University)</li>
                            <li>Dr. Susan Clemens, MD (Family Medicine, Lifespan Physician Group Urgent Care)</li>
                            <li>Dr. Tao Zheng, MD (Pediatrics & Molecular Microbiology and Immunology, Brown University)</li>
                            <li>Dr. Tatiana Bakaeva, MD (Ophthalmology, Brown University)</li>
                            <li>Dr. Thamara Davis, MD (Psychiatry, Brown University)</li>
                            <li>Valeria Palomino</li>
                            <li>Yi-Tang Lee</li>
                            <li>Dr. Yul Ejnes, MD, MACP (Internal Medicine, Brown University)</li>
                        </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Governance

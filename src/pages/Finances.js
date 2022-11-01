import React from 'react'

import Background from '../images/doctor-background.png'

const Finances = () => {
    return (
        <div>
            <div className='section is-medium' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                <h1 className='title has-text-centered has-text-white'>Finances</h1>
            </div>
            <div className='section has-background-light'>
                <div className='container is-flex is-justify-content-center '>
                    <div>
                        <p className='content is-flex is-justify-content-center'>The Medical Literacy and Access Project is entirely funded by the Anti-Black & Systemic Racism Venture Grant ($500, awarded 11/15/2021) and Explore Grant ($250, awarded 11/1/2021) from <a href="https://entrepreneurship.brown.edu/resources/addressing-anti-black-systemic-racism-venture-grants/">Center For the Study Of Race and Ethnicity in America</a> and <a href="https://entrepreneurship.brown.edu/resources/grants-funding/">Nelson Center for Entrepreneurship</a> at Brown University. We do not accept donations at this time. Any funding that we receive is made unconditionally and without stipulation as to actions or services provided by the project.</p>
                        <p className='content is-flex is-justify-content-center'><b>2022 Report</b> (updated 11/1/2022)<br></br>In 2022, we had two expenses: $425.50 to the Health Resources and Services Administration (07/13/2022) via the Bureau of the Fiscal Service for free clinic data and $12 to Google Domains (9/14/2022) for website maintenance.</p>
                        <p className='content is-flex is-justify-content-center'><b>2021 Report</b><br></br>In 2021, our sole expense was $12 to Google Domains (9/14/2021) for maintenance of this website domain. At the end of 2021, we had $738 in cash reserves.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finances

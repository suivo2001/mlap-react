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
                        <p className='content is-flex is-justify-content-center'>Please <a href='/contact'> contact us </a> if you have any order of business that you would like the board to discuss.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Governance

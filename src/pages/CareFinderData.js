import React from 'react'

import Background from '../images/doctor-background.png'

const CareFinderData = () => {
    return (
        <div>
            <div className='section is-medium' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                <h1 className='title has-text-centered has-text-white'>About the Care Finder</h1>
            </div>
            <div className='section has-background-light'>
                <div className='container is-flex is-justify-content-center '>
                    <div>
                        <p className='content has-text-centered mx-6'>The <a href="/care-finder">Care Finder</a> is the first and only search tool for federally-qualified health centers and federally-registered free clinics in the United States.
                    <br></br><br></br> Federally-qualified health centers and look-alikes, obtained through the Health Resources and Services Administration (HRSA) Health Center Program <a href="https://data.hrsa.gov/tools/data-reporting/program-data">Uniform Data System</a>, provide comprehensive primary care for all patients and specifically free and/or discounted care for low-income patients and are specially reimbursed by Medicaid. <br></br><br></br>
                    Free clinics provide free and/or discounted care on a voluntary basis to low-income and/or uninsured patients and are supported primarily by non-governmental charitable donations. They are required to register with HRSA to obtain medical malpractice approval under the <a href="https://bphc.hrsa.gov/sites/default/files/bphc/technical-assistance/ftca-free-clinic-application-category.pdf">Federal Tort Claims Act</a>, although HRSA does not publish this information online. With grant support from Brown University, we obtained records for federally-registered free clinics from HRSA through a Freedom of Information Act request.</p>
            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareFinderData

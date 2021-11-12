import React from 'react'

import GoogleTranslate from './GoogleTranslate'

const Navbar = () => {
    return (
        <nav className="navbar is-light px-6">
            <div className="navbar-brand">
                <a className="navbar-item is-size-3" href='/'>
                    <b>MLAP</b>
                </a>
            </div>

            <div className="navbar-menu">
                <div className='navbar-start'>
                    <a className='navbar-item mx-5' href='/'><b>Medical Literacy Access Project</b></a>
                    <GoogleTranslate/>
                </div>
                
                <div className="navbar-end">
                    <a className="navbar-item" href='/patient-guide'>
                        Patient Guides
                    </a>
                    <a className="navbar-item" href='/doctor-finder'>
                        Doctor Finder
                    </a>
                    <a className="navbar-item" href='/advocacy'>
                        Advocacy
                    </a>
                    <a className="navbar-item" href='/about'>
                        About
                    </a>
                    <div className='navbar-item'>
                        <a className='button is-primary' href='/contact'>
                            Contact Us
                        </a>
                    </div>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar
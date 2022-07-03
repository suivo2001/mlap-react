import React from 'react'

import GoogleTranslate from './GoogleTranslate'

const Navbar = () => {

    const setActive = () => {
        const navbarMenu = document.querySelector('#nav-links')
        navbarMenu.classList.toggle('is-active')
    }

    return (
        <nav className="navbar is-light px-6" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item is-size-3" href='/'>
                    <b>MLAP</b>
                </a>
                <GoogleTranslate />
                {/* eslint-disable-next-line */}
                <a role="button" className="navbar-burger is-light" id='burger' aria-label="menu" aria-expanded="false" onClick={setActive}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            
            <div className="navbar-menu" id='nav-links'>

                <div className="navbar-end">
                    <a className="navbar-item" href='/'>
                        Home
                    </a>
                    <a className="navbar-item" href='/patient-guide'>
                        Patient Guides
                    </a>
                    <a className="navbar-item" href='/doctor-finder'>
                        Doctor Finder
                    </a>
                    <a className="navbar-item" href='/care-finder'>
                        Care Finder
                    </a>
                    <a className="navbar-item" href='/partners'>
                        Partners
                    </a>
                    <a className="navbar-item" href='/about'>
                        About
                    </a>
                    <a className='navbar-item' href='/contact'>
                            Contact Us
                    </a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
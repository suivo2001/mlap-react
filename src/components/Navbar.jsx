import React, {useState} from 'react'

import GoogleTranslate from './GoogleTranslate'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)

    const setActive = () => {
        const burgerIcon = document.querySelector('#burger')
        const navbarMenu = document.querySelector('#nav-links')
        navbarMenu.classList.toggle('is-active')
    }

    return (
        <nav className="navbar is-light px-6">
            <div className="navbar-brand">
                <a className="navbar-item is-size-3" href='/'>
                    <b>MLAP</b>
                </a>
                <GoogleTranslate />
                
                <a role="button" className="navbar-burger" id='burger' aria-label="menu" aria-expanded="false" onClick={setActive}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            
            <div className="navbar-menu" id='nav-links'>
                <div className='navbar-start'>
                    <a className='navbar-item mx-5' href='/'><b>Medical Literacy Access Project</b></a>
                    
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
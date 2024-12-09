import React from 'react';
import './MobileNav.css';


function MobileNav({ isOpen, toogleMenu }) {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toogleMenu}>

                <div className="mobile-menu-container">
                    <h1 className='logo'><i>SahanaSaravanan</i></h1>

                    <ul>
                        <li><a href="" className='menu-item'>Home</a></li>
                        <li><a href="" className='menu-item'>Skills</a></li>
                        <li><a href="" className='menu-item'>Achievements</a></li>
                        <li><a href="" className='menu-item'>Contact</a></li>

                        <button className='contact-btn' > HireMe </button>

                    </ul>

                </div>
            </div>
        </>
    )
}

export default MobileNav;
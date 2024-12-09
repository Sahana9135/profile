import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';

function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

  return (

    <>
        <MobileNav isOpen={openMenu} toogleMenu={toggleMenu} />

        <nav className='nav-wrapper'>
            <div className="nav-content">
                <h1 className='logo'><i>SahanaSaravanan</i></h1>

                <ul>
                    <li><a href="" className='menu-item'>Home</a></li>
                    <li><a href="" className='menu-item'>Skills</a></li>
                    <li><a href="" className='menu-item'>Achievements</a></li>
                    <li><a href="" className='menu-item'>Contact</a></li>
                </ul>

                <button className='contact-btn' onClick={() => {} }> HireMe </button>

                <button className='menu-btn' onClick={toggleMenu}>
                    <span className='material-symbols-outlined'
                    style={{fontSize:"1.8rem"}}> {openMenu ? "<": ">"} </span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar;
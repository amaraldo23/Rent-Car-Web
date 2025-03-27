import React from 'react';
import './Navbar.css';

function Navbar({ onAboutClick, onContactClick }) {
    return (
        <nav>
            <ul className='menu'>
                <li className='Home'><a href="/">Home</a></li>
                <li className='About'>
                    <a href='/about'> About </a>
                </li>
                <li className='Contact'>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
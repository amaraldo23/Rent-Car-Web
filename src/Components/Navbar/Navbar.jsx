import React from 'react';
import './Navbar.css';

function Navbar({ onAboutClick, onContactClick }) {
    return (
        <nav>
            <ul className='menu'>
                <li>
                    <a href="/">Home</a></li>
                <li>
                    <a href='/about'> About </a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
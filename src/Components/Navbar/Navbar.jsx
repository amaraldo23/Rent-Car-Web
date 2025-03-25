import React from 'react';
import './Navbar.css';

function Navbar({ onAboutClick, onContactClick }) {
    return (
        <nav>
            <ul className='menu'>
                <li className='Home'><a href="/">Home</a></li>
                <li className='About'><button onClick={onAboutClick}>About</button></li>
                <li className='Contact'><button onClick={onContactClick}>Contact</button></li>
            </ul>
        </nav>
    );
}

export default Navbar;
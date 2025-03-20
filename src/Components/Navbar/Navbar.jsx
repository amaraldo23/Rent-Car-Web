import React from 'react';
import './Navbar.css';

function Navbar({ onAboutClick }) {
    return (
        <nav>
            <ul className='menu'>
                <li className='Home'><a href="/">Home</a></li>
                <li className='About'><button onClick={onAboutClick}>About</button></li>
                <li className='Contact'><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
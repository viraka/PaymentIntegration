import { useState, useEffect } from 'react';
import logo from './assets/logo_small.png'
import './App.css';

function Navbar() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} width="20px" className='sparks' ></img>
                    <p>Sparks Foundation</p>
                </div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#contact">Info</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
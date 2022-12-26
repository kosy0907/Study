import React from 'react';
import { useState, useEffect } from 'react';
import './Navbar.css';
import { BsGithub, BsMoonFill } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body
        const toggle = document.querySelector('.toggle-inner')

        if (darkMode === true) {
            body.classList.add('dark-mode')
            toggle.classList.add('toggle-active')
        } else {
            body.classList.remove('dark-mode')
            toggle.classList.remove('toggle-active')
        }
    }, [darkMode])

    return (
        <div className='nav'>
            <div className='inner-left'>
                <button className='btn'>About</button>
                <button className='btn'>Skill</button>
                <button className='btn'>Project</button>
            </div>

            <div className='inner-right'>
                <div
                    id="toggle"
                    onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
                >
                    <div className="toggle-inner" />
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import './Navbar.css';
import { BsGithub, BsMoonFill } from 'react-icons/bs';

export default function Navbar() {
    return (
        <div className='nav'>
            <div className='inner-left'>
                <button>About</button>
                <button>Skill</button>
                <button>Project</button>
            </div>

            <div className='inner-right'>
                <button className='git-btn'><BsGithub size="30" /></button>
                <button className='dark-mode'><BsMoonFill size="30" /></button>
            </div>
        </div>
    );
}

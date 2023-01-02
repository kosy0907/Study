import React from 'react';
import { useState, useRef } from 'react';
import './Navbar.css';

export default function Navbar() {
    const ref = useRef();
    const moveTab = () => {
        const span = ref.current;
        console.log("Clicked!");
        console.log(span.className);
        //span.classList.remove("active");
    }
    return (
        <div className='nav'>
            <div className='nav-inner'>
                <div className='logo'>LOGO</div>
                <div className='menu'>
                    <ul className='link'>
                        <li ref={ref} onClick={moveTab} className="homeex active">Home</li>
                        <li ref={ref} onClick={moveTab}>About</li>
                        <li ref={ref} onClick={moveTab}>Skill</li>
                        <li ref={ref} onClick={moveTab}>Project</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

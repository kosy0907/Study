import React from 'react';
import { useRef, useEffect, useState } from "react";
import './Home.css'
import Navbar from '../Navbar/Navbar';
import Sec1 from '../sec1/Sec1';
import Sec2 from '../sec2/Sec2';
import Sec3 from '../sec3/Sec3';
import Sec4 from '../sec4/Sec4';

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";

    return (
        <>
            {/* <Navbar /> */}
            <div className='nav'>
                <div className='nav-inner'>
                    <div className='logo'>LOGO</div>
                    <div className='menu'>
                        <div className='link'>
                            <button
                                className={`tab ${checkActive(1, "active")}`}
                                onClick={() => handleClick(1)}>
                                Home
                            </button>
                            <button
                                className={`tab ${checkActive(2, "active")}`}
                                onClick={() => handleClick(2)}>
                                About
                            </button>
                            <button
                                className={`tab ${checkActive(3, "active")}`}
                                onClick={() => handleClick(3)}>
                                Skill
                            </button>
                            <button
                                className={`tab ${checkActive(4, "active")}`}
                                onClick={() => handleClick(4)}>
                                Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='content'>
                <div className={`panel ${checkActive(1, "active")}`}><Sec1 /></div>
                <div className={`panel ${checkActive(2, "active")}`}><Sec2 /></div>
                <div className={`panel ${checkActive(3, "active")}`}><Sec3 /></div>
                <div className={`panel ${checkActive(4, "active")}`}><Sec4 /></div>
            </div>
        </>
    )
}

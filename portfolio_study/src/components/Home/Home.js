import React from 'react';
import { useState } from "react";
import './Home.css'
import Sec1 from '../sec1/Sec1';
import Sec2 from '../sec2/Sec2';
import Sec3 from '../sec3/Sec3';
import Sec4 from '../sec4/Sec4';

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [fadeIndex, setFadeIndex] = useState(1);
    const handleClick = (index) => {
        setActiveIndex(index);
        setFadeIndex(index);
    };
    const checkActive = (index, className) => activeIndex === index ? className : "";
    const fadeIn = (index, className) => fadeIndex === index ? className : "";

    return (
        <>
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
                <div className={`panel ${checkActive(1, "active")} ${fadeIn(1, "fade-in")}`}><Sec1 /></div>
                <div className={`panel ${checkActive(2, "active")} ${fadeIn(2, "fade-in")}`}><Sec2 /></div>
                <div className={`panel ${checkActive(3, "active")} ${fadeIn(3, "fade-in")}`}><Sec3 /></div>
                <div className={`panel ${checkActive(4, "active")} ${fadeIn(4, "fade-in")}`}><Sec4 /></div>
            </div>
        </>
    )
}

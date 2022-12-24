import React from 'react';
import { useRef, useEffect, useState } from "react";
import './Home.css'
import Navbar from '../Navbar/Navbar';
import Sec1 from '../sec1/Sec1';
import Sec2 from '../sec2/Sec2';
import Sec3 from '../sec3/Sec3';
import Sec4 from '../sec4/Sec4';
import Dots from './dot';

const DIVIDER_HEIGHT = 5;

export default function Home() {

    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);
    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current;
            const pageHeight = window.innerHeight;

            if (deltaY > 0) {
                // scroll down
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    // 1 to 2
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(2);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    // 2 to 3
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(3);
                } else {
                    // 3 to 4
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 3 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(4);
                }
            } else {
                // scroll up
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    // 1
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    // 2 to 1
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
                    // 3 to 2
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(2);
                } else {
                    // 4 to 3
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(3);
                }
            }
        };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
        };
    }, []);
    return (
        <>
            <div className='left-nav' />
            <Navbar />
            <div ref={outerDivRef} className='outer'>
                <Dots scrollIndex={scrollIndex} />
                <Sec1 />
                <div className="divider" />
                <Sec2 />
                <div className="divider" />
                <Sec3 />
                <div className='divider' />
                <Sec4 />
            </div>
        </>
    )
}

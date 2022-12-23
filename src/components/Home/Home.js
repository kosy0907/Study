import React from 'react';
import './Home.css'
import Navbar from '../Navbar/Navbar';
import Sec1 from '../sec1/Sec1';
import Sec2 from '../sec2/Sec2';
import Sec3 from '../sec3/Sec3';

export default function Home() {
    return (
        <>
            <div id='wrap'>
                <div className='left-nav' />
                <Navbar />
                <Sec1 />
                <Sec2 />
                <Sec3 />
            </div>
        </>
    )
}

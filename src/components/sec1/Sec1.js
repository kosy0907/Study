import React from 'react';
import './Sec1.css';

export default function Sec1() {
    return (
        <>
            <div className='sec' id='home'>
                <div className='sec-inner'>
                    <div className='sec1-left'>
                        <div className='title'>
                            <p>SeungYeon</p>
                            <p>Portfolio</p>
                        </div>
                        <div className='intro-desc'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                    <div className='sec1-right'>
                        <p>Photo Here</p>

                    </div>
                </div>
            </div>
        </>
    );
}
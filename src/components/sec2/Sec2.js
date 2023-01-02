import React from 'react';
import './Sec2.css';

export default function Sec2() {
    return (
        <>
            <div className='sec' id='about'>
                <div className='sec-inner'>
                    <div className='sec-about'>
                        <div className='about-left'>
                            something here
                        </div>
                        <div className='about-right'>
                            <div id='sec2-name' className='sec2-item'>
                                <div className='sec2-item-title'>
                                    <p>Name</p>
                                </div>
                                <div className='sec2-item-content'>
                                    <p>고승연</p>
                                    <p>Seung Yeon Ko</p>
                                </div>
                            </div>

                            <div id='sec2-contact' className='sec2-item'>
                                <div className='sec2-item-title'>
                                    <p>Contact</p>
                                </div>

                                <div className='sec2-item-content'>
                                    <div className='adr'>
                                        <div className='contact-sub'>
                                            <p>Email: </p>
                                        </div>
                                        <p>seungyeonko98@gmail.com</p>
                                    </div>

                                    <div className='adr'>
                                        <div className='contact-sub'>
                                            <p>Github: </p>
                                        </div>
                                        <p>https://github.com/kosy0907</p>
                                    </div>
                                </div>


                                <div id='sec2-qualification' className='sec2-item'>
                                    <div className='sec2-item-title'>
                                        <p>Qualification</p>
                                    </div>
                                    <p>정보처리기사 SQLD CSTS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from 'react';
import './Sec2.css';

export default function Sec2() {
    return (
        <>
            <div className='sec2'>
                <div className='sec2-title'>
                    <p>About</p>
                    <hr />
                </div>
                <div className='sec2-content'>

                    <div id='sec2-name' className='sec2-item'>
                        <div className='sec2-item-title'>
                            <p>Name</p>
                            <hr style={{ width: "4rem" }} />
                        </div>
                        <div className='sec2-item-content'>
                            <p>고승연</p>
                            <p>Seung Yeon Ko</p>
                        </div>
                    </div>

                    <div id='sec2-contact' className='sec2-item'>
                        <div className='sec2-item-title'>
                            <p>Contact</p>
                            <hr style={{ width: "5rem" }} />
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

                    </div>

                    <div id='sec2-qualification' className='sec2-item'>
                        <div className='sec2-item-title'>
                            <p>Qualification</p>
                            <hr style={{ width: "8rem" }} />
                        </div>
                        <p>정보처리기사 SQLD CSTS</p>
                    </div>
                </div>
            </div>
        </>
    )
}
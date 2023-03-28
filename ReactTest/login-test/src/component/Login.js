import React, { useRef } from 'react';
import { auth } from '../firebase';

export default function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
            <div className="main">
                <div className="login">
                    <form>
                        <label aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required="" ref={emailRef} />
                        <input type="password" name="pswd" placeholder="Password" required="" ref={passwordRef} />
                        <button onClick={signIn}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
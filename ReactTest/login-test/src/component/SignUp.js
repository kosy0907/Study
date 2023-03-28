import React, { useRef } from 'react';
import { auth } from '../firebase';

export default function SignUp() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
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
                <div className="signup">
                    <form>
                        <label aria-hidden="true">Sign up</label>
                        <input type="email" name="email" placeholder="Email" required="" ref={emailRef} />
                        <input type="password" name="password" placeholder="Password" required="" ref={passwordRef} />
                        <button onClick={signUp}>Sign up</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
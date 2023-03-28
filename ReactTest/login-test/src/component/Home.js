import React from 'react';
import { auth } from '../firebase';

export default function Home() {
    return (
        <div>
            <div>
                This is Home page
            </div>
            <button onClick={() => auth.signOut()}>
                Logout
            </button>
        </div>
    )
}
import React, { useContext } from 'react';
import { UserContext } from '../store/User';

function About() {
    const context = useContext(UserContext);

    return (
        <div>
            This is {context.name}'s About page.
        </div>
    );
}

export default About;
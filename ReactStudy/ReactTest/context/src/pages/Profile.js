import React, { useContext } from "react";
import { UserContext } from '../store/User';

function Profile() {
    const context = useContext(UserContext);
    console.log(context);

    return (
        <div>
            This is Profile Page.
            <p>Name: {context.name}</p>
            <p>Age: {context.age}</p>
            <p>Job: {context.job}</p>
        </div>
    );
}

export default Profile;
import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    // useEffect(() => {
    //     console.log({
    //         name,
    //         age,
    //         email
    //     });
    // });

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    });

    const onChangeName = e => {
        setName(e.target.value);
    };
    const onChangeAge = e => {
        setAge(e.target.value);
    };
    const onChangeEmail = e => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <form>
                <label>Name</label>
                <input value={name} onChange={onChangeName} placeholder='Type your name' />

                <label>Age</label>
                <input value={age} onChange={onChangeAge} placeholder='Type your age' />

                <label>E-mail</label>
                <input value={email} onChange={onChangeEmail} placeholder='Type your E-mail address' />
            </form>

            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default Profile;
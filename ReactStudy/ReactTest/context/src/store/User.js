import React, { createContext } from 'react';

// 빈 객체 생성
export const UserContext = createContext();

const UserStore = (props) => {

    const users = {
        name: 'Mark',
        age: '23',
        job: 'Student'
    }

    return <UserContext.Provider value={users}>{props.children}</UserContext.Provider>;
};

export default UserStore;
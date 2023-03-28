# Context

## 목록
* Import
* Context
    * 빈 객체 생성
    * Provider
    * Store 연결
    * useContext & Context.Consumer

### Import
---
```js
import React, { createContext } from 'react';
```

### Context
---
* 테마, 언어 등 전역적으로 데이터를 공유할 때 사용
* 전역 데이터를 context에 저장 후, 데이터가 필요한 컴포넌트에서 데이터 불러오기 가능
    #### 빈 객체 생성
    ---
    ```js
    export const UserContext = createContext();
    ```

    #### Provider
    ---
    * 정의한 context를 하위 컴포넌트에 전달
    ```js
    // src/store/User.js
    const UserStore = (props) => {

        const users = {
            name: 'Mark',
            age: '23',
            job: 'Student'
        }

        return <UserContext.Provider value={users}>{props.children}</UserContext.Provider>;
    };
    ```

    #### Store 연결
    ---
    ```js
    // src/App.js
    return (
        <UserStore>
    
            ...

        </UserStore>
    );
    ```

    #### useContext & Context.Consumer
    ---
    * Provier의 value값 전달
    1. useContext
        ```js
        /// src/pages/Profile.js
        import { UserContext } from '../store/User'; 

        function Profile() {

            const context = useContext(UserContext);

            return (
                <div>
                    <b>{context.name}</b>
                    <p>Age: {context.age}</p>
                    <p>Job: {context.job}</p>
                </div>
                );
        }
        ```
    2. Context.Consumer
        ```js
        const context = React.createContext(defaultValue)
        <Provider value={/* some value */}>
        ...
        ```
        ```js
        return (
            <Consumer>
                {value => /* render something based on the context value */}
            </Consumer>
        )
        ```
# Hooks
함수형 컴포넌트에서 state와 lifecycle을 사용 가능하게 함  
내장된 hook 또는 사용자 정의 hook를 사용
## 목록
* UseState
* UseEffect
* UseContext

### UseState
---
* 가장 기본적인 Hook
1. Import
```js
import React, { useState } from 'react';
```
2. Example
```js
// src/Counter.js
const Counter = () => {
    // counter의 기본값을 0으로 설정
    // [상태값, 상태 설정 함수]
    const [value, setValue] = useState(0);
    return (
        <div>
            <p>
                현재 값: <b>{value}</b>
            </p>
            <button onClick={() => setValue(value - 1)}>-</button>
            <button onClick={() => setValue(value + 1)}>+</button>
        </div>
    );
};
```
```js
// src/Profile.js
const Profile = () => {
    // name, age, emil을 공백으로 설정
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

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
                <input value={name} 
                onChange={onChangeName} 
                placeholder='Type your name' />

                <label>Age</label>
                <input value={age} 
                onChange={onChangeAge} 
                placeholder='Type your age' />

                <label>E-mail</label>
                <input value={email} 
                onChange={onChangeEmail} 
                placeholder='Type your E-mail address' />
            </form>

            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
};
```
### UseEffect
---
* Component 렌더링 시 특정한 작업을 수행하도록 설정
1. Import
```js
import React, { useEffect } from 'react';
```
2. Example  
    ```js
    // src/Profile.js
    const Info = () => {
        const [name, setName] = useState('');
        const [age, setAge] = useState('');
        const [email, setEmail] = useState('');

        useEffect(() => {
            console.log({
            name,
            age,
            email
        });
    });
    ...
    ```
    2-1. 가장 처음 렌더링 될때만 실행
    ```js
    useEffect(() => {
        console.log('마운트 될 때만 실행');
    }, []);
    ```
    2-2. 특정 값이 업데이트 될때만 실행
    ```js
    useEffect(() => {
        console.log(name);
    }, [name]);
    ```
    2-3. Clean up  
        정리하는 함수  
        언마운트 전 / 업데이트 직전에 작업 수행
    ```js
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
        console.log('cleanup');
        console.log(name);
        };
    });
    ```

<!-- ### UseContext
---
1. Import
```js
```
2. Example
```js
``` -->
### Custom Hook
* use로 시작하는 JS 함수  
* 조건부 함수가 아니다
* 반복되는 로직을 쉽게 재사용 가능하게 한다  
* 다른 hook을 호출할 수 있다
```js
// src/hooks/useWindowHeight.js
export default function useWindowHeight() {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const resize = () => {
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return height;
}
```
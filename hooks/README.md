# Hooks
함수형 컴포넌트에서 state와 lifecycle을 사용 가능하게 함  
내장된 hook 또는 사용자 정의 hook를 사용
## 목록
* useState
* useEffect
* useContext
* custom hook
* useReducer
* useMemo
* useCallback
* useRef

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
---
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
### useReducer
---
* useState보다 복잡한 상태 관리 필요시 사용
* Reducer -> state를 변경하는 로직이 담긴 함수
* action -> 필수 프로퍼티로 type을 가짐
* dispatch -> 행동(Action) 객체를 인자로 받아 실행
1. 기본 형태
    ```js
    const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>)
    ```
2. Import
    ```js
    import { useReducer } from "react";
    ```
2. Example  
    2-1. Reducer - state 변경 로직
    ```js
    // src/hooks/useReducerEx.js
    const reducer = (state, action) => {
    if (action.type === 'Increase') {
        return {
            count: state.count + 1
        };
    }
    return state;
    };
    ```
    2-2.
    ```js
    export default function ClickCount() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>Clicked <b>{state.count}</b> times</p>
            <button onClick={click}>Click!</button>
        </div>
    );

    function click() {
        dispatch({ type: 'Increase' });
        }
    };
    ```
### useMemo
---
* Memoization된 값 반환
* 특정한 value를 재사용 하기 위함
* 주로 성능 최적화 시 사용
1. 기본 형태
    ```js
    const memoizedValue = useMemo(() => {
        return (수행할 동작);
        }, [의존값]);
    ```
2. Import
    ```js
    import React, { useMemo } from "react";
    ```
3. Example
    ```js
    // src/hooks/UseMemoEx.js
    function sum(people) {
    console.log('sum');
    return people.map(person => person.age).reduce((l, r) => l + r, 0)}
        
    export default function UseMemoEx() {
        const [value, setValue] = useState('');
        const [people] = useState([
            { name: 'Jane', age: 23 },
            { name: 'Clay', age: 39 },
        ]);

        // people이 변했을때만 count를 다시 실행
        const count = useMemo(() => {
            return sum(people);
        }, [people]);

        return (
            <div>
                <input value={value} onChange={change} />
                <p>{count}</p>
            </div>
        );

        function change(e) {
            setValue(e.target.value);
            }
    }
    ```
### useCallback
---
* 특정한 함수를 재사용 하기 위함
```js
    // 최초에만 수행
    const click = useCallback(() => {
        console.log(value);
    }, []);
    
    ...

    <button onClick={click}>Click</button>
```
### useRef
---
* React에서 특정 DOM을 선택할 때는 ref를 사용
* 함수형 컴포넌트에서 ref 사용시 useRef를 사용
* 인자로 넘어온 초기값을 .current에 저장
* Ref 객체의 current -> 선택하고자 하는 DOM
1. 기본 형태
    ```js
    const refObject = useRef( initialValue );
    ```
2. Example
    ```js
    const input1Ref = createRef();
    const input2Ref = useRef();

    ...

    <input value={value} onChange={change} />
    <input ref={input1Ref} />
    <input ref={input2Ref} />
    ```
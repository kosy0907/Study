# Redux
리액트에서 가장 많이 사용되는 상태 관리 라이브러리  
상태 업데이트 관련 로직을 다른 파일로 분리해서 관리  
Action 객체를 Reducer에 전달하고 Reducer가 Store의 상태 업데이트
* Install
* Basic
    * Action
    * Reducer
    * Store
* Advanced
    * middleware
    * redux-thunk
    * redux-promise-middleware
    * Ducks Pattern
* Example

## Install
```
npm i redux react-redux
```

## Basic
### Action
---
* 스토어에 운반할 데이터를 담은 객체
* 리덕스에서는 Action 객체를 통해서만 상태 변경이 가능
* JS 객체 형식
* Type을 필수 property로 가진다
```js
{
   type: 'ADD_TODO',
   data: {
       id: 1,
       text: '운동 1시간'
   }
}
```
#### Action object 생성 함수 - Action Creator
---
액션을 객체 형태로 반환
```js
// data를 parameter로 받아 Action 객체로 반환
function addTodo(data) {
 return {
   type: 'ADD_TODO',
   data,
 }
}
```

### Reducer
---
* 이전 상태와 Action을 parameter로 받음
* Store의 상태를 업데이트
```js
// 변화된 상태값 반환
function reducer(previousState, action) {
  ...
  return alteredState;
}
```
#### Combine Reducer
---
컴포넌트 별로 리듀서를 작성시 결합할 때 사용

### Store
---
* 컴포넌트 외부에 있는 저장소로, 컴포넌트에서 상태 정보가 필요할때 스토어에 접근
* 상태가 관리되는 공간
* 하나의 프로젝트는 하나의 스토어만 갖는다
#### 스토어 Create Function
```js
 const store = createStore(reducer)
```
#### 내장 함수
1. Dispatch
    * 액션을 발생시키는 이벤트 트리거 역할
2. Subscribe
    * 리스너 함수를 파라미터로 넣어 호출하면 상태 업데이트 때 호출
    * 이벤트 리스너 역할
3. Selector
    * 상태 값을 가져올 때 사용

## Advanced
### Middleware
---
* Action - Reducer 사이의 중간자
* Dispatch 앞/뒤에 코드 추가
* 여러 개인 경우 순차적으로 실행
* 전달받은 액션을 console에 출력하거나 액션을 취소/추가하는 등 다양한 역할
#### 기본구조
```js
const loggerMiddleware = store => next => action => {
  ...
}

export default loggerMiddleware;
```
#### Example
```js
function middleware1(store) {
  console.log("middleware0", 0);
  return(next) => {
    console.log("middleware1", 1);
    return action => {
      console.log('middleware2', 2);
      const returnValue = next(action);
      console.log('middleware3', 3);
      return returnValue;
    }
  }
}

export default loggerMiddleware;
```

### redux-thunk
---
* Action 객체가 아닌 함수를 Dispatch 가능
* 비동기 작업 처리 시 가장 많이 사용
* Action 내부에서 여러가지 작업을 처리할 수 있게 함
```js
// Action Dispatch를 1초 뒤로 미루는 함수
const LATER_WORK = 'LATER_WORK';

function work() {
  return {
    type: LATER_WORK
  };
} 

function workAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(work());
    }, 1000);
  };
}

// store.dispatch(workAsync()) 호출 시 Action이 1초 후에 Dispatch
```

### redux-promise-middleware
---
* Promise 기반의 비동기 작업을 편하게 하는 미들웨어
* 어떤 API 호출이건 최소 3가지의 Action을 보내야 함
  1. 요청이 시작됨을 알림
  2. 요청이 성공적으로 완료됨을 알림
  3. 요청이 실패했음을 알림
* 요청이 시작/성공/실패 시 액션의 뒷부분에 각각 _PENDING, _FULFILED, _REJECTED 반환(커스터마이징 가능)
* Store의 applyMiddleware() 안에 promise를 넣어 연결
* 비동기 작업 함수를 Action Creator에서 Action 객체 형태로 리턴
1. 설치
    ```
    npm i redux-promise-middleware
    ```
2. import
    ```js
    // store.js
    import promiseMiddleware from 'redux-promise-middleware';

    const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(promise))
    );
    ```
3. Action Creator 설정
    ```js
    // actions.js
    import axios from 'axios';

    const GET_USERS = 'GET_USERS';

    export const GET_USERS_PENDING = 'GET_USERS_PENDING';
    export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
    export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';

    export function getUsersPromise() {
    return {
      type: GET_USERS,
      payload: async () => {
        const res = await axios.get('https://api.github.com/users');
        return res.data;
      },
    };
    }
    ```
4. Reducer 설정
    ```js
    import {  GET_USERS_PENDING, GET_USERS_FULFILLED, GET_USERS_REJECTED  } from '../actions';

    // 초기 상태
    const initialState = {
    loading: false,
    data: [],
    error: null,
    };

    export default function user(state = initialState, action) {

      if (action.type === GET_USERS_PENDING) {
        return {
          ...state,
          laoding: true,
          error: null,
        };
      }
      if (action.type === GET_USERS_FULFILLED) {
        return {
          ...state,
          laoding: false,
          data: action.payload,
        };
      }
      if (action.type === GET_USERS_REJECTED) {
        return {
          ...state,
          laoding: false,
          error: action.payload,
        };
      }
    return state;
    }
    ```
5. Component 설정
    ```js
    import axios from 'axios';
    import { useCallback } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import UserList from '../components/UserList';
    import {
    getUsersPromise,
    } from '../redux/actions';

    export default function UserListContainer() {
      const users = useSelector((state) => state.users.data);
      const dispatch = useDispatch();

      const getUsers = useCallback(() => {
        // getUserPropmise로 비동기 처리 수행
        dispatch(getUsersPromise());
      }, [dispatch]);

    return <UserList users={users} getUsers={getUsers} />;
    }
    ```

### Ducks Pattern
---
* Action type, Action create function, reducer를 별도의 파일이 아닌 하나의 module처럼 한 파일 안에 작성
* Reducer 함수, Action 함수는 반드시 **default export** 해야 한다
* Action type은 반드시 **접두사**를 붙인 형태로 정의
```js
// src/module/counter.js
// Action type - 접두사를 붙임
const SET_DIFF =  'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 초기 상태
const initialState = {
  number: 0,
  diff: 1,
};

// Action 생성 함수
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// Reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}

```
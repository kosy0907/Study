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
    * async action
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
### Async action
---

### Middleware
---

### redux-thunk
---

### redux-promise-middleware
---

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
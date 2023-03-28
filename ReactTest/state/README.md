# State
props와 비슷하게 Component에 데이터를 전달할 때 사용

## Props VS State
Props
* 매개변수처럼 Component에 전달  

State
* Component 안에서 관리
* 데이터가 노출되지 않도록 State에 참조
* 사용자가 알 필요 없는 데이터를 내부에서 은닉하기 위해 캡슐화

## Example
1. 함수형 Component  
    1-1. App.js 상단에 useState import
    ```js
    import { useState } from 'react'
    ```

    1-2. State의 초기값 설정
    ```js
    function App() {
    const[number] = useState(0);

    return (
        <div>{number}</div>
    );
    }
    ```
    
    1-3. state 변경
    ```js
    function App() {
    const[number, setNumber] = useState(0);

    return (
        <div>
            <p>{number}</p>
            <button onClick={() => setNumber(number-1)}>-</button>
            <button onClick={() => setNumber(number+1)}>+</button>
        </div>
    );
    }
    ```

2. 클래스 Component  
    1-1. State 초기값 설정
    ```js
    class Counter extends React.Component {
        constructor(props) {
            super(props);
            this.state = { number: 0 };
        };
        render() {
            return (
            <div>{this.state.number}</div>
            );
        };
    }
    ```
    1-2. State 변경
    ```js
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            number: 0
            };
        };
        plus = () => {
            this.setState(() => {
            return {number: this.state.number + 1};
                });
            };
        minus = () => {
            this.setState(() => {
            return {number: this.state.number - 1};
                });
            };            
        
            render() {
                return (
                <div>
                    <p>{this.state.number}</p>
                    <button onClick={this.minus}>-</button>
                    <button onClick={this.plus}>+</button>
                </div>
                );
            };
    }
    ```
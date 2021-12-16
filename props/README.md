# Props
어떠한 값을 Component에 전달할 때 사용
## Example
Subject 컴포넌트에 name, content의 값을 전달
```js
// src/App.js

function App() {
  return (
    <div className="App">
      <Subject name="REACT" content="FrameWork"></Subject>
      <Subject name="WEB" content="World Wide Web"></Subject>
    </div>
  );
}
```
```js
// 1. 클래스 컴포넌트
//컴포넌트에 전달되는 props는 객체 형태로 전달
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.name}</h1>
        {this.props.content}
      </header>
    );
  }
}
```
```js
// 2. 함수 컴포넌트
function Subject(props) {
  return (
    <header>
        <h1>{props.name}</h1>
        {props.content}
    </header>
  ) 
}
```
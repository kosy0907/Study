import './App.css';
import React, { Component } from 'react';

// class Subject extends Component {
//   render() {
//     return (
//       <header>
//         <h1>{this.props.name}</h1>
//         {this.props.content}
//       </header>
//     );
//   }
// }

function Subject(props) {
  return (
    <header>
        <h1>{props.name}</h1>
        {props.content}
    </header>
  ) 
}

function App() {
  return (
    <div className="App">
      <Subject name="REACT" content="FrameWork"></Subject>
      <Subject name="WEB" content="World Wide Web"></Subject>
    </div>
  );
}

export default App;

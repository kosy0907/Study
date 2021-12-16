import React, { useState } from "react";
import './App.css';

// 함수 컴포넌트

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


// Class 컴포넌트

// class App extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//       number: 0
//       };
//   };
//   plus = () => {
//       this.setState(() => {
//       return {number: this.state.number + 1};
//           });
//       };
//   minus = () => {
//       this.setState(() => {
//       return {number: this.state.number - 1};
//           });
//       };            
  
//       render() {
//           return (
//           <div>
//               <p>{this.state.number}</p>
//               <button onClick={this.minus}>-</button>
//               <button onClick={this.plus}>+</button>
//           </div>
//           );
//       };
// }

export default App;

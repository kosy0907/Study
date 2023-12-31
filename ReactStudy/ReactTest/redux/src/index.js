import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/Store';
import { addTodo, completeTodo } from './redux/Action';

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("React.js"));
// store.dispatch(addTodo("Node.js"));
// unsubscribe();

store.dispatch(addTodo('할일'));
store.dispatch(completeTodo(0));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

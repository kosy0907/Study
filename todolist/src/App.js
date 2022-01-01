import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;

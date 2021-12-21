import './App.css';
import Counter from './Counter';
import useWindowHeight from './hooks/useWindowHeight';
import Profile from './Profile';

function App() {
  const height = useWindowHeight();

  return (
    <div className="App">
      <Counter />
      <Profile />
      {height}
    </div>
  );
}

export default App;

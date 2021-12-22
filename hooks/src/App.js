import './App.css';
import Counter from './hooks/Counter';
import useWindowHeight from './hooks/useWindowHeight';
import Profile from './hooks/Profile';
import UseReducerEx from './hooks/UseReducerEx';
import UseMemoEx from './hooks/UseMemoEx';

function App() {
  const height = useWindowHeight();

  return (
    <div className="App">
      <b>UseState Example</b>
      <Counter />
      <hr />

      <b>UseEffect Example</b>
      <Profile />
      <hr />

      <b>Custom hook Example</b>
      <p>innerHeight: <b>{height}</b></p>
      <hr />

      <b>UseReducer Example</b>
      <UseReducerEx />
      <hr />

      <b>UseMemo Example</b>
      <UseMemoEx />
    </div>
  );
}

export default App;

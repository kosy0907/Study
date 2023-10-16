import React, { useState } from "react";
import './App.css';
import Counter from './hooks/Counter';
import useWindowHeight from './hooks/useWindowHeight';
import Profile from './hooks/Profile';
import UseReducerEx from './hooks/UseReducerEx';
import UseMemoEx from './hooks/UseMemoEx';
import UseRefEx from './hooks/UseRefEx';
import { ThemeContext } from "./hooks/UseContext/ThemeContext";
import Page from "./hooks/UseContext/Page";


function App() {
  const height = useWindowHeight();
  const [isDark, setIsDark] = useState(false);

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

      <b>UseMemo & useCallback Example</b>
      <UseMemoEx />
      <hr />

      <b>UseRef Example</b>
      <UseRefEx />

      <b>UseContext Example</b>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

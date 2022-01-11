import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
        {/* <Route path='/detail' element={<Detail /> } /> */}
      </Routes>
    </Router>
  );
}

export default App;

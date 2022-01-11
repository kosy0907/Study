import './App.css';
import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // 구조 분해 할당
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

    setMovies([...movies], []);
  }

  useEffect(() => {
    getMovies();
  });

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route exact path='/' element={<Home movies={movies} />} />
        {/* <Route path='/detail' element={<Detail /> } /> */}
      </Routes>
    </Router>
  );
}

export default App;

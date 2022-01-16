import './style/App.css';
import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const movies = await (await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=de638f81d320c814bb662ea24353aa8d")).data.results;
    // console.log(movies);
    setLoading(false);
    setMovies([...movies], []);
  }


  useEffect(() => {
    getMovies();
  });

  return (
    <div>
      {loading ? "Loading..." :

        <Router>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Home movies={movies} />} />
            <Route exact path='/movie/:movieId' element={<Detail movies={movies} />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import { auth } from './firebase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './component/SignUp';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged
      (userAuth => {
        const user = {
          uid: userAuth?.uid,
          email: userAuth?.email
        }
        if (userAuth) {
          console.log(userAuth)
          setUser(user)
        } else {
          setUser(null)
        }
      })
    return unsubscribe
  }, [])

  return (
    <div className='App'>
      {user ? <Home /> :
        <>
          <Login /> <SignUp />
        </>}
    </div>
  );
}

export default App;

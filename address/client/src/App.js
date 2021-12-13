import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';

function App() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [nameAdressList, setList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      setList(response.data);
    })
  }, []);

  const submit = () => {
    Axios.post('http://localhost:3001/api/insert', {
      name: name, 
      address: address,
    });
      
    setList([
      ...nameAdressList,
      {name: name, address: address},
    ]);
  };

  return (
    <div className="App">
      <h1>Address Book</h1>

      <div className='form'>
        <label>Name</label>
        <input type='text' name='name' onChange={(e)=> {
          setName(e.target.value);
        }}/>

        <label>Address</label>
        <p>ex) 010-xxxx-xxxx</p>
        <input type='text' name='address' onChange={(e)=> {
          setAddress(e.target.value);
        }}/>

        <button onClick={submit}>Submit</button>

        {nameAdressList.map((val) => {
          return (
            <div className="card">
              <h2>{val.name}</h2>
              <p>{val.address}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;

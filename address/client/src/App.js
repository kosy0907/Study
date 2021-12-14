import React, { useState, useEffect } from "react";
import {Button, Card, Form, FormControl, InputGroup} from 'react-bootstrap';
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
    window.alert('Success!');
    setList([
      ...nameAdressList,
      {name: name, address: address},
    ]);
  };

  return (
    <div className="App">
      <h1>Address Book</h1>

      <div className='form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Name" 
          onChange={(e)=> {
          setName(e.target.value);
          }}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name='address' placeholder="Enter Address" 
          onChange={(e)=> {
          setAddress(e.target.value);
          }}/>
          <Form.Text className="text-muted">
            ex) 010-xxxx-xxxx
          </Form.Text>
        </Form.Group>

        <Button variant='outline-primary' onClick={submit}>Submit</Button>

        <div className="content">
          {nameAdressList.map((val) => {
            return (
              <Card>
                <Card.Header>{val.name}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    {val.address}
                  </Card.Text>

                  <InputGroup className="mb-3">
                    <FormControl type="text" id="updateInput"/>
                    <Button variant="outline-secondary" id="updateBtn">Update</Button>
                  </InputGroup>
                  <Button variant="outline-danger" size="sm">Delete</Button>

                </Card.Body>
              </Card>
            )
          })}
        </div>

      </div>
    </div>
  );
}

export default App;

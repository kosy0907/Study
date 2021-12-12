import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Address Book</h1>
      <div className='form'>
        <label>Name</label>
        <input type='text' name='name'></input>

        <label>Address</label>
        <p>ex) 010-xxxx-xxxx</p>
        <input type='text' name='address'></input>

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;

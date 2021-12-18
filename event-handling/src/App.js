import './App.css';
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  //사용자 이름
  const onChangeUsername = (e) => setUsername(e.target.value);
  //메세지
  const onChangeMessage = (e) => setMessage(e.target.value);
  //Confirm 버튼 클릭 시 함수
  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };

  const onSubmit = () => {
    alert('Submitted!');
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  };

  return (
    <div className="App">
      <button onClick={onSubmit}>Submit</button>

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      <form className='messageForm'>
        <label>User Name</label>
        <input
          type="text"
          name="messge"
          placeholder="Type user name"
          value={username}
          onChange={onChangeUsername}
        />

        <label>Message</label>
        <input
          type="text"
          name="messge"
          placeholder="Type message"
          value={message}
          onChange={onChangeMessage} />
        <button onClick={onClick}>Confirm</button>
      </form>
    </div>
  );
}

export default App;

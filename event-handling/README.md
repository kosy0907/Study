# Event Handling
Event: 사용자가 DOM 요소와 상호작용 하는 것

## Example
```js
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

  return (
    <div className="App">
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
```
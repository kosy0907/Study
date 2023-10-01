import { React, useState } from 'react';
import './App.css';
import Book from './component/Book';
import data from './data';

function App() {
  const { book } = data;
  const [title, setBookList] = useState([]);

  const onAdd = (book) => {
    console.log(book.id, book.name, book.writer);
    console.log(title);

    const exist = title.find((x) => x.id === book.id);

    if (exist) {
      window.alert("Already read!");
    } else {
      setBookList([...title, { ...book }]);
    }
  };

  return (
    <div className="App">
      <Book onAdd={onAdd} books={book} title={title} />
    </div>
  );
}

export default App;

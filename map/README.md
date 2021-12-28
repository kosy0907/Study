# map 함수
반복되는 컴포넌트 효율적으로 렌더링 하기 위해 사용

## 목록
* 기본 형태
* key
* Example

### 기본 형태
---
```js
array.map(callback, [thisArg])
```

### Example
---
* key 설정
    * key 값을 설정하여 Element의 고유성 유지
    * 컴포넌트 렌더링 시 어떤 Element가 변경되었는지 빠르게 확인
```js
// data.js
const data = {
        book: [
            {
                id: '1', //id를 key 값으로 설정
                name: '달러구트 꿈 백화점',
                writer: '이미예'
            },
            {
                id: '2',
                name: '미드나잇 라이브러리',
                writer: '매트 헤이그'
            },
        ]
    }
```
```js
// App.js
function App() {

    const { book } = data;
    const [title, setBookList] = useState([]);

    const onAdd = (book) => {
        // 읽은 책 리스트에 존재하는지 확인
        const exist = title.find((x) => x.id === book.id);
    // 존재할 경우 
    if (exist) {
      window.alert("Already read!");
    }
    // 존재하지 않을 경우 
    else {
      setBookList([...title, { ...book }]);
    }
  };
    
    return (
        <div className="App">
            <Book onAdd={onAdd} books={book} title={title} />
        </div>
    )
}
```
```js
// Book.js
export default function Book(props) {
    const { books, onAdd, title } = props;

    return (
        <div className='container'>
            {books.map((book) => (
                <Item key={book.id} book={book} onAdd={onAdd}></Item>
            ))}
            <hr />

            <h2 style={{ fontweight: "900" }}>What I read</h2>
            {title.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
};
```
```js
// Item.js
export default function Item(props) {
    const { book, onAdd } = props;

    return (
        <div className="row">
            <div className='title'>{book.name}</div>
            <div className='writer'>{book.writer}</div>
            <Button variant="success" onClick={() => onAdd(book)}>Read!</Button>
        </div>
    );
};
```
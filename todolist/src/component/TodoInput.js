import { BsFillPlusSquareFill } from 'react-icons/bs';

function TodoInput() {
    return (
        <>
            <div className='head'>
                <h1>Todo List</h1>
            </div>
            <div className='form'>
                <input type='text' placeholder='What are you going to do today?'></input>
                <button className='addBtn'><BsFillPlusSquareFill /></button>
            </div>

        </>
    );
};

export default TodoInput;
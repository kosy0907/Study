import { useState } from 'react';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { addTodo } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    const [name, setName] = useState();
    const dispatch = useDispatch();
    return (
        <>
            <div className='head'>
                <h1>Todo List</h1>
            </div>
            <div className='form'>

                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name || ''}
                    type='text'
                    placeholder='What are you going to do today?'
                />

                <button className='addBtn'
                    onClick={() => {
                        dispatch(addTodo({
                            id: uuid(),
                            name: name
                        }));
                        setName('');
                    }}><BsFillPlusSquareFill /></button>

            </div>

        </>
    );
};

export default TodoInput;
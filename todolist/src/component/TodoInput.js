import { useState } from 'react';
import { addTodo } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function TodoInput() {
    const [name, setName] = useState();
    const dispatch = useDispatch();
    return (
        <>
            <div className='head'>
                <h1>Todo List</h1>
            </div>
            <div className='form'>

                <InputGroup className="mb-3">
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => setName(e.target.value)}
                        value={name || ''}
                        type='text'
                        placeholder='What are you going to do today?' />

                    <Button variant="outline-dark" id="button-addon2"
                        className='addBtn'
                        onClick={() => {
                            dispatch(addTodo({
                                id: uuid(),
                                name: name
                            }));
                            setName('');
                        }}>
                        <b>Add</b>
                    </Button>
                </InputGroup>

            </div>

        </>
    );
};

export default TodoInput;
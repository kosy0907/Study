import { React, useState } from 'react';
import { BsPencilFill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';
import { Form, Row, Col, FormControl } from 'react-bootstrap';

function TodoItem({ todo }) {
    const [update, setUpdate] = useState(false);
    const [name, setName] = useState(todo.name);
    const dispatch = useDispatch();
    return (
        <>
            <Row>
                <Col><Form.Check aria-label="option 1" /></Col>
                <Col xs={5}>
                    {update ? <FormControl /> : <h4>{todo.name}</h4>}
                </Col>
                <Col>
                    <div className='row-btn'>
                        <button className='deleteBtn' onClick={() => dispatch(deleteTodo(todo.id))}><FaTrash /></button>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default TodoItem;
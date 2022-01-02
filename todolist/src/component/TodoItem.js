import { BsPencilFill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions';
import { Form, Row, Col } from 'react-bootstrap';

function TodoItem({ todo }) {
    const dispatch = useDispatch();
    return (
        <>
            <Row>
                <Col><Form.Check aria-label="option 1" /></Col>
                <Col xs={5}><h4>{todo.name}</h4></Col>
                <Col>
                    <div className='row-btn'>
                        <button className='updateBtn'><BsPencilFill /></button>
                        <button className='deleteBtn' onClick={() => dispatch(deleteTodo(todo.id))}><FaTrash /></button>
                    </div>
                </Col>
            </Row>
            <hr />
        </>
    );
};

export default TodoItem;
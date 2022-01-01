import { BsPencilFill, BsFillTrashFill } from 'react-icons/bs'

function TodoItem() {
    return (
        <>
            <div className="row">
                <div>Todo item</div>
                <div className='row-btn'>
                    <button className='updateBtn'><BsPencilFill /></button>
                    <button className='deleteBtn'><BsFillTrashFill /></button>
                </div>
            </div>
            <hr />
        </>
    );
};

export default TodoItem;
import React from 'react';
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
    const todos = useSelector(state => state);

    return (
        <div className='container'>
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} />
            })}
        </div>
    );
};

export default TodoList;
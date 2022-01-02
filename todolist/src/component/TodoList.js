import React from 'react';
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const todos = useSelector(state => state);

    return (
        <div>
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} />
            })}
        </div>
    );
};

export default TodoList;
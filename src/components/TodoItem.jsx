import React, { useContext } from 'react'
import { useState } from 'react';
import { TodoContext } from '../context/TodoProvider';
import './todo-item.css';

function TodoItem({ todo }) {
    const [toggleUpdate, setToggleUpdate] = useState(false);
    const todoContext = useContext(TodoContext);
    const [name, setName] = useState(todo.title);
    return (
        <div className="todo-item mb-2 row align-items-center justify-content-between">
            <div className="id">#{todo.id[0]}</div>
            {toggleUpdate ?
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-50 form-control" type="text" /> :
                <div className="title">{todo.title}</div>
            }
            <div className="buttons">
                <div
                    onClick={() => {
                        setToggleUpdate(!toggleUpdate);
                        if (name != '') {
                            todoContext.updateTodo({
                                id: todo.id,
                                title: name
                            });
                            // setName("");
                        }
                    }}
                    className="btn btn-primary">
                    {toggleUpdate ? "UPDATE" : "EDIT"}
                </div>
                <div
                    onClick={() => {
                        todoContext.removeTodo(todo.id);
                    }}
                    className="ml-2 btn btn-danger">DELETE</div>
            </div>
        </div>
    )
}

export default TodoItem

import React, { createContext, useState } from 'react'
import { todos } from './Todo';

export var TodoContext = createContext();

function TodoProvider(props) {
    const [todoList, setTodoList] = useState(todos);

    function addTodo(todo) {
        setTodoList(prevState=>[...prevState,todo]);
    }
    function removeTodo(id) {
        setTodoList(todoList.filter((todo)=>todo.id != id));
    }
    function updateTodo(todo) {
        var index = -1;
        var newTodos = [...todoList];
        for (let i = 0; i < newTodos.length; i++) {
            if(newTodos[i].id == todo.id){
                index = i;
                break;
            }
        }
        if(index != -1) {
            newTodos[index] = todo;
            setTodoList(newTodos);
        }
    }

    return (
        <div>
            <TodoContext.Provider
            value={
                {
                    todoList: todoList,
                    addTodo:addTodo,
                    removeTodo:removeTodo,
                    updateTodo:updateTodo,
                }
            }
            >
                {props.children}
            </TodoContext.Provider>
        </div>
    )
}

export default TodoProvider

import React from 'react'
import { TodoContext } from '../context/TodoProvider'
import TodoItem from './TodoItem'

function TodoList() {
    return (
        <div className="mt-3">
            <TodoContext.Consumer>
                {state => state.todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
            </TodoContext.Consumer>
        </div>
    )
}

export default TodoList

import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoProvider'
import { v1 } from 'uuid';
function TodoInput() {
    const [name, setName] = useState("")
    var todoContext = useContext(TodoContext);
    return (
        <div className="row">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="ex. do coding" className="col form-control" type="text" />
            <div
                onClick={() => {
                    if (name != "") {
                        todoContext.addTodo({
                            id: v1(),
                            title: name
                        })
                        setName("");
                    }
                }}
                className="ml-2 btn btn-primary">ADD</div>
        </div>
    )
}

export default TodoInput

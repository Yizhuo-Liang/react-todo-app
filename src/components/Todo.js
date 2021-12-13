import React, {useState} from 'react';
import TodoForm from './TodoForm';
import {MdOutlineDelete} from "react-icons/md";
import {MdEdit} from "react-icons/md";

function Todo({todos, completeTodo, removeTodo, editTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    const submitUpdate = value => {
        editTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    };

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? "todo-row-complete" : "todo-row"}>
            <div className="hiden-clicker" unselectable="on" key={index} onClick={() => completeTodo(todo.id)}>
                <MdEdit /* just a place holder for the hiden clicker: ) */ />
            </div>
            <div className="todo-text">
                {todo.text}
            </div>
            <MdEdit 
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className="edit-icon"
            />
            <MdOutlineDelete
                onClick={() => removeTodo(todo.id)}
                className="delete-icon"
            />
        </div>
    ))
}

export default Todo

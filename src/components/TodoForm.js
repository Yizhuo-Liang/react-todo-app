import React, {useState, useEffect, useRef} from 'react';
import {MdAddCircleOutline} from "react-icons/md"

function TodoForm(props) {

    const [input, setInput] = useState('');

    // useEffect and useRef hooks do the autofocus
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Date.now(), // make sure the IDs are unique
            text: input
        });

        setInput(''); // clear the input box after this todo is handled
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text" 
                placeholder="what to do..." 
                value = {input}
                name="text" 
                className="todo-input"
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="todo-button"> <MdAddCircleOutline /> </button>
        </form> 
    )
}

export default TodoForm

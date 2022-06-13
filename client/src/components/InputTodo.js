import React, { useState } from 'react';
import ListTodo from './ListTodo';

const InputTodo = () => {

    const [description, setDescription] = useState('')

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch("http://localhost:5000/todos",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                })
            console.log(response);
            window.location = "/";
        } catch (e) {
            console.error(e.message);
        }
    }

    return (
        <div>
            <center>
                <h2 className="text-center mt-5">Todo List</h2>
                <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                    <input type="text" required className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                    <button className="btn btn-outline-dark">+</button>
                </form>
                <ListTodo />
            </center>
        </div>
    );
}

export default InputTodo;
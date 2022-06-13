import React, { useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodo = () => {

    const [todos, setTodos] = useState([])

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "delete"
            })

            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (e) {
            console.error(e.message)
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setTodos(jsonData)
        } catch (e) {
            console.error(e.message)
        }
    }
    useEffect(() => {
        getTodos()
    }, [])

    return (
        <center>
            <div className="main-table">
                <table className="table text-center">
                    <thead>
                        {todos.map(todo => (
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td><EditTodo todo={todo} /></td>
                                <td><button className="btn btn-danger" id="danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                            </tr>
                        ))}
                    </thead>
                </table>
            </div>
        </center>
    );
}

export default ListTodo;
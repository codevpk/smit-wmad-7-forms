import React, { useState } from 'react'

const initialState = { title: "", description: "" }
const getRandomId = () => Math.random().toString(36).slice(2)

export default function Todos() {

    const [state, setState] = useState(initialState)
    const [todos, setTodos] = useState([])
    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = () => {
        let { title, description } = state

        const todo = {
            title, description,
            id: getRandomId(),
            status: "incompleted",
            user_id: ""
        }

        setTodos(todos => [...todos, todo])
    }

    return (
        <div id='todos' className='py-5'>
            <div className="container">
                <div className="card p-3 p-md-4 mx-auto border-0 add-todo-card" style={{ maxWidth: 500 }}>
                    <h1 className='text-center mb-4'>Add Todo</h1>

                    <div className="row">
                        <div className="col-12 mb-3">
                            <input type="text" className='form-control' placeholder='Enter title' name='title' onChange={handleChange} />
                        </div>
                        <div className="col-12 mb-3">
                            <textarea className='form-control' placeholder='Enter description' name='description' onChange={handleChange} />
                        </div>
                        <div className="col-12 col-md-6 offset-md-3">
                            <button className='btn btn-primary w-100' onClick={handleSubmit}>Add Todo</button>
                        </div>
                    </div>
                </div>

                <div className="card p-3 p-md-4 border-0 mt-3">
                    <h1 className='text-center mb-4'>Todos</h1>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, i) => {
                                const { id, title, description, status } = todo
                                return <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td>{description}</td>
                                    <td className='text-capitalize'>{status}</td>
                                    <td>
                                        <button className='btn btn-sm btn-info me-1'>Edit</button>
                                        <button className='btn btn-sm btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

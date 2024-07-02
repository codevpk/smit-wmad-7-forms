import React, { useState } from 'react'

const initialState = { email: "", password: "" }

export default function Login() {

    const [state, setState] = useState(initialState)
    // const handleChangeOld = (e) => {
    //     const { name, value } = e.target
    //     setState((previosState) => { return { ...previosState, [name]: value } })
    //     setState(s => ({ ...s, [name]: value }))
    // }
    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleLogin = () => {
        let { email, password } = state
        console.log("email", email)
        console.log("password", password)

        let formData = { email, password }

        console.log("formData", formData)
    }

    return (
        <main className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className='text-primary'>Login</h1>
                        <h2>Email:{state.email}</h2>
                        <h2>Password:{state.password}</h2>

                        <input type="email" placeholder='Enter email' className='form-control' name='email' onChange={handleChange} />
                        <input type="password" placeholder='Enter password' className='form-control my-3' name='password' onChange={handleChange} />

                        <button className='btn btn-primary btn' onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

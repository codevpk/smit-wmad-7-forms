import React from 'react'

export default function About() {

    const handleSubmit = () => {
        console.log("This is a handle submit function")
    }

    const handleSum = (x, y) => {
        console.log("sum", x + y)
    }
    const handleSumFromUser = () => {
        const x = +prompt("Enter number 1")
        const y = +prompt("Enter number 2")
        console.log("sum", x + y)
    }

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className='text-primary'>About Page</h1>

                        <button className='btn btn-primary' onClick={handleSubmit}>Click Me</button>
                        <button className='btn btn-primary' onClick={() => { handleSum(5, 15) }}>Sum 2 numbers</button>
                        <button className='btn btn-primary' onClick={() => { handleSumFromUser(5, 15) }}>Sum 2 numbers from user</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

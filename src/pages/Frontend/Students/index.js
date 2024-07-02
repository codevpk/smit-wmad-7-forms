import React from 'react'

export default function Students() {

    const students = [
        { name: "Ahmad", rollNumber: "1", city: "Faisalabad" },
        { name: "Bilal", rollNumber: "2", city: "Faisalabad" },
        { name: "Usama", rollNumber: "3", city: "Faisalabad" },
        { name: "Zubair", rollNumber: "4", city: "Lahore" },
    ]

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className='text-primary'>Students</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Roll Number</th>
                                    <th scope="col">City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, i) => {
                                    const { name, rollNumber, city } = student
                                    return <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{name}</td>
                                        <td>{rollNumber}</td>
                                        <td>{city}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

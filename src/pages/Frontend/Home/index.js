import React from 'react'
import Button from '../../../components/Button'

export default function Home() {
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-primary' style={{ textAlign: "center" }}>Home Page</h1>
                        <div >
                            <Button type="primary" size="lg" />
                            <Button type="secondary" size="sm" text="My button" />
                            <Button type="success" />
                            <Button type="danger" />
                            <Button type="info" />
                            <Button type="warning" />
                            <Button />
                            <Button type="dark" />
                            <Button type="light" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

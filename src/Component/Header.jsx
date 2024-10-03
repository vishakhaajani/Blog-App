import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand text-light" href="#">Blog App</a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to={'/new'}>New Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    )
}

export default Header

import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Component/Header';

const Edit = () => {

    const navigator = useNavigate();
    const location = useLocation();
    const { record } = location.state || {};

    const [title, setTitle] = useState(record.title);
    const [description, setDescription] = useState(record.description);
    const [thumbnail, setThumbnail] = useState(record.thumbnail);

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
            id: Math.floor(Math.random() * 1000),
            title,
            description, 
            thumbnail
        };

        const all = JSON.parse(localStorage.getItem('user')) || []; 
        const newRecords = all.map(r => (r.id === record.id ? obj : r));
        localStorage.setItem('user', JSON.stringify(newRecords));
        alert("Blog update sucessfully!");

        setTitle('');
        setDescription('');
        setThumbnail(null);
        navigator('/')
    };

    return (
        <div>
            <Header/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-5 mx-auto">
                        <form className='p-5 bg-dark text-light' onSubmit={handleSubmit}>
                            <h3 className='text-center mb-4'>Edit Blog</h3>
                            <div className="mb-3">
                                <label className="form-label">Title:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Description:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Input File:</label>
                                <input
                                    type="file"
                                    className='d-block'
                                    onChange={(e) => setThumbnail(URL.createObjectURL(e.target.files[0]))}
                                />
                            </div>
                            <div className="button d-flex justify-content-center mt-5">
                                <button type="submit" className="btn w-100 bodyColor bg-light text-dark">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit

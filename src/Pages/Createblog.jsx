import React, { useState } from 'react';
import Header from '../Component/Header';
import { json, useNavigate } from 'react-router-dom';

const Createblog = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState(null);

    let data = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')): [];
    const [record, setRecord] = useState(data);

    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !description){
            alert("Must Fill title and description!");
            return false;
        }

        const obj = {
            id: Math.floor(Math.random()*1000),
            title ,
            description ,
            thumbnail 
        };

        const all = [...record,obj];
        localStorage.setItem('user', JSON.stringify(all))
        setRecord(all);

        alert("Blog add sucessfully!");
        setTitle('');
        setDescription('');
        setThumbnail(null);
        navigator('/')
    };

    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-5 mx-auto mt-5">
                        <form className='p-5 bg-dark text-light' onSubmit={handleSubmit}>
                            <h3 className='text-center mb-4'>Add New Blog</h3>
                            <div className="mb-3">
                                <label className="form-label">Title:</label>
                                <input type="text" className="form-control" value={title || ""}
                                    onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Description:</label>
                                <input type="text" className="form-control" value={description || ""}
                                    onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Input File:</label>
                                <input type="file" className='d-block'
                                    onChange={(e) => setThumbnail(URL.createObjectURL(e.target.files[0]))} />
                            </div>
                            <div className="button d-flex justify-content-center mt-5">
                                <button type="submit" className="btn  w-100 bodyColor bg-light text-dark">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Createblog;

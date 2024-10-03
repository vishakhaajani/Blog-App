import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const Home = () => {
    const [allrecord, setAllRecord] = useState(() => JSON.parse(localStorage.getItem('user')) || []);
    const navigator = useNavigate();

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(allrecord));
    }, [allrecord]);

    const getData = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredRecords = JSON.parse(localStorage.getItem('user')) || [];
        setAllRecord(filteredRecords.filter(val => val.title.toLowerCase().includes(searchValue)));
    };

    const editRecord = (record) => {
        navigator('/edit', { state: { record } });
    };

    const deleteRecord = (id) => {
        setAllRecord((prevRecords) => {
            const updatedRecords = prevRecords.filter(val => val.id !== id);
            return updatedRecords;
        });
        alert("Blog deleted sucessfully!");
    };

    return (
        <div>
            <Header />
            <form align="center" className='mt-5'>
                <input 
                    type="text" 
                    placeholder='Search here...' 
                    className='w-25 py-2 px-3 rounded-pill border border-dark' 
                    onInput={getData} 
                />
            </form>
            <div className="container">
                <div className="row">
                    {allrecord.length > 0 ? (
                        allrecord.map((i, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mt-5" key={index}>
                                <div className="card h-100">
                                    {i.thumbnail ? (
                                        <img src={i.thumbnail} className="card-img-top" alt={i.title} />
                                    ) : (
                                        <div className="card-img-top bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                                            No Image Available
                                        </div>
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title">{i.title}</h5>
                                        <p className="card-text">{i.description}</p>
                                        <div className='d-flex justify-content-center'>
                                            <button className="btn btn-task btn-dark me-2" onClick={() => editRecord(i)}><FaRegEdit /></button>
                                            <button className="btn btn-task btn-dark " onClick={() => deleteRecord(i.id)}><RiDeleteBinLine /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center mt-5">
                            <p>No records found. Please add some records.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;

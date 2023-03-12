import React, { useState } from 'react';
import contextShop from '../../Context/context'
import { NavLink } from 'react-router-dom';
import './style.scss'


const index = () => {
    const [searchItem, setSearchItem] = useState('');
    const { value: {data, basket }, dispatch } = contextShop()
    const allCategories = []
    data.filter(e => {
        return allCategories.includes(e.category) ? '' : allCategories.push(e.category)
    })


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky top-0 " style={{ zIndex: '100000' }}>
            <div className="container-fluid px-5 ">
                <div className='d-flex justify-content-between w-100'>
                    <div className="d-flex align-items-center" id="navbarSupportedContent">
                        <h1 className="navbar-brand m-0 mt-lg-0 fs-2" style={{ fontFamily: "fantasy", color: 'rgb(7, 121, 21)' }}>
                            VEGGY vs FRUITY
                        </h1>
                    </div>

                    <form className='my-2 my-0 d-none d-sm-flex col-md-7 justify-content-end'>
                            <select className='form-select mx-2 py-2 d-md-none d-lg-block' id="productSelect" onChange={(e) => dispatch({ type: "CATEGORY", payload: e.target.value })}>
                                <option defaultValue='all' disabled selected>Select Category</option>
                                <option value='all'>All</option>
                                {
                                    allCategories.map(el => {
                                        return <option key={el} value={el}>{el[0].toUpperCase() + el.slice(1).toLowerCase()}</option>
                                    })
                                }
                            </select>
                        <div className="btn-group w-100">
                            <input style={{ borderColor: 'rgb(7, 121, 21)' }}
                                type="text"
                                className="form-control"
                                value={searchItem}
                                onChange={(e) => { setSearchItem(e.target.value), dispatch({ type: 'SEARCH', payload: e.target.value }) }}
                                placeholder="Search for Vegetables or Fruits"
                            />
                            <button className="btn btn-success"><i className="bi bi-search"></i></button>
                        </div>
                    </form>
                    <div className="d-flex align-items-center ">
                        <NavLink className="text-reset " to="/basket">
                            <i className="bi bi-bag-check-fill fs-3" style={{ color: 'rgb(7, 121, 21)' }}></i>
                            {basket.length > 0 ? <span className="badge rounded-pill badge-notification bg-success">{basket.length}</span> : ''}
                        </NavLink>
                    </div>
                </div>
                <form className='my-2 my-0 d-flex d-sm-none col-md-12 justify-content-center form-sm'>
                    <div className="btn-group">
                        <input style={{ borderColor: 'rgb(7, 121, 21)' }}
                            type="text"
                            className="form-control"
                            value={searchItem}
                            onChange={(e) => { setSearchItem(e.target.value), dispatch({ type: 'SEARCH', payload: e.target.value }) }}
                            placeholder="Search for Vegetables or Fruits"
                        />
                        <button className="btn btn-success"><i className="bi bi-search"></i></button>
                    </div>
                </form>

            </div>
        </nav>

    );
};

export default index;
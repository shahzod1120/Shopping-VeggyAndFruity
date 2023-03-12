import React from 'react';
import { useNavigate } from 'react-router-dom';
import contextShop from '../../Context/context';
import './style.scss'

const index = () => {
    const navigate = useNavigate()
    const { value: { basket, total, INCRQuantity, DECRQuantity, RemoveFromBasket } } = contextShop()

    return (
        basket.length > 0
            ?
            <div className='pt-4 container '>
                <div className='basket' >
                <button className='btn btn-success mb-2' onClick={() => navigate('/')}><i className="bi bi-arrow-left me-2"></i>  Home</button>
                    <table className="table table-hovered bg-white table-striped shadow text-center table-responsive m-0">
                        <thead style={{ backgroundColor: '#077915' }}>
                            <tr className='text-white'>
                                <th className='col-md-5' style={{ textAlign: 'left' }}>PRODUCT DETAILS</th>
                                <th className='col-md-2'>QUANTITY</th>
                                <th>PRICE</th>
                                <th>TOTAL</th>
                                <th>REMOVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                basket.map(item => {
                                    const { id, image, name, price, quantity } = item;
                                    return (
                                        <tr key={id} >
                                            <td className='col-md-5 p-0'>
                                                <div className="d-flex gap-3">
                                                    <img src={image} alt={name} style={{ width: '100px', height: '100px' }} />
                                                    <h6 disabled='true' className='pt-3 disabled'>{name}</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center justify-content-center">
                                                    <button disabled={quantity > 1 ? false : true} className="bi bi-dash fs-2 d-flex rounded-circle bg-transparent"
                                                        style={
                                                            quantity > 1
                                                                ? { cursor: 'pointer', border: '1px solid #077915', color: '#077915' }
                                                                : { cursor: 'pointer', border: '1px solid red', color: 'red', opacity: '0.3' }
                                                        }
                                                        onClick={() => { DECRQuantity(item) }}
                                                    >
                                                    </button>
                                                    <span className='
                                              d-flex 
                                             justify-content-center 
                                             align-items-center 
                                             p-2 '
                                                        style={{ minWidth: '35px', height: '35px', border: '1px solid #077915', color: '#077915', borderRadius: '8px' }}
                                                    >
                                                        {quantity}
                                                    </span>
                                                    <button type="button" className="bi bi-plus fs-2 d-flex rounded-circle bg-transparent"
                                                        style={{ cursor: 'pointer', border: '1px solid #077915', color: '#077915' }}
                                                        onClick={() => { INCRQuantity(item) }}
                                                    >
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <h6 className='py-2 fw-bold'>${price}</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <h6 className='py-2 fw-bold'>${(price * quantity)}</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="removeBasket">
                                                    <button className="fas fa-trash-alt text-danger fs-6 py-2 border-0 bg-transparent" onClick={() => RemoveFromBasket(item)}></button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>

                <div className='position-sticky bottom-0 text-white p-2' style={{background:'rgb(7, 121, 21)'}}>
                    {
                        total !== 0 ?
                            <h1>
                                Sub Total: ${total}
                            </h1> :
                            <h1>Sub Total: $0.000</h1>
                    }
                </div>
            </div>
            :
            <div className='container'>
                <h1 className='py-3'>Shopping card empty</h1>
                <button className='btn btn-success' onClick={() => navigate('/')}><i className="bi bi-arrow-left me-2"></i>  Your card is empty Go Back</button>
            </div>

    );
};

export default index;
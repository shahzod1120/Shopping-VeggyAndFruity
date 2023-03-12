import React, { useEffect, useState } from 'react';
import contextShop from '../../Context/context'
import './style.scss'

const index = (props) => {
    const { id, image, name, price } = props;
    const [isInBasket, setIsInBasket] = useState(false)
    const { value: { basket, AddToBasket, RemoveFromBasket } } = contextShop()

    useEffect(() => {
        const checkBasketItem = basket?.find((item) => item.id === id)
        if (checkBasketItem) {
            setIsInBasket(true)
        }
        else {
            setIsInBasket(false)
        }
    }, [basket, id])

    const handleClick = () => {
        const product = { id, image, name, price }
        if (isInBasket) {
            RemoveFromBasket(product)
        }
        else {
            AddToBasket(product)
        }
    }

    return (
        <div className='card shadow'>
            <img src={image} alt="" className="card-top-img" style={{ height: '250px' }} />
            <div className="card-body h-25 ">
                <h3 className="card-name fs-5 flex-grow-1 font-weight-bold">{name}</h3>
                <div className='d-flex justify-content-between'>
                    <p className='card-text'>Price: ${price}</p>
                    {/* <p>Rating: ${rating}</p> */}
                </div>
            </div>
            <div className="card-footer">
                <button onClick={() => handleClick()}
                    className="btn btn-primary d-flex align-items-center gap-2 w-100 justify-content-center"
                    style={isInBasket ? { backgroundColor: "red" } : { backgroundColor: "rgb(7, 121, 21)" }}>
                    {isInBasket ?
                        <>
                            <i className="bi bi-cart-dash fs-5"></i>
                            <span>Remove from cart</span>
                        </> :
                        <>
                            <i className="bi bi-cart-plus fs-5"></i>
                            <span>Add to cart</span>
                        </>
                    }
                </button>
            </div>
        </div>
    );
};

export default index;
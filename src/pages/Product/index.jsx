import React from 'react';
import contextShop from '../../Context/context'
import { useParams } from 'react-router-dom';


const index = () => {
    const { id } = useParams() 
    const {value:{data}} = contextShop()

    const productId = data.filter(e => {
        return e.id == id
    })
    console.log(productId);

    return (
        <div className='container'>
            <h1 className='text-center'>Product</h1>
            {
                productId.length>0 ? productId.map(elem=>{
                    return(
                        <CardProduct key={elem.id} {...elem} />
                    )
                })
                : "Not Found"
            }
        </div>
    );
};

export default index;
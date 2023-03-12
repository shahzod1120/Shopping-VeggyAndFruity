import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Basket from '../pages/Basket';
import Product from '../pages/Product';
import Loader from '../components/Loader';
import contextShop from '../Context/context'

function Layout() {

    const { value: { data } }= contextShop();

    return (
        <>
            {
                data.length > 0 ?
                   <div style={{backgroundColor: '#a9ebab', minHeight: '100vh'}} className="m-0">
                     <main>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path='/:id' element={<Product />} />
                            <Route path='/basket' element={<Basket />} />
                        </Routes>
                    </main>
                   </div>
                    :
                    <Loader />

            }
        </>

    )
}

export default Layout;

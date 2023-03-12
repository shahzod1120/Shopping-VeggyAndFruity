import React from 'react';
import contextShop from '../../Context/context';
import CardProduct from '../../UI/CardProduct';
import './style.scss';

const index = () => {
    const { value: { data, search, category }, dispatch } = contextShop()

    const allCategories = []
    data.filter(e => {
        return allCategories.includes(e.category) ? '' : allCategories.push(e.category)
    })

    const newFilterData = data.filter(e => {
        return e.name.toLowerCase().includes(search.toLowerCase())
    })

    const filterCategory = newFilterData.filter(e => {
        return category === 'all' ? e : e.category.toLowerCase() === category.toLowerCase()
    })
    localStorage.setItem('category', category)
    console.log(category);
    return (
        <>
            <div className='py-2'>

                <select className='form-select py-2 d-lg-none ' id="productSelect" onChange={(e) => dispatch({ type: "CATEGORY", payload: e.target.value })}>
                    <option defaultValue='all' disabled selected>Select Category</option>
                    <option value='all'>All</option>
                    {
                        allCategories.map(el => {
                            return <option key={el} value={el}>{el[0].toUpperCase() + el.slice(1).toLowerCase()}</option>
                        })
                    }
                </select>

                <div className='shopCards'>
                    {
                        filterCategory.length > 0 ? filterCategory.map(item => {
                            return (
                                <CardProduct key={item.id} {...item} />
                            )
                        }) :
                            <h1>Not Found</h1>
                    }
                </div>
            </div>
        </>
    );
};

export default index;
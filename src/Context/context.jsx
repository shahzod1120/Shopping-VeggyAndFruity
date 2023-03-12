import React, { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "./reducer";

const ShopContext = createContext(initialState)

export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const AddToBasket = (product) => {
        let quantity = 0;
        let newProduct = { ...product, quantity: quantity + 1 }
        let addProduct = state.basket.concat(newProduct)

        UpdatePrice(addProduct)
        return dispatch({
            type: "ADD_TO_BASKET",
            payload: {
                basket: addProduct
            }
        })
    }
    const RemoveFromBasket = (product) => {
        const removeProduct = state.basket.filter(elem => {
            return elem.id !== product.id
        })
        UpdatePrice(removeProduct)

        return dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: {
                basket: removeProduct
            }
        })
    }
    const INCRQuantity = (product) => {
        let INCRQuantity = state.basket.filter(e => {
            return e.id === product.id ? e.quantity += 1 : e
        })
        UpdatePrice(INCRQuantity)
    }
    const DECRQuantity = (product) => {
        let DECRQuantity = state.basket.filter(e => {
            return e.id === product.id ? e.quantity -= 1 : e
        })
        UpdatePrice(DECRQuantity)
    }
    const UpdatePrice = (product) => {
        let total = 0;
        product.forEach(item => {
            total += (item.price * item.quantity)
        })
        dispatch({
            type: "UPDATE_PRICE",
            payload: {
                total: total,
            }
        })
    }

    const value = {
        data: state.data,
        basket: state.basket,
        total: state.total,
        loader: state.loader,
        search: state.search,
        category:state.category,
        AddToBasket,
        RemoveFromBasket,
        INCRQuantity,
        DECRQuantity
    }
    return <ShopContext.Provider value={{ value, dispatch }}>
        {children}
    </ShopContext.Provider>
}

const contextShop = () => {
    const context = useContext(ShopContext)

    if (context === undefined) {
        console.log('no')
    }
    return context
}
export default contextShop;





export const initialState = {
    data: [],
    loader: true,
    basket: [],
    tatal: 0,
    search: '',
    category: `${localStorage.getItem('category') || 'all'}`,
}
const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "DATA":
            return {
                ...state,
                data: payload
            };
        case "LOADER":
            return {
                ...state,
                loader: false
            };
        case "SEARCH" : 
        return{
            ...state,
            search: payload
        }
        case "CATEGORY" :
        return{
            ...state,
            category:payload,
        }
        case "ADD_TO_BASKET":
            console.log("ADD_TO_BASKET", payload)
            return {
                ...state,
                basket: payload.basket
            };
        case "REMOVE_FROM_BASKET":
            console.log('REMOVE_FROM_BASKET', payload)
            return {
                ...state,
                basket: payload.basket
            }
        case "UPDATE_PRICE":
            return {
                ...state,
                total: payload.total
            }
        default: return state
    }
}
export default reducer;
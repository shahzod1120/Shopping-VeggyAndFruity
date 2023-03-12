import axios from 'axios';

const baseUrl = "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"

export const API = {
    getProducts: () => {
        return (axios.get(`${baseUrl}`))
    },
}
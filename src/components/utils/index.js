import axios from "axios"
const baseUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
    baseURL: baseUrl
})
import axios from "axios"

const instance = axios.create({
    //baseURL: "http://localhost:3001/api",
    baseURL: "https://app-qr-api.vercel.app/",
    withCredentials: true
})

export default instance
import axios from "axios"

const instance = axios.create({
    baseURL: "/api",
    //baseURL: "https://app-qr-api.vercel.app/",
    withCredentials: true
})

export default instance

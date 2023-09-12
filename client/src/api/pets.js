import axios from "./axios.js"

export const getPetsRequest = () => 
    axios.get('/pets')
    
export const getPetRequest = (id) => 
    axios.get(`/pets/${id}`)

export const createPetRequest = (pet) => 
    axios.post('/pets', pet)


export const updatePetRequest = (pet) => 
    axios.put(`/pets/${pet._id}`, pet)

export const deletePetRequest = (id) => 
    axios.delete(`/pets/${id}`)

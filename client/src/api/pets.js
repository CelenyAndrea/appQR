import axios from "./axios.js"

export const getPetsRequest = () => 
    axios.get('/pets')
    

export const getPetRequest = (id) => 
    axios.get(`/pets/${id}`)


export const createPetRequest = async (pet) => {
    
    const formData = new FormData();

    for(let key in pet) {
        formData.append(key, pet[key])
    }
    
    return await axios.post('/pets', formData, {
        headers: {
            'Content-Type': 'multipart/formData-data'
        }
    })
}    


export const updatePetRequest = async (id, pet) => {
    
    const formData = new FormData();

    for (let key in pet) {
        formData.append(key, pet[key]);
    }
    
    return await axios.put(`/pets/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/formData-data'
        }
    })
}   


export const deletePetRequest = (id) => 
    axios.delete(`/pets/${id}`)

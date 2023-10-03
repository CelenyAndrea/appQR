import { createContext, useContext, useState } from "react";
import { 
    createPetRequest, 
    getPetsRequest, 
    deletePetRequest, 
    getPetRequest, 
    updatePetRequest } from "../api/pets"

const PetContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const usePets = () => {
    const context = useContext(PetContext);
    if (!context){
        throw new Error('usePets must be used within a PetProvider')
    }
    return context;
}

// eslint-disable-next-line react/prop-types
export function PetProvider({ children }) { 
    const [pets, setPets] = useState({
        name: "",
        gender:"",
        image: "",
        description: "",
        city: "",
        barrio: "",
        address: "",
        contact1: "",
        phone1: "",
        contact2: "", 
        phone2: "",
        contact3: "", 
        phone3: "",
        user: ""
    })

    const createPets = async (pet) => {
        try {
            const res = await createPetRequest(pet)
            console.log('createPets', res.data);
            setPets([...pets, res.data])
        } catch (error) {
            console.log(error);
        }
    }

    const getPets = async () => {
        try {
            const res = await getPetsRequest()
            setPets(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deletePet = async (_id) => {
        try {
            const res = await deletePetRequest(_id)
            console.log('deletePet', res);
            if(res.status === 204) 
            setPets(pets.filter(pet => pet._id != pet._id))
        } catch (error) {
            console.log(error);
        }
    }

    const getPet = async (id) => {
        try {
            const res = await getPetRequest(id)
            console.log('pet', res.data);
            return res.data
        } catch (error) {
            console.log(error);
        }
    }

    const updatePet = async (id, pet) => {
        try {
            const res = await updatePetRequest(id, pet)
            console.log('updatePets', res.data);
            setPets(pets.map(pet => pet._id === id ? res.data : pet))
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     getPets()
    // }, [])

    return (
        <PetContext.Provider value={{
            pets,
            setPets,
            createPets,
            getPets,
            deletePet,
            getPet,
            updatePet
        }}>
            {children}
        </PetContext.Provider>
    )
}
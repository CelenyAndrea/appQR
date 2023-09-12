import { createContext, useContext, useState } from "react";
import { createPetRequest, getPetsRequest } from "../api/pets"

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
        contacts: [{contact:"", phone: 0}],
        user: ""
    })

    const createPets = async (pet) => {
        try {
            const res = await createPetRequest(pet)
            console.log(res.data);
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

    return (
        <PetContext.Provider value={{
            pets,
            createPets,
            getPets
        }}>
            {children}
        </PetContext.Provider>
    )
}
import Pet from "../models/pet.model.js"

export const getPets = async (req, res) => {
    try {
        const pets = await Pet.find({
            user: req.user.id
        }).populate("user") //muestra todos los datos del usuario ademas del id
        res.json(pets)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createPets = async (req, res) => {
    try {
        const {name, gender, image, description, city, barrio, address, contacts, phones} = req.body
        console.log("usuario", req.user);

        const newPet = new Pet({
            name, 
            gender, 
            image, 
            description, 
            city, 
            barrio, 
            address, 
            contacts, 
            phones,
            user: req.user.id
        })
        const savePet = await newPet.save()
        res.json(savePet)
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getPet = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id).populate("user")
        if (!pet) 
            return res.status(404).json({ message: "Pet not found" });
        res.json(pet)
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updatePets = async (req, res) => {
    try {
        const {name, gender, image, description, city, barrio, address, contacts, phones} = req.body
        
        const updatePet = await Pet.findByIdAndUpdate(
            { _id: req.params.id },
            { name, 
            gender, 
            image, 
            description, 
            city, 
            barrio, 
            address, 
            contacts, 
            phones },
            { new: true }
        )
        return res.json(updatePet)

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deletePets = async (req, res) => {
    try {
        const deletedPet = await Pet.findByIdAndDelete(req.params.id);
        if (!deletedPet)
            return res.status(404).json({ message: "Pet not found" });
        return res.sendStatus(204);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
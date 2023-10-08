import Pet from "../models/pet.model.js"
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra"

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
        const {name, gender, description, city, barrio, address, contact1, phone1, contact2, phone2, contact3, phone3} = req.body
        console.log("usuario", req.user);

        const newPet = new Pet({
            name, 
            gender, 
            description, 
            city, 
            barrio, 
            address, 
            contact1, 
            phone1, 
            contact2, 
            phone2, 
            contact3, 
            phone3,
            user: req.user.id
        })

        if(req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            newPet.image = {
                public_id: result.public_id,
                url: result.secure_url,
            }
            await fs.remove(req.files.image.tempFilePath)
        }

        const savePet = await newPet.save()
        return res.json(savePet)
        
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
        return res.status(500).json({ message: "Not found" });
    }
};

export const updatePets = async (req, res) => {
    try {
        const {name, gender, description, city, barrio, address, contact1, phone1, contact2, phone2, contact3, phone3 } = req.body

        if(req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            req.body.image = {
                public_id: result.public_id,
                url: result.secure_url,
            }
            await fs.remove(req.files.image.tempFilePath)
        }
        
        const updatePet = await Pet.findByIdAndUpdate(
            { _id: req.params.id },
            { name, 
            gender, 
            image: req.body.image, 
            description, 
            city, 
            barrio, 
            address, 
            contact1, 
            phone1, 
            contact2, 
            phone2, 
            contact3, 
            phone3 },
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
        if (!deletedPet) {
            return res.status(404).json({ message: "Pet not found" })
        }    
        
        if(deletedPet.image?.public_id) {
            await deleteImage(deletedPet.image.public_id)
        }

        return res.sendStatus(204);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const optionsPets = (req, res) => {
    const ACCEPTED_ORIGINS = ['http://localhost:5173', 'https://app-qr-sigma.vercel.app/']
    const origin = req.header('origin')

    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        res.header('Access-Control-Allow-Origin', origin)
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
        res.header('Access-Control-Request-Headers', '*')
    }
    res.send(200)
}

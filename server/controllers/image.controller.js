import Image from "../models/image.model.js"
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra"

export const getImages = async (req, res) => {
    try {
        const images = await Image.find({
            //user: req.user.id
        }).populate("user") //muestra todos los datos del usuario ademas del id
            //console.log("usuario", req.user);
        res.json(images)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createImages = async (req, res) => {
    try {
        const { name } = req.body
        console.log("usuario", req.user);

        const newImage = new Image({
            name, 
            //user: req.user.id
        })

        if(req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            newImage.image = {
                public_id: result.public_id,
                url: result.secure_url,
            }
            await fs.remove(req.files.image.tempFilePath)
        }

        const saveImage = await newImage.save()
        return res.json(saveImage)
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getImage = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id).populate("user")
        if (!image) 
            return res.status(404).json({ message: "Image not found" });
        res.json(image)
        
    } catch (error) {
        return res.status(500).json({ message: "Not found" });
    }
};

export const updateImages = async (req, res) => {
    try {
        const { id } = req.params

        if(req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            req.body.image = {
                public_id: result.public_id,
                url: result.secure_url,
            }
            await fs.remove(req.files.image.tempFilePath)
        }
        
        const updateImage = await Image.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        )
        return res.json(updateImage)

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteImages = async (req, res) => {
    try {
        const deletedImage = await Image.findByIdAndDelete(req.params.id);
        if (!deletedImage) {
            return res.status(404).json({ message: "Image not found" })
        }    
        
        if(deletedImage.image?.public_id) {
            await deleteImage(deletedImage.image.public_id)
        }
        return res.sendStatus(204);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

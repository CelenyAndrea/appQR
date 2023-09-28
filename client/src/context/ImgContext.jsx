import { useState, createContext, useContext, useEffect } from "react"
import { getImagesRequest, createImageRequest } from "../api/images.js"

const ImgContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useImg = () => {
    const context = useContext(ImgContext);
    if (!context){
        throw new Error('useImages must be used within a ImgProvider')
    }
    return context;
}

// eslint-disable-next-line react/prop-types
export const ImgProvider = ({children}) => {

    const [images, setImages] = useState([])

    const createImage = async (image) => {
        try {
            const res = await createImageRequest(image)
            console.log('createPets', res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getImages = async () => {
        try {
            const res = await getImagesRequest()
            setImages(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getImages();
    }, [])

    return (
        <ImgContext.Provider value={{
            images,
            setImages,
            getImages,
            createImage
        }}>
            {children}
        </ImgContext.Provider>
    )
}
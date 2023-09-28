import axios from "axios";

export const getImagesRequest = () => 
    axios.get('http://localhost:3001/api/images')

export const getImageRequest = async (id) => 
    await axios.get("/images/" + id);

export const deleteImageRequest = async (id) =>
    await axios.delete("/images/" + id);

export const createImageRequest = async (image) => {
    const form = new FormData();
    for (let key in image) {
        form.append(key, image[key]);
    }
    return await axios.post('http://localhost:3001/api/images', form, {
        headers: {
        "Content-Type": "multipart/form-data",
        },
    });
};

export const updatePostRequest = async (id, newImageFields) => {
    const form = new FormData();
    for (let key in newImageFields) {
        form.append(key, newImageFields[key]);
    }
    return axios.put("/images/" + id, form, {
        headers: {
        "Content-Type": "multipart/form-data",
        },
    });
};
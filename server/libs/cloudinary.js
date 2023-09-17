import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dvpvzjoql', 
  api_key: '847663122643227', 
  api_secret: 'c7C5WMOpe6sU1XSztt4qR7punp0' 
});

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Pets'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}

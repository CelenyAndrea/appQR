import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createImages, deleteImages, getImage, getImages, updateImages } from "../controllers/image.controller.js";


const router = Router()

router.get('/images/:id', getImage)
router.get('/images', getImages)
router.post('/images', createImages)
router.put('/images/:id',authRequired, updateImages)
router.delete('/images/:id',authRequired, deleteImages)

export default router

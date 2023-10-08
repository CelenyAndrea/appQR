import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { 
    createPets, 
    deletePets, 
    getPet, 
    getPets, 
    updatePets, 
    optionsPets 
} from "../controllers/pet.controller.js";
//import { createPetSchema } from "../validatorSchemas/pet.schema.js";
//import { validateSchema } from "../middlewares/validateSchemas.js";


const router = Router()

router.get('/pets/:id', getPet)
router.get('/pets',authRequired, getPets)
router.post('/pets',authRequired, createPets)
//validateSchema(createPetSchema),
router.put('/pets/:id',authRequired, updatePets)
router.delete('/pets/:id',authRequired, deletePets)
router.options('/pets/:id',authRequired, optionsPets)

export default router

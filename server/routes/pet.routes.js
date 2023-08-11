import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createPets, deletePets, getPet, getPets, updatePets } from "../controllers/pet.controller.js";
import { createPetSchema } from "../validatorSchemas/pet.schema.js";
import { validateSchema } from "../middlewares/validateSchemas.js";


const router = Router()

router.get('/pets',authRequired, getPets)
router.get('/pets/:id',authRequired, getPet)
router.post('/pets',authRequired, validateSchema(createPetSchema), createPets)
router.put('/pets/:id',authRequired, updatePets)
router.delete('/pets/:id',authRequired, deletePets)

export default router
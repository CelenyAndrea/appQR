import {z} from "zod"

export const createPetSchema = z.object({
    name: z.string(
        {required_error: "Escribe el nombre de tu mascota"}),
    gender: z.enum(
        ["male", "female"]),
    description: z.string(
        {required_error: "Describe a tu mascota o escribe datos importantes que ayuden a la persona que la encuentre a cuidar de ella mientras tu llegas"}),
    city: z.string(
        {required_error: "En que ciudad vive"}),
    barrio: z.string(
        {required_error: "En que barrio vive"}),
    address: z.string().optional(),
    // contacts: z.object(
    //     {required_error: "Es necesario el nombre del humano a contactar"}),
    // phones: z.string(
    //     {required_error: "Es necesario el numero de telefono del humano a contactar"})
})
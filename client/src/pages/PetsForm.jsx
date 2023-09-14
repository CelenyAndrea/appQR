import { useForm } from 'react-hook-form'
import { usePets } from '../context/PetsContext'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from 'react';

function PetsForm() {

  const { register, handleSubmit, setValue } = useForm();
  const { createPets, getPet, updatePet } = usePets();
  const navigate = useNavigate()
  const params = useParams()
  
  const onSubmit = handleSubmit((data) => {
    //console.log(data);
    if (params.id) {
      updatePet(params.id, data)
    }else {
      createPets(data);
    }
    navigate("/pets")
  })

  useEffect(() => {
    async function loadPet() {
      if(params.id) {
        const pet = await getPet(params.id)
        console.log(pet);
        setValue('image', pet.image)
        setValue('name', pet.name)
        setValue('gender', pet.gender)
        setValue('description', pet.description)
        setValue('city', pet.city)
        setValue('barrio', pet.barrio)
        setValue('address', pet.address)
        setValue('contacts', pet.contacts)
      }
    }
    loadPet()
  }, [getPet, params.id, setValue])
  
  // const {fields} = useFieldArray({
  //   control,
  //   name: "contacts",
  // })

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      <h1>Datos de esta bella mascota!!</h1>
      <form onSubmit={onSubmit}>

        <div>
          <span>Imagen:</span>
          <input 
            type="text" 
            name="image" 
            id="image"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("image")}
          />
        </div>

        <div>
          <span>Nombre:</span>
          <input 
            type="text" 
            name="name" 
            id="name"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("name")}
            autoFocus
          />
        </div>

        <div>
          <label className='px-4 py-2 my-2'> Es: 
            <select 
              className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
              name="gender" 
              id="gender"
              {...register("gender")} >
              <option
                value="female">
                Una hermosa Hembra
              </option>
              <option
                value="male">
                Un monumental Macho
              </option>
            </select>
          </label>
        </div>

        <div>
          <span>Escribe lo que te parece importante que sepa la persona que encuentre tu mascota:</span>
          <textarea 
            rows="3" 
            placeholder="Descripción" 
            name="description" 
            id="description"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("description")}
          />
        </div>

        <div>
          <span>Ciudad:</span>
          <input 
            type="text" 
            placeholder="Donde vive la mascota" 
            name="city" 
            id="city"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("city")}
          />
        </div>

        <div>
          <span>Barrio:</span>
          <input 
            type="text" 
            name="barrio" 
            id="barrio"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("barrio")}
          />
        </div>

        <div>
          <span>Si quieres puedes colocar la dirección:</span>
          <input 
            type="text" 
            name="address" 
            id="address"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("address")}
          />
        </div>

        {/* {fields.map((field, i) => (
          <div key={field.id}>
            <span>La persona que la encuentre debe llamar a:</span>
            <input 
              type="text" 
              placeholder="Nombre del humano" 
              className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
              {...register(`contacts.${i}.contact`)}
            />

            <span>Número de telefono:</span>
            <input 
              type="number" 
              className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
              {...register(`contacts.${i}.phone`)}
            />
          </div>
        ))} */}
        
        <div>
          <span>La persona que la encuentre debe llamar a:</span>
          <input 
            type="text" 
            placeholder="Nombre del humano" 
            name="contact" 
            id="contact"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("contacts[0].contact")}
          />

          <span>Número de telefono:</span>
          <input 
            type="phone" 
            name="phone" 
            id="phone"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("contacts[0].phone")}
          />

          <span>O llamar a:</span>
          <input 
            type="text" 
            placeholder="Nombre del humano" 
            name="contact" 
            id="contact"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("contacts[1].contact")}
          />

          <span>Número de telefono:</span>
          <input 
            type="phone" 
            name="phone" 
            id="phone"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("contacts[1].phone")}
          />
        </div>

        <button>
          Guardar
        </button>

      </form>
    </div>
  )
}

export default PetsForm
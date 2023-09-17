import { useForm } from 'react-hook-form'
import { usePets } from '../context/PetsContext'
import { useParams } from "react-router-dom"
import { useEffect } from 'react';

function Pet() {

  const { register, setValue } = useForm();
  const { getPet } = usePets();
  const params = useParams()
  
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

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      <h1>Datos de esta bella mascota!!</h1>
        <div>
          <span>Imagen:</span>
          <input 
            type="text" 
            name="image" 
            id="image"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("image")}
            disabled="true"
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
            disabled="true"
          />
        </div>

        <div>
          <label className='px-4 py-2 my-2'> Es: 
            <select 
              className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
              name="gender" 
              id="gender"
              {...register("gender")} 
              disabled="true"
              >
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
          <input 
            rows="3" 
            placeholder="Descripción" 
            name="description" 
            id="description"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("description")}
            disabled="true"
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
            disabled="true"
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
            disabled="true"
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
            disabled="true"
          />
        </div>

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
            disabled="true"
          />

          <span>O llamar a:</span>
          <input 
            type="text" 
            placeholder="Nombre del humano" 
            name="contact" 
            id="contact"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("contacts[1].contact")}
            disabled="true"
          />

          <span>Número de telefono:</span>
          <input 
            type="phone" 
            name="phone" 
            id="phone"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("contacts[1].phone")}
            disabled="true"
          />
        </div>
    </div>
  )
  
  // return (
  //   <div className='grid grid-cols-3 gag-2'>
  //     <header className='flex justify-between'>
  //       <h1>Yo soy</h1>
  //     </header>
  //     {Array.from(pets).map(pet => {
  //       return (
  //         <div key={pet._id} className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
  //           <p>{pet.name}</p>
  //           <p>{pet.gender}</p>
  //           <p>{pet.image}</p>
  //           <p>{pet.description}</p>
  //           <p>{pet.city}</p>
  //           <p>{pet.barrio}</p>
  //           <p>{pet.address}</p>
  //           {Object.values(pet.contacts).map((cont, index) => {
  //             return (
  //               <div key={index}>
  //                 <p>{cont.contact}</p>
  //                 <p>{cont.phone}</p>
  //               </div>
  //             )
  //           })}
  //         </div>
  //       )
  //     })}
  //   </div>
  // )
}

export default Pet
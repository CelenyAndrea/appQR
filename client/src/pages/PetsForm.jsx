import { useForm } from 'react-hook-form'
import { usePets } from '../context/PetsContext';

function PetsForm() {

  const {register, handleSubmit} = useForm();
  const {createPets} = usePets();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    createPets(data);
  })

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

        <div>
          <span>La persona que la encuentre debe llamar a:</span>
          <input 
            type="text" 
            placeholder="Nombre del humano" 
            name="contact" 
            id="contact"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("contacts")}
          />

          <span>Número de telefono:</span>
          <input 
            type="phone" 
            name="phone" 
            id="phone"
            className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
            {...register("phones")}
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
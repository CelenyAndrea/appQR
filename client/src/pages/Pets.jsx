import { usePets } from '../context/PetsContext'
import { Link } from 'react-router-dom'


function Pets() {
  const { 
    pets, 
    //deletePet 
  } = usePets()
  console.log('pets', pets)

  return (
    <div className='flex items-center justify-center h-screen'>
      {Array.from(pets).map(pet => {
        return (
          <div key={pet._id} className='w-w360 h-510 bg-customBlack rounded-2xl p-6 flex flex-col gap-x-2 text-white'>

            <div className='w-full h-auto'>
                {pet.image && <img alt='Mi Mascota' src={pet.image.url} className='rounded-r30'></img>}
            </div>

            <div className='justify-between w-full h-auto flex flex-col gap-y-3 p-2'>
              <div className='flex justify-end'>
                <Link to={`/pet/${pet._id}`}
                  >Editar
                </Link>
                {/* <button 
                  onClick={() => {
                    deletePet(pet._id)
                  }}
                  >Eliminar
                </button> */}
              </div>

              <h1 className='font-black'>Yo soy {pet.name}</h1>
              <p>Mi human@ quiere que sepas de mi que... {pet.description}</p>
              <p>Me consideran {pet.gender === "female" ? <>Una hermosa Hembra</> : <>Un monumental Macho</>}</p>
              <p>Vivo en {pet.city} en el barrio {pet.barrio}</p>
            </div>

            <p>{pet.address}</p>
            <p>{pet.contact1}</p>
            <p>{pet.phone1}</p>
            <p>{pet.contact2}</p>
            <p>{pet.phone2}</p>
            <p>{pet.contact3}</p>
            <p>{pet.phone3}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Pets;
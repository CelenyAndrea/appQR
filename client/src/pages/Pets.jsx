import { usePets } from '../context/PetsContext'
import { Link } from 'react-router-dom'


function Pets() {
  const { 
    pets, 
    deletePet 
  } = usePets()
  console.log('pets', pets)

  return (
    <div className='grid grid-cols-3 gag-4'>
      {Array.from(pets).map(pet => {
        return (
          <div key={pet._id} className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            <header className='flex justify-between'>
              <h1>Yo soy</h1>
              <div className='flex justify-between'>
                <Link to={`/pet/${pet._id}`}
                  >Editar
                </Link>
                <button 
                  onClick={() => {
                    deletePet(pet._id)
                  }}
                  >Eliminar
                </button>
              </div>
            </header>
            <p>{pet.name}</p>
            {pet.image && <img alt='Mi Mascota' src={pet.image.url}></img>}
            {pet.gender === "female" ? <p>Una hermosa Hembra</p> : <p>Un monumental Macho</p>}
            <p>{pet.description}</p>
            <p>{pet.city}</p>
            <p>{pet.barrio}</p>
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
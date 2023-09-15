import { useEffect } from 'react'
import { usePets } from '../context/PetsContext'
import { Link } from 'react-router-dom'

function Pets() {
  const { 
    getPets, 
    pets, 
    // deletePet 
  } = usePets()
  console.log(pets)

  useEffect(() => {
    getPets()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='grid grid-cols-3 gag-2'>
      {Array.from(pets).map(pet => {
        return (
          <div key={pet._id} className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            <header className='flex justify-between'>
              <h1>Yo soy</h1>
              <div>
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
            </header>
            <p>{pet.name}</p>
            <p>{pet.gender}</p>
            <p>{pet.image}</p>
            <p>{pet.description}</p>
            <p>{pet.city}</p>
            <p>{pet.barrio}</p>
            <p>{pet.address}</p>
            {Object.values(pet.contacts).map((cont, index) => {
              return (
                <div key={index}>
                  <p>{cont.contact}</p>
                  <p>{cont.phone}</p>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Pets;
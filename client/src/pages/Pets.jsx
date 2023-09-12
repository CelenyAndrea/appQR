import { useEffect } from 'react'
import { usePets } from '../context/PetsContext'

function Pets() {
  const { getPets, pets } = usePets()
  console.log(pets)

  useEffect(() => {
    getPets()
  }, [])

  return (
    <div>
      {Array.from(pets).map(pet => {
        return (
          <div key={pet._id} className='text-white'>
            <h1>Yo soy</h1>
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
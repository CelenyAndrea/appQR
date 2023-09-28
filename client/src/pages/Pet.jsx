import { usePets } from '../context/PetsContext'
import { useParams } from "react-router-dom"
import { useEffect } from 'react';

function Pet() {

  const { getPet, setPets, pets } = usePets();
  const params = useParams()
  
  useEffect(() => {
    async function loadPet() {
      if(params.id) {
        const pet = await getPet(params.id)
        console.log('pet', pet);
        setPets(pet)
      }
    }
    loadPet()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='grid grid-cols-3 gag-2'>
      <header className='flex justify-between'>
        <h1>Yo soy {pets.name}</h1>
      </header>
      <div key={pets._id} className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <p>{pets.gender}</p>
        {pets.image && <img alt='Mi Mascota' src={pets.image.url}></img>}
        <p>{pets.description}</p>
        <p>{pets.city}</p>
        <p>{pets.barrio}</p>
        <p>{pets.address}</p>
        <p>{pets.contacts}</p>
        <p>{pets.phones}</p>
        {/* {Object.values(pets.contacts).map((cont, index) => {
          return (
            <div key={index}>
              <p>{cont.contact}</p>
              <p>{cont.phone}</p>
            </div>
          )
        })} */}
      </div>
    </div>
  )
}

export default Pet
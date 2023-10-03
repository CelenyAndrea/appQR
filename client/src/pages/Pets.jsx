import { usePets } from '../context/PetsContext'
import { Link } from 'react-router-dom'
import { useEffect } from "react";

function Pets() {
  const { 
    pets, 
    getPets,
    //deletePet 
  } = usePets()
  console.log('pets', pets)

  useEffect(() => {
    getPets()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="p-10">
      {Array.from(pets).map(pet => {
        return (
          <div key={pet._id} className="bg-[url('https://img.freepik.com/vector-gratis/fondo-acuarela-lamina-dorada_52683-46208.jpg?w=900&t=st=1696200803~exp=1696201403~hmac=25c03c573eeced2832f127282439950cedcfa476e1c110157e3fa988732aa2f3')] bg-cover bg-center shadow-blue-500/50 shadow-xl flex flex-col mx-auto p-4 rounded-lg w-full md:w-1/2 text-center font-medium">

            <div className='max-w-sm mx-auto'>
              {pet.image && <img alt='Mi Mascota' src={pet.image.url} className='w-full h-full object-cover rounded-t-2xl border-double border-4 border-indigo-500/50'></img>}
            </div>
            
            <div className="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
              <h1 className='font-black text-customSky text-2xl'>Yo soy {pet.name}</h1>
            </div>
            
            <div className="pt-6 flex flex-col gap-2">
              <p className="px-6 py-4 flex flex-col gap-2 text-lg text-gray-800 text-center ">Considerado por todos como {pet.gender === "female" ? <>una hermosa Hembra</> : <>un monumental Macho</>}. Si escaneaste mi QR es porque notaste que voy sin rumbo, por favor ayudame a contactar a mi human@</p>
            </div>

            <div className='flex justify-center'>
              <p className='text-gray-900'>{pet.contact1}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 ml-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              <p>{pet.phone1}</p>
            </div>

            <div className="px-6 py-4 flex flex-col gap-2">
              <p>Es importante que sepas que {pet.description}. Vivo en {pet.city} en el barrio {pet.barrio} {pet.address ? <>en la {pet.address}</> : null}</p>
            </div>

            <div className="px-6 py-4 flex flex-col gap-2">
              {pet.contact2 ? 
                <>Si por asuntos del destino mi human@ no contesta, puedes llamar a 
                <div className='flex justify-center'>
                  <p className='text-gray-900'>{pet.contact2}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 ml-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  <p>{pet.phone2}</p>
                </div>
                </> : null
              }
            </div>
              
            <div className="px-6 py-4 flex flex-col gap-2">
              {pet.contact3 ? 
                <>Y si tampoco contesta, puedes llamar a 
                <div className='flex justify-center'>
                  <p className='text-gray-900'>{pet.contact3}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 ml-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  <p>{pet.phone3}</p>
                </div>
                </> : null
              }
            </div>
            
            <div className='text-indigo-500 border-4 border-indigo-500/50 hover:border-slate-400 rounded-full'>
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
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Pets;
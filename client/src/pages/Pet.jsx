import { usePets } from '../context/PetsContext'
import { useParams } from "react-router-dom"
import { useEffect } from 'react';

function Pet() {

  const { getPet, setPets, pets } = usePets();
  const params = useParams()
  
  useEffect(() => {
    async function loadPet() {
      if(params.id) {
        const pets = await getPet(params.id)
        console.log('pets', pets);
        setPets(pets)
      }
    }
    loadPet()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="p-10">
    <div  key={pets._id} className="bg-[url('https://img.freepik.com/vector-gratis/fondo-acuarela-lamina-dorada_52683-46208.jpg?w=900&t=st=1696200803~exp=1696201403~hmac=25c03c573eeced2832f127282439950cedcfa476e1c110157e3fa988732aa2f3')] bg-cover bg-center shadow-blue-500/50 flex flex-col mx-auto p-4 rounded-lg w-full md:w-1/2 shadow-xl text-center font-medium">
      <div className='max-w-sm mx-auto'>
        {pets.image && <img alt='Mi Mascota' src={pets.image.url} className='w-full h-full object-cover rounded-t-2xl border-double border-4 border-indigo-500/50'></img>}
      </div>
            
      <div className="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
        <h1 className='font-black text-customSky text-2xl'>Yo soy {pets.name}</h1>
      </div>
      
      <div className="pt-6 flex flex-col gap-2">
        <p className="px-6 py-4 flex flex-col gap-2 text-lg text-gray-800 text-center ">Considerado por todos como {pets.gender === "female" ? <>una hermosa Hembra</> : <>un monumental Macho</>}. Si escaneaste mi QR es porque notaste que voy sin rumbo, por favor ayudame a contactar a mi human@</p>
      </div>

      <div className='flex justify-center'>
        <p className='text-gray-900'>{pets.contact1}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 ml-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        <p>{pets.phone1}</p>
      </div>

      <div className="px-6 py-4 flex flex-col gap-2">
        <p>Es importante que sepas que {pets.description}. Vivo en {pets.city} en el barrio {pets.barrio} {pets.address ? <>en la {pets.address}</> : null}</p>
      </div>

      <div className="px-6 py-4 flex flex-col gap-2">
        {pets.contact2 ? 
          <>Si por asuntos del destino mi human@ no contesta, puedes llamar a 
          <div className='flex justify-center'>
            <p className='text-gray-900'>{pets.contact2}</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 ml-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            <p>{pets.phone2}</p>
          </div>
          </> : null
        }
      </div>
        
      <div className="px-6 py-4 flex flex-col gap-2">
        {pets.contact3 ? 
          <>Y si tampoco contesta, puedes llamar a 
          <div className='flex justify-center'>
            <p className='text-gray-900'>{pets.contact3}</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 ml-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            <p>{pets.phone3}</p>
          </div>
          </> : null
        }
      </div>
      </div>
    </div>
  )
}

export default Pet
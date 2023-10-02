import { Formik, Form, Field } from 'formik'
import { usePets } from '../context/PetsContext'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


function PetsForm() {
  const { createPets, getPet, updatePet } = usePets()
  const params = useParams()
  const navigate = useNavigate();
  const [pet, setPet] = useState({
    name: "Nombre",
    gender:"female",
    image: null,
    description: "Cualidades, caracteristicas, medicamentos...",
    city: "Ciudad",
    barrio: "Barrio",
    address: "",
    contact1: "Humano 1",
    phone1: "123",
    contact2: "Humano 2", 
    phone2: "456",
    contact3: "Humano 3", 
    phone3: "789",
  })

  useEffect(() => {
    const fetchPet = async () => {
      if(params.id) {
        const pet = await getPet(params.id)
        setPet(pet)
      }
    }
    fetchPet()
  }, [getPet, params.id])

  return (
    <div className="bg-[url('https://img.freepik.com/vector-gratis/fondo-acuarela-lamina-dorada_52683-46208.jpg?w=900&t=st=1696200803~exp=1696201403~hmac=25c03c573eeced2832f127282439950cedcfa476e1c110157e3fa988732aa2f3')] bg-cover bg-center flex items-center justify-center p-20">
      <div className="min-h-screen bg-[#F2F4FE] rounded-lg p-8 mb-8 shadow-blue-500/50 shadow-xl">
      <Formik 
        className=''
        initialValues={pet}
        onSubmit={async(values) => {
          if(params.id) {
            await updatePet(params.id, values)
          } else {
            await createPets(values);
          }
          navigate("/pets")
        }}
        enableReinitialize
      >
      {({ handleSubmit, setFieldValue }) => (

        <Form onSubmit={handleSubmit}>
          <label htmlFor="image" className='flex flex-col gap-4 pt-6'>Selecciona la mejor foto de tu mascota: </label>
            <input type='file'name='image' className='text-sm' onChange={(e) => setFieldValue('image', e.target.files[0])}/>

          <label htmlFor="name" className='flex flex-col gap-4 pt-6'>Nombre: </label>
            <Field name='name' placeholder='Nombre' className='text-sm block'/>

          <label htmlFor="gender" className='flex flex-col gap-4 pt-6'>Genero: </label>  
            <Field component="select" name='gender' className='text-sm block'>
              <option value="">Tu mascota es</option>
              <option value="female">Una hermosa Hembra</option>
              <option value="male">Un monumental Macho</option>
            </Field>

          <label htmlFor="description" className='flex flex-col gap-4 pt-6'>Escribe lo que te parece importante que sepa la persona que encuentre tu mascota: </label>
            <Field component='textarea' name='description' placeholder='Descripción' className='text-sm block w-full max-w-md py-2 px-4 rounded-lg outline-none'/>

          <label htmlFor="city" className='flex flex-col gap-4 pt-6'>Ciudad: </label>
            <Field name='city' placeholder='Ciudad' className='text-sm block w-full max-w-md py-2 px-4 rounded-lg outline-none'/>

          <label htmlFor="barrio" className='flex flex-col gap-4 pt-6'>Barrio: </label>
            <Field name='barrio' placeholder='Barrio' className='text-sm block w-full max-w-md py-2 px-4 rounded-lg outline-none'/>

          <label htmlFor="address" className='flex flex-col gap-4 pt-6'>Si quieres puedes colocar la dirección: </label>
            <Field name='address' placeholder='Dirección' className='text-sm block w-full max-w-md py-2 px-4 rounded-lg outline-none'/>

          <p className='flex flex-col gap-4 pt-6'>Puedes colocar de 1 a 3 contactos</p>
          <label htmlFor="contact1" className='flex flex-col gap-4 pt-6'>Contacto: </label>
            <Field name='contact1' placeholder='Humano 1' className='text-sm block w-full max-w-md py-2 px-4 rounded-lg outline-none'/>

          <label htmlFor="phone1">Numero de contacto: </label>
            <Field name= 'phone1' placeholder='Celular' className='text-sm block w-full max-w-md py-2 px-4 rounded-lg outline-none'/>

          <label htmlFor="contact2" className='flex flex-col gap-4 pt-6'>Contacto: </label>
            <Field name='contact2' placeholder='Humano 1' className='text-sm block w-full max-w-md py-2 px-4 rounded-lg outline-none'/>

          <label htmlFor="phone2">Numero de contacto: </label>
            <Field name= 'phone2' placeholder='Celular' className='text-black text-sm block w-full max-w-md py-2 px-4 rounded-lg outline-none'/>
            
          <label htmlFor="contact3" className='flex flex-col gap-4 pt-6'>Contacto: </label>
            <Field name='contact3' placeholder='Humano 1' className='text-black text-sm block w-full max-w-md py-2 px-4 rounded-lg outline-none'/>

          <label htmlFor="phone3">Numero de contacto: </label>
            <Field name= 'phone3' placeholder='Celular' className='text-black text-sm block w-full max-w-md py-2 px-4 rounded-lg outline-none'/>

          <div className='flex items-center justify-center m-4'>
            <button type='submit' className=" bg-sky-200 py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-300 transition-colors mt-6 mr-2"
              >Guardar
            </button>
            <div className="text-center bg-red-200 py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-300 transition-colors mt-6 ml-2">
              <Link to={`/pets`} 
                >Cancelar
              </Link>
            </div>
          </div>
        </Form>
      )}
      </Formik>
      </div>
    </div>
  )
}

export default PetsForm

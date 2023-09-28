import { Formik, Form, Field } from 'formik'
import { usePets } from '../context/PetsContext'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


function PetsForm() {
  const { createPets, getPet, updatePet } = usePets()
  const params = useParams()
  const navigate = useNavigate();
  const [pet, setPet] = useState({
    name: "Nombre",
    gender:"female",
    image: null,
    description: "Descripción",
    city: "Ciudad",
    barrio: "Barrio",
    address: "",
    contact1: "Humano 1",
    phone1: "# de contacto",
    contact2: "", 
    phone2: "",
    contact3: "", 
    phone3: "",
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
    <div className='flex items-center justify-center'>
      <Formik 
        className='text-black'
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
          <label htmlFor="image">Selecciona la mejor foto de tu mascota: </label>
            <input type='file'name='image' className='text-sm block' onChange={(e) => setFieldValue('image', e.target.files[0])}/>

          <label htmlFor="name">Nombre: </label>
            <Field name='name' placeholder='Nombre' className='text-black text-sm block'/>

          <label htmlFor="gender">Genero: </label>  
            <Field component="select" name='gender' className='text-black text-sm block'>
              <option value="">Tu mascota es</option>
              <option value="female">Una hermosa Hembra</option>
              <option value="male">Un monumental Macho</option>
            </Field>

          <label htmlFor="description">Escribe lo que te parece importante que sepa la persona que encuentre tu mascota: </label>
            <Field component='textarea' name='description' placeholder='Descripción' className='text-black text-sm block'/>

          <label htmlFor="city">Ciudad: </label>
            <Field name='city' placeholder='Ciudad' className='text-black text-sm block'/>

          <label htmlFor="barrio">Barrio: </label>
            <Field name='barrio' placeholder='Barrio' className='text-black text-sm block'/>

          <label htmlFor="address">Si quieres puedes colocar la dirección: </label>
            <Field name='address' placeholder='Dirección' className='text-black text-sm block'/>

          <p>Puedes colocar de 1 a 3 contactos</p>
          <label htmlFor="contact1">Humano 1: </label>
            <Field name='contact1' placeholder='Humano 1' className='text-black text-sm block'/>

          <label htmlFor="phone1">Numero de contacto: </label>
            <Field name= 'phone1' placeholder='Celular' className='text-black text-sm block'/>

          <label htmlFor="contact2">Humano 2: </label>
            <Field name='contact2' placeholder='Humano 1' className='text-black text-sm block'/>

          <label htmlFor="phone2">Numero de contacto: </label>
            <Field name= 'phone2' placeholder='Celular' className='text-black text-sm block'/>
            
          <label htmlFor="contact3">Humano 3: </label>
            <Field name='contact3' placeholder='Humano 1' className='text-black text-sm block'/>

          <label htmlFor="phone3">Numero de contacto: </label>
            <Field name= 'phone3' placeholder='Celular' className='text-black text-sm block'/>

          <button type='submit'>Guardar</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}

export default PetsForm

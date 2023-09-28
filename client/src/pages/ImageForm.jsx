import { Formik, Form, Field } from 'formik'
import { useImg } from '../context/ImgContext'

function ImageForm() {

  const { createImage } = useImg()

  return (
    <div>

      <Formik 
        initialValues={{
          name: '',
        }}
        onSubmit={(values) => {
          createImage(values);
        }}
      >

        {({ handleSubmit }) => (

        <Form onSubmit={handleSubmit}>
          <Field name='name' placeholder="Nombre" className="text-black"/>

          <button type='submit'>Guardar</button>
        </Form>
        )}

      </Formik>

    </div>

  )
}

export default ImageForm

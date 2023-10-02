import {useForm} from "react-hook-form"
import { useAuth } from "../context/AuthContext.jsx"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function LoginPage() {
  const { register, handleSubmit, formState: {
    errors
  }} = useForm()
  const {signin, authErrors, isAuthenticated} = useAuth()
  const navigate = useNavigate()

  const onSubmit = handleSubmit((values) => {
    signin(values)
  })

  useEffect(() => {
    if (isAuthenticated) navigate("/pets")
  }, [isAuthenticated, navigate])

  return (
    <div className="register flex flex-col min-h-screen md:p-8">
      <div className="p-8 mb-14">
        <h1 className="text-gray-100 text-3xl font-medium tracking-widest">QR</h1>
      </div>
      <div className="p-8">
        <h3 className="text-gray-500 uppercase text-sm font-bold mb-2">
          Introduce tu información
        </h3>
        <h1 className="text-6xl text-white font-medium mb-2">
          Inicia sesión
        </h1>
      
        <div className="max-w-lg mb-4">
          {
            authErrors.map((error, i) => (
              <p key={i} className="bg-red-500 p-2 text-white">
                {error}
              </p>
            ))
          }
          <form onSubmit={onSubmit} className="mt-8">
            <div className="max-w-lg mb-4">
              <input 
                type="email"
                name="email"
                placeholder="codigo@qr.tld" 
                {...register("email", { required: true })}
                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
              />
              {
                errors.email && (
                  <p className="text-red-500 text-sm">El correo es obligatorio</p>
                )
              }
            </div>
            <div className="max-w-lg mb-4">
              <input 
                type="password" 
                name="password"
                placeholder="confirma tu codigo"
                {...register("password", { required: true })}
                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
              />
              {
                errors.password && (
                  <p className="text-red-500 text-sm">La contraseña es obligatoria</p>
                )
              }
            </div>
            <button type="submit" className="bg-cyan-600 text-white w-full py-3 px-4 rounded-full hover:bg-cyan-700 transition-colors">
              Inicio
            </button>
          </form>

          {/* <p className="flex gap-x-2 justify-between">
            ¿No tienes cuenta? <Link to="/register" className="text-sky-500">Registrate</Link>
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default LoginPage

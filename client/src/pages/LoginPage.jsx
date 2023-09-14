import {useForm} from "react-hook-form"
import { useAuth } from "../context/AuthContext.jsx"
import { Link, useNavigate } from "react-router-dom"
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
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {
          authErrors.map((error, i) => (
            <p key={i} className="bg-red-500 p-2 text-white">
              {error}
            </p>
          ))
        }
        <form onSubmit={onSubmit}>
        <h1 className="text-3xl font-bold">Introduce o edita la información</h1>
          <label>Código:</label>
          <input 
            type="email"
            name="email"
            placeholder="youremail@domain.tld" 
            {...register("email", { required: true })}
            className="w-full text-black px-4 py-2 rounded-md my-2"
          />
          {
            errors.email && (
              <p className="text-red-500 text-sm">El correo es obligatorio</p>
            )
          }

          <label>Confirma tu código:</label>
          <input 
            type="password" 
            name="password"
            placeholder="********"
            {...register("password", { required: true })}
            className="w-full text-black px-4 py-2 rounded-md my-2"
          />
          {
            errors.password && (
              <p className="text-red-500 text-sm">La contraseña es obligatoria</p>
            )
          }
          <button type="submit" className="border-2 border-x-slate-500">
            Inicio
          </button>
        </form>

        <p className="flex gap-x-2 justify-between">
          ¿No tienes cuenta? <Link to="/register" className="text-sky-500">Registrate</Link>
        </p>

      </div>
    </div>
  )
}

export default LoginPage

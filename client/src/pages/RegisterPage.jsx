//import React from 'react'
import {useForm} from "react-hook-form"
import { useAuth } from "../context/AuthContext.jsx"
import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"  

function RegisterPage() {
    const {register, handleSubmit, formState: {
        errors
    }} = useForm()
    const {signup, isAuthenticated, authErrors} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(isAuthenticated) 
            navigate("/add-pet")
    }, [isAuthenticated, navigate])
 
    const onSubmit = handleSubmit((values) => {
        signup(values)
    })

    return (
        <div className="max-w-md p-10 rounded-md">
            {
                authErrors.map((error, i) => (
                    <p key={i} className="bg-red-500 p-2 text-white">
                        {error}
                    </p>
                ))
            }
            <form onSubmit={onSubmit}>
            <h1 className="text-3xl font-bold">Registrate</h1>
                <label>Usuario:</label>
                <input 
                    type="text" 
                    name="username"
                    placeholder="Escribe tu nombre"
                    {...register("username", { required: true })}
                    className="w-full text-black px-4 py-2 rounded-md my-2"
                />
                {
                    errors.username && (
                        <p className="text-red-500 text-sm">El usuario es obligatorio</p>
                    )
                }

                <label>Email:</label>
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

                <label>Contraseña:</label>
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
                    Registrarse
                </button>
            </form>
            
            <p className="flex gap-x-2 justify-between">
                ¿Ya tienes cuenta? <Link to="/login" className="text-sky-500">Inicia sesión</Link>
            </p>

        </div>
    )
}

export default RegisterPage
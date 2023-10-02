import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

// eslint-disable-next-line react/prop-types
function Navbar({toggleOpen}) {
    const { 
        isAuthenticated, 
        logout, 
        // user 
    } = useAuth()

    return (
        <nav className="flex justify-between items-center h-16 bg-gradient-to-r from-cyan-900 to-blue-900 text-customSky relative shadow-xl">
            <Link to="/">
                <h1 className="pl-8 text-2xl font-bold">QR</h1>
            </Link>

            <div className="px-4 cursor-pointer md:hidden" onClick={toggleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                </svg>
            </div>

            <div className="pr-8 hidden md:block">
                {isAuthenticated ? (
                    <>
                        {/* <h1>
                            Hola {user.username}
                        </h1> */}
                        <Link 
                            to="/pets"
                            className="p-4"
                        >Mi Mascota
                        </Link>

                        <Link 
                            to="/add-pet"
                            className="p-4"
                        >Agregar Mascota
                        </Link>
                    
                        <Link 
                            to="/" 
                            onClick={() => {logout()}} 
                            className="p-4"
                        >Cerrar Sesion
                        </Link>
                    </>
                    ) : (
                    <>
                        <Link 
                            to="/login"
                            className="p-4"
                        >Iniciar Sesion
                        </Link>
                    
                        {/* <Link 
                                to="/register"
                                className="p-4"
                            >Registrarse
                            </Link>*/}
                    </>
                )}
            </div>   
        </nav>
    )
}

export default Navbar
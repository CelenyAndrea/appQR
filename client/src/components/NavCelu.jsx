import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

// eslint-disable-next-line react/prop-types
function NavCelu({toggleClose}) {
    const { 
        isAuthenticated, 
        logout, 
        // user 
    } = useAuth()

    return (
        <div className="grid grid-rows-3 text-center bg-customBlue1 text-customSky" onClick={toggleClose}>
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
    )
}

export default NavCelu
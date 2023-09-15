import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Navbar() {
    const { 
        isAuthenticated, 
        logout, 
        // user 
    } = useAuth()

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to="/">
                <h1 className="text-2xl font-bold">QR</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        {/* <h1>
                            Hola {user.username}
                        </h1> */}
                        <li>
                            <Link to="/pets">Mi Mascota</Link>
                        </li>
                        {/* <li>
                            <Link to="/add-pet">Agregar Mascota</Link>
                        </li> */}
                        <li>
                            <Link to="/" onClick={() => {logout()}}>Cerrar Sesion</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link 
                                to="/login"
                                className=""
                            >
                                Iniciar Sesion
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/register">Registrarse</Link>
                        </li> */}
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
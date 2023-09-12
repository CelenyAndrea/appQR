/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth.js";
import Cookies from "js-cookie"

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')  
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authErrors, setAuthErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data);
            setUser(res.data)
            setIsAuthenticated(true)   
        } catch (error) {
            setAuthErrors(error.response.data);
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res.data);
            setUser(res.data)
            setIsAuthenticated(true)   
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setAuthErrors(error.response.data);
            }
            setAuthErrors([error.response.data]);
        }
    }

    const logout = () => {
        Cookies.remove("token");
        setIsAuthenticated(false);
        setUser(null);
    }

// tiempo para borrar mensajes de error
    useEffect(() => {
        if(authErrors.length > 0) {
            const timer = setTimeout(() => {
                setAuthErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [authErrors])

//evitar que recargue la app luego del login
    useEffect(() => {
        async function checkLogin () {
            const cookies = Cookies.get()

            if(!cookies.token) {
                setIsAuthenticated(false)
                setLoading(false)
                return setUser(null)
            }
            try {
                //console.log(cookies.token);
                const res = await verifyTokenRequest(cookies.token)
                //console.log(res);

                if (!res.data) {
                    setIsAuthenticated(false)
                    setLoading(false)
                    return 
                }

                setIsAuthenticated(true)
                setUser(res.data)
                setLoading(false)
                
            } catch (error) {
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
            }
        }
        checkLogin();
    }, [isAuthenticated])

    return  (
        <AuthContext.Provider value={{
            signup,
            user,
            isAuthenticated,
            authErrors,
            signin,
            loading,
            logout
        }}> 
            {children}
        </AuthContext.Provider>
    )
}
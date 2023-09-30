import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import { AuthProvider } from "./context/AuthContext.jsx"
import Pets from "./pages/Pets.jsx"
import PetsForm from "./pages/PetsForm.jsx"
import Profile from "./pages/Profile.jsx"
import Home from "./pages/Home.jsx"
import Pet from "./pages/Pet.jsx"
import ProtectedRoute from "./ProtectedRoute.jsx"
import { PetProvider } from "./context/PetsContext.jsx"
import Navbar from "./components/Navbar.jsx"
import NavCelu from "./components/NavCelu.jsx"
import { useState, useEffect } from "react"

function App() {

  const [isCelu, setIsCelu] = useState(false)

  useEffect(() => {
    const menu = () => {
      if (window.innerWidth > 768 && isCelu){
        setIsCelu(false)
      }
    }
    window.addEventListener("resize", menu)

    return () => {
      window.removeEventListener("resize", menu)
    }
  })
  
  const toggleOpen = () => {
    setIsCelu(!isCelu)
  }

  return (
    <AuthProvider>
      <PetProvider>
        <BrowserRouter>
          <main className="h-screen">
          <Navbar toggleOpen={toggleOpen}/>
          {isCelu && <NavCelu toggleClose={toggleOpen}/>}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/:id" element={<Pet />} />

              <Route element = {<ProtectedRoute />}>
                <Route path="/pets" element={<Pets />} />
                <Route path="/add-pet" element={<PetsForm />} />
                <Route path="/pet/:id" element={<PetsForm />} />
                <Route path="/profile" element={<Profile />} />
              </Route>

            </Routes>
          </main>
        </BrowserRouter>
      </PetProvider>
    </AuthProvider> 
  ) 
}

export default App

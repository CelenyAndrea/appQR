import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import { AuthProvider } from "./context/AuthContext.jsx"
import Pets from "./pages/Pets.jsx"
import PetsForm from "./pages/PetsForm.jsx"
import Profile from "./pages/Profile.jsx"
import Home from "./pages/Home.jsx"
import ProtectedRoute from "./ProtectedRoute.jsx"
import { PetProvider } from "./context/PetsContext.jsx"

function App() {
  return (
    <AuthProvider>
      <PetProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />

            <Route element = {<ProtectedRoute/>}>
              <Route path="/pets" element={<Pets/>} />
              <Route path="/add-pet" element={<PetsForm/>} />
              <Route path="/pet/:id" element={<PetsForm/>} />
              <Route path="/profile" element={<Profile/>} />
            </Route>

          </Routes>
        </BrowserRouter>
      </PetProvider>
    </AuthProvider> 
  ) 
}

export default App

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
import { ImgProvider } from "./context/ImgContext.jsx"
import Navbar from "./components/Navbar.jsx"
import { Images } from "./pages/Images.jsx"
import ImageForm from "./pages/ImageForm.jsx"

function App() {
  return (
    <AuthProvider>
      <PetProvider>
        <ImgProvider>
          <BrowserRouter>
            <Navbar/>
            <main className="container mx-auto px-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/:id" element={<Pet />} />

                <Route element = {<ProtectedRoute />}>
                  <Route path="/pets" element={<Pets />} />
                  <Route path="/add-pet" element={<PetsForm />} />
                  <Route path="/pet/:id" element={<PetsForm />} />
                  <Route path="/images" element={<Images />} />
                  <Route path="/add-img" element={<ImageForm />} />
                  <Route path="/image/:id" element={<ImageForm />} />
                  <Route path="/profile" element={<Profile />} />
                </Route>

              </Routes>
            </main>
          </BrowserRouter>
        </ImgProvider>
      </PetProvider>
    </AuthProvider> 
  ) 
}

export default App

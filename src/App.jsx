import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Acerca from './pages/Acerca'
import Servicios from './pages/Servicios'
import PortafoliosPublicos from './pages/PortafoliosPublicos'
import MiPortafolio from './pages/MiPortafolio'
import ReservaMesas from './pages/ReservaMesas'
import Login from './pages/Login'
import Registro from './pages/Registro'
import SplashOrbita from './components/SplashOrbita'
import FondoAnimado from './FondoAnimado'
import MiPerfil from './pages/MiPerfil'

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true)

  return (
    <Router>
      <FondoAnimado />
      
      {mostrarSplash ? (
        <SplashOrbita onTerminar={() => setMostrarSplash(false)} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/mi-perfil" element={<MiPerfil />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/reserva-mesas" element={<ReservaMesas />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/portafolios" element={<PortafoliosPublicos />} />
            <Route path="/mi-portafolio" element={<MiPortafolio />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  )
}
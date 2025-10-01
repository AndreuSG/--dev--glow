import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/navbar';
import { Footer } from './components/layout/footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Equipo from './pages/Equipo';
import Contacto from './pages/Contacto';
import './globals.css';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.PROD ? '/glow' : ''}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

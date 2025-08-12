import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import Home from './Page/Home.jsx'
import About from './Page/About.jsx'
import './App.css'
import Kegiatan from './Page/Kegiatan.jsx'
import Education from './Page/Education.jsx'
import DetailKegiatan from './Components/KegiatanPage/DetailKegiatan.jsx'; 
import Partner from './Page/Partner.jsx'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/edu" element={<Education />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/detail-kegiatan/:id" element={<DetailKegiatan />} />
      </Routes>
  )
}

export default App

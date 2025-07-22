import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import Home from './Page/Home.jsx'
import About from './Page/About.jsx'
import './App.css'
import Kegiatan from './Page/Kegiatan.jsx'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/kegiatan" element={<Kegiatan />} />
      </Routes>
  )
}

export default App

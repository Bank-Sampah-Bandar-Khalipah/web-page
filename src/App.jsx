import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import Home from './Page/Home.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

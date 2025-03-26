import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AuthProvider } from './context/AuthContext'
import Overview from './pages/Overview'
import Community from './pages/Community'
import Faq from './pages/Faq'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/community" element={<Community />} />
          <Route path="/faq" element={<Faq />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>


  )
}

export default App

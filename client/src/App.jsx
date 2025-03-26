import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AuthProvider } from './context/AuthContext'
import Overview from './pages/Overview'
import Community from './pages/Community'
import Faq from './pages/Faq'
import CommonFaq from './pages/CommonFaq'
import AskFaQ from './pages/AskFaQ'
import MyFaq from './pages/MyFaq'
import ThankYou from './pages/ThankYou'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/community" element={<Community />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/commonfaq" element={<CommonFaq />} />
          <Route path="/askfaq" element={<AskFaQ />} />
          <Route path="/myfaq" element={<MyFaq />} />
          <Route path="/thank" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>


  )
}

export default App

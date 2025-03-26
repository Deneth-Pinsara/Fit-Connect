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
import SingleFaq from './pages/SingleFaq'
import GymList from './pages/Gym-List'
import GymAddNew from './pages/Gym-Add-New'
import GymView from './pages/Gym-View'
import GymUpdate from './pages/Gym-Update'

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
          <Route path="/faq/:id" element={<SingleFaq />} />


          <Route path="/gym-list" element={<GymList />} />
          <Route path="/gym-add-new" element={<GymAddNew />} />
          <Route path="/gym-view/:id" element={<GymView />} />
          <Route path="/gym-update/:id" element={<GymUpdate />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>


  )
}

export default App

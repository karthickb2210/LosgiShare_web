import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from '../LandingPage'
import Feeder from '../FeederForm/Feeder'

function Layout() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/feeder' element={<Feeder />}></Route>
    </Routes>
    </BrowserRouter>
  )
}


export default Layout
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup/Signup'
import  Home  from './Pages/Home.js'

const App = () => {
  return (
    <> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Signup />} />
          </Routes>

    </>
  )
}

export default App
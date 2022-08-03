import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import  Home  from './Pages/Home.js'

const App = () => {
  return (
    <> 
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>

    </>
  )
}

export default App
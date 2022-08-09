import React from 'react'
import { useSelector } from 'react-redux'
import AdminNav from './AdminNav'
import DefaultNavbar from './DefaultNavbar'
import LoggedUserNav from './LoggedUserNav'
import './navbar.css'

const Navbar = () => {
     const currentUser = true
  return (
    <>
     <div className="nav">
         <div className="logo">
             LOGO
         </div>
         <div className="nav-tag">
             {currentUser === true ? <DefaultNavbar /> : null}
              
              {currentUser  === false ? <LoggedUserNav /> : null}

              {currentUser  === false ? <AdminNav /> : null}
         </div>
     </div>
    </>
  )
}

export default Navbar
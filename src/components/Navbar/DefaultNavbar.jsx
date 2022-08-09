import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import './navbar.css'
import { Link } from 'react-router-dom'

const DefaultNavbar = () => {
  return (
    <>
        <React.Fragment>
            <Link className='nav-link' to='./login'>
              <AiOutlineUser className='nav-user-icon' />
              <span>Login</span>
            </Link>
            <Link className='nav-link' to='./login'>
              <FiUserPlus className='nav-user-icon' />
              <span>Register</span> 
            </Link>
            <Link className='nav-link' to='./login'>
              <BiHelpCircle className='nav-user-icon' />
              <span>Help</span>
            </Link>
        </React.Fragment>
    </>
  )
}

export default DefaultNavbar
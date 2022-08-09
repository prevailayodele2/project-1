import React from 'react'
import { Link } from 'react-router-dom'
import { BiHelpCircle, BiUserCheck, BiUserX } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import './navbar.css'

const LoggedUserNav = () => {
  return (
    <>
      <React.Fragment>
          <Link className='nav-link' to='/profile'>
           <BiUserCheck className='nav-user-icon' />
           <span>Hi Prevail</span>
          </Link>
          <Link className='nav-link' to='/cart'>
             <FiShoppingCart className='nav-user-icon' />
             <span>Cart</span>
             <div className='cart-count'>2</div>
          </Link>
          <Link className='nav-link' to='/help'>
             <BiHelpCircle className='nav-user-icon' />
             <span>Help</span>
          </Link>
          <Link className='nav-link' to='/logout'>
             <BiUserX className='nav-user-icon' /> 
             <span>Sign Out</span>
          </Link>
      </React.Fragment>
    </>
  )
}

export default LoggedUserNav
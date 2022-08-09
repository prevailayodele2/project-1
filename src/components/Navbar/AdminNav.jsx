import React from 'react'
import { BiUserCheck, BiUserX } from "react-icons/bi";
import { Link } from 'react-router-dom';


const AdminNav = () => {
  return (
    <>
      <React.Fragment>
          <Link className='nav-link' to='/profile'>
           <BiUserCheck className='nav-user-icon' />
           <span>Hi Prevail</span>
          </Link>
          <Link className='nav-link' to='/logout'>
             <BiUserX className='nav-user-icon' /> 
             <span>Sign Out</span>
          </Link>
      </React.Fragment>
    </>
  )
}

export default AdminNav
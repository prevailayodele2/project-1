import './navbar.css'
import React, { useState } from 'react'
import { IoIosSwitch } from 'react-icons/io'
import { FiPhoneCall } from 'react-icons/fi'
import { FaRegUser } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'
import { MdOutlineEmail} from 'react-icons/md'
import { AiOutlineDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import NavbarCategory from './NavbarCategory'
import Cart from '../Cart/Cart'

const Navbar = () => {

    const [open, setOpen] = useState(false)

  return (
    <>
        <div className="navbar-container">
            <div className="navbar-row">
                 <div className="navbar-col">
                     <div className="info">
                         <span className="number"><FiPhoneCall className='phone' />+2348134760438</span>
                         <span className="e-mail"><MdOutlineEmail className='email'/>ayodeleprevail@gmail.com</span>
                     </div>
                     <div className="items">
                         <span className='item-1'>Need help?</span>
                         <span className='item-1'>EN<AiOutlineDown  className='down'/></span>
                         <span className='item-1'>USD<AiOutlineDown className='down' /></span>
                     </div>
                 </div>
            </div>
            <div className="navbar-row-2">
                <div className="logo">
                    <Link to='/' >prevail</Link>
                </div>
                <div className="search-bar">
                  <input placeholder='search' />
                </div>
                <div className="nav-icons">
                    <IoIosSwitch className='action-icon'/>
                    <FaRegUser className='action-icon'/>
                    <BsCart2 onClick={() => setOpen(true)} className='action-icon'/>
                </div>
            </div>
            <div className='div'>
            <NavbarCategory />
            </div>
        </div>
        {open && <Cart />}
    </>
  )
}
  

export default Navbar
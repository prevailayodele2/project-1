import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import './navbar.css'
import { HomehoverItems } from '../../utilis'

const NavbarDropdown = () => {
    const [dropDown, setGropDown] = useState(false)
  return (
    <>
        <ul className={dropDown ? 'home-dropdown clicked' : 'home-dropdown'} onClick={()=> setGropDown(!dropDown)}>
            {HomehoverItems.map((item, index) => (
                <li className="home-hover" key={index}>
                    <NavLink onClick={()=> setGropDown(!dropDown)} activeclassname='active' to={item.path}>{item.title}</NavLink>
                </li>
            ))}
        </ul>
    </>
  )
}

export default NavbarDropdown;




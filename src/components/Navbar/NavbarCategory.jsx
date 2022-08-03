import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { categoryItems } from '../../utilis'
import {AiOutlineDown} from 'react-icons/ai'
import './navbar.css'
import NavbarDropdown from './NavbarDropdown'

const NavbarCategory = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <>
        <div className="navbar-row-3">
            <div className="category">
                <div className="category-inner">
                    <span>category</span>
                    <span>{`${'>'}`}</span>
                </div>
            </div>
            <div className="category-right">
                
                <ul>
                   
                    {categoryItems.map((item, index) =>{
                       
                        if(item.title === 'Home') {
                           return (
                                    <div className='navbardrop-list' key={index} 
                                      onMouseEnter={() => setDropdown((toggle)=> !toggle)} 
                                      onMouseLeave={() => setDropdown((toggle) => !toggle)}
                                    >
                                      <Link to={item.path}>{item.title}<span><AiOutlineDown className='down' /></span></Link>
                                     {dropdown && <NavbarDropdown />}
                                    </div>
                            )
                            
                        };
                        {/* if(item.title === 'Pages') {
                           return (
                                    <div className='navbardrop-list' key={index} 
                                      onMouseEnter={() => setDropdown((toggle)=> !toggle)} 
                                      onMouseLeave={() => setDropdown((toggle) => !toggle)}
                                    >
                                      <Link to={item.path}>{item.title}<span><AiOutlineDown className='down' /></span></Link>
                                     {dropdown && <Reuseable />}
                                    </div>
                            )
                            
                        }; */}
                        

                      return (
                        <li className='category-list' key={index}>
                            <Link to={item.path}>{item.title}<span><AiOutlineDown className='down' /></span></Link>
                        </li>
                      )
                    })}
                </ul>
                
            </div>
            
        </div>
    </>
  )
}
/*
if (item.title === 'Pages') {
    return (
    <div className='navbarpagedrop-list' key={index} 
        onMouseEnter={() => setDropdown(true)} 
        onMouseLeave={() => setDropdown(false)}
    >
       <Link to={item.path}>{item.title}<span><AiOutlineDown className='down' /></span></Link>
        {dropdown && <NavbarDropDownPage />}
    </div>
    )
}
*/
export default NavbarCategory

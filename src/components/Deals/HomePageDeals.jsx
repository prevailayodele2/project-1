import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import './deals.css'
import { NavLink } from 'react-router-dom'
import ProductCard from '../Product/ProductCard';
import { product } from '../../utilis';

const HomePageDeals = () => {
  return (
    <>
        <div className="deal-container">
            <div className="deal-top">
                <span>Deal Just for you</span>
                <span>
                  <NavLink to='./deals-page' style={{ textDecoration: "none", color: "white" }}>
                     VIEW ALL
                  </NavLink>
                  <IoIosArrowForward />
                </span>
            </div>
            <div className="deal-container-content">
                {product.length && product.slice(6, 11).map((item) => (
                    <ProductCard key={item._id} items={item} />
                ))}
            </div>
        </div>
    </>
  )
}

export default HomePageDeals
import React from 'react'
import { product } from '../../utilis'
import { Link } from 'react-router-dom'
import './cart.css'

const Cart = () => {
  return (
    <>
        <div className="cart-container">
            <div className="cart-row-one">
                <h1 className="cart-header"></h1>
                <div className="cart-row-two">
                    {product.length === 0 ? (<h3>Cart is Empty. <Link to='/shop'>Go Shopping</Link></h3>) : (
                        <div className="cart-cards">
                            {product.map((item, index) =>( 
                                <div className="cart-card" key={index}>
                                  
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart
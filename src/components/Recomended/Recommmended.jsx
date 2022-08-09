import React from 'react'
import { product } from '../../utilis'
import './recommemded.css'
import ProductCard from '../Product/ProductCard'


const Recommmended = () => {
  return (
    <>
        <div className="container">
            <span>Recommended for you</span>
            <div className="container-content">
                {product.length && product.slice(0, 5).map((item) => (
                    <ProductCard key={item._id} items={item} />
                ))}
            </div>
        </div>
    </>
  )
}

export default Recommmended
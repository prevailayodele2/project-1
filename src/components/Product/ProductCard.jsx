import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './product.css'

const ProductCard = ({items}) => {
  return (
    <>
      <div className="card-wrapper">
          <div className="card-img-container">
              <Link to={`/productpreview/${items._id}`}>
                  <div className="card-image">
                    <img src={items.image} alt="" />
                  </div>
              </Link>
              <div className="card-bottom">
                  <div className="left">
                      <div className="card-details-one">
                          <div className="name">{items.title}</div>
                          <div className="price">${items.price}</div>
                      </div>
                  </div>
                  <div className="right">
                      <div className="card-details-two card-details">

                      </div>
                  </div>
              </div>
          </div>
          <div className="inside">
              <div className="card-icon">
                  <span><AiOutlineInfoCircle /></span>
              </div>
              <div className="card-contents">
                  <span>{items.title}</span>
                  <span>{items.category}</span>
                  <span>{items.slug}</span>
              </div>
          </div>
          
      </div>
    </>
  )
}

export default React.memo(ProductCard)
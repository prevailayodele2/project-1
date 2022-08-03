import React from 'react'
import {BsFillStarFill} from 'react-icons/bs'
import './product.css'

const ProductStar = (props) => {
  return (
    <>
        <div className="checkout-steps">
          <p className={props.step1 ? "active" : ''}><BsFillStarFill/></p>
          <p className={props.step2 ? "active" : ''}><BsFillStarFill/></p>
          <p className={props.step3 ? "active" : ''}><BsFillStarFill/></p>
          <p className={props.step4 ? "active" : ''}><BsFillStarFill/></p>
          <p className={props.step5 ? "active" : ''}><BsFillStarFill/></p>
          <p className={props.step6 ? "active" : ''}><BsFillStarFill/></p>
       </div> 
    </>
  )
}

export default ProductStar
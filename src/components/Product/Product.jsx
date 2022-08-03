import React, { useState } from 'react'
import './product.css'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {VscDiffAdded} from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { product } from '../../utilis'

const Product = () => {
    const [sliderIndex, setSliderIndex] = useState(0)
    const handleClick = (direction) => {
      
        if(direction === "left") {
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 3 )
        } else{
            setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0 )
        }
    }
    if (!Array.isArray(product) || product.length <= 0) {
        return null;
    }

  return (
    <>
        <div className="card-container">
             <div className="arrow-left"><BsArrowLeftSquare onClick={() => handleClick('left')}/></div>
         {product.map((item, index) => (
            <>
                <div className="productcard-container"
                        sliderIndex={sliderIndex} 
                        style={{transform: `translateX(${sliderIndex * -25}vw)`}} 
                        key={index}
                    >
                    <div className="card-header">
                        <div className="card-head-one">{item.offpercentage}</div>
                        <div className="card-head-two"><a href='/'> <AiOutlineHeart/></a></div>
                    </div>
                    <div className="card-body">
                        <Link to='/'>
                        <img src={item.image} alt={item.slug} />
                        </Link>
                    </div>
                    <div className="card-footer">
                        <div className="card-footer-container1">
                            <span className="one">{item.title}</span>
                            <span className="two">{item.star}</span>
                            <span className="three">${item.price}<span className="inside3">{item.priceoff}</span></span>
                        </div>
                        <div className="card-footer-container2">
                            <a href='/'><VscDiffAdded /></a>
                        </div>
                   </div>
             </div>
           </>
         ))}
         <div className="arrow-right"><BsArrowRightSquare onClick={() => handleClick('right')} /></div>
        </div>
    </>
  )
}

export default Product
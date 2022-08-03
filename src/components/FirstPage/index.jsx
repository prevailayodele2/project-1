import React from 'react'
import './index.css'

const Index = () => {
  return (
    <>
      <div className="container">
          <div className="content">
             <div className="page-col-one">
                 <span className="content1">
                     50% Off For Your First Shopping
                 </span>
                 <br />
                 <span className="content2">
                     Lorem ipsum dolor sit amet consectetur 
                     adie, evenie corrupti nulla facilis quod unde 
                     cupiditate incidunt? Architecto obcaecati voluptatem enim?
                 </span>
                 <button type='button' className='page-button'>Shop Now</button>
             </div>
             <div className="page-col-two">
                 <span>
                     <img src="/image/img-10.jfif" alt="image" />
                 </span>
             </div>
          </div>
      </div>
    </>
  )
}

export default Index
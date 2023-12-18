import React from 'react'
import './Products.css'


const Recommended = () => {

  return (
    <>
      <div className="reco">
      <h2 className='Catego'>Recommended</h2>
        <div className="recomanded-btns">
          <button className='btns'>All Products</button>
          <button className='btns'>men's clothing</button>
          <button className='btns'>women's clothing</button>
          <button className='btns'>electronics</button>
          <button className='btns'>jewelery</button>
        </div>
      </div>
        
    </>
  )
}

export default Recommended
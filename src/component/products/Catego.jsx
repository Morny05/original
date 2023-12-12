import React from 'react'
import './Products.css'


const Category = () => {

  return (
    <>
        <h2 className='Catego'>Categorys</h2>
        <div className="recomanded-btns">
          <button className='btns'>All Products</button>
          <button className='btns'>men's clothing</button>
          <button className='btns'>women's clothing</button>
          <button className='btns'>electronics</button>
          <button className='btns'>jewelery</button>
        </div>
    </>
  )
}

export default Category
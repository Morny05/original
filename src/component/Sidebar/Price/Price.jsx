import React from 'react';
import './Price.css';

const Price = () => {
  return (
    <>
        <div className="ml">
        <h5 className='sidebar-title'>Price</h5>
        <div className="div">
            <label className='sidebar-label-container'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span> 50 $
            </label>
            <label className='sidebar-label-container'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span> 100 $
            </label>
            <label className='sidebar-label-container'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span> 150 $ 
            </label>
            <label className='sidebar-label-container'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span> 200 $
            </label>
        </div>
        </div>
    </>
  )
}

export default Price
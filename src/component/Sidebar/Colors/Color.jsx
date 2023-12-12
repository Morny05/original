import React from 'react';
import './Colors.css';

const Color = () => {
  return (
    <>
        <h5 className='sidebar-title'>Colors</h5>
        <div className="div">
            <label className='sidebar-label-container'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span>ALL
            </label>
            <label className='sidebar-label-container'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span>Green
            </label>
            <label className='sidebar-label-container'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span>black
            </label>
            <label className='sidebar-label-container'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span>red
            </label>
        </div>
    </>
  )
}

export default Color
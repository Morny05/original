import React from 'react';
import './Colors.css';

const Color = () => {
  return (
    <>
        <div className="ml">
        <h5 className='sidebar-title fw-bold'>Colors</h5>
        <div className="sidebar-items">
            <label className='sidebar-label-container fw-inherit'>
                <input type='radio' name='test2'/>
                <span className='checkmark'></span>ALL
            </label>
            <label className='sidebar-label-container fw-inherit'>
                <input type='radio' name='test2'/>
                <span className='checkmark'></span>Green
            </label>
            <label className='sidebar-label-container fw-inherit'>
                <input type='radio' name='test2'/>
                <span className='checkmark'></span>black
            </label>
            <label className='sidebar-label-container fw-inherit'>
                <input type='radio' name='test2'/>
                <span className='checkmark'></span>red
            </label>
        </div>
        </div>
    </>
  )
}

export default Color
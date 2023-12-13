import React from 'react';
import './Categorys.css';

const Catetgory = () => {
  return (
    <div>
        <h5 className='sidebar-title fw-bold'>Category</h5>
        <div className="sidebar-items">
            <label className='sidebar-label-container fw-inherit'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span>ALL
            </label>
            <label className='sidebar-label-container fw-inherit'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span>111
            </label>
            <label className='sidebar-label-container fw-inherit'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span>2222
            </label>
            <label className='sidebar-label-container fw-inherit'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span>333
            </label>
        </div>
    </div>
  )
}

export default Catetgory
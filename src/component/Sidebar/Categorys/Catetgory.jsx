import React from 'react';
import './Categorys.css';

const Catetgory = () => {
  return (
    <>
        <h5 className='sidebar-title'>Category</h5>
        <div className="div">
            <label className='sidebar-label-container'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span>ALL
            </label>
            <label className='sidebar-label-container'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span>111
            </label>
            <label className='sidebar-label-container'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span>2222
            </label>
            <label className='sidebar-label-container'>
                <input type='radio' name='test'/>
                <span className='checkmark'></span>333
            </label>
        </div>
    </>
  )
}

export default Catetgory
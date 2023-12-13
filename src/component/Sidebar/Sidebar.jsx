import React from 'react';
import shopping from './images/shopping.png';
import './Sidebar.css'
import Catetgory from './Categorys/Catetgory.jsx';
import Price from './Prices/Price.jsx';
import Color from './Colors/Color.jsx';


const Sidebar = () => {
  return (
    <>
        <section className='sidebar'>
        <div className="logo-container">
            <img src={shopping} className='shopping' width={'50px'} alt=''/>
        </div>
        <Catetgory/>      
        <Price/>
        <Color/>
        </section>  
    </>
    )
}

export default Sidebar
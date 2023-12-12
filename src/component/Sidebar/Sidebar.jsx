import React from 'react';
import shopping from './images/shopping.png';
import './Sidebar.css'
import Catetgory from './Categorys/Catetgory';
import Price from './Price/Price';
import Color from './Colors/Color';

const Sidebar = () => {
  return (
    <>
        <section className='sidebar'>
        <div className="logo-container">
            <img src={shopping} className='shopping' width={'50px'} alt=''/>
             <Catetgory/>
             <Price/>
             <Color/>
        </div>
        </section>  
    </>
    )
}

export default Sidebar
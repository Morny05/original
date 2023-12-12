import React from 'react';
import { useState } from 'react';
//import { useDispatch } from 'react-redux';
import './panier.css';

function Panier (){
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [totalPrice,setTotalPrice]=useState('');

    //const useDispatch = useDispatch();

    return (
    <div className="container">
       <div><br/><br/><br/>
        <h1 className='text-center'>Products Panier</h1>
            <table className='table is-hoverable'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>total price</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{totalPrice}</td>
                        <td>
                            <button type='button' className='btn btn-outline-success btn-sm'>add</button> 
                            <button type='button' className='btn btn-outline-success btn-sm'>rem</button>
                        </td>
                    </tr>
                </tbody>
            </table>
       </div>
       <div className='total-product'>
            <h5>Total: </h5>
            <button className='btn btn-success btn-sm'>CLEAR CART</button>
       </div>
    </div>
  )
}

export default Panier
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
       <div>
        <h1 className='text-center'>Products Panier</h1>
            <table className='table is-hoverable'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>TotalPrice</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{totalPrice}</td>
                        <td>
                            <span>                            
                            <button type='button' className='btn btn-outline-danger'>rem</button>
                            <button type='button' className='btn btn-outline-success'>add</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
       </div>
       <div className='total-product'>
            <h5>Total: </h5>
            <button className='btn btn-success'>CLEAR CART</button>
       </div>
    </div>
  )
}

export default Panier
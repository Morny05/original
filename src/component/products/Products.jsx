import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Category from './Catego';
import './Products.css';
import Sidebar from '../Sidebar/Sidebar';

function Product(props){
  const [productt, setProductt]=useState([]);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
      .then(response=>setProductt(response.data)
    )
  },[]);

  return(
    <>
      <Sidebar/>
      <Category/>
      <div className="contenu">
        <div className="row row-cols-1 row-cols-md-5 g-6">          
          {productt.map((item) => {
            return (
              <div className="card-group ">
                <div className="card-body">   
                <img src={item.image} className='img' alt={item.title}/>       
                  <h6 className='card-title'>{item.title} <br/>
                    <span className='cat'>{item.category}</span></h6>    
                  <p className='card-text'>Price : {item.price} $</p>                  
                  <Link to={`/products/${item.id}`}>  
                    <button className='btn btn-dark'>Add</button>  
                  </Link>  
                </div>    
              </div>           
          )})}
        </div>
      </div>
    </>
  )
}

  


export default Product
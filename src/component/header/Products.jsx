import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Product(props){
  const [productt, setProductt]=useState([]);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then(
      response=>setProductt(response.data)
    )
  },[]);

    return(
          <>
          <div className="container">
            <div className="row justify-content-center">
            {productt.map((item) => {
            return (
              <div className="container">
                <div className='row justify-content-center'>
                    <div className="card-group">
                      <img src={item.image} className='card' alt={item.title}/>
                      <div className="card-body">  
                        <h6 className='card-title'>{item.title}</h6>
                        <p className='card-text'>Price : {item.price}$</p>
                        <Link to={`/products/${item.id}`}>
                          <button className='btn btn-outline-dark'>Add</button>
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
              )
            })}
            </div>
          </div>
          </>
    )
  }

  


export default Product
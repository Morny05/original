import React from 'react';
import { Footer } from '../footer/Footer';
import { Link } from 'react-router-dom';
import Scroll from './Scroll';

function Home(){
  const produ=[
    {id:1,title:'Shoes ellesse',price:'700 DH',img:'/images/ellesse.png'},
    {id:2,title:'Adidas',price:'500 DH',img:'/images/adidas1.png'},
    {id:3,title:'CP-Company',price:'1300 DH',img:'/images/company1.png'},
    {id:4,title:'Adidas aliens',price:'300 DH',img:'/images/alien1.png'},
    {id:4,title:'Nike Teck',price:'300 DH',img:'/images/tech1.jpg'},
    {id:4,title:'Nike Teck',price:'300 DH',img:'/images/tech1.jpg'},
  ];

  return (
    <>
      <div className='hero'>
        <div class="row">
            <img src="/images/fondblac1.jpg" class="card-img" alt="Background"/>
            <div class="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0" style={{color: "black"}}>New Season Arrivals</h5>
                <h6 className="card-text lead fs-2" style={{color: "black"}}><small>CHECK OUT ALL THE TRENDS </small></h6><br/>
                <Link to='/products'><button className='btn btn-outline-dark'>Shop Now</button></Link>
              </div>
            </div>
        </div>
        <Scroll/>
        <br/>
        <div className="flex flex-col text-center w-full mt-20">
          <h1 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 fw-bold">Product</h1>
          <h5 className="text-body-secondary fw-light">Most Popular Collection</h5><br/><br/>
          <div className="container">
            <div className="row">
              {produ.map((item)=>
              <div className='container col-4'>
              <div className='card-group ' style={{border: '1'}}>
                <img src={item.img} className='card' alt={item.title}/>
                <div className="card-body">  
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='card-text'>{item.price}</p>
                  <Link to={`/products/${item.id}`} >
                    <button className='btn btn-outline-success'>Details</button>
                  </Link>
                </div>
              </div>
              </div>
              )}
            </div>
          </div>
        </div><br></br>
       
        
        <Footer/> 
      </div>
    </>
  )
}

export default Home
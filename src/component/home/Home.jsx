import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from '../header/Scroll';
import { Card, CardImg } from 'react-bootstrap';

function Home(){
  const produ=[
    {id:1,title:'Shoes ellesse',price:'700 DH',img:'/images/ellesse.png'},
    {id:2,title:'Adidas',price:'500 DH',img:'/images/adidas1.png'},
    {id:3,title:'CP-Company',price:'1300 DH',img:'/images/company1.png'},
    
  ];

  return (
    <>
      <div className='hero width-auto'>
        <div class="row">
            <img src="/images/fondblac1.jpg" class="card-img" alt="Background"/>
            <div class="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">
                <h1 className="card-titlee ">New Season Arrivals</h1>
                <h6 className="card-texts">CHECK OUT ALL THE TRENDS</h6><br/>
                <Link to='/products'><button className='btn btn-outline-dark'>Shop Now</button></Link>
              </div>
            </div>
        </div>
        <Scroll/>
        <br/>
        <div className="flex flex-col text-center w-full ">
          <h1 className="text-xs text-indigo-500  tracking-widest font-medium title-font mb-1 fw-bold">Product</h1>
          <h5 className="text-body-secondary fw-light">Most Popular Collection</h5>
              
        </div>
      </div>

        <div className="produu">
          {produ.map((item) =>
            <div className='col-3 mt-5 '>
              <Card key={item.id}>
                <CardImg variant='top' src={item.img}  height={'250px'}/>
                <Card.Title >{item.title}</Card.Title>
                <Card.Text className='fw-normal'>{item.price}</Card.Text>
                  <Link to={`/products/${item.id}`} >
                    <button className='btn btn-outline-success'>Details</button>
                  </Link>
              </Card>
            </div>
          )}
        </div>
    </>
  )
}

export default Home
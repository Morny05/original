import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';


export default function Navbar(){
    const [search, setSearch]=useState("");

    return (
        <div className="fixed-top bg-light">
            <nav className="container navbar navbar-expand-lg bg-body-tertiary  ">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-4" to="/">OriginalCloths</Link>
                    <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarScroll" 
                        aria-controls="navbarScroll" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/home">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/products">Production</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/registred">Registred</Link></li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input 
                            class="form-control me-2" 
                            type="search" placeholder="Search"
                            aria-label="Search"
                            onChange={(e)=>setSearch(e.target.value)}
                            />
                    </form>  
                    <Link to='/account'>
                        <img src='/images/profile.png' height='30px' alt='profile'/>
                    </Link>
                    <Link to='/panier'>
                    <img src="./images/panier.jpg" alt="" height="30px"/>
                    </Link>    
                    
                    <div className="account flexCenter">
                        {/*<Link to='/login'>
                            <button className="btn btn-outline-dark">
                                <i className="fa fa-sign-in" aria-hidden="true"></i>
                                Login</button>
                        </Link> 
                        <Link to='/registred'>
                            <button className="btn btn-outline-dark">
                                <i className="fa fa-address-card" aria-hidden="true"></i>
                                Sign-Up</button>
                        </Link>
                        <button className="btn btn-outline-dark">
                            <i className="fa fa-cart-plus" aria-hidden="true"></i>
                        </button>  */ }
                        
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
} 
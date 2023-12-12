import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(){

    return (
        <div className="fixed-top bg-light">
            <nav className="container navbar navbar-expand-lg bg-body-tertiary  ">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-4" to="/">OriginalCloths</Link>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/products">Production</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/registred">Registred</Link></li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input 
                                class="form-control me-2" 
                                type="search" placeholder="Search"
                                aria-label="Search"
                                />
                        </form>  
                          
                    </div>
                    <div className="imgss">
                        <Link to='/account'>
                            <img src='/images/profile.png' height='30px' alt='profile'/>
                        </Link>
                        <Link to='/panier'>
                            <img src="./images/panier.jpg" alt="" height="30px"/>
                        </Link> 
                        </div> 
                </div>
            </nav>
        </div>
    )
} 
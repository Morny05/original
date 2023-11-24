import React from "react";
import { Footer } from "../../component/footer/Footer";


export default function Login(){
    return(
      <>
      <section className='login'>
      <div className='container'>
        <div className='backImg'>
          <img src='./images/account.jpg' alt='' />
          <div className='text'>
            <h3>Login</h3>
            <h1>My Account</h1>
          </div>
        </div><br/>
        
        <form>
          <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
        </div>
      
    </section>
          <Footer/>
      </>
    )
}


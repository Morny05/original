import React from "react";
import "./account.css";

export default function Account (){
  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <input type='file' accept='image/*'/>
                <img src='./images/userAccount.jpg' alt='' className='image-preview' />
              </div>
            </div>
            <div className='right'>
              <form action="post">
                <label>Username</label>
                <input type='text' placeholder="username" required />
                <label>Email</label>
                <input type='text' placeholder="email" required />
                <label>Password </label>
                <input type='password' placeholder="password" required /><br/><br/>
                <button className='btn btn-outline-success'>Entrer</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
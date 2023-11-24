import React, {useState} from 'react';
import "./login.css";
import { Footer } from '../../component/footer/Footer';
//import account from "./images/account.jpg";

function Registred() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [prenom,setPrenom]=useState("");
    const [password,setPassword]=useState("");

    //const handldeChange = ()=>{}

    return (
      <>
        <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src='./images/account.jpg' alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>My Account</h1>
            </div>
          </div><br/>
          
            <form style={{width: "50%", margin: "top"}}>
              <fieldset>
                <h3 className="mb-4 fw-bolder d-flex justify-content-center">Informations Personnelles</h3>
                <div className="mb-3 ">
                  <label for="name" className="form-label"><span className='fw-medium'>Nom :</span></label>
                  <input type="text" value={name} className="form-control" required onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label for="prenom" className="form-label"><span className='fw-medium'>Prenom :</span></label>
                  <input type="text" value={prenom} className="form-control" required onChange={(e)=>setPrenom(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">Email :</label>
                  <input type="email" value={email} className="form-control" required onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label for="numero" className="form-label">Password :</label>
                  <input type="password" value={password} className="form-control" required onChange={(e)=>setPassword(e.target.value)}/>
                  <small className="form-text">Format: 10 chiffres sans espaces ni caractères spéciaux</small>
                </div>
              </fieldset>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          
        </div>
      </section>
      <Footer/>
    </>
    )
}


export default Registred
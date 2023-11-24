import React from 'react';
import { Link } from 'react-router-dom';

function Contact(){
    
    return(
        <center>
            <h1>Contaccccting</h1>
            <h5><ul>
                    <li><Link to='https://facebook.com'>faceboook</Link></li>    
                    <li><Link to='/insta'>instagram</Link></li>    
                    <li><Link to='/Linkedin.com'>Linkedin</Link></li>    
                </ul>
            </h5>
        </center>
    )
}

export default Contact
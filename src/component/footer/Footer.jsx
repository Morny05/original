import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import { Link } from "react-router-dom"
import './Footer.css'

export const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="containera text-white">
        <div className='social'>
          <p>&copy; 2023 OriginalCloths. All rights reserved.</p>
            <Link to='https://web.facebook.com/' target="_blank" >
              <BsFacebook className="links" />
            </Link>
            <Link>
              <RiInstagramFill className="links"  rel="noopener noreferrer"/>
            </Link>
            <Link>
              <AiFillTwitterCircle className="links"  rel="noopener noreferrer"/>
            </Link>
            <Link>
              <AiFillLinkedin className="links"  rel="noopener noreferrer"/>
            </Link>
          </div><br/>
        </div>
      </footer>
    </>
  )
}
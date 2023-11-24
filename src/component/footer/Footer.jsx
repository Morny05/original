import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <>
      <footer className='bg-dark'>
        <div className='row'><br/>
          <div className="container col-md-6 text-white">
          <p>&copy; 2023 OriginalCloths. All rights reserved.</p>
          <div className='social'>
            <Link to='https://web.facebook.com/' target="_blank">
              <BsFacebook className='icon'/>
            </Link>
            <Link>
              <RiInstagramFill className='icon' rel="noopener noreferrer"/>
            </Link>
            <Link>
              <AiFillTwitterCircle className='icon' rel="noopener noreferrer"/>
            </Link>
            <Link>
              <AiFillLinkedin className='icon' rel="noopener noreferrer"/>
            </Link>
          </div><br/>
          </div>
        </div>
      </footer>
    </>
  )
}
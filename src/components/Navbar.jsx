import React from 'react'
import '../App.css'
import { CiMenuFries } from "react-icons/ci";
import { useState } from 'react';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


  return (
    <div className='main'>
        <div className="nav">
      <h2>Logo</h2>
      <div className="nav-part2">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Product</h4>
        <h4>Explore</h4>
        <h4>Contact</h4>
      </div>
        <span><CiMenuFries /></span>
      </div>
      <button className='menu-btn' onClick={toggleMenu} >

      </button>
      <div className="sidebar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Product</li>
          <li>Explore</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

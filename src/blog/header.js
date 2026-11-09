import React from 'react';
import { Link } from 'react-router';
import photo from '../photos/1.png';

function Header() {
  return (
    <header id="Header">
    <div>
      <h1>My Blog</h1>
    </div>
    <img src={photo} alt="Blog post" />

    
    
    <div className="header-nav">
    <ul className="nav">
        <li><Link to="/PostPage">Home</Link></li>
        <li><Link to="">placeholder</Link></li>
        <li><Link to="/contactPage">Contact</Link></li>
        

    </ul>
    </div>

    </header>
    
  );
}

export default Header;
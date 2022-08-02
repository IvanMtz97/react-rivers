import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="contenedor-header">
      <Link to="/home">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/aboutus">About us</Link>
      <Link to="/ourstory">Our story</Link>
    </div>
  );
}

export default Header;

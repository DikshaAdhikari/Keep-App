import React from 'react';
import "./header.css"
import logo from "./logo.png";

const Header = () => {
  return (
      <>
          <div className='header'>
            <img src={logo} alt="logo" height="50"/>
            <h1>My Keep App</h1>
          </div>
      </>
  );
}

export default Header;
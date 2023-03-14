import React from 'react';
import '../styles/Header.css';
import Logo from '../assets/mcubedlogo.png'


function Header() {

  return (
    <header className="header">
      <input href="#" type="image" src={Logo} className="logo"/>
      <h1>Match My Mood</h1>
    </header>
  );
}

export default Header;
import React from 'react';
import '../styles/Header.css';
import '../styles/Navbar.css';
import Logo from '../assets/mcubedlogo.png'


function Header() {

  return (
    <header className="header">
      <input href="#" type="image" src={Logo} className="logo"/>
      <h1>Match My Mood</h1>

      <div>
      <div class="container">
      <navbar className="navbar"> 
        <nav class="navbar-one"> 
        <ul>
            <ol>
                <a href="#login"><b>Login</b></a>
            </ol>
            <ol>
                <a href="#login"><b>Sign up</b></a>
            </ol>
            <ol>
                <a href="#moods"><b>Moods</b></a>
            </ol>
            <ol>
                <a href="#player"><b>Songs</b></a>
            </ol>
        </ul>
        </nav>
      </navbar> 
      </div>
      </div>

    </header>
    
  );
}

export default Header;
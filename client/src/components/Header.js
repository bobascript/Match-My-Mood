import React from 'react';
import '../styles/Header.css';
import '../styles/Navbar.css';
import Auth from "../utils/auth";
import Logo from '../assets/mcubedlogo.png';
import { Link } from 'react-router-dom';


function Header() {
  const handleLogout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  if (Auth.loggedIn()) {
    return(
      <div class="container-fluid-xxl">
      <header className="header">
        <Link to={`/`}><input href="#" type="image" src={Logo} className="logo"/></Link>
        <h1>Match My Mood</h1>
  
        <div>
        {/* <div class="container"> */}
        <navbar className="navbar"> 
          <nav class="navbar-one"> 
          <ul>
              <ol>
              <a href="/" onClick={handleLogout}><b>Log Out</b></a>
              </ol>
              <ol>
                  <a href="/moods"><b>Moods</b></a>
              </ol>
              <ol>
                  <a href="/"><b>Songs</b></a>
              </ol>
          </ul>
          </nav>
        </navbar> 
        </div>
        </header>
        </div>
    )
  } else {
  return (
    <div class="container-fluid-xxl">
    <header className="header">
      <Link to={`/`}><input href="#" type="image" src={Logo} className="logo"/></Link>
      <h1>Match My Mood</h1>

      <div>
      {/* <div class="container"> */}
      <navbar className="navbar"> 
        <nav class="navbar-one"> 
        <ul>
            <ol>
                <a href="/login"><b>Login/Sign-up</b></a>
            </ol>
            <ol>
                <a href="/moods"><b>Moods</b></a>
            </ol>
            <ol>
                <a href="/"><b>Songs</b></a>
            </ol>
        </ul>
        </nav>
      </navbar> 
      </div>
      </header>
      </div>    
  );
  }
}

export default Header;
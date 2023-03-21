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
      <div className="container-fluid-xxl">
      <header className="header">
        <Link to={`/`}><input type="image" src={Logo} className="logo"/></Link>
        <h1>Match My Mood</h1>
  
        <div>
        <navbar className="navbar">  
          <nav className="navbar-one"> 
          <ul>
              <ol>
              <a href="/" onClick={handleLogout}><b>Log Out</b></a>
              </ol>
              <ol>
              <Link to={`/moods`}><b>Moods</b></Link>
              </ol>
              <ol>
              <Link to={`/songs`}><a href="/"><b><i className="fa-solid fa-heart fa-lg"/></b></a></Link>
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
    <div className="container-fluid-xxl">
    <header className="header">
      <Link to={`/`}><input type="image" src={Logo} className="logo"/></Link>
      <h1>Match My Mood</h1>

      <div>
      {/* <div class="container"> */}
      <navbar className="navbar"> 
        <nav className="navbar-one"> 
        <ul>
            <ol>
            <Link to={`/login`}><b>Login/Sign-up</b></Link>
            </ol>
            <ol>
            <Link to={`/moods`}><b>Moods</b></Link>
            </ol>
            <ol>
            <Link to={`/songs`}><a href="/"><b><i className="fa-solid fa-heart fa-lg"/></b></a></Link>
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
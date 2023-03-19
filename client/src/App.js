import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import Homepage from './components/Homepage.js';
import Header from './components/Header.js';
// import Navbar from './components/Navbar.js';
import Login from './components/Login.js';
import Player from './components/Player.js'
import Footer from './components/Footer.js';




function App() {
  return (
    <div>
      <Header/>
      {/* <Navbar/> */}
      <Player/>
      <Footer/>
    </div>



    
  );
}

export default App;

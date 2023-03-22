import React from 'react';
import '../styles/Homepage.css';
import Moods from './Moods'
import { Link } from 'react-router-dom';
import Auth from "../utils/auth";


function Homepage(){
  if (Auth.loggedIn()) {
    return (
      <div>
        <Moods />
      </div>
    )
  } else {
    return (
      <div>
        <div className="d-flex flex-column justify-content-center w-100 h-100">
          <Link to={`/login`}>
            <div style={{display:"flex",textDecoration:"none",flex:"column",justifyContent:"center",width:"100%",height:"100%"}}>
              <button className="loginBtn">Log in /<br/>Sign up!</button>
            </div>
          </Link>
        </div>
      </div> 
    )
  }
}

export default Homepage;
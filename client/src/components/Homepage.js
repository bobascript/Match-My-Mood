import React from 'react';
import '../styles/Homepage.css';
import Header from '../components/Header.js';
import { Link } from 'react-router-dom';
// import Happy from '../assets/happypic.png';
// import Calm from '../assets/calmpic.png';
// import Sad from '../assets/sadpic.png';
// import Angry from '../assets/angpic.png';

function Homepage(){
    return (

      <div>

      <div className="d-flex flex-column justify-content-center w-100 h-100">
        <Link to={`/login`}><div style={{display:"flex",textDecoration:"none",flex:"column",justifyContent:"center",width:"100%",height:"100%"}}>
    <button className="loginBtn">Log in /<br/>Sign up!</button>
    </div></Link>
      </div>

      </div>



 
    )

}

export default Homepage;
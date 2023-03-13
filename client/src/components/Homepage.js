import React from 'react';
import '../styles/Homepage.css';
import Header from '../components/Header.js'
function Homepage(){
    return (
      <div>
<div class="d-flex flex-column justify-content-center w-100 h-100">
    <Header/>
  <div style={{display:"flex",flex:"column",justifyContent:"center",width:"100%",height:"100%"}}>
    <button className="loginBtn" >Log in /<br/>Sign up!</button>
  </div>
</div>
</div>  
    )

}

export default Homepage;
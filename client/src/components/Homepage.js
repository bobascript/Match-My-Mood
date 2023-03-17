import React from 'react';
import '../styles/Homepage.css';
import Header from '../components/Header.js';
// import Happy from '../assets/happypic.png';
// import Calm from '../assets/calmpic.png';
// import Sad from '../assets/sadpic.png';
// import Angry from '../assets/angpic.png';

function Homepage(){
    return (

      <div>

      <div class="d-flex flex-column justify-content-center w-100 h-100">
          <Header/>
        <div style={{display:"flex",flex:"column",justifyContent:"center",width:"100%",height:"100%"}}>
        </div>
      </div>

      </div>



 
    )

}

export default Homepage;
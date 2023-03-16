import React from 'react';
import '../styles/Moods.css';
import Happy from '../assets/happypic.png';
import Calm from '../assets/calmpic.png';
import Sad from '../assets/sadpic.png';
import Angry from '../assets/angpic.png';

function Moods() {
    return (
        <div>
        <div class="d-flex flex-column justify-content-center w-100 h-100">
          <div style={{display:"flex",flex:"column",justifyContent:"center",width:"100%",height:"100%"}}>
            <button className="loginBtn" >Log in /<br/>Sign up!</button>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img alt="happypic" src={Happy} class="card-img-top" id="happy-image"/>
            <div class="card-body">
              <b> <h5 class="card-title">Happy</h5></b>
              <p class="card-text"></p>
            </div>
          </div>
          </div> 
        </div> 

        <div class="col">
         <div class="card">
          <img alt="calmpic" src={Calm} class="card-img-top" id="calm-image"/>
          <div class="card-body">
          <b><h5 class="card-title">Calm</h5></b>
          <p class="card-text"></p>
         </div>
         </div>
       </div>   
           

        <div class="col">
         <div class="card">
          <img alt="sadpic" src={Sad} class="card-img-top" id="sad-image"/>
          <div class="card-body">
          <b><h5 class="card-title">Sad</h5></b>
          <p class="card-text"></p>
        </div>
       </div>
      </div> 


        <div class="col">
         <div class="card">
         <img alt="angpic" src={Angry} class="card-img-top" id="ang-image"/>
         <div class="card-body">
         <b><h5 class="card-title">Angry</h5></b>
         <p class="card-text"></p>
        </div>
       </div>
      </div>   
    </div> 
      
         
    );
}

export default Moods;
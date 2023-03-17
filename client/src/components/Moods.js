import React from 'react';
import '../styles/Moods.css';
// import Header from '../components/Header.js';
import Happy from '../assets/happypic.png';
import Calm from '../assets/calmpic.png';
import Sad from '../assets/sadpic.png';
import Angry from '../assets/angpic.png';

function Moods() {
    return (
    <div>

     <div style={{display:"flex",flex:"column", justifyContent:"center",width:"100%",height:"100%", padding:"05%", alignItems:"center"}}>
     <div class="row row-cols-1 row-cols-sm-2 g-5 text-center">
  
        <div class="col">
          <div class="card text-bg-dark mb-3 w-80">
            <img alt="happypic" src={Happy} class="card-img-top" id="happy-image"/>
            <div class="card-body">
            {/* <button><b> <h1 class="card-title text-bg-dark">HAPPY</h1></b></button> */}
          <button type="button" class="btn btn-outline-success btn-lg btn-block"><h1><b>HAPPY</b></h1></button>
              <p class="card-text font-weight-bold"></p>
            </div>
          </div>
        </div> 
        <div class="col">
         <div class="card text-bg-dark mb-3 w-80">
          <img alt="calmpic" src={Calm} class="card-img-top" id="calm-image"/>
          <div class="card-body">
          <button type="button" class="btn btn-outline-success btn-lg btn-block"><h1><b>CALM</b></h1></button>
          <p class="card-text"></p>
         </div>
        </div>
       </div>   
       <div class="col">
         <div class="card text-bg-dark mb-3 w-80">
          <img alt="sadpic" src={Sad} class="card-img-top" id="sad-image"/>
          <div class="card-body">
          <button type="button" class="btn btn-outline-success btn-lg btn-block"><h1><b>SAD</b></h1></button>
          <p class="card-text"></p>
        </div>
       </div>
      </div> 
      <div class="col">
        <div class="card text-bg-dark mb-3 w-80">
         <img alt="angpic" src={Angry} class="card-img-top" id="ang-image"/>
         <div class="card-body">
         <button type="button" class="btn btn-outline-success btn-lg btn-block"><h1><b>ANGRY</b></h1></button>
          <p class="card-text"></p>
        </div>
       </div>
      </div>   
    </div> 

   </div>
   </div>      
         
    );
}

export default Moods;
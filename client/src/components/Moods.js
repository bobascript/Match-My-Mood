import React from 'react';
import '../styles/Moods.css';
// import Header from '../components/Header.js';
import Happy from '../assets/happypic.png';
import Calm from '../assets/calmpic.png';
import Sad from '../assets/sadpic.png';
import Angry from '../assets/angpic.png';
import { useQuery } from '@apollo/client';
import { QUERY_MOODS } from '../utils/queries';
import { Link } from 'react-router-dom';

function Moods() {

  const { loading, data } = useQuery(QUERY_MOODS);
  const moods = data?.moods || [];
  //occasionally doesn't return data for moods
  if (loading) {
    return <div>Loading...</div>;
  }
    return (
    <div>
     <div style={{display:"flex",flex:"column", justifyContent:"center",width:"100%",height:"100%", padding:"05%", alignItems:"center"}}>
     <div class="row row-cols-1 row-cols-sm-2 g-5 text-center">
  
        <div class="col">
          <div class="card text-bg-dark mb-3 w-80">
            <img alt="happypic" src={Happy} class="card-img-top" id="happy-image"/>
            <div class="card-body">
            {/* <button><b> <h1 class="card-title text-bg-dark">HAPPY</h1></b></button> */}
            <Link
            to={`/player/${moods[0]._id}`}> {/* need it to be /player/${mood._id} */}
            <button type="button" class="btn btn-outline-success btn-lg btn-block"><h1><b>{moods[0].name}</b></h1></button>
            </Link>
              <p class="card-text font-weight-bold"></p>
            </div>
          </div>
        </div> 
        <div class="col">
         <div class="card text-bg-dark mb-3 w-80">
          <img alt="calmpic" src={Sad} class="card-img-top" id="calm-image"/>
          <div class="card-body">
            <Link
            to={`/player/${moods[1]._id}`}>
          <button type="button" class="btn btn-outline-success btn-lg btn-block"><h1><b>{moods[1].name}</b></h1></button>
          </Link>
          <p class="card-text"></p>
         </div>
        </div>
       </div>   
       <div class="col">
         <div class="card text-bg-dark mb-3 w-80">
          <img alt="sadpic" src={Angry} class="card-img-top" id="sad-image"/>
          <div class="card-body">
            <Link
            to={`/player/${moods[2]._id}`}>
          <button type="button" class="btn btn-outline-success btn-lg btn-block"><h1><b>{moods[2].name}</b></h1></button>
          </Link>
          <p class="card-text"></p>
        </div>
       </div>
      </div> 
      <div class="col">
        <div class="card text-bg-dark mb-3 w-80">
         <img alt="angpic" src={Calm} class="card-img-top" id="ang-image"/>
         <div class="card-body">
          <Link
          to={`/player/${moods[3]._id}`}>
         <button type="button" class="btn btn-outline-success btn-lg btn-block"><h1><b>{moods[3].name}</b></h1></button>
         </Link>
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
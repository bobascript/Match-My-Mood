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
    <div className="container">
    <div style={{display:"flex",flex:"column", justifyContent:"center", justifyContent:"space-evenly", width:"100%",height:"100%", padding:"%", margin:"0", alignItems:"center"}}>
    <div className="row row-cols-1 row-cols-md-3 g-4 text-center"> 
        
        <div className="col" id='card-one'>
          <div className="card text-bg-dark mb-3 w-100 h-100 text-center">
            <img alt="happypic" src={Happy} className="card-img-top" id="happy-image"/>
            <div className="card-body" id='button'>
            <Link
            to={`/player/${moods[0]._id}`}> {/* need it to be /player/${mood._id} */}
            <button type="button" className="btn btn-outline-success btn-sm btn-block"><h1><b>{moods[0].name}</b></h1></button>
            </Link>
              <p className="card-text font-weight-bold"></p>
            </div>
          </div>
        </div> 
        <div className="col" id='card-one'>
        <div className="card text-bg-dark mb-3 w-100 h-100">
          <img alt="calmpic" src={Sad} className="card-img-top" id="calm-image"/>
          <div className="card-body" id='button'>
            <Link
            to={`/player/${moods[1]._id}`}>
          <button type="button" className="btn btn-outline-success btn-sm btn-block" ><h1><b>{moods[1].name}</b></h1></button>
          </Link>
          <p className="card-text"></p>
        </div>
        </div>
      </div>   
      <div className="col" id='card-one'>
        <div className="card text-bg-dark mb-3 w-100 h-100">
          <img alt="sadpic" src={Angry} className="card-img-top" id="sad-image"/>
          <div className="card-body" id='button'>
            <Link
            to={`/player/${moods[2]._id}`}>
          <button type="button" className="btn btn-outline-success btn-sm btn-block"><h1><b>{moods[2].name}</b></h1></button>
          </Link>
          <p className="card-text"></p>
        </div>
      </div>
      </div> 
      <div className="col" id='card-one'>
        <div className="card text-bg-dark mb-3 w-100 h-100">
        <img alt="angpic" src={Calm} className="card-img-top" id="ang-image"/>
        <div className="card-body" id='button'>
          <Link
          to={`/player/${moods[3]._id}`}>
        <button type="button" className="btn btn-outline-success btn-sm btn-block"><h1><b>{moods[3].name}</b></h1></button>
        </Link>
          <p className="card-text"></p>
        </div>
      </div>
      </div>   
    </div> 
    </div>
  </div>
</div> 

    );
}

export default Moods;
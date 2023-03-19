import React from 'react';
import "../styles/Player.css"

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SONG } from '../utils/queries';


function Player(){

    const { moodId } = useParams();
    const { loading, data } = useQuery(QUERY_SONG, {
        variables: {moodId: moodId}
    });

    const song = data?.song || {};

    if (loading) {
        return <div>Loading...</div>;
      }
    return (
     <div className="playerPage">
        <container className="moodBox">
            <h1>You're Feeling:</h1><br></br>
            <h3 style={{textDecoration:"underline"}}>This is your mood</h3><br></br>
            <p>This is a mood description but its not long</p>  
        </container>

        <container className="player">  
        <iframe className="spotify" src="https://open.spotify.com/embed/track/40WWeoX26jtsfdmFx5iRty?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
            <container className="btnBox">
                <button className='heartBtn'><i class="fa-solid fa-heart fa-2x"></i></button>
                <button className='rerollBtn'><i class="fa-solid fa-shuffle fa-2x"></i></button>  
            </container>
        </container>
     </div>   
    )
}

export default Player
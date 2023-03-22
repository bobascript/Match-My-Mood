import React from 'react';
import "../styles/Player.css"

import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_SONG, QUERY_MOOD } from '../utils/queries';
import { SAVE_SONG } from '../utils/mutations';


function Player() {

    const { moodId } = useParams();
    const { loading, data } = useQuery(QUERY_SONG, {
        variables: { mood: moodId }
    });

    const { loading: moodLoading, data: moodData } = useQuery(QUERY_MOOD, {
        variables: { moodId: moodId }
    })


    const song = data?.song || {};

    const mood = moodData?.mood || {};
    const songId = song._id;
    const songName = song.name;
    const songUrl = song.url
    const [saveSong, { error }] = useMutation(SAVE_SONG, {
      fetchPolicy: 'no-cache'
    });

    const handleSaveSong = async (event) => {
        event.preventDefault();
        console.log('songId:', songId);
        try {
            const { data } = await saveSong({
                variables: { songId }
            });
            console.log(data);
        } catch (err) {
            console.error(err);
        console.error(err.message);
        console.error(err.graphQLErrors);
        }
    };


    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="playerPage">
            <div className="moodBox">
                <h1>You're Feeling: {mood.name}</h1><br></br>
                <h3 style={{ textDecoration: "underline" }}>This is your mood</h3><br></br>
                <p>{mood.description}</p>
            </div>

            <div className="player">
                <iframe className="spotify" src={songUrl} allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
                <div className="btnBox">
                    <button className='heartBtn' onClick={handleSaveSong}><i className="fa-solid fa-heart fa-2x"></i></button>
                    <button className='rerollBtn' ><i className="fa-solid fa-shuffle fa-2x"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Player

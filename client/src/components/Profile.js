import React from 'react';
import "../styles/Player.css"

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';


import Auth from '../utils/auth';

function Profile() {

    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/me" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }
    const userSongs = user.song;
    return (
        <div>
{
        <div className="playerPage">
            <container className="moodBox">
                <h1>You're Feeling: {mood.name}</h1><br></br>
                <h3 style={{ textDecoration: "underline" }}>This is your mood</h3><br></br>
                <p>{mood.description}</p>
            </container>

            <container className="player">
                <iframe className="spotify" src={song.url} allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
                <container className="btnBox">
                    <button className='heartBtn'><i class="fa-solid fa-heart fa-2x"></i></button>
                    <button className='rerollBtn'><i class="fa-solid fa-shuffle fa-2x"></i></button>
                </container>
            </container>
        </div>
        }
        </div>
    )
}

export default Profile
import React from 'react';
import "../styles/Player.css"

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';


import Auth from '../utils/auth';

function Profile() {

    const { userName: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { userName: userParam },
        dependencies: [userParam],
    });

    const user = data?.me || data?.user || {};
    const userSongs = user.songs || [];
    console.log(user.userName);
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.userName === userParam) {
        return <Navigate to="/me" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.userName) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }

    const containerStyle = {
        paddingTop: "20px",
        paddingBottom: "120px"
    }

    const playerStyle = {
        paddingTop: "5px",
    }

    return (
        <div>
            <div className="container" style={containerStyle}>
                <div className="row row-cols-1 row-cols-md-2 justify-content-center align-items-center mx-auto">
                    {userSongs.map((song) => (
                        <div className="col mb-4">
                            <div className="playerPage">
                                <div className="container" style={playerStyle}>
                                    <iframe className="spotify" src={song.url} allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile;
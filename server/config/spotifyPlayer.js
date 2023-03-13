//UNDER CONSTRUCTION - NOT READY YET

// Set up Spotify Web Playback SDK
window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'YOUR_ACCESS_TOKEN';
  const player = new Spotify.Player({
    name: 'Match My Mood Player',
    getOAuthToken: cb => { cb(token); }
  });

  // Connect to the player
  player.connect().then(success => {
    if (success) {
      console.log('The Web Playback SDK successfully connected to Spotify!');
    }
  });

  // Play a track
  const trackURI = 'SPOTIFY_TRACK_URI';
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
    player.play({
      uris: [trackURI],
      device_id: device_id
    });
  });

  // Create a new div element to hold the player
  const playerContainer = document.createElement('div');
  playerContainer.id = 'spotify-player';
  document.body.appendChild(playerContainer);

  // Display the player in the div element
  player.addListener('player_state_changed', state => {
    document.getElementById('spotify-player').innerHTML = '<iframe src="https://open.spotify.com/embed/player/' + state.track_window.current_track.uri.split(':')[2] + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
  });
};
import React, { useEffect, useState } from 'react';

const CLIENT_ID = '33eeeaa39f9646f1aaef25176d6d803b';
const REDIRECT_URI = 'http://localhost:3000/callback';

const SpotifyAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // // Check if access token exists in local storage
    // const accessToken = localStorage.getItem('spotifyAccessToken');
    // if (accessToken) {
    //   setIsLoggedIn(true); // Update state if access token is present
    // }

    // Handle the redirect and extract the access token from the URL hash fragment
    const hash = window.location.hash.substring(1).split('&').reduce((initial, item) => {
      if (item) {
        const parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

    // If there's an access token in the hash, store it in local storage
    if (hash.access_token) {
      localStorage.setItem('spotifyAccessToken', hash.access_token);
      setIsLoggedIn(true); // Update login status
    }
  }, []);

  const handleLogin = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`;
  };

  return (
    <div>
      <h2>Spotify Authentication</h2>
      {!isLoggedIn && <button onClick={handleLogin}>Login with Spotify</button>}
      {isLoggedIn && <p>You are logged in with Spotify.</p>}
    </div>
  );
};

export default SpotifyAuth;

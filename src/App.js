import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import MusicPlayer from './components/musicPlayer';
import SpotifyWebApi from 'spotify-web-api-js';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongTitle, setCurrentSongTitle] = useState('');

  const fetchRandomSong = async (mood) => {
    const spotifyApi = new SpotifyWebApi();
    const accessToken = localStorage.getItem('spotifyAccessToken');

    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);

      const valenceRange = {
        Happy: { min: 0.6, max: 1 },
        Sad: { min: 0, max: 0.4 },
      };

      const { min, max } = valenceRange[mood];

      try {
        const response = await spotifyApi.getRecommendations({
          seed_genres: ['pop'],
          min_valence: min,
          max_valence: max,
          limit: 50,
        });

        const randomIndex = Math.floor(Math.random() * response.tracks.length);
        const randomTrack = response.tracks[randomIndex];

        setCurrentSong(randomTrack.preview_url);
        setCurrentSongTitle(randomTrack.name); // Set the song title
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      {currentSongTitle && <p>Now Playing: {currentSongTitle}</p>}
      <div className="mood-selection">
        <button onClick={() => fetchRandomSong('Happy')}>Happy</button>
        <button onClick={() => fetchRandomSong('Sad')}>Sad</button>
      </div>
      <MusicPlayer currentSong={currentSong} currentSongTitle={currentSongTitle} />
    </div>
  );
}

export default App;

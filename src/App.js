// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import MusicList from './components/musicList';
import MusicPlayer from './components/musicPlayer';

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (songUrl) => {
    setCurrentSong(songUrl);
  };

  return (
    <div className="App">
      <Header />
      <MusicList playSong={playSong} />
      <MusicPlayer currentSong={currentSong} />
    </div>
  );
}

export default App;

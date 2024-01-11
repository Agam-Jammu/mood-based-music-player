import React from 'react';

const MusicPlayer = ({ currentSong, currentSongTitle }) => {
  return (
    <div className="music-player">
      {currentSongTitle && <h3>{currentSongTitle}</h3>}
      {currentSong && (
        <audio controls autoPlay>
          <source src={currentSong} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default MusicPlayer;

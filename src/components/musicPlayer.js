import React from 'react';

const MusicPlayer = ({ currentSong }) => {
    return (
      <div className="music-player">
        {currentSong ? (
          <audio controls autoPlay>
            <source src={currentSong} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        ) : (
          <p>No song selected.</p> // Custom message
        )}
      </div>
    );
};

export default MusicPlayer;
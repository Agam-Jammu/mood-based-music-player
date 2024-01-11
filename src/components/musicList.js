import React from 'react';

const MusicList = ({ playSong }) => {
    const songs = [
        {
          title: "Break Your Heart",
          mood: "Happy",
          url: "/Break-Your-Heart.mp3"
        },
        // Add more songs as needed
      ];
      

  return (
    <div className="music-list">
      {songs.map((song, index) => (
        <button key={index} onClick={() => playSong(song.url)}>
          {song.title} - {song.mood}
        </button>
      ))}
    </div>
  );
};

export default MusicList;
import React from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';
import './App.css';

const App = () => {
  return (
    <div style={{ display: 'flex' }} className="songs-container">
      <div className="song-list">
        <SongList />
      </div>
      <SongDetail />
    </div>
  );
};

export default App;

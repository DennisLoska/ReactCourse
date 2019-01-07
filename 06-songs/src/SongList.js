import React from 'react';
import './SongList.css';

class SongList extends React.Component {
  render() {
    return this.props.songs.map((song, index) => {
      return (
        <div key={index} className="song-list-item">
          <span>{song.title}</span>
          <button
            className="song-btn"
            onClick={() => {
              this.props.selectSong(song);
            }}
          >
            Select
          </button>
        </div>
      );
    });
  }
}

export default SongList;
